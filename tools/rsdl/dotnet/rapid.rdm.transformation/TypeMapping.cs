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

        public IEnumerable<IEdmModel> Models => lookup.Values.Select(p => p.model);

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

        internal string GetNamespace(string alias)
        {
            if (lookup.TryGetValue(alias, out var it))
            {
                return it.@namespace;
            }
            return default;
        }

        /// <summary>
        /// Returns an IEdmTypeReference for the given RDM type reference.
        /// </summary>
        /// <param name="typeRef"></param>
        /// <returns></returns>
        public IEdmTypeReference ResolveTypeReference(RdmTypeReference typeRef)
        {
            if (_primitiveTypeNameMapping.TryGetValue(typeRef.Name, out var primitive))
            {
                return MakeReference(primitive, typeRef.IsNullable);
            }
            if (typeRef.Name.StartsWith("Edm."))
            {
                return MakeReference(EdmCoreModel.Instance.FindType(typeRef.Name), typeRef.IsNullable);
            }

            if (string.IsNullOrEmpty(typeRef.Prefix))
            {
                return MakeReference(new EdmEntityType(model.Namespace.NamespaceName, typeRef.Suffix), typeRef.IsNullable);
            }

            if (lookup.TryGetValue(typeRef.Prefix, out var entry))
            {
                var model = entry.model;
                var type = model.FindType(entry.@namespace + "." + typeRef.Suffix);
                return MakeReference(type, typeRef.IsNullable);
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

        private static IEdmTypeReference MakeReference(IEdmType type, bool nullable)
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
                    throw new NotSupportedException("unknown implementation of IRdmType");
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
