using System;
using System.Collections.Generic;
using System.Linq;

namespace rsdl.parser.model
{
    public class RdmDataModel
    {
        public IEnumerable<IRdmSchemaElement> Items { get; set; }
    }

    /// <summary>
    /// current implementation: RdmStructuredType, RdmService
    /// </summary>
    public interface IRdmSchemaElement
    {
    }

    public class RdmStructuredType : IRdmSchemaElement
    {
        public string Name { get; set; }

        public ICollection<RdmProperty> Properties { get; set; }

        public IEnumerable<RdmProperty> Keys =>
            Properties.Where(p => p.Annotations.OfType<KeyAnnotation>().Any());

        public ICollection<RdmFunction> Functions { get; set; }
    }

    public class RdmEnum : IRdmSchemaElement
    {
        public string Name { get; set; }

        public IList<string> Members { get; set; }
    }

    public class RdmService : IRdmSchemaElement
    {
        public IEnumerable<IRdmServiceElement> Items { get; set; }
    }

    /// <summary>
    /// current implementation: RdmServiceCollection, RdmServiceSingelton, 
    /// </summary>
    public interface IRdmServiceElement
    {
        string Name { get; }
    }

    public class RdmServiceCollection : IRdmServiceElement
    {
        public string Name { get; set; }
        public RdmTypeReference Type { get; set; }
    }

    public class RdmServiceSingelton : IRdmServiceElement
    {
        public string Name { get; set; }
        public RdmTypeReference Type { get; set; }
    }

    public class RdmTypeReference
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
    }

    public class RdmProperty
    {
        public string Name { get; set; }

        public RdmTypeReference PropType { get; set; }

        public IEnumerable<IAnnotation> Annotations { get; set; }

        public Position Position { get; set; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;
    }

    public class RdmFunction
    {
        public string Name { get; set; }
        public RdmTypeReference ReturnType { get; set; }
        //TODO: replace RdmProperty with a new type RdmParameter
        public ICollection<RdmProperty> Parameters { get; set; }
        public IEnumerable<IAnnotation> Annotations { get; set; }
        public Position Position { get; set; }

        public bool ShouldSerializeAnnotations() => Annotations.Count() > 0;
    }

    public interface IAnnotation { }
    public class KeyAnnotation : IAnnotation { }
    public class ActionAnnotation : IAnnotation { }
    public class FunctionAnnotation : IAnnotation { }


    public struct Position
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

        public override string ToString() => $"Ln:{Line} Ch: {Column}";
    }
}