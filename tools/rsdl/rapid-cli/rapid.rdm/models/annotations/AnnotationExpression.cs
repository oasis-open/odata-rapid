using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace rapid.rdm
{
    public enum AnnotationExpressionKind
    {
        Null, String, Boolean, Integer, Float, Object, Array,
        Path,
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
            if (value == null)
            {
                if (kind == AnnotationExpressionKind.Null) return;
                System.Diagnostics.Debug.Fail($"wrong value 'null' for Expression kind '{kind}' ");
            }

            var type = value.GetType();
            switch (kind)
            {
                case AnnotationExpressionKind.Array:
                    if (typeof(IReadOnlyCollection<AnnotationExpression>).IsAssignableFrom(type)) return;
                    break;
                case AnnotationExpressionKind.Object:
                    if (typeof(IReadOnlyCollection<ExpressionProperty>).IsAssignableFrom(type)) return;
                    break;
                default:
                    if (_kinds.TryGetValue(kind, out var expected) && expected == Type.GetTypeCode(type)) return;
                    break;
            }
            System.Diagnostics.Debug.Fail($"value has wrong type '{type} for Expression kind '{kind}' ");
        }

        private static IDictionary<AnnotationExpressionKind, TypeCode> _kinds =
        new Dictionary<AnnotationExpressionKind, TypeCode>
        {
            [AnnotationExpressionKind.Integer] = TypeCode.Int64,
            [AnnotationExpressionKind.Float] = TypeCode.Double,
            [AnnotationExpressionKind.Boolean] = TypeCode.Boolean,
            [AnnotationExpressionKind.String] = TypeCode.String,
            [AnnotationExpressionKind.Path] = TypeCode.String,
        };

        public static AnnotationExpression Null(Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Null, null, position);

        public static AnnotationExpression Boolean(bool value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Boolean, value, position);

        public static AnnotationExpression String(string value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.String, value, position);

        public static AnnotationExpression Path(string[] segements, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Path, string.Join("/", segements), position);

        public static AnnotationExpression Float(double value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Float, value, position);

        public static AnnotationExpression Integer(long value, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Integer, value, position);

        public static AnnotationExpression Array(IEnumerable<AnnotationExpression> items, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Array, items.ToReadOnlyList(), position);

        public static AnnotationExpression Object(IEnumerable<ExpressionProperty> properties, Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Object, properties.ToReadOnlyList(), position);

        public IReadOnlyList<ExpressionProperty> Properties => this.Kind == AnnotationExpressionKind.Object ? (IReadOnlyList<ExpressionProperty>)Value : System.Array.Empty<ExpressionProperty>();

        public IReadOnlyList<AnnotationExpression> Items => this.Kind == AnnotationExpressionKind.Array ? (IReadOnlyList<AnnotationExpression>)Value : System.Array.Empty<AnnotationExpression>();


        public static bool Equals(AnnotationExpression a, AnnotationExpression b)
        {
            if (object.ReferenceEquals(a, b)) return true;
            if (a == null || b == null) return a == null && b == null;
            if (a.Kind != b.Kind)
            {
                return false;
            }
            if (a.Kind == AnnotationExpressionKind.Object)
            {
                return Enumerable.SequenceEqual(a.Properties, b.Properties);
            }
            if (a.Kind == AnnotationExpressionKind.Array)
            {
                return Enumerable.SequenceEqual(a.Items, b.Items);
            }
            return object.Equals(a.Value, b.Value);
        }

        public bool Equals(AnnotationExpression other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is AnnotationExpression otherExpression && Equals(this, otherExpression);
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
