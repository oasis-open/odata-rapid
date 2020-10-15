using Microsoft.OData.Edm;
using rapid.rdm;

namespace rapid.rsdl
{
    public class ModelTransformer
    {
        private ConsoleLogger logger;

        public ModelTransformer(ConsoleLogger logger)
        {
            this.logger = logger;
        }

        public IEdmModel Transform(RdmDataModel schema)
        {
            var builder = new ModelBuilder(schema);
            return builder.Create();
        }
    }
}
