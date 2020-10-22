using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmOperation : IEquatable<RdmOperation>
    {
        public RdmOperation(string name, RdmTypeReference returnType, ICollection<RdmParameter> parameters, IEnumerable<IAnnotation> annotations = null, Position position = default)
        {
            Name = name;
            ReturnType = returnType;
            Parameters = parameters;
            Annotations = annotations ?? Enumerable.Empty<IAnnotation>();
            Position = position;
        }

        public RdmOperation()
        {
        }

        public string Name { get; set; }
        public RdmTypeReference ReturnType { get; set; }
        public ICollection<RdmParameter> Parameters { get; set; }
        public IEnumerable<IAnnotation> Annotations { get; set; }
        public Position Position { get; set; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;

        public bool Equals(RdmOperation other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.ReturnType.Equals(other.ReturnType) &&
                this.Parameters.Equals(other.Parameters) &&
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
