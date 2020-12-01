using System;
using rapid.rdm;

namespace rapid.rsdl
{

    /// <summary>
    /// internal model class to represent identifiers with their position in the file
    /// </summary>
    internal class CompositeIdentifier : IEquatable<CompositeIdentifier>
    {
        public CompositeIdentifier(string name, Position position = default)
        {
            Name = name;
            Position = position;
        }

        public string Name { get; }

        public Position Position { get; }

        public bool Equals(CompositeIdentifier other)
        {
            // Position is intentionally not compared.
            return
                string.Equals(this.Name, other.Name);
        }

        public override bool Equals(object other)
        {
            return other is CompositeIdentifier p && this.Equals(p);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name);
        }
    }
}
