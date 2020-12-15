using System;
using System.Collections.Generic;
using System.Linq;

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



        public static IEnumerable<TResult> FullOuterJoin<TA, TB, TKey, TResult>(
            this IEnumerable<TA> a,
            IEnumerable<TB> b,
            Func<TA, TKey> selectKeyA,
            Func<TB, TKey> selectKeyB,
            Func<TKey, TA, TB, TResult> projection,
            TA defaultA = default(TA),
            TB defaultB = default(TB),
            IEqualityComparer<TKey> cmp = null)
        {
            cmp = cmp ?? EqualityComparer<TKey>.Default;
            var aLookup = a.ToLookup(selectKeyA, cmp);
            var bLookup = b.ToLookup(selectKeyB, cmp);

            var keys = aLookup.Select(p => p.Key).Concat(bLookup.Select(p => p.Key)).Distinct();

            var join = from key in keys
                       from xa in aLookup[key].DefaultIfEmpty(defaultA)
                       from xb in bLookup[key].DefaultIfEmpty(defaultB)
                       select projection(key, xa, xb);
            return join;
        }
    }
}
