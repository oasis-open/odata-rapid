using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace rapid.rdm
{
    public enum AnnotationExpressionKind
    {
        Null, String, Boolean, Integer, Float, Object, Array,
    }

    public class AnnotationExpression : IEquatable<AnnotationExpression>
    {

        public AnnotationExpressionKind Kind { get; }

        public object Value { get; }

        public Position Position { get; set; }

        private AnnotationExpression(AnnotationExpressionKind kind, object value, Position position = default)
        {
            CheckValueType(kind, value);
            Kind = kind;
            Value = value;
            Position = position;
        }

        [System.Diagnostics.Conditional("DEBUG")]
        private static void CheckValueType(AnnotationExpressionKind kind, object value)
        {
            if (value == null && kind == AnnotationExpressionKind.Null)
                return;
            var type = value.GetType();
            if (typeof(IReadOnlyCollection<AnnotationExpression>).IsAssignableFrom(type) && kind == AnnotationExpressionKind.Array)
                return;
            if (typeof(IReadOnlyCollection<ExpressionProperty>).IsAssignableFrom(type) && kind == AnnotationExpressionKind.Object)
                return;
            if (_kinds.TryGetValue(Type.GetTypeCode(type), out var expected) && expected == kind)
                return;
            System.Diagnostics.Debug.Fail($"wrong Expression kind '{kind}' for '{type}'");
        }

        private static IDictionary<TypeCode, AnnotationExpressionKind> _kinds =
            new Dictionary<TypeCode, AnnotationExpressionKind>
            {
                [TypeCode.Int64] = AnnotationExpressionKind.Integer,
                [TypeCode.Double] = AnnotationExpressionKind.Float,
                [TypeCode.Boolean] = AnnotationExpressionKind.Boolean,
                [TypeCode.String] = AnnotationExpressionKind.String,
            };

        public static AnnotationExpression Null(Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Null, null, position);

        public static AnnotationExpression Boolean(bool value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Boolean, value, position);

        public static AnnotationExpression String(string value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.String, value, position);

        public static AnnotationExpression Float(double value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Float, value, position);

        public static AnnotationExpression Integer(long value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Integer, value, position);

        public static AnnotationExpression Array(IEnumerable<AnnotationExpression> items, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Array, items.ToReadOnlyList(), position);

        public static AnnotationExpression Object(IEnumerable<ExpressionProperty> properties, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Object, properties.ToReadOnlyList(), position);

        public IReadOnlyList<ExpressionProperty> Properties => (IReadOnlyList<ExpressionProperty>)Value;

        public IReadOnlyList<AnnotationExpression> Items => (IReadOnlyList<AnnotationExpression>)Value;


        public bool Equals(AnnotationExpression other)
        {
            if (other == null)
                return false;
            return this.Kind.Equals(other.Kind) && (this.Value == null && other.Value == null || this.Value.Equals(other.Value));
        }

        public override bool Equals(object other)
        {
            return other is AnnotationExpression p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Kind, Value);
        }
    }

    public class ExpressionProperty
    {
        public ExpressionProperty(string name, AnnotationExpression value)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; }
        public AnnotationExpression Value { get; }

        public override string ToString() => $"\"{Name}\": {Value}";
    }
}
