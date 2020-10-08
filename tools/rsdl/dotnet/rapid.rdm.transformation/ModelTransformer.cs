using Microsoft.OData.Edm;
using rapid.rdm;

namespace rapid.rsdl
{
    public class ModelTransformer
    {
        public IEdmModel Transform(RdmDataModel schema)
        {
            var builder = new ModelBuilder(schema);
            return builder.Create();
        }
    }
}
