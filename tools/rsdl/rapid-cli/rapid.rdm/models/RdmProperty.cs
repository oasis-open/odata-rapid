using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmProperty : IEquatable<RdmProperty>
    {
        public RdmProperty(string name, RdmTypeReference type, IEnumerable<IAnnotation> annotations = null, Position position = default)
        {
            Name = name;
            Type = type;
            Annotations = annotations ?? Enumerable.Empty<IAnnotation>();
            Position = position;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public IEnumerable<IAnnotation> Annotations { get; }

        public Position Position { get; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;

        public bool Equals(RdmProperty other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.Type.Equals(other.Type) &&
                Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmProperty p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, Annotations);
        }
    }
}
