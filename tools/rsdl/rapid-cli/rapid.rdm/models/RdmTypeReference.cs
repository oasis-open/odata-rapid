using System;

namespace rapid.rdm
{
    public record RdmTypeReferenceFacets
    {
        public bool IsNullable { get; init; }

        public bool IsMultivalued { get; init; }

        public int? MaxLength { get; init; }

        public int? Precision { get; init; }

        public int? Scale { get; init; }

        public static RdmTypeReferenceFacets None = new RdmTypeReferenceFacets();
    }

    public sealed class RdmTypeReference : IEquatable<RdmTypeReference>
    {
        public RdmTypeReference(string name, RdmTypeReferenceFacets facets, Position position = default)
        {
            Name = name;
            Facets = facets ?? RdmTypeReferenceFacets.None;
            Position = position;
        }

        public RdmTypeReference(string name, bool isNullable, bool isMultivalued, Position position = default)
        {
            Name = name;
            Facets = new RdmTypeReferenceFacets { IsNullable = isNullable, IsMultivalued = isMultivalued };
            Position = position;
        }

        public RdmTypeReference(string name, Position position = default)
        {
            Name = name;
            Facets = new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = false };
            Position = position;
        }

        public string Name { get; }

        public RdmTypeReferenceFacets Facets { get; }

        public Position Position { get; set; }

        public string Prefix => Name.BeforeLast(".");
        public string Suffix => Name.AfterLast(".");

        #region equality 

        public static bool Equals(RdmTypeReference one, RdmTypeReference two)
        {
            return
                string.Equals(one.Name, two.Name) &&
                one.Facets.Equals(two.Facets);
        }

        public bool Equals(RdmTypeReference other)
        {
            return Equals(this, other);
        }

        public override bool Equals(object other)
        {
            return other is RdmTypeReference model && Equals(this, model);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name, Facets);
        }
        #endregion
    }
}
