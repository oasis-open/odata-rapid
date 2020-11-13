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
        String, Boolean, Number, Object, Array,
        Null,
    }

    public class Expression
    {
        public Position Position { get; }

        public ExpressionKind Kind { get; }

        public object Value { get; }

        private Expression(ExpressionKind kind, object value, Superpower.Model.Position position)
        {
            Kind = kind;
            Value = value;
            Position = position;
        }

        public static Expression Null(Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Null, null, position);

        public static Expression Boolean(bool value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Boolean, value, position);

        public static Expression String(string value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.String, value, position);

        public static Expression Double(double value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Number, value, position);

        public static Expression Integer(double value, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Number, value, position);

        public static Expression Array(IEnumerable<Expression> items, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Array, items.ToList().AsReadOnly(), position);

        public static Expression Object(IEnumerable<ExpressionProperty> properties, Superpower.Model.Position position = default) =>
            new Expression(ExpressionKind.Object, properties.ToList().AsReadOnly(), position);

        public IReadOnlyList<ExpressionProperty> Properties => (IReadOnlyList<ExpressionProperty>)Value;

        public IReadOnlyList<Expression> Items => (IReadOnlyList<Expression>)Value;

        public override string ToString() => ToString(false);

        public string ToString(bool indented)
        {
            using var s = new MemoryStream();
            WriteTo(s, indented);
            return System.Text.Encoding.UTF8.GetString(s.ToArray());
        }

        public void WriteTo(Stream stream, bool indented)
        {
            // using var writer = new Utf8JsonWriter(stream); 
            using var writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = indented });
            WriteTo(writer);
        }

        public void WriteTo(Utf8JsonWriter writer)
        {
            // writer.WriteCommentValue($"{this.Position.Line};{this.Position.Column}");
            switch (this.Kind)
            {
                case ExpressionKind.Null:
                    writer.WriteNullValue();
                    break;
                case ExpressionKind.Number:
                    switch (Value)
                    {
                        case int i:
                            writer.WriteNumberValue(i);
                            break;
                        case double d:
                            writer.WriteNumberValue(d);
                            break;
                    }
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
