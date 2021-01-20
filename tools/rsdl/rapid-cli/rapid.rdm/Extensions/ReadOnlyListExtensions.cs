using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    static class ReadOnlyListExtensions
    {
        public static IReadOnlyList<T> ToReadOnlyList<T>(this IEnumerable<T> items) =>
            items?.ToList().AsReadOnly() ?? (IReadOnlyList<T>)Array.Empty<T>();
    }
}
