using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using rapid.rdm;

namespace rapid.rsdl
{
    internal class ModelBuilder
    {
        private readonly RdmDataModel rdmModel;

        private readonly TypeMapping env;

        private EdmModel edmModel;

        public ModelBuilder(RdmDataModel schema, TypeMapping env)
        {
            this.rdmModel = schema;
            this.env = env;
        }

        /// <summary>
        /// Create an EDM model for the given RDM Model
        /// </summary>
        /// <remarks>This method is not thread safe.</remarks>
        /// <returns>The constructed EDM model</returns>
        public IEdmModel Build()
        {
            edmModel = new EdmModel(true);

            edmModel.SetEdmReferences(CreateReferences());

            foreach (var item in rdmModel.Items)
            {
                AddSchemaElements(item);
            }

            // return edmModel and set it to null after returning it.
            return Interlocked.Exchange(ref edmModel, null);
        }

        private IEnumerable<EdmReference> CreateReferences()
        {
            EdmReference MakeReference(string alias, string @namespace, IEdmModel model)
            {
                var reference = new EdmReference(new Uri("http://unknown.com"));
                reference.AddInclude(new EdmInclude(alias, @namespace));
                return reference;
            }

            // https://devblogs.microsoft.com/odata/tutorial-sample-refering-when-constructing-edm-model/
            return
                from referenced in env.References
                select MakeReference(referenced.alias, referenced.@namespace, referenced.model);
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
            var edmType = new EdmEnumType(rdmModel.Namespace.NamespaceName, definition.Name);
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
            // if the type already exists on the edm model, exit immediately
            var decl = edmModel.FindDeclaredType($"{rdmModel.Namespace.NamespaceName}.{definition.Name}");
            if (decl is EdmStructuredType es)
            {
                return es;
            }

            // add the type immediately so that it can be found when resolving property types recursively
            var isEntityType = definition.Keys.Any() || HasSingletonOfType(definition);
            var edmType = isEntityType ?
                (EdmStructuredType)edmModel.AddEntityType(rdmModel.Namespace.NamespaceName, definition.Name) :
                (EdmStructuredType)edmModel.AddComplexType(rdmModel.Namespace.NamespaceName, definition.Name);

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
            foreach (var func in definition.Operations)
            {
                if (!(edmType is EdmEntityType))
                {
                    throw new InvalidOperationException($"function on complex type at {func.Position}");
                }
                AddFunction(definition, func);
            }

            return edmType;
        }

        private bool HasSingletonOfType(RdmStructuredType definition)
        {
            var singletons = from service in rdmModel.Items.OfType<RdmService>()
                             from item in service.Items.OfType<RdmServiceSingelton>()
                             select item;
            var matches = singletons.Where(singleton => singleton.Type.Name == definition.Name);
            return matches.Any();
        }

        private void AddProperty(EdmStructuredType edmType, RdmProperty prop)
        {
            var edmTypeRef = env.ResolveTypeReference(prop.Type);

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
                throw new NotSupportedException("unsupported implementation of IEdmTypeReference returned from GetTypeReference");
            }
        }

        private void AddFunction(RdmStructuredType rdmType, RdmOperation operation)
        {
            var isFunction = !operation.Annotations.Any(a => a is ActionAnnotation);
            EdmOperation edmOperation = MakeOperation(operation, isFunction);
            edmModel.AddElement(edmOperation);

            // add binding parameter
            var self = env.ResolveTypeReference(new RdmTypeReference(rdmType.Name));
            edmOperation.AddParameter(new EdmOperationParameter(edmOperation, "this", self));

            foreach (var param in operation.Parameters)
            {
                var paramType = env.ResolveTypeReference(param.Type);
                if (param.IsOptional)
                {
                    edmOperation.AddOptionalParameter(param.Name, paramType);
                }
                else
                {
                    edmOperation.AddParameter(param.Name, paramType);
                }
            }
        }

        private EdmOperation MakeOperation(RdmOperation operation, bool isFunction)
        {

            if (isFunction)
            {
                if (operation.ReturnType == null)
                {
                    throw new TransformationException($"function \"{operation.Name}\" at {operation.Position} must have a return type");
                }
                var edmTypeRef = env.ResolveTypeReference(operation.ReturnType);
                return (EdmOperation)new EdmFunction(rdmModel.Namespace.NamespaceName, operation.Name, edmTypeRef, true, null, true);
            }
            else
            {
                var edmTypeRef = operation.ReturnType != null ? env.ResolveTypeReference(operation.ReturnType) : null;
                return new EdmAction(rdmModel.Namespace.NamespaceName, operation.Name, edmTypeRef, true, null);
            }
        }

        private void AddService(RdmService service)
        {
            var containerName = "Service";
            var container = (EdmEntityContainer)edmModel.EntityContainer ??
                edmModel.AddEntityContainer(rdmModel.Namespace.NamespaceName, containerName);

            foreach (var item in service.Items)
            {
                switch (item)
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
                select (type, property))
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
                    var prefix = targets.Count == 0 ? "No entity set" : "Multiple entity sets";
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
            var @ref = env.ResolveTypeReference(collection.Type);
            // TODO: ensure resolved type is actually an entity

            if (@ref is IEdmEntityTypeReference entityTypeReference)
            {
                var type = entityTypeReference.Definition;
                if (type is IEdmEntityType entityType)
                {
                    var eset = container.AddEntitySet(item.Name, entityType);
                    return eset;
                }
            }

            throw new Exception("");
        }

        private EdmSingleton AddSingelton(EdmEntityContainer container, IRdmServiceElement item, RdmServiceSingelton singleton)
        {
            var type = env.ResolveTypeReference(singleton.Type);

            switch (type.Definition)
            {
                case IEdmEntityType entityType:
                    var singelton = container.AddSingleton(item.Name, entityType);
                    return singelton;

                default:
                    throw new TransformationException($"Invalid type '{type}' for single valued service property {item.Name}.");
            }
        }
    }
}
