using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmEnum : IRdmSchemaElement, IRdmType, IEquatable<RdmEnum>
    {
        public RdmEnum(string name, IReadOnlyList<string> members)
        {
            Name = name;
            Members = members;
        }

        public string Name { get; }

        public IReadOnlyList<string> Members { get; }

        public bool Equals(RdmEnum other)
        {
            return string.Equals(this.Name, other.Name) &&
                Enumerable.SequenceEqual(this.Members, other.Members);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnum model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Members);
        }
    }
}
