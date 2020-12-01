using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;

namespace rapid.rdm
{
    internal class ModelBuilder
    {

        private readonly TypeEnvironment env;

        private readonly ILogger logger;

        private EdmModel edmModel;
        private RdmDataModel rdmModel;

        public ModelBuilder(ILogger logger, TypeEnvironment env)
        {
            this.logger = logger;
            this.env = env;
        }

        /// <summary>
        /// Build out the EDM model for the given RDM Model
        /// </summary>
        /// <remarks>This method is not thread safe.</remarks>
        /// <returns>The constructed EDM model</returns>
        public IEdmModel Build(RdmDataModel rdmModel, EdmModel edmModel)
        {
            try
            {
                this.rdmModel = rdmModel;
                this.edmModel = edmModel;

                edmModel.SetEdmReferences(CreateReferences());

                // create: add each of the schema elements and register them in the environment
                foreach (var item in rdmModel.Items)
                {
                    var edmElement = CreateSchemaElement(item);
                    if (edmElement is IEdmType edmType)
                    {
                        env.Register(item.Name, edmType);
                    }
                }

                // add the members, properties, ... or the schema elements
                foreach (var item in rdmModel.Items)
                {
                    var edmElement = BuildSchemaElement(item);
                }
            }
            finally
            {
                rdmModel = null;
            }

            return edmModel;
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

        private IEdmElement CreateSchemaElement(IRdmSchemaElement item)
        {
            switch (item)
            {
                case RdmStructuredType structured:
                    return AddStructuredType(structured);
                case RdmEnumType @enum:
                    return AddEnumType(@enum);
                case RdmService service:
                    return AddService(service);
                default:
                    throw new NotSupportedException("unknown implementation of IRdmSchemaElement");
            }
        }

        private IEdmElement BuildSchemaElement(IRdmSchemaElement item)
        {
            switch (item)
            {
                case RdmStructuredType structured:
                    return BuildStructuredType(structured);
                case RdmEnumType @enum:
                    return BuildEnumType(@enum);
                case RdmService service:
                    return BuildService(service);
                default:
                    throw new NotSupportedException("unknown implementation of IRdmSchemaElement");
            }
        }

        private EdmEnumType AddEnumType(RdmEnumType definition)
        {
            var edmType = new EdmEnumType(rdmModel.Namespace.NamespaceName, definition.Name, definition.IsFlags);
            edmModel.AddElement(edmType);

            return edmType;
        }

        private EdmEnumType BuildEnumType(RdmEnumType definition)
        {
            var edmType = edmModel.FindType(rdmModel.Namespace.NamespaceName + "." + definition.Name) as EdmEnumType;

            var flags = definition.IsFlags;
            for (int i = 0; i < definition.Members.Count; i++)
            {
                var elem = definition.Members[i];
                var value = flags ? (1 << i) : i;
                edmType.AddMember(new EdmEnumMember(edmType, elem, new EdmEnumMemberValue(value)));
            }
            return edmType;
        }

        private EdmStructuredType AddStructuredType(RdmStructuredType definition)
        {
            var isEntityType = definition.Keys.Any() || HasSingletonOfType(definition);
            var edmType = isEntityType ?
               (EdmStructuredType)edmModel.AddEntityType(rdmModel.Namespace.NamespaceName, definition.Name) :
               (EdmStructuredType)edmModel.AddComplexType(rdmModel.Namespace.NamespaceName, definition.Name);
            return edmType;
        }

        private EdmStructuredType BuildStructuredType(RdmStructuredType definition)
        {
            var edmType = edmModel.FindType(rdmModel.Namespace.NamespaceName + "." + definition.Name) as EdmStructuredType;

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

        private EdmEntityContainer AddService(RdmService service)
        {
            var container = edmModel.AddEntityContainer(rdmModel.Namespace.NamespaceName, service.Name);
            return container;
        }

        private EdmEntityContainer BuildService(RdmService service)
        {
            var container = edmModel.FindEntityContainer(rdmModel.Namespace.NamespaceName + "." + service.Name) as EdmEntityContainer;

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

            return container;
        }

        private bool HasSingletonOfType(RdmStructuredType definition)
        {
            var singletons = from service in rdmModel.Items.OfType<RdmService>()
                             from item in service.Items.OfType<RdmServiceSingelton>()
                             select item;
            var matches = singletons.Where(singleton => singleton.Type.Name == definition.Name);
            return matches.Any();
        }

        private IEnumerable<EdmEntitySet> FindEntitySetOfType(EdmEntityContainer container, IEdmType type)
        {
            return container.Elements.OfType<EdmEntitySet>().Where(entitySet =>
                entitySet.Type is IEdmCollectionType coll && coll.ElementType.Definition == type);
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
                    var entitySet = container.AddEntitySet(item.Name, entityType);
                    return entitySet;
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
