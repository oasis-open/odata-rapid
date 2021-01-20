using System;
using System.Collections.Generic;

namespace rapid.rdm
{
    public class RdmServiceSingelton : RdmServiceElement, IRdmServiceElement, IEquatable<RdmServiceSingelton>
    {
        public RdmServiceSingelton(string name, RdmTypeReference type, IEnumerable<Annotation> annotations = null, Position position = default)
           : base(name, type, annotations)
        {
        }

        #region equality 

        private new bool Equals(RdmServiceSingelton one, RdmServiceSingelton two)
        {
            return RdmServiceElement.Equals(one, two);
        }

        public bool Equals(RdmServiceSingelton other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceSingelton item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, Annotations);
        }

        #endregion
    }
}
