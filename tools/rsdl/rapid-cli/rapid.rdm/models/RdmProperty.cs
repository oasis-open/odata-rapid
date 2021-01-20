using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmProperty : IEquatable<RdmProperty>
    {
        public RdmProperty(string name, RdmTypeReference type, bool isKey, IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name;
            Type = type;
            IsKey = isKey;
            Annotations = annotations?.ToList().AsReadOnly() ?? (IReadOnlyList<Annotation>)Array.Empty<Annotation>();
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public bool IsKey { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; set; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;

        #region equality 

        public static bool Equals(RdmProperty one, RdmProperty two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                one.Type.Equals(two.Type) &&
                one.IsKey.Equals(two.IsKey) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmProperty other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmProperty p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, IsKey, Annotations);
        }

        #endregion
    }
}
