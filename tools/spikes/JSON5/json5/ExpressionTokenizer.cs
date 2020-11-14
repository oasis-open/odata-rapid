using Superpower;
using Superpower.Display;
using Superpower.Parsers;
using Superpower.Tokenizers;

namespace json5
{

    public enum ExpressionToken
    {
        [Token(Example = "{")] OpeningBrace,
        [Token(Example = "}")] ClosingBrace,
        [Token(Example = "[")] OpeningBracket,
        [Token(Example = "")] ClosingBracket,
        [Token(Example = "")] Comma,
        [Token(Example = ":")] Colon,
        [Token(Description = "number")] Number,
        [Token(Description = "identifier")] Identifier,
        [Token(Description = "string")] String,
        [Token(Description = "number")] Decimal
    }

    public class ExpressionTokenizer
    {
        public static readonly Tokenizer<ExpressionToken> Tokenizer;

        static ExpressionTokenizer()
        {
            Tokenizer = new TokenizerBuilder<ExpressionToken>()
                .Ignore(Span.WhiteSpace)
                .Match(Character.EqualTo('{'), ExpressionToken.OpeningBrace)
                .Match(Character.EqualTo('}'), ExpressionToken.ClosingBrace)
                .Match(Character.EqualTo('['), ExpressionToken.OpeningBracket)
                .Match(Character.EqualTo(']'), ExpressionToken.ClosingBracket)
                .Match(Character.EqualTo(','), ExpressionToken.Comma)
                .Match(Character.EqualTo(':'), ExpressionToken.Colon)
                .Match(Numerics.Decimal, ExpressionToken.Number)
                .Match(Identifier.CStyle, ExpressionToken.Identifier)
                .Match(JsonString, ExpressionToken.String)
                .Build();
        }

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
    }
}
