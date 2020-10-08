using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{

    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations: RdmStructuredType, RdmService
    /// </summary>
    public interface IRdmSchemaElement
    {
    }

    public class RdmDataModel : IEquatable<RdmDataModel>
    {
        public RdmDataModel(IReadOnlyCollection<IRdmSchemaElement> items) :
            this(null, items)
        {
        }

        public RdmDataModel(
            RdmNamespaceDeclaration @namespace,
            IReadOnlyCollection<IRdmSchemaElement> items,
            IReadOnlyCollection<RdmNamespaceReference> references = null)
        {
            Items = items;
            Namespace = @namespace;
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
