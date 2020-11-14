using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Superpower.Model;

namespace json5
{

    public enum ExpressionKind
    {
        Null, String, Boolean, Integer, Float, Object, Array,
    }

    public class Expression
    {
        public Position Position { get; }

        public ExpressionKind Kind { get; }

        public object Value { get; }

        private Expression(ExpressionKind kind, object value, Superpower.Model.Position position)
        {
            Check(kind, value);
            Kind = kind;
            Value = value;
            Position = position;
        }

        [System.Diagnostics.Conditional("DEBUG")]
        private static void Check(ExpressionKind kind, object value)
        {
            if (value == null && kind == ExpressionKind.Null)
                return;
            var type = value.GetType();
            if (typeof(IReadOnlyCollection<Expression>).IsAssignableFrom(type) && kind == ExpressionKind.Array)
                return;
            if (typeof(IReadOnlyCollection<ExpressionProperty>).IsAssignableFrom(type) && kind == ExpressionKind.Object)
                return;
            if (_kinds.TryGetValue(Type.GetTypeCode(type), out var expected) && expected == kind)
                return;
            System.Diagnostics.Debug.Fail($"wrong Expression kind { kind} {type}");
        }

        private static IDictionary<TypeCode, ExpressionKind> _kinds = new Dictionary<TypeCode, ExpressionKind>
        {
            [TypeCode.Int64] = ExpressionKind.Integer,
            [TypeCode.Double] = ExpressionKind.Float,
            [TypeCode.Boolean] = ExpressionKind.Boolean,
            [TypeCode.String] = ExpressionKind.String,
        };

        public static Expression Null(Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Null, null, position);

        public static Expression Boolean(bool value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Boolean, value, position);

        public static Expression String(string value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.String, value, position);

        public static Expression Float(double value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Float, value, position);

        public static Expression Integer(long value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Integer, value, position);

        public static Expression Array(IEnumerable<Expression> items, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Array, items.ToList().AsReadOnly(), position);

        public static Expression Object(IEnumerable<ExpressionProperty> properties, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Object, properties.ToList().AsReadOnly(), position);

        public IReadOnlyList<ExpressionProperty> Properties => (IReadOnlyList<ExpressionProperty>)Value;

        public IReadOnlyList<Expression> Items => (IReadOnlyList<Expression>)Value;

        public override string ToString()
        {
            using var s = new MemoryStream();
            WriteTo(s);
            return System.Text.Encoding.UTF8.GetString(s.ToArray());
        }

        public void WriteTo(Stream stream)
        {
            using var writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = true });
            WriteTo(writer);
        }

        public void WriteTo(Utf8JsonWriter writer)
        {
            writer.WriteCommentValue($"{this.Position.Line};{this.Position.Column}");
            switch (this.Kind)
            {
                case ExpressionKind.Null:
                    writer.WriteNullValue();
                    break;
                case ExpressionKind.Integer:
                    writer.WriteNumberValue((long)Value);
                    break;
                case ExpressionKind.Float:
                    writer.WriteNumberValue((double)Value);
                    break;
                case ExpressionKind.String:
                    writer.WriteStringValue((string)Value);
                    break;
                case ExpressionKind.Boolean:
                    writer.WriteBooleanValue((bool)Value);
                    break;
                case ExpressionKind.Object:
                    writer.WriteStartObject();
                    foreach (var prop in Properties)
                    {
                        writer.WritePropertyName(prop.Name);
                        prop.Value.WriteTo(writer);
                    }
                    writer.WriteEndObject();
                    break;
                case ExpressionKind.Array:
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
        public ExpressionProperty(string name, Expression value)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; }
        public Expression Value { get; }

        public override string ToString() => $"\"{Name}\": {Value}";
    }
}
