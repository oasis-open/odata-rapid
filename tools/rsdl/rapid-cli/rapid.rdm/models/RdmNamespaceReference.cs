using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmNamespaceReference : IEquatable<RdmNamespaceReference>
    {
        public RdmNamespaceReference(string path, string alias, IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Alias = alias;
            Path = path;
            Position = position;
            Annotations = annotations.ToReadOnlyList();
        }

        public string Alias { get; }

        public string Path { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; set; }

        #region equality

        public static bool Equals(RdmNamespaceReference one, RdmNamespaceReference two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Alias, two.Alias) &&
                string.Equals(one.Path, two.Path) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmNamespaceReference other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmNamespaceReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Alias, Path, Annotations);
        }
        #endregion
    }
}
