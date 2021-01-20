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

        public Position Position { get; }

    }
}
