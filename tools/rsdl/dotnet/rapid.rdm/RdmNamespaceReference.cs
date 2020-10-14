using System;

namespace rapid.rdm
{
    public class RdmNamespaceReference : IEquatable<RdmNamespaceReference>
    {
        public RdmNamespaceReference(string namespaceName, string alias, string url)
        {
            NamespaceName = namespaceName;
            Alias = alias;
            Path = url;
        }

        public string NamespaceName { get; }

        public string Alias { get; }

        public string Path { get; }

        //  IEquatable<RdmNamespaceReference>.Equals
        public bool Equals(RdmNamespaceReference other)
        {
            return
                string.Equals(this.NamespaceName, other.NamespaceName) &&
                string.Equals(this.Alias, other.Alias) &&
                string.Equals(this.Path, other.Path);
        }

        public override bool Equals(object other)
        {
            return other is RdmNamespaceReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(NamespaceName, Alias, Path);
        }
    }
}
