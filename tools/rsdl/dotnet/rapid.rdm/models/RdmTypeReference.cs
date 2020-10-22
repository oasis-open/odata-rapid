using System;

namespace rapid.rdm
{
    public class RdmTypeReference : IEquatable<RdmTypeReference>
    {
        public RdmTypeReference(string name, bool isNullable = false, bool isMultivalued = false, Position position = default)
        {
            Name = name;
            IsNullable = isNullable;
            IsMultivalued = isMultivalued;
            Position = position;
        }

        public bool IsNullable { get; }

        public bool IsMultivalued { get; }

        public string Name { get; }

        public Position Position { get; }

        public string Prefix => Name.BeforeLast(".");
        public string Suffix => Name.AfterLast(".");

        // IEquatable<RdmTypeReference>.Equals
        public bool Equals(RdmTypeReference other)
        {
            return string.Equals(this.Name, other.Name) &&
                this.IsNullable == other.IsNullable &&
                this.IsMultivalued == other.IsMultivalued;
        }

        public override bool Equals(object other)
        {
            return other is RdmTypeReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, IsNullable, IsMultivalued);
        }
    }
}
