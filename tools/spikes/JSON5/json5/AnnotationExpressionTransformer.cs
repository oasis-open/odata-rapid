using System;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace json5
{
    internal class AnnotationExpressionTransformer
    {
        public AnnotationExpressionTransformer()
        {
        }

        public IEdmExpression Transform(Expression expression)
        {
            object value = expression.Value;
            switch (expression.Kind)
            {
                case ExpressionKind.Null:
                    return EdmNullExpression.Instance;
                case ExpressionKind.Integer:
                    return new EdmIntegerConstant((long)value);
                case ExpressionKind.Float:
                    return new EdmFloatingConstant((double)value);
                    throw new NotSupportedException($"Expression kind {expression.Kind}");
                case ExpressionKind.String:
                    return new EdmStringConstant((string)value);
                case ExpressionKind.Boolean:
                    return new EdmBooleanConstant((bool)value);
                    ;
                case ExpressionKind.Object:
                    return new EdmRecordExpression(
                        from prop in expression.Properties
                        select new EdmPropertyConstructor(prop.Name, Transform(prop.Value))
                    );
                case ExpressionKind.Array:
                    return new EdmCollectionExpression(expression.Items.Select(Transform));
                default:
                    throw new NotSupportedException($"Expression kind {expression.Kind}");
            }
        }
    }
}