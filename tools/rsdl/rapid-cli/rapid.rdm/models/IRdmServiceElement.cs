using System.Collections.Generic;

namespace rapid.rdm
{
    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations: RdmServiceCollection, RdmServiceSingelton
    /// </summary>
    public interface IRdmServiceElement
    {
        string Name { get; }
        IReadOnlyList<Annotation> Annotations { get; }
    }
}
