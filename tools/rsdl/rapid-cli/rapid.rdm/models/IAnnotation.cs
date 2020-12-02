using System;

namespace rapid.rdm
{
    public interface IAnnotation
    {
        public AnnotationKind Kind { get; }
    }

    public enum AnnotationKind { Key, Action, Function, Custom }

    /// <summary>
    /// Base class for parameterless annotations
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class UnitAnnotation<T> : IAnnotation, IEquatable<T> where T : IAnnotation
    {
        public UnitAnnotation(AnnotationKind kind) => Kind = kind;

        public AnnotationKind Kind { get; }

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

    public class KeyAnnotation : UnitAnnotation<KeyAnnotation>, IAnnotation, IEquatable<KeyAnnotation>
    {
        public KeyAnnotation() : base(AnnotationKind.Key) { }
    }

    public class ActionAnnotation : UnitAnnotation<ActionAnnotation>, IAnnotation, IEquatable<ActionAnnotation>
    {
        public ActionAnnotation() : base(AnnotationKind.Action) { }
    }

    public class FunctionAnnotation : UnitAnnotation<FunctionAnnotation>, IAnnotation, IEquatable<FunctionAnnotation>
    {
        public FunctionAnnotation() : base(AnnotationKind.Function) { }
    }

    public class CustomAnnotation : IAnnotation, IEquatable<CustomAnnotation>
    {
        public CustomAnnotation(string name, AnnotationExpression value)
        {
            Kind = AnnotationKind.Custom;
            Name = name;
            Value = value;
        }

        public AnnotationKind Kind { get; }

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
