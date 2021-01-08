using System;
using System.Collections.Generic;
using System.Linq;

namespace Microsoft.OData.Edm
{
    public class EdmModelComparer
    {
        public IEnumerable<Discrepancy> Compare(IEdmModel original, IEdmModel current)
        {
            var builder = new SchemaDeltaBuilder();
            builder.Visit(original, current, new PropertyPath());

            var errros = builder.Errors.Select(errror => new Discrepancy(errror.Path, errror.Message));
            return errros;
        }
    }

    public class Discrepancy
    {
        public PropertyPath Path { get; }
        public string Message { get; }

        public Discrepancy(PropertyPath path, string message)
        {
            this.Path = path;
            this.Message = message;
        }
    }
}
