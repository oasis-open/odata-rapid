using System;

namespace rapid.rdm
{
    public class RdmServiceCollection : IRdmServiceElement, IEquatable<RdmServiceCollection>
    {
        public RdmServiceCollection(string name, RdmTypeReference type)
        {
            Name = name;
            Type = type;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public bool Equals(RdmServiceCollection other)
        {
            return string.Equals(Name, other.Name) && this.Type.Equals(other.Type);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceCollection item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type);
        }
    }
}
