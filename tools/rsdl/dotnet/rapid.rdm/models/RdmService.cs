using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations: RdmServiceCollection, RdmServiceSingelton
    /// </summary>
    public interface IRdmServiceElement
    {
        string Name { get; }
    }

    public class RdmService : IRdmSchemaElement, IEquatable<RdmService>
    {
        //     public RdmService()
        //     {
        //         Name = "Service";
        //     }

        public RdmService(IEnumerable<IRdmServiceElement> items)
        {
            Name = "Service";
            Items = items;
        }

        public string Name { get; }

        public IEnumerable<IRdmServiceElement> Items { get; }

        public bool Equals(RdmService other)
        {
            return Enumerable.SequenceEqual(this.Items, other.Items);
        }

        public override bool Equals(object other)
        {
            return other is RdmService model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Items);
        }
    }
}
