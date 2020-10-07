using System;
using System.Collections.Generic;
using System.Linq;

namespace rsdl.parser.model
{
    public class RdmDataModel : IEquatable<RdmDataModel>
    {
        public RdmDataModel(IReadOnlyCollection<IRdmSchemaElement> items) :
            this(null, items)
        {
        }

        public RdmDataModel(RdmNamespaceDeclaration @namespace, IReadOnlyCollection<IRdmSchemaElement> items)
        {
            Items = items;
            Namespace = @namespace;
        }

        public RdmNamespaceDeclaration Namespace { get; }

        public IReadOnlyCollection<IRdmSchemaElement> Items { get; }

        public bool Equals(RdmDataModel other)
        {
            return Enumerable.SequenceEqual(this.Items, other.Items);
        }

        public override bool Equals(object other)
        {
            return other is RdmDataModel model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Items);
        }
    }

    public class RdmNamespaceDeclaration
    {
        public RdmNamespaceDeclaration(string namespaceName)
        {
            NamespaceName = namespaceName;
        }

        public string NamespaceName { get; }
    }


    /// <summary>
    /// current implementation: RdmStructuredType, RdmService
    /// </summary>
    public interface IRdmSchemaElement
    {
    }

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

    public class RdmEnum : IRdmSchemaElement, IEquatable<RdmEnum>
    {
        public RdmEnum(string name, IReadOnlyList<string> members)
        {
            Name = name;
            Members = members;
        }

        public string Name { get; }

        public IReadOnlyList<string> Members { get; }

        public bool Equals(RdmEnum other)
        {
            return string.Equals(this.Name, other.Name) &&
                Enumerable.SequenceEqual(this.Members, other.Members);
        }

        public override bool Equals(object other)
        {
            return other is RdmEnum model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Members);
        }
    }

    public class RdmService : IRdmSchemaElement, IEquatable<RdmService>
    {
        public RdmService(IEnumerable<IRdmServiceElement> items)
        {
            Items = items;
        }

        public IEnumerable<IRdmServiceElement> Items { get; }

        public bool Equals(RdmService other)
        {
            return Enumerable.SequenceEqual(this.Items, other.Items);
        }

        public override bool Equals(object other)
        {
            return other is RdmService model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Items);
        }
    }

    /// <summary>
    /// current implementation: RdmServiceCollection, RdmServiceSingelton,
    /// </summary>
    public interface IRdmServiceElement
    {
        string Name { get; }
    }

    public class RdmServiceCollection : IRdmServiceElement, IEquatable<RdmServiceCollection>
    {
        public RdmServiceCollection(string name, RdmTypeReference type)
        {
            Name = name;
            Type = type;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public bool Equals(RdmServiceCollection other)
        {
            return string.Equals(Name, other.Name) && this.Type.Equals(other.Type);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceCollection item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type);
        }
    }

    public class RdmServiceSingelton : IRdmServiceElement, IEquatable<RdmServiceSingelton>
    {
        public RdmServiceSingelton(string name, RdmTypeReference type)
        {
            Name = name;
            Type = type;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public bool Equals(RdmServiceSingelton other)
        {
            return string.Equals(Name, other.Name) && this.Type.Equals(other.Type);
        }

        public override bool Equals(object other)
        {
            return other is RdmServiceSingelton item && this.Equals(item);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type);
        }
    }

    public class RdmTypeReference : IEquatable<RdmTypeReference>
    {
        public RdmTypeReference(string name, bool isNullable = false, bool isMultivalued = false)
        {
            Name = name;
            IsNullable = isNullable;
            IsMultivalued = isMultivalued;
        }

        public bool IsNullable { get; }

        public bool IsMultivalued { get; }

        public string Name { get; }

        public bool Equals(RdmTypeReference other)
        {
            return string.Equals(this.Name, other.Name) &&
                this.IsNullable == other.IsNullable &&
                this.IsMultivalued == other.IsMultivalued;
        }

        public override bool Equals(object other)
        {
            return other is RdmTypeReference model && this.Equals(model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, IsNullable, IsMultivalued);
        }
    }

    public class RdmProperty : IEquatable<RdmProperty>
    {
        public RdmProperty(string name, RdmTypeReference type, IEnumerable<IAnnotation> annotations = null, Position position = default)
        {
            Name = name;
            Type = type;
            Annotations = annotations ?? Enumerable.Empty<IAnnotation>();
            Position = position;
        }

        public string Name { get; }

        public RdmTypeReference Type { get; }

        public IEnumerable<IAnnotation> Annotations { get; }

        public Position Position { get; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;

        public bool Equals(RdmProperty other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.Type.Equals(other.Type) &&
                Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmProperty p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, Annotations);
        }
    }

    public class RdmParameter : IEquatable<RdmParameter>
    {
        public RdmParameter(string name, RdmTypeReference type, bool IsOptional = false, IEnumerable<IAnnotation> annotations = null, Position position = default)
        {
            Name = name;
            Type = type;
            Annotations = annotations ?? Enumerable.Empty<IAnnotation>();
            Position = position;
        }

        public string Name { get; }
        public RdmTypeReference Type { get; }

        public bool IsOptional { get; }

        public IEnumerable<IAnnotation> Annotations { get; }

        public Position Position { get; }

        public bool Equals(RdmParameter other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name) &&
                this.Type.Equals(other.Type) &&
                this.IsOptional == other.IsOptional &&
                Enumerable.SequenceEqual(this.Annotations, other.Annotations);
        }

        public override bool Equals(object other)
        {
            return other is RdmParameter p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Type, IsOptional, Annotations);
        }
    }

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

    public struct Position : IEquatable<Position>
    {
        public Position(int line, int column)
        {
            Line = line;
            Column = column;
        }

        public static implicit operator Position((int line, int column) pair) =>
            new Position(pair.line, pair.column);

        public int Line { get; }
        public int Column { get; }

        public override string ToString() => $"Ln: {Line}, Ch: {Column}";

        public bool Equals(Position other)
        {
            return this.Line == other.Line && this.Column == other.Column;
        }

        public override bool Equals(object other)
        {
            return other is Position p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Line, Column);
        }
    }
}
