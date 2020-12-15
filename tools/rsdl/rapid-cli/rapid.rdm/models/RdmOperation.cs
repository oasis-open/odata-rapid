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
            RdmOperationKind? kind,
            IEnumerable<Annotation> annotations = null, 
            Position position = default)
        {
            Name = name;
            ReturnType = returnType;
            Parameters = parameters;
            Kind = kind ?? (returnType == null ? RdmOperationKind.Action : RdmOperationKind.Function);
            Annotations = annotations ?? Enumerable.Empty<Annotation>();
            Position = position;
        }

        public string Name { get; set; }
        public RdmTypeReference ReturnType { get; set; }
        public ICollection<RdmParameter> Parameters { get; set; }
        public RdmOperationKind Kind { get; }
        public IEnumerable<Annotation> Annotations { get; set; }
        public Position Position { get; set; }

        public bool Equals(RdmOperation other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.ReturnType.Equals(other.ReturnType) &&
                this.Parameters.Equals(other.Parameters) &&
                this.Kind.Equals(other.Kind) &&
                Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmOperation p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, ReturnType, Parameters, Annotations);
        }
    }
}
