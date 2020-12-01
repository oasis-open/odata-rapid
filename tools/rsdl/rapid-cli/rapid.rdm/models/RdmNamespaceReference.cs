using System;

namespace rapid.rdm
{
    public class RdmNamespaceReference : IEquatable<RdmNamespaceReference>
    {
        public RdmNamespaceReference(string path, string alias, Position position = default)
        {
            Alias = alias;
            Path = path;
            Position = position;
        }

        public string Alias { get; }

        public string Path { get; }

        public Position Position { get; }

        public bool Equals(RdmNamespaceReference other)
        {
            return
                string.Equals(this.Alias, other.Alias) &&
                string.Equals(this.Path, other.Path);
        }

        public override bool Equals(object other)
        {
            return other is RdmNamespaceReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Alias, Path);
        }
    }
}
