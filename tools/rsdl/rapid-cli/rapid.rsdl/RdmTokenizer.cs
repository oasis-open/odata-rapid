using Superpower;
using Superpower.Model;
using Superpower.Parsers;
using System.Collections.Generic;

namespace rapid.rsdl
{

    public class RdmTokenizer : Tokenizer<RdmToken>
    {

        public static readonly Tokenizer<RdmToken> Tokenizer;

        static RdmTokenizer()
        {
            Tokenizer = new RdmTokenizer();
        }

        protected override IEnumerable<Result<RdmToken>> Tokenize(TextSpan input)
        {
            var next = SkipWhiteSpace(input);
            if (!next.HasValue)
                yield break;

            do
            {
                if (next.Value == '#')
                {
                    var comment = Comment.ShellStyle(next.Location);
                    next = comment.Remainder.ConsumeChar();
                }
                else if (next.Value == '\"')
                {
                    var str = QuotedString.CStyle(next.Location);
                    if (!str.HasValue)
                        yield return Result.CastEmpty<string, RdmToken>(str);

                    next = str.Remainder.ConsumeChar();

                    yield return Result.Value(RdmToken.QuotedString, str.Location, str.Remainder);
                }
                else if (char.IsLetter(next.Value))
                {
                    var keywordStart = next.Location;
                    do
                    {
                        next = next.Remainder.ConsumeChar();
                    } while (next.HasValue && char.IsLetterOrDigit(next.Value));

                    yield return Result.Value(RdmToken.Identifier, keywordStart, next.Location);

                }
                else if (char.IsDigit(next.Value))
                {
                    var integer = Numerics.Integer(next.Location);
                    yield return Result.Value(RdmToken.Number, next.Location, integer.Remainder);
                    next = integer.Remainder.ConsumeChar();
                }
                else if (_operators.TryGetValue(next.Value, out var @operator))
                {
                    yield return Result.Value(@operator, next.Location, next.Remainder);
                    next = next.Remainder.ConsumeChar();
                }
                else
                {
                    yield return Result.Empty<RdmToken>(next.Location, $"unrecognized `{next.Value}`");
                    next = next.Remainder.ConsumeChar(); // Skip the character anyway
                }

                next = SkipWhiteSpace(next.Location);
            } while (next.HasValue);
        }

        // https://en.wikipedia.org/wiki/Slash_(punctuation)#External_links
        private readonly IDictionary<char, RdmToken> _operators = new Dictionary<char, RdmToken>
        {
            ['+'] = RdmToken.Plus,
            ['-'] = RdmToken.Minus,
            ['*'] = RdmToken.Asterisk,
            ['/'] = RdmToken.Slash,

            ['('] = RdmToken.OpeningParentheses,
            [')'] = RdmToken.ClosingParentheses,
            ['['] = RdmToken.OpeningBracket,
            [']'] = RdmToken.ClosingBracket,
            ['{'] = RdmToken.OpeningBrace,
            ['}'] = RdmToken.ClosingBrace,

            [':'] = RdmToken.Colon,
            ['&'] = RdmToken.Ampersand,
            ['@'] = RdmToken.AtSign,
            ['?'] = RdmToken.QuestionMark,
            [';'] = RdmToken.Semicolon,
            [','] = RdmToken.Comma,
            ['.'] = RdmToken.FullStop,
        };
    }
}
