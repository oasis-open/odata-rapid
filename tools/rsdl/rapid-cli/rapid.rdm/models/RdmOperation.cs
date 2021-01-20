using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public enum RdmOperationKind { Function, Action }

    public class RdmOperation : IEquatable<RdmOperation>
    {
        public RdmOperation(string name,
            RdmTypeReference returnType,
            ICollection<RdmParameter> parameters,
            RdmOperationKind kind,
            IEnumerable<Annotation> annotations = null, Position position = default)
        {
            Name = name;
            ReturnType = returnType;
            Parameters = parameters;
            Kind = kind;
            Annotations = annotations ?? Enumerable.Empty<Annotation>();
        }

        public string Name { get; set; }
        public RdmTypeReference ReturnType { get; set; }
        public ICollection<RdmParameter> Parameters { get; set; }
        public RdmOperationKind Kind { get; }
        public IEnumerable<Annotation> Annotations { get; set; }
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
