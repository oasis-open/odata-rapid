using System.Linq;
using rapid.rdm;
using Superpower;
using Superpower.Model;
using Superpower.Parsers;

namespace rapid.rsdl
{
    public static class ExpressionParsers
    {
        private static readonly TokenListParser<RdmToken, AnnotationExpression> Number =
            Token.EqualTo(RdmToken.Number).Apply(ExpressionTextParsers.NumberToExpression);

        private static (U Value, rapid.rdm.Position Position) Apply<T, U>(this TextParser<U> parser, Superpower.Model.Token<T> token) =>
            (parser(token.Span).Value, token.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> String =
            // TODO check if this supports single quotes
            from token in Token.EqualTo(RdmToken.QuotedString)
            let pair = ExpressionTextParsers.JsonString.Apply(token)
            select AnnotationExpression.String(pair.Value, pair.Position);

        public static readonly TokenListParser<RdmToken, AnnotationExpression> Path =
            from token in Token.EqualTo(RdmToken.FullStop)
            from segments in (
                from s in Token.EqualTo(RdmToken.Slash)
                from i in Token.EqualTo(RdmToken.Identifier)
                select i.ToStringValue()
            ).Many()
            select AnnotationExpression.Path(segments, token.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> True =
            from token in Token.EqualToValue(RdmToken.Identifier, "true")
            select AnnotationExpression.Boolean(true, token.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> False =
            from token in Token.EqualToValue(RdmToken.Identifier, "false")
            select AnnotationExpression.Boolean(false, token.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> Null =
            from token in Token.EqualToValue(RdmToken.Identifier, "null")
            select AnnotationExpression.Null(token.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> Boolean =
            (True).Or(False);

        private static readonly TokenListParser<RdmToken, AnnotationExpression> Literal =
           (Null).Or(Number).Or(Boolean).Or(String).Or(Path);

        private static readonly TokenListParser<RdmToken, string> PropertyName =
            (
                Token.EqualTo(RdmToken.Identifier).Select(t => t.ToStringValue())
            ).Or(
                Token.EqualTo(RdmToken.QuotedString).Apply(ExpressionTextParsers.JsonString)
            );

        private static readonly TokenListParser<RdmToken, ExpressionProperty> Property =
            from name in PropertyName
            from colon in Token.EqualTo(RdmToken.Colon)
            from value in Parse.Ref(() => Expression)
            select new ExpressionProperty(name, value);

        private static readonly TokenListParser<RdmToken, object> MaybeComma =
            Token.EqualTo(RdmToken.Comma).Optional().Select(v => (object)null);

        private static readonly TokenListParser<RdmToken, AnnotationExpression> Object =
            from lbrace in Token.EqualTo(RdmToken.OpeningBrace)
                // parse list of properties with optional separator (allowing trailing separator)
            from props in (from p in Property from c in MaybeComma select p).Many()
            from rbrace in Token.EqualTo(RdmToken.ClosingBrace)
            select AnnotationExpression.Object(props, lbrace.GetPosition());

        private static readonly TokenListParser<RdmToken, AnnotationExpression> Array =
            from lbracket in Token.EqualTo(RdmToken.OpeningBracket)
                // parse list of expressions with optional separator (allowing trailing separator)
            from items in (from p in Parse.Ref(() => Expression) from c in MaybeComma select p).Many()
            from rparen in Token.EqualTo(RdmToken.ClosingBracket)
            select AnnotationExpression.Array(items, lbracket.GetPosition());

        public static readonly TokenListParser<RdmToken, AnnotationExpression> Expression =
            Literal.Or(Object).Or(Array);
    }
}
