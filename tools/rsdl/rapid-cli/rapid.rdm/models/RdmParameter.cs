using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmParameter : IEquatable<RdmParameter>
    {
        public RdmParameter(string name, RdmTypeReference type, bool IsOptional = false,
        IEnumerable<Annotation> annotations = null
        , Position position = default)
        {
            Name = name;
            Type = type;
            Annotations = annotations ?? Enumerable.Empty<Annotation>();
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public bool IsOptional { get; }

        public IEnumerable<Annotation> Annotations { get; }

        public Position Position { get; set; }

        #region equality 

        public static bool Equals(RdmParameter one, RdmParameter two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                one.Type.Equals(two.Type) &&
                one.IsOptional == two.IsOptional &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmParameter other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmParameter p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, IsOptional, Annotations);
        }

        #endregion
    }
}
