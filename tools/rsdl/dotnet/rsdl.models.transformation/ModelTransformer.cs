using Microsoft.OData.Edm;
using rsdl.parser.model;

namespace rsdl.parser
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
