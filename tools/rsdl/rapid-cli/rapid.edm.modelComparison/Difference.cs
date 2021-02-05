using System;
using Microsoft.OData.Edm;

namespace rapid.edm.modelComparison
{
    public record Difference(PropertyPath Path, string Message, EdmLocation Expected, EdmLocation Actual)
    {
    }
}
