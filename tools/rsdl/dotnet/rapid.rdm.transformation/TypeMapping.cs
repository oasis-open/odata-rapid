using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using rapid.rdm;

namespace rapid.rsdl
{
    public class TypeMapping
    {
        private readonly RdmDataModel model;

        private readonly ILogger logger;

        // dictionary of schema alias to dictionary of (namespace,  EDM model)
        private readonly IDictionary<string, (string @namespace, IEdmModel model)> lookup;

        public TypeMapping(RdmDataModel model, ILogger logger)
           : this(model, new Dictionary<string, RdmDataModel>(), logger)
        {
        }

        public TypeMapping(RdmDataModel model, IDictionary<string, RdmDataModel> references, ILogger logger)
        {
            this.model = model;
            this.logger = logger;
            this.lookup = model.References.ToDictionary(
                r => r.Alias,
                r => (
                    references[r.Alias].Namespace.NamespaceName,
                    CreateExternalModel(references[r.Alias])));
        }

        /// <summary>
        /// List of all referenced models including their alias and namespace
        /// </summary>
        public IEnumerable<(string alias, string @namespace, IEdmModel model)> References =>
            lookup.Select(kvp => (kvp.Key, kvp.Value.@namespace, kvp.Value.model));


        /// <summary>
        /// Returns an IEdmTypeReference for the given RDM type reference.
        /// </summary>
        /// <param name="typeRef"></param>
        /// <returns></returns>
        public IEdmTypeReference ResolveTypeReference(RdmTypeReference typeRef)
        {
            // is a well known primitive type name
            if (_primitiveTypeNameMapping.TryGetValue(typeRef.Name, out var primitive))
            {
                return MakeTypeReference(primitive, typeRef.IsNullable);
            }
            // is unqualified, therefore refering to the current model.
            else if (string.IsNullOrEmpty(typeRef.Prefix))
            {
                return MakeTypeReference(new EdmEntityType(model.Namespace.NamespaceName, typeRef.Suffix), typeRef.IsNullable);
            }
            // is it known in the included models?
            else if (lookup.TryGetValue(typeRef.Prefix, out var entry))
            {
                var model = entry.model;
                var type = model.FindType(entry.@namespace + "." + typeRef.Suffix);
                if (type == null)
                {
                    throw new KeyNotFoundException($"can not resolve type reference {typeRef.Name}");
                }
                return MakeTypeReference(type, typeRef.IsNullable);
            }
            // starting with "Edm."
            else if (typeRef.Name.StartsWith("Edm."))
            {
                return MakeTypeReference(EdmCoreModel.Instance.FindType(typeRef.Name), typeRef.IsNullable);
            }
            // var type = lookup[typeRef.Prefix].types[typeRef.Suffix];
            throw new KeyNotFoundException($"type reference {typeRef.Name} not found");
        }

        private IEdmModel CreateExternalModel(RdmDataModel model)
        {
            var edmModel = new EdmModel(false);
            foreach (var rdmType in model.Items.OfType<IRdmType>())
            {
                edmModel.AddElement(CreateTypePlaceholder(model.Namespace.NamespaceName, rdmType));
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

        private static IEdmSchemaType CreateTypePlaceholder(string @namespace, IRdmType rdmType)
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

                case RdmEnum enumeration:
                    return new EdmEnumType(@namespace, enumeration.Name);

                default:
                    throw new NotSupportedException("unknown implementation of IRdmType");
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
                    return new EdmPrimitiveTypeReference(primitive, nullable);

                case IEdmEnumType enumeration:
                    return new EdmEnumTypeReference(enumeration, nullable);

                default:
                    throw new NotSupportedException("MakeTypeReference: unknown implementation of IEdmType");
            }
        }

        private static readonly Dictionary<string, IEdmPrimitiveType> _primitiveTypeNameMapping = new Dictionary<string, IEdmPrimitiveType>
        {
            ["Integer"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Int32),
            ["String"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.String),
            ["Boolean"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Boolean),
            ["DateTime"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.DateTimeOffset),
            ["Date"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Date),
            ["Double"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Double),
            ["Decimal"] = EdmCoreModel.Instance.GetPrimitiveType(EdmPrimitiveTypeKind.Decimal),
        };
    }
}
