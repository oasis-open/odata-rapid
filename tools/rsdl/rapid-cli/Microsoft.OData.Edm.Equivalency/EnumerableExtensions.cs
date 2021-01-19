using System;
using System.Collections.Generic;
using System.Linq;

namespace System.Linq
{
    internal static class EnumerableExtensions
    {
        public static IEnumerable<(TKey, TA, TB)> FullOuterJoin<TA, TB, TKey>(
          this IEnumerable<TA> a,
          IEnumerable<TB> b,
          Func<TA, TKey> selectKeyA,
          Func<TB, TKey> selectKeyB,
          TA defaultA = default(TA),
          TB defaultB = default(TB),
          IEqualityComparer<TKey> cmp = null)
        {
            cmp = cmp ?? EqualityComparer<TKey>.Default;
            var alookup = a.ToDictionary(selectKeyA, cmp);
            var blookup = b.ToDictionary(selectKeyB, cmp);

            var keys = alookup.Keys.Concat(blookup.Keys).Distinct();

            var join =
                from key in keys
                let xa = alookup.TryGetValue(key, out var va) ? va : defaultA
                let xb = blookup.TryGetValue(key, out var vb) ? vb : defaultB
                select (key, xa, xb);

            return join;
        }
    }
}