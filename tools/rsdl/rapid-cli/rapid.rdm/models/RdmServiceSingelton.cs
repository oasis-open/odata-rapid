using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmServiceSingelton : RdmServiceElement, IRdmServiceElement, IEquatable<RdmServiceSingelton>
    {
        public RdmServiceSingelton(string name, RdmTypeReference type, IEnumerable<Annotation> annotations = null, Position position = default)
           : base(name, type, annotations, position)
        {
        }

        public bool Equals(RdmServiceSingelton other)
        {
            return string.Equals(Name, other.Name) && this.Type.Equals(other.Type) && Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceSingelton item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, Annotations);
        }
    }
}
