using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmParameter : IEquatable<RdmParameter>
    {
        public RdmParameter(string name, RdmTypeReference type, bool IsOptional = false, IEnumerable<IAnnotation> annotations = null, Position position = default)
        {
            Name = name;
            Type = type;
            Annotations = annotations ?? Enumerable.Empty<IAnnotation>();
            Position = position;
        }

        public string Name { get; }
        public RdmTypeReference Type { get; }

        public bool IsOptional { get; }

        public IEnumerable<IAnnotation> Annotations { get; }

        public Position Position { get; }

        public bool Equals(RdmParameter other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.Type.Equals(other.Type) &&
                this.IsOptional == other.IsOptional &&
                Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmParameter p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, IsOptional, Annotations);
        }
    }
}
