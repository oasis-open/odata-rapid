using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.OData.Edm;
using rapid.rdm;

namespace rapid.rsdl
{
    public class ModelTransformer
    {
        private readonly ILogger logger;

        public ModelTransformer(ILogger logger)
        {
            this.logger = logger;
        }

        public IEdmModel Transform(RdmDataModel model, TypeMapping dependencies)
        {
            var builder = new ModelBuilder(model, dependencies);
            return builder.Build();
        }
    }
}
