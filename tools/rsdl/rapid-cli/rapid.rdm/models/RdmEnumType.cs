using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmEnumType : IRdmSchemaElement, IRdmType, IEquatable<RdmEnumType>
    {
        public RdmEnumType(string name, IReadOnlyList<RdmEnumMember> members, bool isFlags, IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name;
            Members = members;
            IsFlags = isFlags;
            Annotations = annotations.ToReadOnlyList();
        }

        public string Name { get; }

        public bool IsFlags { get; }

        public IReadOnlyList<RdmEnumMember> Members { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; set; }

        #region equality

        public static bool Equals(RdmEnumType one, RdmEnumType two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return string.Equals(one.Name, two.Name) &&
                one.IsFlags == two.IsFlags &&
                Enumerable.SequenceEqual(one.Members, two.Members) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmEnumType other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnumType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Members, IsFlags, Annotations);
        }

        #endregion
    }
}
