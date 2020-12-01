using System;

namespace rapid.rdm
{
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
