using System.Linq;
using Superpower;
using Superpower.Parsers;

namespace json5
{
    static class ExpressionParser
    {

        private static (U Value, Superpower.Model.Position Position) Apply<T, U>(this TextParser<U> parser, Superpower.Model.Token<T> token) =>
            (parser(token.Span).Value, token.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Natural =
            from token in Token.EqualTo(ExpressionToken.Natural)
            let pair = Numerics.IntegerInt32.Apply(token)
            select json5.Expression.Integer(pair.Value, pair.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Double =
            from token in Token.EqualTo(ExpressionToken.Decimal)
            let pair = Numerics.DecimalDouble.Apply(token)
            select json5.Expression.Double(pair.Value, pair.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Number =
            (Natural).Or(Double);

        static readonly TokenListParser<ExpressionToken, Expression> String =
            from token in Token.EqualTo(ExpressionToken.String)
            let pair = ExpressionTokenizer.JsonString.Apply(token)
            select json5.Expression.String(pair.Value, pair.Position);

        static readonly TokenListParser<ExpressionToken, Expression> True =
            from token in Token.EqualToValue(ExpressionToken.Identifier, "true")
            select json5.Expression.Boolean(true, token.Position);

        static readonly TokenListParser<ExpressionToken, Expression> False =
            from token in Token.EqualToValue(ExpressionToken.Identifier, "false")
            select json5.Expression.Boolean(false, token.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Null =
            from token in Token.EqualToValue(ExpressionToken.Identifier, "null")
            select json5.Expression.Null(token.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Boolean =
            (True).Or(False);

        static readonly TokenListParser<ExpressionToken, Expression> Literal =
           (Null).Or(Number).Or(Boolean).Or(String);

        static readonly TokenListParser<ExpressionToken, string> PropertyName =
            (
                Token.EqualTo(ExpressionToken.Identifier).Select(t => t.ToStringValue())
            ).Or(
                Token.EqualTo(ExpressionToken.String).Apply(ExpressionTokenizer.JsonString)
            );

        static readonly TokenListParser<ExpressionToken, ExpressionProperty> Property =
            from name in PropertyName// Token.EqualTo(ExpressionToken.Identifier)
            from colon in Token.EqualTo(ExpressionToken.Colon)
            from value in Parse.Ref(() => Expression)
            select new json5.ExpressionProperty(name, value);

        static readonly TokenListParser<ExpressionToken, object> MaybeComma =
            Token.EqualTo(ExpressionToken.Comma).Optional().Select(v => (object)null);

        static readonly TokenListParser<ExpressionToken, Expression> Object =
            from lbrace in Token.EqualTo(ExpressionToken.OpeningBrace)
                // parse list of properties with optional separator (allowing trailing separator)
            from props in (from p in Property from c in MaybeComma select p).Many()
            from rbrace in Token.EqualTo(ExpressionToken.ClosingBrace)
            select json5.Expression.Object(props, lbrace.Position);

        static readonly TokenListParser<ExpressionToken, Expression> Array =
            from lbracket in Token.EqualTo(ExpressionToken.OpeningBracket)
                // parse list of expressions with optional separator (allowing trailing separator)
            from items in (from p in Parse.Ref(() => Expression) from c in MaybeComma select p).Many()
            from rparen in Token.EqualTo(ExpressionToken.ClosingBracket)
            select json5.Expression.Array(items, lbracket.Position);

        public static readonly TokenListParser<ExpressionToken, Expression> Expression =
            Literal.Or(Object).Or(Array);

    }
}
