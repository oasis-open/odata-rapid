using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public enum RdmOperationKind { Function, Action }

    public class RdmOperation : IEquatable<RdmOperation>, IRdmServiceElement
    {
        public RdmOperation(
            RdmOperationKind kind,
            string name,
            ICollection<RdmParameter> parameters,
            RdmParameter returnType,
            IEnumerable<Annotation> annotations = null,
            Position position = default)
        {
            Kind = kind;
            Name = name;
            Parameters = parameters;
            ReturnType = returnType;
            Annotations = annotations.ToReadOnlyList();
            Position = position;
        }

        public string Name { get; }
        public RdmParameter ReturnType { get; }
        public ICollection<RdmParameter> Parameters { get; }
        public RdmOperationKind Kind { get; }
        public IReadOnlyList<Annotation> Annotations { get; }
        public Position Position { get; set; }

        #region equality

        public static bool Equals(RdmOperation one, RdmOperation two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                one.Kind.Equals(two.Kind) &&
                one.ReturnType.Equals(two.ReturnType) &&
                Enumerable.SequenceEqual(one.Parameters, two.Parameters) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmOperation other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmOperation p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, ReturnType, Kind, Parameters, Annotations);
        }

        #endregion
    }
}
