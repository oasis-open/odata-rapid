using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Superpower.Model;

namespace json5
{

    public enum AnnotationExpressionKind
    {
        Null, String, Boolean, Integer, Float, Object, Array,
    }

    public class AnnotationExpression
    {
        public Location Location { get; }

        public AnnotationExpressionKind Kind { get; }

        public object Value { get; }

        private AnnotationExpression(AnnotationExpressionKind kind, object value, Superpower.Model.Position position)
        {
            Check(kind, value);
            Kind = kind;
            Value = value;
            Location = position;
        }

        [System.Diagnostics.Conditional("DEBUG")]
        private static void Check(AnnotationExpressionKind kind, object value)
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
            System.Diagnostics.Debug.Fail($"wrong Expression kind { kind} {type}");
        }

        private static IDictionary<TypeCode, AnnotationExpressionKind> _kinds = new Dictionary<TypeCode, AnnotationExpressionKind>
        {
            [TypeCode.Int64] = AnnotationExpressionKind.Integer,
            [TypeCode.Double] = AnnotationExpressionKind.Float,
            [TypeCode.Boolean] = AnnotationExpressionKind.Boolean,
            [TypeCode.String] = AnnotationExpressionKind.String,
        };

        public static AnnotationExpression Null(Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Null, null, position);

        public static AnnotationExpression Boolean(bool value, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Boolean, value, position);

        public static AnnotationExpression String(string value, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.String, value, position);

        public static AnnotationExpression Float(double value, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Float, value, position);

        public static AnnotationExpression Integer(long value, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Integer, value, position);

        public static AnnotationExpression Array(IEnumerable<AnnotationExpression> items, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Array, items.ToList().AsReadOnly(), position);

        public static AnnotationExpression Object(IEnumerable<ExpressionProperty> properties, Superpower.Model.Position position = default) =>
            new AnnotationExpression(AnnotationExpressionKind.Object, properties.ToList().AsReadOnly(), position);

        public IReadOnlyList<ExpressionProperty> Properties => (IReadOnlyList<ExpressionProperty>)Value;

        public IReadOnlyList<AnnotationExpression> Items => (IReadOnlyList<AnnotationExpression>)Value;

        public override string ToString() => ToString(false);

        public string ToString(bool indented)
        {
            using var s = new MemoryStream();
            WriteTo(s, indented);
            return System.Text.Encoding.UTF8.GetString(s.ToArray());
        }

        public void WriteTo(Stream stream, bool indented)
        {
            using var writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = indented });
            WriteTo(writer);
        }

        public void WriteTo(Utf8JsonWriter writer)
        {
#if DEBUG0
            writer.WriteCommentValue($" {this.Location.Line}; {this.Location.Column} ");
#endif
            switch (this.Kind)
            {
                case AnnotationExpressionKind.Null:
                    writer.WriteNullValue();
                    break;
                case AnnotationExpressionKind.Integer:
                    writer.WriteNumberValue((long)Value);
                    break;
                case AnnotationExpressionKind.Float:
                    writer.WriteNumberValue((double)Value);
                    break;
                case AnnotationExpressionKind.String:
                    writer.WriteStringValue((string)Value);
                    break;
                case AnnotationExpressionKind.Boolean:
                    writer.WriteBooleanValue((bool)Value);
                    break;
                case AnnotationExpressionKind.Object:
                    writer.WriteStartObject();
                    foreach (var prop in Properties)
                    {
                        writer.WritePropertyName(prop.Name);
                        prop.Value.WriteTo(writer);
                    }
                    writer.WriteEndObject();
                    break;
                case AnnotationExpressionKind.Array:
                    writer.WriteStartArray();
                    foreach (var item in Items)
                    {
                        item.WriteTo(writer);
                    }
                    writer.WriteEndArray();
                    break;
                default:
                    writer.WriteNullValue();
                    throw new NotSupportedException($"Expression kind {this.Kind}");
            }
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


    public struct Location
    {
        /// <summary>
        /// The line number. Lines start with 1.
        /// </summary>
        public int Line { get; }

        /// <summary>
        /// The column number. Columns start with 1.
        /// </summary>
        public int Column { get; }

        public Location(int line, int column)
        {
            if (line < 1) throw new ArgumentOutOfRangeException(nameof(line), "Line numbering starts at 1.");
            if (column < 1) throw new ArgumentOutOfRangeException(nameof(column), "Column numbering starts at 1.");
            Line = line;
            Column = column;
        }

        public static implicit operator Location(Position position)
        {
            return new Location(
                 position.Line,
                 position.Column);
        }

        public static Position Empty { get; } = default;

        public bool HasValue => Line > 0;
    }
}
