using System;
using System.Collections.Generic;
using System.Linq;

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

        public Position Position { get; set; }

        #region equality
        public static bool Equals(RdmEnumMember one, RdmEnumMember two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmEnumMember other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnumType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Annotations);
        }
        #endregion
    }
}
