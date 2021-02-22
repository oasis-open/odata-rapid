using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;

namespace rapid.rdm
{
    public class TypeEnvironment
    {
        private readonly ILogger logger;

        private readonly Dictionary<string, IEdmType> @internal;

        // dictionary of schema alias to dictionary of (namespace,  EDM model)
        private readonly IDictionary<string, (string @namespace, IEdmModel model)> external;

        public TypeEnvironment(ILogger logger)
        {
            this.logger = logger;
            this.@internal = new Dictionary<string, IEdmType>();
            this.external = new Dictionary<string, (string @namespace, IEdmModel model)>();
        }

        public void AddReferences(RdmDataModel model, IDictionary<string, RdmDataModel> referencedModels)
        {
            foreach (var reference in model.References)
            {
                if (!referencedModels.TryGetValue(reference.Alias, out var referencedRdmModel))
                {
                    logger.LogError($"unable to find referenced model for alias {reference.Alias}");
                }
                external[reference.Alias] = (
                    referencedModels[reference.Alias].Namespace.NamespaceName,
                    CreateExternalModel(referencedRdmModel)
                );
            }
        }

        internal void Register(string name, IEdmType edmElement)
        {
            @internal.Add(name, edmElement);
        }

        /// <summary>
        /// List of all referenced models including their alias and namespace
        /// </summary>
        public IEnumerable<(string alias, string @namespace, IEdmModel model)> References =>
            external.Select(kvp => (kvp.Key, kvp.Value.@namespace, kvp.Value.model));


        /// <summary>
        /// Returns an IEdmTypeReference for the given RDM type reference.
        /// </summary>
        /// <param name="typeRef"></param>
        /// <returns></returns>
        public IEdmTypeReference ResolveTypeReference(RdmTypeReference typeRef)
        {
            // identifier refering to the current model. has precedence over predefined primitive types
            if (this.@internal.TryGetValue(typeRef.Name, out var edmType))
            {
                return MakeTypeReference(edmType, typeRef.IsNullable);
            }
            // well known primitive type name
            else if (_primitiveTypes.TryGetValue(typeRef.Name, out var primitive))
            {
                return MakeTypeReference(primitive, typeRef.IsNullable);
            }
            // is it known in the included models?
            else if (external.TryGetValue(typeRef.Prefix, out var entry))
            {
                var model = entry.model;
                var type = model.FindType(entry.@namespace + "." + typeRef.Suffix);
                if (type == null)
                {
                    // TODO: internal error should not occur.
                    throw new TransformationException($"Can not resolve type reference {typeRef.Name}");
                }
                return MakeTypeReference(type, typeRef.IsNullable);
            }
            // starting with "Edm."
            else if (typeRef.Name.StartsWith("Edm."))
            {
                return MakeTypeReference(EdmCoreModel.Instance.FindType(typeRef.Name), typeRef.IsNullable);
            }
            else
            {
                var pascal = typeRef.Name.ToPascalCase();

                var hint = pascal != typeRef.Name && _primitiveTypes.ContainsKey(pascal) ? $" There is a primitive type called {pascal} spelled similarly." : string.Empty;
                throw new TransformationException($"Type reference {typeRef.Name} not found ({typeRef.Position}).{hint}");
            }
        }


        private static IEdmTypeReference MakeTypeReference(IEdmType type, bool nullable)
        {
            switch (type)
            {
                case IEdmComplexType complex:
                    return new EdmComplexTypeReference(complex, nullable);

                case IEdmEntityType entity:
                    return new EdmEntityTypeReference(entity, nullable);

                case IEdmPrimitiveType primitive:
                    switch (primitive.PrimitiveKind)
                    {
                        case EdmPrimitiveTypeKind.String:
                            return new EdmStringTypeReference(primitive, nullable, false, null, true);
                        default:
                            return new EdmPrimitiveTypeReference(primitive, nullable);
                    }

                case IEdmEnumType enumeration:
                    return new EdmEnumTypeReference(enumeration, nullable);

                default:
                    throw new NotSupportedException("MakeTypeReference: unknown implementation of IEdmType");
            }
        }


        /// <summary>
        /// create an EDM type definition based on the given RDM type,
        /// but does not "build out the type" (no members, properties, functions, ..)
        /// </summary>
        private static IEdmSchemaType CreateTypeSkeleton(string @namespace, IRdmType rdmType)
        {
            switch (rdmType)
            {
                case RdmStructuredType structuredType:
                    if (structuredType.Keys.Any())
                    {
                        return new EdmEntityType(@namespace, structuredType.Name);
                    }
                    else
                    {
                        return new EdmComplexType(@namespace, structuredType.Name);
                    }

                case RdmEnumType enumeration:
                    return new EdmEnumType(@namespace, enumeration.Name);

                default:
                    throw new NotSupportedException("unknown implementation of IRdmType");
            }
        }

        /// <summary>
        /// creates a stub EDM model representing the referenced RDM model
        /// </summary>
        private IEdmModel CreateExternalModel(RdmDataModel model)
        {
            var edmModel = new EdmModel(false);
            foreach (var rdmType in model.Items.OfType<IRdmType>())
            {
                edmModel.AddElement(CreateTypeSkeleton(model.Namespace.NamespaceName, rdmType));
            }

            if (logger.LogLevel >= LogLevel.Information)
            {
                var path = System.IO.Path.Combine(System.IO.Path.GetTempPath(), model.Namespace.NamespaceName + ".csdl.xml");
                using var w = System.Xml.XmlWriter.Create(path, new System.Xml.XmlWriterSettings { Indent = true });
                CsdlWriter.TryWriteCsdl(edmModel, w, CsdlTarget.OData, out var _);

                logger.LogInfo("wrote temporary referenced schema to {0}", path);
            }
            return edmModel;
        }


        private static readonly Dictionary<string, IEdmPrimitiveType> _primitiveTypes = new Dictionary<string, IEdmPrimitiveType>
        {
            ["Integer"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Int32),
            ["String"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.String),
            ["Boolean"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Boolean),
            ["DateTime"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.DateTimeOffset),
            ["Date"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Date),
            ["Double"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Double),
            ["Decimal"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Decimal),
            ["TimeOfDay"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.TimeOfDay),
            ["Duration"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Duration),
        };
    }
}
