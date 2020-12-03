using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmEnumType : IRdmSchemaElement, IRdmType, IEquatable<RdmEnumType>
    {
        public RdmEnumType(string name, IReadOnlyList<string> members, bool isFlags)
        {
            Name = name;
            Members = members;
            IsFlags = isFlags;
        }

        public string Name { get; }

        public bool IsFlags { get; }

        public IReadOnlyList<string> Members { get; }

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
