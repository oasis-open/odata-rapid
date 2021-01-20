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

        public RdmService(IEnumerable<IRdmServiceElement> items, Position position = default)
        {
            Name = "Service";
            Items = items;
        }

        public string Name { get; }

        public IEnumerable<IRdmServiceElement> Items { get; }

        #region equality 

        public static bool Equals(RdmService one, RdmService two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                Enumerable.SequenceEqual(one.Items, two.Items);
        }

        public bool Equals(RdmService other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmService model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Items);
        }

        #endregion
    }
}
