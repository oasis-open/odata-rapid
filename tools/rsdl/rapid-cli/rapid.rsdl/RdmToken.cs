using Superpower.Display;
using Superpower.Parsers;

namespace rapid.rsdl
{
    public enum RdmToken
    {
        None,
        [Token(Category = "number")] Number,
        [Token(Category = "identifier")] Identifier,

        [Token(Category = "string")] QuotedString,

        [Token(Category = "parentheses", Example = "(")] OpeningParentheses,
        [Token(Category = "parentheses", Example = ")")] ClosingParentheses,
        [Token(Category = "parentheses", Example = "[")] OpeningBracket,
        [Token(Category = "parentheses", Example = "]")] ClosingBracket,
        [Token(Category = "parentheses", Example = "{")] OpeningBrace,
        [Token(Category = "parentheses", Example = "}")] ClosingBrace,

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
}
