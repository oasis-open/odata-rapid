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
        IReadOnlyList<Annotation> Annotations { get; }
    }

    public class RdmService : IRdmSchemaElement, IEquatable<RdmService>
    {
        public RdmService(string name, IEnumerable<IRdmServiceElement> items, IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name ?? "Service";
            Items = items;
            Annotations = annotations?.ToList().AsReadOnly() ?? (IReadOnlyList<Annotation>)Array.Empty<Annotation>();
        }

        public string Name { get; }

        public IEnumerable<IRdmServiceElement> Items { get; }
        public IReadOnlyList<Annotation> Annotations { get; }

        #region equality 

        public static bool Equals(RdmService one, RdmService two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                Enumerable.SequenceEqual(one.Items, two.Items) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
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
            return HashCode.Combine(Name, Items, Annotations);
        }

        #endregion
    }
}
