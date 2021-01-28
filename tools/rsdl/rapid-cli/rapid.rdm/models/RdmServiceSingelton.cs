using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmServiceSingleton : RdmServiceElement, IRdmServiceElement, IEquatable<RdmServiceSingleton>
    {
        public RdmServiceSingleton(string name, RdmTypeReference type, IEnumerable<Annotation> annotations = null, Position position = default)
           : base(name, type, annotations, position)
        {
        }

        #region equality 

        private new bool Equals(RdmServiceSingleton one, RdmServiceSingleton two)
        {
            return RdmServiceElement.Equals(one, two);
        }

        public bool Equals(RdmServiceSingleton other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceSingleton item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, Annotations);
        }

        #endregion
    }
}
