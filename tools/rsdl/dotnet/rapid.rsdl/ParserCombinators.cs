using Superpower;
using Superpower.Model;
using Superpower.Parsers;

namespace rapid.rsdl
{
    internal static class ParserCombinators
    {
        public static TokenListParser<TKind, U> OneOf<TKind, U, T1, T2>(
          TokenListParser<TKind, T1> p1,
          TokenListParser<TKind, T2> p2)
          where T1 : U
          where T2 : U
        {
            return (
                p1.Cast<TKind, T1, U>()
            ).Or(
                p2.Cast<TKind, T2, U>()
            );
        }

        public static TokenListParser<TKind, U> OneOf<TKind, U, T1, T2, T3>(
            TokenListParser<TKind, T1> p1,
            TokenListParser<TKind, T2> p2,
            TokenListParser<TKind, T3> p3)
            where T1 : U
            where T2 : U
            where T3 : U
        {
            return (
                p1.Cast<TKind, T1, U>()
            ).Or(
                p2.Cast<TKind, T2, U>()
            ).Or(
                p3.Cast<TKind, T3, U>()
            );
        }

        public static TokenListParser<TKind, T> Between<TKind, T>(this TokenListParser<TKind, T> parser, TKind left, TKind right)
            => parser.Between(Token.EqualTo(left), Token.EqualTo(right));

        public static rdm.Position GetPosition<TKind>(this Token<TKind> token) =>
            new rdm.Position(token.Position.Line, token.Position.Column);
    }
}
