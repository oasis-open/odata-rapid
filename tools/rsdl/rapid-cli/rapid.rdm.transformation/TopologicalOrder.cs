using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class TopologicalOrder
    {
        public static IEnumerable<IRdmSchemaElement> Sort(IEnumerable<IRdmSchemaElement> items)
        {
            var structured = Sort(items.OfType<RdmStructuredType>());
            var others = items.Where(e => !(e is RdmStructuredType));
            return others.Concat(structured);
        }

        // https://en.wikipedia.org/wiki/Topological_sorting
        private static IEnumerable<RdmStructuredType> Sort(IEnumerable<RdmStructuredType> items)
        {
            // type n is element of graph[m] iff n is a subtype of m
            var graph = items.Where(n => n.BaseType != null).GroupBy(n => n.BaseType).ToDictionary(g => g.Key, g => g.ToList());
            // roots are the types without a supertype
            var roots = new Stack<RdmStructuredType>(items.Where(n => n.BaseType == null));
            var result = new List<RdmStructuredType>();
            while (roots.Count > 0)
            {
                var current = roots.Pop();
                result.Add(current);
                var successors = graph.TryGetValue(current.Name, out var s) ? s.ToList() : Enumerable.Empty<RdmStructuredType>();
                foreach (var next in successors)
                {
                    graph[current.Name].Remove(next);
                    if (graph.Values.All(l => !l.Contains(next)))
                    {
                        roots.Push(next);
                    }
                }
            }
            if (graph.Values.Any(l => l.Count != 0))
            {
                throw new Exception("not a directed acyclic graph");
            }
            else
            {
                return result;
            }
        }
    }
}
