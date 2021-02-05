using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;

namespace rapid.edm.modelComparison
{
    public class EdmModelComparer
    {
        public IEnumerable<Difference> GetDifferences(IEdmModel original, IEdmModel current)
        {
            var builder = new SchemaDeltaBuilder();
            builder.IsDifferent(original, current, new PropertyPath());

            var errros = builder.Differences;
            return errros;
        }
    }
}
