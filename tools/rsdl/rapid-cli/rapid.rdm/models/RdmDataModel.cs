using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{

    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations:
    //  RdmStructuredType, RdmService, RdmEnum
    /// </summary>
    public interface IRdmSchemaElement
    {
        string Name { get; }
    }

    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations:
    //  RdmStructuredType, RdmEnum
    /// </summary>
    public interface IRdmType : IRdmSchemaElement
    {
    }

    public class RdmDataModel : IEquatable<RdmDataModel>
    {
        public RdmDataModel(
            RdmNamespaceDeclaration @namespace,
            IReadOnlyList<IRdmSchemaElement> items,
            IReadOnlyList<RdmNamespaceReference> references = null)
        {
            Namespace = @namespace ?? RdmNamespaceDeclaration.Default;
            Items = items ?? throw new ArgumentNullException(nameof(items));
            References = references ?? Array.Empty<RdmNamespaceReference>();
        }

        public RdmNamespaceDeclaration Namespace { get; }

        public IReadOnlyList<IRdmSchemaElement> Items { get; }

        public IReadOnlyList<RdmNamespaceReference> References { get; }


        #region equality

        public static bool Equals(RdmDataModel one, RdmDataModel two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                one.Namespace.Equals(two.Namespace) &&
                Enumerable.SequenceEqual(one.Items, two.Items) &&
                Enumerable.SequenceEqual(one.References, two.References);
        }

        public bool Equals(RdmDataModel other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmDataModel model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Items);
        }

        #endregion
    }
}
