using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;

namespace rapid.rdm
{
    internal class ModelBuilder
    {

        private readonly TypeEnvironment env;
        private readonly AnnotationBuilder annotationBuilder;
        private readonly ILogger logger;

        private EdmModel edmModel;
        private RdmDataModel rdmModel;

        public ModelBuilder(ILogger logger, TypeEnvironment env)
        {
            this.logger = logger;
            this.env = env;
            this.annotationBuilder = new AnnotationBuilder(logger);
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

                // add each of the schema elements and register them in the environment
                // order the elements so that base classes are created before subclasses

                foreach (var item in TopologicalOrder.Sort(rdmModel.Items))
                {
                    var edmElement = CreateSchemaElement(item);
                    if (edmElement is IEdmType edmType)
                    {
                        logger.LogInfo("adding type '{0}' to environment", item.Name);
                        env.Register(item.Name, edmType);
                    }
                }

                // add the members, properties, etc to the schema elements
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

            foreach (var annotation in definition.Annotations)
            {
                annotationBuilder.AddAnnotation(edmModel, edmType, annotation);
            }

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
                var member = new EdmEnumMember(edmType, elem.Name, new EdmEnumMemberValue(value));

                edmType.AddMember(member);
                foreach (var annotation in elem.Annotations)
                {
                    annotationBuilder.AddAnnotation(edmModel, member, annotation);
                }
            }
            return edmType;
        }

        private EdmStructuredType AddStructuredType(RdmStructuredType definition)
        {

            // base type, the Build method ensure that the base type was added before the 
            // sub-type and therefore FindType will succeed.
            IEdmStructuredType edmBaseType = null;
            if (definition.BaseType != null)
            {
                edmBaseType = edmModel.FindType(rdmModel.Namespace.NamespaceName + "." + definition.BaseType) as EdmStructuredType;
                if (edmBaseType == null)
                {
                    throw new TransformationException($"unable to find base type {definition.BaseType} for type {definition.Name}");
                }
            }

            if (definition.Keys.Any() || HasSingletonOfType(definition) || (edmBaseType != null && edmBaseType.TypeKind == EdmTypeKind.Entity))
            {
                var entity = edmModel.AddEntityType(rdmModel.Namespace.NamespaceName, definition.Name, (IEdmEntityType)edmBaseType, definition.IsAbstract, true);
                foreach (var annotation in definition.Annotations)
                {
                    annotationBuilder.AddAnnotation(edmModel, entity, annotation);
                }
                return entity;
            }
            else
            {
                var complex = edmModel.AddComplexType(rdmModel.Namespace.NamespaceName, definition.Name, (IEdmComplexType)edmBaseType, definition.IsAbstract, true);
                foreach (var annotation in definition.Annotations)
                {
                    annotationBuilder.AddAnnotation(edmModel, complex, annotation);
                }
                return complex;
            }
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
            foreach (var operation in definition.Operations)
            {
                if (!(edmType is EdmEntityType))
                {
                    throw new InvalidOperationException($"function on complex type at {operation.Position}");
                }
                AddOperation(operation, definition);
            }

            return edmType;
        }

        private void AddProperty(EdmStructuredType edmType, RdmProperty rdmProp)
        {
            var edmTypeRef = env.ResolveTypeReference(rdmProp.Type);
            EdmProperty edmProp;
            // collection navigation property
            if (edmTypeRef is IEdmCollectionTypeReference collRef &&
                collRef.Definition is IEdmCollectionType collType &&
                collType.ElementType is IEdmEntityTypeReference elTypeRef &&
                elTypeRef.Definition is IEdmEntityType elType)
            {
                var info = new EdmNavigationPropertyInfo { Name = rdmProp.Name, Target = elType, TargetMultiplicity = EdmMultiplicity.Many };
                edmProp = edmType.AddUnidirectionalNavigation(info);
            }
            // single value navigation property
            else if (edmTypeRef is IEdmEntityTypeReference entityRef &&
                entityRef.Definition is IEdmEntityType svelType)
            {
                var multiplicity = edmTypeRef.IsNullable ? EdmMultiplicity.ZeroOrOne : EdmMultiplicity.One;
                var info = new EdmNavigationPropertyInfo { Name = rdmProp.Name, Target = svelType, TargetMultiplicity = multiplicity };
                edmProp = edmType.AddUnidirectionalNavigation(info);
            }
            // structural property, single or multi value
            else if (edmTypeRef is IEdmTypeReference typeRef)
            {
                edmProp = edmType.AddStructuralProperty(rdmProp.Name, typeRef);
            }
            else
            {
                throw new NotSupportedException("unsupported implementation of IEdmTypeReference returned from GetTypeReference");
            }

            foreach (var annotation in rdmProp.Annotations.OfType<Annotation>())
            {
                annotationBuilder.AddAnnotation(edmModel, edmProp, annotation);
            }
        }

        private IEdmOperation AddOperation(RdmOperation operation, RdmStructuredType rdmType)
        {
            var edmOperation = MakeOperation(operation, rdmType);
            edmModel.AddElement(edmOperation);

            if (rdmType != null)
            {
                // add binding parameter
                var self = env.ResolveTypeReference(new RdmTypeReference(rdmType.Name));
                edmOperation.AddParameter(new EdmOperationParameter(edmOperation, "this", self));
            }

            foreach (var param in operation.Parameters)
            {
                var paramType = env.ResolveTypeReference(param.Type);
                EdmOperationParameter edmParameter = param.IsOptional ?
                    edmOperation.AddOptionalParameter(param.Name, paramType) :
                    edmOperation.AddParameter(param.Name, paramType);

                annotationBuilder.AddAnnotations(edmModel, edmParameter, param.Annotations);
            }
            return edmOperation;
        }

        private EdmOperation MakeOperation(RdmOperation operation, RdmStructuredType rdmType)
        {
            EdmOperation edmOperation;
            if (operation.Kind == RdmOperationKind.Function)
            {
                if (operation.ReturnType == null)
                {
                    throw new TransformationException($"function \"{operation.Name}\" at {operation.Position} must have a return type");
                }
                var edmTypeRef = env.ResolveTypeReference(operation.ReturnType.Type);
                edmOperation = new EdmFunction(rdmModel.Namespace.NamespaceName, operation.Name, edmTypeRef, rdmType != null, null, true);
                annotationBuilder.AddAnnotations(edmModel, edmOperation.GetReturn(), operation.ReturnType.Annotations);
            }
            else
            {
                var edmTypeRef = operation.ReturnType != null ? env.ResolveTypeReference(operation.ReturnType.Type) : null;
                edmOperation = new EdmAction(rdmModel.Namespace.NamespaceName, operation.Name, edmTypeRef, rdmType != null, null);
            }
            annotationBuilder.AddAnnotations(edmModel, edmOperation, operation.Annotations);
            return edmOperation;
        }

        private EdmEntityContainer AddService(RdmService service)
        {
            var container = edmModel.AddEntityContainer(rdmModel.Namespace.NamespaceName, service.Name);
            annotationBuilder.AddAnnotations(edmModel, container, service.Annotations);
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
                        AddEntitySet(container, collection);
                        break;
                    case RdmServiceSingleton singleton:
                        AddSingleton(container, singleton);
                        break;
                    case RdmOperation operation:
                        AddServiceOperation(container, operation);
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
                             from item in service.Items.OfType<RdmServiceSingleton>()
                             select item;
            var matches = singletons.Where(singleton => singleton.Type.Name == definition.Name);
            return matches.Any();
        }

        private IEnumerable<EdmEntitySet> FindEntitySetOfType(EdmEntityContainer container, IEdmType type)
        {
            return container.Elements.OfType<EdmEntitySet>().Where(entitySet =>
                entitySet.Type is IEdmCollectionType coll && coll.ElementType.Definition == type);
        }

        private EdmEntitySet AddEntitySet(EdmEntityContainer container, RdmServiceCollection collection)
        {
            var @ref = env.ResolveTypeReference(collection.Type);
            // TODO: ensure resolved type is actually an entity

            if (@ref is IEdmEntityTypeReference entityTypeReference)
            {
                var type = entityTypeReference.Definition;
                if (type is IEdmEntityType entityType)
                {
                    var entitySet = container.AddEntitySet(collection.Name, entityType);
                    annotationBuilder.AddAnnotations(edmModel, entitySet, collection.Annotations);
                    return entitySet;
                }
            }

            throw new Exception("");
        }

        private EdmSingleton AddSingleton(EdmEntityContainer container, RdmServiceSingleton singleton)
        {
            var type = env.ResolveTypeReference(singleton.Type);

            switch (type.Definition)
            {
                case IEdmEntityType entityType:
                    var edmSingleton = container.AddSingleton(singleton.Name, entityType);
                    annotationBuilder.AddAnnotations(edmModel, edmSingleton, singleton.Annotations);
                    return edmSingleton;

                default:
                    throw new TransformationException($"Invalid type '{type}' for single valued service property {singleton.Name}.");
            }
        }

        private void AddServiceOperation(EdmEntityContainer container, RdmOperation operation)
        {
            var edmOperation = AddOperation(operation, null);

            if (edmOperation is IEdmFunction edmFunction)
            {
                container.AddFunctionImport(edmFunction);
            }
            else if (edmOperation is IEdmAction edmAction)
            {
                container.AddActionImport(edmAction);
            }
            else
            {
                throw new NotSupportedException();
                throw new NotSupportedException("unknown implementation of IEdmOperation");
            }
        }
    }
}
