using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmStructuredType : IRdmSchemaElement, IRdmType, IEquatable<RdmStructuredType>
    {
        public RdmStructuredType(string name,
            IReadOnlyList<RdmProperty> properties,
            IReadOnlyList<RdmOperation> operations = null,
            bool isAbstract = false,
            IEnumerable<Annotation> annotations = null, Position position = default
        )
        {
            Name = name;
            Properties = properties;
            Operations = operations ?? Array.Empty<RdmOperation>();
            IsAbstract = isAbstract;
            Annotations = annotations?.ToList().AsReadOnly() ?? (IReadOnlyList<Annotation>)Array.Empty<Annotation>();
            Position = position;
        }

        public string Name { get; }

        public bool IsAbstract { get; }

        public IReadOnlyList<RdmProperty> Properties { get; }

        public IReadOnlyList<RdmOperation> Operations { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; }
        
        public IEnumerable<RdmProperty> Keys =>
            Properties.Where(p => p.IsKey);

        public bool Equals(RdmStructuredType other)
        {
            return string.Equals(this.Name, other.Name) &&
                Enumerable.SequenceEqual(this.Properties, other.Properties) &&
                Enumerable.SequenceEqual(this.Operations, other.Operations);
        }

        public override bool Equals(object other)
        {
            return other is RdmStructuredType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Properties, Operations);
        }
    }
}
