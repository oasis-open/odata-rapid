using System.Collections.Immutable;


namespace Microsoft.OData.Edm
{
    public class PropertyPath
    {
        private readonly IImmutableList<string> segments;

        public PropertyPath()
        {
            this.segments = ImmutableList<string>.Empty;
        }

        private PropertyPath(IImmutableList<string> segments)
        {
            this.segments = segments ?? ImmutableList<string>.Empty;
        }

        public void Deconstruct(out string head, out PropertyPath tail)
        {
            if (segments.Count > 1)
            {
                head = this.segments[segments.Count - 1];
                tail = new PropertyPath(this.segments.RemoveAt(segments.Count - 1));
            }
            head = default;
            tail = this;
        }

        public static PropertyPath operator +(PropertyPath path, string segment)
        {
            return new PropertyPath(path.segments.Add(segment));
        }

        public override string ToString() => string.Join(".", segments);
    }
}