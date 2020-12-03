namespace rapid.rdm
{
    internal static class StringExtensions
    {
        public static string ToPascalCase(this string str) =>
            string.Create(str.Length, str, (span, input) =>
            {
                for (int i = 0; i < span.Length; i++)
                {
                    span[i] = i == 0 ? char.ToUpper(input[i]) : input[i];
                }
            });
    }
}
