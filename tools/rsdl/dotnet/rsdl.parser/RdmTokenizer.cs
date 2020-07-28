using Superpower;
using Superpower.Display;
using Superpower.Model;
using Superpower.Parsers;
using System.Collections.Generic;

namespace rsdl.parser
{

    public enum RdmToken
    {
        None,
        [Token(Category = "number")] Number,
        [Token(Category = "identifier")] Identifier,

        [Token(Category = "parentheses", Example = "(")] LeftParentheses,
        [Token(Category = "parentheses", Example = ")")] RightParentheses,
        [Token(Category = "parentheses", Example = "[")] LeftBracket,
        [Token(Category = "parentheses", Example = "]")] RightBracket,
        [Token(Category = "parentheses", Example = "{")] LeftBrace,
        [Token(Category = "parentheses", Example = "}")] RightBrace,

        [Token(Category = "operator", Example = "+")] Plus,
        [Token(Category = "operator", Example = "-")] Minus,
        [Token(Category = "operator", Example = "*")] Asterisk,
        [Token(Category = "operator", Example = "/")] Slash,
        [Token(Category = "operator", Example = "&")] Ampersand,
        [Token(Category = "operator", Example = "?")] QuestionMark,
        [Token(Category = "delimiter", Example = ":")] Colon,
        [Token(Category = "delimiter", Example = "@")] AtSign,
        [Token(Category = "delimiter", Example = ";")] Semicolon,
        [Token(Category = "delimiter", Example = ".")] FullStop,
        [Token(Category = "delimiter", Example = ",")] Comma,
    }

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
                if (next.Value == '/')
                {
                    var integer = Comment.CPlusPlusStyle(next.Location);
                    // yield return Result.Value(SchemaDefinitionToken.Comment, next.Location, integer.Remainder);
                    next = integer.Remainder.ConsumeChar();
                }
                else if (char.IsLetter(next.Value))
                {
                    var keywordStart = next.Location;
                    do
                    {
                        next = next.Remainder.ConsumeChar();
                    } while (next.HasValue && char.IsLetterOrDigit(next.Value));

                    yield return Result.Value(RdmToken.Identifier, keywordStart, next.Location);
                    //var identifier = Identifier.CStyle(next.Location);
                    //yield return Result.Value(SchemaDefinitionToken.Identifier, next.Location, identifier.Location);
                    //next = identifier.Remainder.ConsumeChar();
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

            ['('] = RdmToken.LeftParentheses,
            [')'] = RdmToken.RightParentheses,
            ['['] = RdmToken.LeftBracket,
            [']'] = RdmToken.RightBracket,
            ['{'] = RdmToken.LeftBrace,
            ['}'] = RdmToken.RightBrace,

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
