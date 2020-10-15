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
    }

    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations:
    //  RdmStructuredType, RdmEnum
    /// </summary>
    public interface IRdmType : IRdmSchemaElement
    {
        string Name { get; }
    }

    public class RdmDataModel : IEquatable<RdmDataModel>
    {
        public RdmDataModel(
            RdmNamespaceDeclaration @namespace,
            IReadOnlyCollection<IRdmSchemaElement> items,
            IReadOnlyCollection<RdmNamespaceReference> references = null)
        {
            Namespace = @namespace ?? RdmNamespaceDeclaration.Default;
            Items = items ?? throw new ArgumentNullException(nameof(items));
            References = references ?? Array.Empty<RdmNamespaceReference>();
        }

        public RdmNamespaceDeclaration Namespace { get; }

        public IReadOnlyCollection<IRdmSchemaElement> Items { get; }

        public IReadOnlyCollection<RdmNamespaceReference> References { get; }

        public bool Equals(RdmDataModel other)
        {
            return Enumerable.SequenceEqual(this.Items, other.Items);
        }

        public override bool Equals(object other)
        {
            return other is RdmDataModel model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Items);
        }
    }
}
