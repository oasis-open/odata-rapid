using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class RdmStructuredType : IRdmSchemaElement, IRdmType, IEquatable<RdmStructuredType>
    {
        public RdmStructuredType(
            string name,
            string baseType,
            IReadOnlyList<RdmProperty> properties,
            IReadOnlyList<RdmOperation> operations = null,
            bool isAbstract = false,
            IEnumerable<Annotation> annotations = null,
            Position position = default
        )
        {
            Name = name;
            BaseType = baseType;
            Properties = properties;
            Operations = operations ?? Array.Empty<RdmOperation>();
            IsAbstract = isAbstract;
            Annotations = annotations?.ToList().AsReadOnly() ?? (IReadOnlyList<Annotation>)Array.Empty<Annotation>();
        }

        public string Name { get; }

        public string BaseType { get; }

        public bool IsAbstract { get; }

        public IReadOnlyList<RdmProperty> Properties { get; }

        public IReadOnlyList<RdmOperation> Operations { get; }

        public IReadOnlyList<Annotation> Annotations { get; }

        public Position Position { get; set; }

        public IEnumerable<RdmProperty> Keys =>
            Properties.Where(p => p.IsKey);

        #region equality 

        public static bool Equals(RdmStructuredType one, RdmStructuredType two)
        {
            if (object.ReferenceEquals(one, two)) return true;
            if (one == null || two == null) return one == null && two == null;
            return
                string.Equals(one.Name, two.Name) &&
                one.IsAbstract.Equals(two.IsAbstract) &&
                Enumerable.SequenceEqual(one.Properties, two.Properties) &&
                Enumerable.SequenceEqual(one.Operations, two.Operations) &&
                Enumerable.SequenceEqual(one.Annotations, two.Annotations);
        }

        public bool Equals(RdmStructuredType other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmStructuredType model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, IsAbstract, Properties, Operations, Annotations);
        }
        #endregion
    }
}
