using System;

namespace rapid.rdm
{

    public interface IAnnotation { }

    /// <summary>
    /// Base class for parameterless annotations
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class UnitAnnotation<T> : IAnnotation, IEquatable<T> where T : IAnnotation
    {
        public bool Equals(T other)
        {
            return true;
        }

        public override bool Equals(object other)
        {
            return other is T p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return 1;
        }
    }

    public class KeyAnnotation : UnitAnnotation<KeyAnnotation>, IAnnotation, IEquatable<KeyAnnotation> { }

    public class ActionAnnotation : UnitAnnotation<ActionAnnotation>, IAnnotation, IEquatable<ActionAnnotation> { }

    public class FunctionAnnotation : UnitAnnotation<FunctionAnnotation>, IAnnotation, IEquatable<FunctionAnnotation> { }



    public class CustomAnnotation : IAnnotation, IEquatable<CustomAnnotation>
    {

        public CustomAnnotation(string name, AnnotationExpression value)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; }
        public AnnotationExpression Value { get; }

        public bool Equals(CustomAnnotation other)
        {
            return this.Name.Equals(other.Name) && this.Value.Equals(other.Value);
        }

        public override bool Equals(object other)
        {
            return other is CustomAnnotation p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Value);
        }
    }
}
