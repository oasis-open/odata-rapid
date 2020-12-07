using System;

namespace rapid.rdm
{
    public class Annotation : IEquatable<Annotation>
    {
        public Annotation(string name, AnnotationExpression value, Position position = default)
        {
            Name = name;
            Value = value;
            Position = position;
        }

        public string Name { get; }

        public AnnotationExpression Value { get; }

        public Position Position { get; }

        public bool Equals(Annotation other)
        {
            return this.Name.Equals(other.Name) && this.Value.Equals(other.Value);
        }

        public override bool Equals(object other)
        {
            return other is Annotation p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Value);
        }
    }
}
