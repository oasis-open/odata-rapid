using System;
using System.Collections.Generic;

namespace rapid.rdm
{
    public class RdmEnumMember : IEquatable<RdmEnumMember>
    {
        public RdmEnumMember(string name, IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name;
            Annotations = annotations.ToReadOnlyList();
            Position = position;
        }
        public string Name { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; }

        public bool Equals(RdmEnumMember other)
        {
            return string.Equals(this.Name, other.Name);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnumType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name);
        }
    }
}
