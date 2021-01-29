using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    public class Annotation : IEquatable<Annotation>
    {
        public Annotation(string name, AnnotationExpression value, Position position = default)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; }

        public AnnotationExpression Value { get; }

        public Position Position { get; set; }


        #region equality 

        public static bool Equals(Annotation one, Annotation two)
        {
            return one.Name.Equals(two.Name) && one.Value.Equals(two.Value);
        }

        public bool Equals(Annotation other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is Annotation p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Value);
        }

        #endregion
    }
}
