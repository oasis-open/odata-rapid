using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public abstract class RdmServiceElement : IRdmServiceElement
    {
        public RdmServiceElement(string name, RdmTypeReference type, IEnumerable<Annotation> annotations, Position position)
        {
            Name = name;
            Type = type;
            Annotations = annotations.ToReadOnlyList();
            Position = position;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; set; }

        protected static bool Equals(RdmServiceSingleton one, RdmServiceSingleton two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                one.Type.Equals(two.Type) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }
    }
}
