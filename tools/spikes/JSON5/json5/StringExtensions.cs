namespace json5
{
    internal static class StringExtensions
    {
        public static string Repeat(this string str, int n)
        {
            return string.Create(n * str.Length, str, (span, str) =>
            {
                var j = 0;
                for (var i = 0; i < span.Length; i++)
                {
                    span[i] = str[j];
                    j = (j + 1) % str.Length;
                }
            });
        }
    }
}
