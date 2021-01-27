using System;

namespace rapid.rdm
{
    public class RdmNamespaceReference : IEquatable<RdmNamespaceReference>
    {
        public RdmNamespaceReference(string path, string alias, Position position = default)
        {
            Alias = alias;
            Path = path;
        }

        public string Alias { get; }

        public string Path { get; }

        public Position Position { get; set; }

        #region equality

        public static bool Equals(RdmNamespaceReference one, RdmNamespaceReference two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Alias, two.Alias) &&
                string.Equals(one.Path, two.Path);
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
            return HashCode.Combine(Alias, Path);
        }
        #endregion
    }
}
