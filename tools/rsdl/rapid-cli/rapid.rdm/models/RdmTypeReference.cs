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
        }

        public bool IsNullable { get; }

        public bool IsMultivalued { get; }

        public string Name { get; }

        public Position Position { get; set; }

        public string Prefix => Name.BeforeLast(".");
        public string Suffix => Name.AfterLast(".");

        #region equality 

        public static bool Equals(RdmTypeReference one, RdmTypeReference two)
        {
            return
                string.Equals(one.Name, two.Name) &&
                one.IsNullable == two.IsNullable &&
                one.IsMultivalued == two.IsMultivalued;
        }
        public bool Equals(RdmTypeReference other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmTypeReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, IsNullable, IsMultivalued);
        }
        #endregion
    }
}
