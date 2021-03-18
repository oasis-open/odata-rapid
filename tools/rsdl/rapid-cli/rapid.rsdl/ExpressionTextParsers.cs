using System.Linq;
using rapid.rdm;
using Superpower;
using Superpower.Model;
using Superpower.Parsers;

namespace rapid.rsdl
{
    public class ExpressionTextParsers
    {
        public static readonly Tokenizer<RdmToken> Tokenizer;

        public static TextParser<char> StringBody { get; } =
            Character.EqualTo('\\')
                .IgnoreThen(
                    Character.EqualTo('\\')
                    .Or(Character.EqualTo('"'))
                    .Or(Character.EqualTo('/'))
                    .Or(Character.EqualTo('b').Value('\b'))
                    .Or(Character.EqualTo('f').Value('\f'))
                    .Or(Character.EqualTo('n').Value('\n'))
                    .Or(Character.EqualTo('r').Value('\r'))
                    .Or(Character.EqualTo('t').Value('\t'))
                    .Or(Character.EqualTo('u').IgnoreThen(
                            Span.MatchedBy(Character.HexDigit.Repeat(4))
                                .Apply(Numerics.HexDigitsUInt32)
                                .Select(cc => (char)cc)))
                    .Named("escape sequence"));

        private static TextParser<string> JsonString1 { get; } =
            from open in Character.EqualTo('"')
            from chars in Character.ExceptIn('"', '\\').Or(StringBody).Many()
            from close in Character.EqualTo('"')
            select new string(chars);

        private static TextParser<string> JsonString2 { get; } =
            from open in Character.EqualTo('\'')
            from chars in Character.ExceptIn('\'', '\\').Or(StringBody).Many()
            from close in Character.EqualTo('\'')
            select new string(chars);

        public static TextParser<string> JsonString =
            JsonString1.Or(JsonString2);


        /// <summary>
        /// Matches decimal with exponent numbers, for example <code>-1.23e-10</code>.
        /// </summary>
        public static TextParser<TextSpan> Scientific { get; } =
            Numerics.Decimal
                .Then(n => Character.EqualTo('e').IgnoreThen(Numerics.Integer).OptionalOrDefault()
                    .Select(f => f == TextSpan.None ? n : new TextSpan(n.Source, n.Position, n.Length + f.Length + 1)));


        public static TextParser<AnnotationExpression> NumberToExpression = (TextSpan input) =>
        {
            var r1 = Numerics.IntegerInt64(input);
            if (r1.HasValue && r1.Remainder.IsAtEnd)
            {
                return Result.Value(AnnotationExpression.Integer(r1.Value, input.Position.ToPosition()), r1.Location, r1.Remainder);
            }
            var r2 = Numerics.DecimalDouble(input);
            if (r2.HasValue && r2.Remainder.IsAtEnd)
            {
                return Result.Value(AnnotationExpression.Float(r2.Value, input.Position.ToPosition()), r2.Location, r2.Remainder);
            }
            var r3 = ScientificDouble(input);
            if (r3.HasValue && r3.Remainder.IsAtEnd)
            {
                return Result.Value(AnnotationExpression.Float(r3.Value, input.Position.ToPosition()), r3.Location, r3.Remainder);
            }

            return Result.Empty<AnnotationExpression>(input);
        };

        public static TextParser<double> ScientificDouble { get; } =
           Scientific.Select(span => double.Parse(span.ToStringValue(), System.Globalization.CultureInfo.InvariantCulture));
    }
}
