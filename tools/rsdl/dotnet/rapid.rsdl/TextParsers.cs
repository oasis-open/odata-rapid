using Superpower;
using Superpower.Parsers;

namespace rapid.rsdl
{
    internal static class TextParsers
    {

        public static TextParser<char> QuotedStringContentChar =
                 Span.EqualTo("\"\"").Value('"').Try().Or(Character.ExceptIn('\"', '\r', '\n'));

        public static TextParser<string> ExtractQuotedString =
            Character.EqualTo('"')
                .IgnoreThen(QuotedStringContentChar.Many())
                .Then(s => Character.EqualTo('"').Value(new string(s)));

    }
}
