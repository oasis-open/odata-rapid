using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmStructuredType : IRdmSchemaElement, IEquatable<RdmStructuredType>
    {
        public RdmStructuredType(string name,
            IReadOnlyCollection<RdmProperty> properties,
            IReadOnlyCollection<RdmOperation> operations = null)
        {
            Name = name;
            Properties = properties;
            Operations = operations ?? Array.Empty<RdmOperation>();
        }

        public string Name { get; }

        public IReadOnlyCollection<RdmProperty> Properties { get; }

        public IReadOnlyCollection<RdmOperation> Operations { get; }

        public IEnumerable<RdmProperty> Keys =>
            Properties.Where(p => p.Annotations.OfType<KeyAnnotation>().Any());

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
