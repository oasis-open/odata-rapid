using System;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace json5
{

    public class AnnotationExpressionTransformer
    {
        private ILogger logger;

        public AnnotationExpressionTransformer(ILogger logger)
        {
            this.logger = logger;
        }

        public IEdmExpression Transform(AnnotationExpression expression, IEdmTypeReference typeref, int n = 0)
        {
            string indent = "    ".Repeat(n);
            logger.LogInfo("{2}transform `{0}` `{1}`",
                expression.ToString(false), typeref?.FullName(), indent);

            object value = expression.Value;
            switch (expression.Kind)
            {
                case AnnotationExpressionKind.Null:
                    return EdmNullExpression.Instance;

                case AnnotationExpressionKind.Integer:
                    return new EdmIntegerConstant((long)value);

                case AnnotationExpressionKind.Float:
                    return new EdmFloatingConstant((double)value);

                case AnnotationExpressionKind.String:
                    return new EdmStringConstant((string)value);

                case AnnotationExpressionKind.Boolean:
                    return new EdmBooleanConstant((bool)value);

                case AnnotationExpressionKind.Object:

                    // Fix ODL behavior that the typeref is not a IEdmComplexTypeReference
                    // even though the definition is an IEdmComplexType
                    if (typeref.Definition is IEdmComplexType complex)
                    {
                        typeref = new EdmComplexTypeReference(complex, false);
                    }

                    if (typeref is IEdmComplexTypeReference complexTypeRef)
                    {
                        foreach (var m in ((IEdmComplexType)complexTypeRef.Definition)
                            .Properties()
                            .Where(edm => !expression.Properties.Any(p => p.Name.Equals(edm.Name))))
                        {
                            logger.LogError("    {0}missing property {1}", indent, m.Name);
                        }

                        var properties = (
                            from prop in expression.Properties
                            let edmPropType = FindPropertyType(complexTypeRef, prop)
                            where edmPropType != null
                            select new EdmPropertyConstructor(prop.Name, Transform(prop.Value, edmPropType, n + 1))
                        ).ToList();
                        return new EdmRecordExpression(complexTypeRef, properties);
                    }
                    throw new NotSupportedException($"typeref {typeref} not an IEdmComplexTypeReference");

                case AnnotationExpressionKind.Array:
                    if (typeref is IEdmCollectionTypeReference collectionTypeRef)
                    {
                        var itemTypeRef = collectionTypeRef.ElementType();
                        var items = (
                            expression.Items.Select(item => Transform(item, itemTypeRef, n + 1))
                        ).ToList();
                        return new EdmCollectionExpression(collectionTypeRef, items);
                    }
                    throw new NotSupportedException($"typeref {typeref} not an IEdmCollectionTypeReference");

                default:
                    throw new NotSupportedException($"Expression kind {expression.Kind}");
            }

            IEdmTypeReference FindPropertyType(IEdmComplexTypeReference complexTypeRef, ExpressionProperty prop)
            {
                var p = @complexTypeRef.FindProperty(prop.Name);
                if (p == null)
                {
                    logger.LogWarn("    {0}extraneous property {1} ignored", indent, prop.Name);
                    return EdmCoreModel.Instance.GetUntyped();
                }
                return p.Type;
            }
        }
    }
}
