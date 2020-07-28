using Microsoft.OData.Edm;
using rsdl.parser.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;

namespace rsdl.parser
{
    internal class ModelBuilder
    {
        private readonly string namespaceName = "rapid";

        private readonly RdmDataModel rdmModel;

        private EdmModel edmModel;

        public ModelBuilder(RdmDataModel schema)
        {
            this.rdmModel = schema;
        }

        /// <summary>
        /// Create a EDM model for the given RDM Model
        /// </summary>
        /// <remarks>This method is not thread safe.</remarks>
        /// <returns></returns>
        public IEdmModel Create()
        {
            edmModel = new EdmModel(true);
            foreach (var item in rdmModel.Items)
            {
                AddSchemaElements(item);
            }
            return Interlocked.Exchange(ref edmModel, null);
        }

        private void AddSchemaElements(IRdmSchemaElement item)
        {
            switch (item)
            {
                case RdmStructuredType structured:
                    AddStructuredType(structured);
                    break;
                case RdmEnum @enum:
                    AddEnumType(@enum);
                    break;
                case RdmService service:
                    AddService(service);
                    break;
                default:
                    throw new NotSupportedException("unknown implementation of IRdmSchemaElement");
            }
        }

        private EdmEnumType AddEnumType(RdmEnum definition)
        {
            var edmType = new EdmEnumType(namespaceName, definition.Name);
            edmModel.AddElement(edmType);
            for (int i = 0; i < definition.Members.Count; i++)
            {
                var elem = definition.Members[i];
                edmType.AddMember(new EdmEnumMember(edmType, elem, new EdmEnumMemberValue(i)));
            }
            return edmType;
        }

        private EdmStructuredType AddStructuredType(RdmStructuredType definition)
        {
            // if the type exists on the edm model, exit imediatly
            var decl = edmModel.FindDeclaredType($"{namespaceName}.{definition.Name}");
            if (decl is EdmStructuredType es)
            {
                return es; 
            }

            // add the type immediatly so that it can be found when resolving property types
            var edmType = definition.Keys.Any() ?
                (EdmStructuredType)edmModel.AddEntityType(namespaceName, definition.Name) :
                (EdmStructuredType)edmModel.AddComplexType(namespaceName, definition.Name);

            // add properties
            foreach (var prop in definition.Properties)
            {
                AddProperty(edmType, prop);
            }
            
            // add keys
            if (edmType is EdmEntityType entityType)
            {
                var keys = definition.Keys.Select(key => (IEdmStructuralProperty)edmType.FindProperty(key.Name));
                entityType.AddKeys(keys);
            }

            // TODO: functions
            // https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#_Toc38530382

            // add functions
            foreach (var func in definition.Functions)
            {
                if(!(edmType is EdmEntityType ))
                {
                    throw new InvalidOperationException($"function on complex type at {func.Position}");
                }
                AddFunction(definition, func);
            }

            return edmType;
        }

        private void AddProperty(EdmStructuredType edmType, RdmProperty prop)
        {
            var edmTypeRef = MakeTypeReference(prop.PropType);

            // collection navigation property
            if (edmTypeRef is IEdmCollectionTypeReference collRef &&
                collRef.Definition is IEdmCollectionType collType &&
                collType.ElementType is IEdmEntityTypeReference elTypeRef &&
                elTypeRef.Definition is IEdmEntityType elType)
            {
                var edmProp = new EdmNavigationPropertyInfo { Name = prop.Name, Target = elType, TargetMultiplicity = EdmMultiplicity.Many };
                edmType.AddUnidirectionalNavigation(edmProp);
            }
            // single value navigation property
            else if (edmTypeRef is IEdmEntityTypeReference entityRef &&
                entityRef.Definition is IEdmEntityType svelType)
            {
                var multiplicity = edmTypeRef.IsNullable ? EdmMultiplicity.ZeroOrOne : EdmMultiplicity.One;
                var edmProp = new EdmNavigationPropertyInfo { Name = prop.Name, Target = svelType, TargetMultiplicity = multiplicity };
                edmType.AddUnidirectionalNavigation(edmProp);
            }
            // single value or collection  property
            else if (edmTypeRef is IEdmTypeReference typeRef)
            {
                edmType.AddStructuralProperty(prop.Name, typeRef);
            }
            else
            {
                throw new NotSupportedException("unsupported implementation of IEdmTypeReference returned from MakeTypeReference");
            }
        }

        private void AddFunction(RdmStructuredType rdmType, RdmFunction func)
        {
            var isFunction = ! func.Annotations.Any(a => a is ActionAnnotation);
            var edmTypeRef = func.ReturnType != null ? MakeTypeReference(func.ReturnType) : null;
            // TODO: check that a function has a return type
            var operation =  isFunction ?
                (EdmOperation)new EdmFunction(namespaceName, func.Name, edmTypeRef, true, null, true) :
                (EdmOperation)new EdmAction(namespaceName, func.Name, edmTypeRef, true, null);            
            edmModel.AddElement(operation);

            // TODO: add binding parameter
            var self = MakeTypeReference(new RdmTypeReference(rdmType.Name));
            operation.AddParameter(new EdmOperationParameter(operation, "this", self));

            foreach (var param in func.Parameters)
            {
                var paramType = MakeTypeReference(param.PropType);
                operation.AddParameter(new EdmOperationParameter(operation, param.Name, paramType));
            }
        }

        private void AddService(RdmService service)
        {
            var containerName = "default";
            var container = (EdmEntityContainer) edmModel.EntityContainer ?? edmModel.AddEntityContainer(namespaceName, containerName);

            foreach (var item in service.Items)
            {
                switch(item)
                {
                    case RdmServiceCollection collection:
                        AddEntitySet(container, item, collection);
                        break;
                    case RdmServiceSingelton singleton:
                        AddSingelton(container, item, singleton);
                        break;
                    default:
                        throw new NotSupportedException("unknown implementation of IRdmServiceElement");
                }
            }

            // add navigation property bindings
            foreach (var tuple in
                from type in edmModel.SchemaElements.OfType<IEdmStructuredType>()
                from property in type.DeclaredProperties.OfType<IEdmNavigationProperty>()
                select (type,property))
            {
                var (type, property) = tuple;
                var sources = FindEntitySetOfType(container, type).ToList();
                if (sources.Count != 1)
                {
                    var prefix = sources.Count == 0 ? "No entity set" : "Multiple entity sets";
                    throw new TransformationException($"Invalid navigation property '{type}.{property.Name}'. {prefix} defined for type {type}.");
                }

                var propertyType = (property.Type.Definition is IEdmCollectionType coll ? coll.ElementType : property.Type).Definition;
                var targets = FindEntitySetOfType(container, propertyType).ToList();
                if (targets.Count != 1)
                {
                    var prefix = targets.Count == 0 ? "no entity set" : "multiple entity sets";
                    throw new TransformationException($"Invalid navigation property '{type}.{property.Name}'. {prefix} defined for property's type '{type}.{property.Name}'.");
                }

                var source = sources.Single();
                var target = targets.Single();
                source.AddNavigationTarget(property, target);
            }
        }

        private IEnumerable<EdmEntitySet> FindEntitySetOfType(EdmEntityContainer container, IEdmType type)
        {
            return container.Elements.OfType<EdmEntitySet>().Where(eset =>
                eset.Type is IEdmCollectionType coll && coll.ElementType.Definition == type);
         }

        private EdmEntitySet AddEntitySet(EdmEntityContainer container, IRdmServiceElement item, RdmServiceCollection collection)
        {
            var type = ResolveType(collection.Type);
            // TODO: ensure resolved type is actually an entity
            var eset = container.AddEntitySet(item.Name, (IEdmEntityType)type);

            return eset;
        }

        private EdmSingleton AddSingelton(EdmEntityContainer container, IRdmServiceElement item, RdmServiceSingelton singleton)
        {
            var type = ResolveType(singleton.Type);
            // TODO: ensure resolved type is actually an entity
            var singelton = container.AddSingleton(item.Name, (IEdmEntityType)type);

            return singelton;
        }

        #region type references

        private IEdmTypeReference MakeTypeReference(RdmTypeReference typeRef)
        {
            // find the corresponding edm type
            IEdmType edmType = ResolveType(typeRef);

            // create a edm type reference
            var edmRef = edmType switch
            {
                EdmComplexType complex =>
                    (IEdmTypeReference)new EdmComplexTypeReference(complex, typeRef.IsNullable),
                EdmEntityType entity =>
                    (IEdmTypeReference)new EdmEntityTypeReference(entity, typeRef.IsNullable),
                EdmEnumType @enum =>
                    (IEdmTypeReference)new EdmEnumTypeReference(@enum, typeRef.IsNullable),
                IEdmPrimitiveType primitive =>
                    primitive.PrimitiveKind == EdmPrimitiveTypeKind.String ?
                        (IEdmTypeReference)new EdmStringTypeReference(primitive, typeRef.IsNullable, false, null, true) :
                        (IEdmTypeReference)new EdmPrimitiveTypeReference(primitive, typeRef.IsNullable),
                _ =>
                    throw new NotSupportedException("unsupported implementation of IEdmStructuredType")
            };

            // fix up the edm type reference it it is multivalued
            if (typeRef.IsMultivalued)
            {
                edmRef = new EdmCollectionTypeReference(new EdmCollectionType(edmRef));
            }
            return edmRef;
        }

        /// <summary>
        /// Returns the IEdmType in <see cref="edmModel"/> for the given RDM type reference.
        /// Creates a new EdmType (via <see cref="AddStructuredType"/>) in case 
        /// it isn't added to <see cref="edmModel"/> yet.
        /// </summary>
        /// <param name="typeRef"></param>
        /// <returns></returns>
        private IEdmType ResolveType(RdmTypeReference typeRef)
        {
            IEdmType edmType;

            // is the name the name of an declared edm type
            var rdmStructuredType = rdmModel.Items
                .OfType<RdmStructuredType>()
                .FirstOrDefault(t => t.Name.Equals(typeRef.Name));
            if (rdmStructuredType != null)
            {
                edmType = edmModel.FindDeclaredType($"{namespaceName}.{typeRef.Name}");
                // edmType = edmModel.SchemaElements.OfType<IEdmType>().FirstOrDefault(t => t.FullTypeName().Equals($"{namespaceName}.{typeRef.Name}"));
                if (edmType == null)
                {
                    edmType = AddStructuredType(rdmStructuredType);
                }
                return edmType;
            }

            var rdmEnum = rdmModel.Items
                .OfType<RdmEnum>()
                .FirstOrDefault(t => t.Name.Equals(typeRef.Name));
            if (rdmEnum != null)
            {
                edmType = edmModel.FindDeclaredType($"{namespaceName}.{typeRef.Name}") ??
                    AddEnumType(rdmEnum);
                return edmType;
            }

            if (_primitiveTypeNameMapping.TryGetValue(typeRef.Name, out var edmTypeName))
            {
                edmType = edmModel.FindType(edmTypeName);
                return edmType;
            }
            else if(typeRef.Name.StartsWith("Edm."))
            {
                edmType = edmModel.FindType(typeRef.Name);
                return edmType;
            }
            throw new TransformationException($"unable to resolve type {typeRef.Name}");
        }

        private static readonly Dictionary<string, string> _primitiveTypeNameMapping = new Dictionary<string, string>
        {
            ["integer"] = "Edm.Int32",
            ["string"] = "Edm.String",
            ["boolean"] = "Edm.Boolean",
            ["dateTime"] = "Edm.DateTimeOffset",
            ["double"] = "Edm.Double"
        };

        private static readonly Dictionary<string, IEdmType> _primitives = new Dictionary<string, IEdmType>
        {
            ["integer"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Int32),
            ["string"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.String),
            ["boolean"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Boolean),
            ["dateTime"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.DateTimeOffset),
            ["double"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Double)
        };
        #endregion
    }
}
