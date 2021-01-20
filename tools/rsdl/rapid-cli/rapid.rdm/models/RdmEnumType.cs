using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmEnumType : IRdmSchemaElement, IRdmType, IEquatable<RdmEnumType>
    {
        public RdmEnumType(string name, IReadOnlyList<RdmEnumMember> members, bool isFlags,
            IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name;
            Members = members;
            IsFlags = isFlags;
            Annotations = annotations.ToReadOnlyList();
            Position = position;
        }

        public string Name { get; }

        public bool IsFlags { get; }

        public IReadOnlyList<RdmEnumMember> Members { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; }

        public bool Equals(RdmEnumType other)
        {
            return string.Equals(this.Name, other.Name) &&
                this.IsFlags == other.IsFlags &&
                Enumerable.SequenceEqual(this.Members, other.Members);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnumType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Members, IsFlags);
        }
    }
}
