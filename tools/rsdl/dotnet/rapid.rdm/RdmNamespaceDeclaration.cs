using System;

namespace rapid.rdm
{
    public class RdmNamespaceDeclaration : IEquatable<RdmNamespaceDeclaration>
    {
        public RdmNamespaceDeclaration(string namespaceName)
        {
            NamespaceName = namespaceName;
        }

        public string NamespaceName { get; }

        public static bool Equals(RdmNamespaceDeclaration one, RdmNamespaceDeclaration two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return one.Equals(two);
        }

        public bool Equals(RdmNamespaceDeclaration other)
        {
            return string.Equals(this.NamespaceName, other?.NamespaceName);
        }

        public override bool Equals(object other)
        {
            return other is RdmNamespaceDeclaration model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(NamespaceName);
        }
    }
}
