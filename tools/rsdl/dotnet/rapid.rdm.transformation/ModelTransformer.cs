using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Microsoft.OData.Edm;
using rapid.rdm;

namespace rapid.rdm
{

    /// <summary>
    /// service class to translate an RDM model into a EDM model
    /// the class has no dependency on RSDL parser, the models are passed in from outside.
    /// </summary>
    public class ModelTransformer
    {
        private readonly ILogger logger;

        public ModelTransformer(ILogger logger)
        {
            this.logger = logger;
        }

        public IEdmModel Transform(RdmDataModel model, IDictionary<string, RdmDataModel> referencedModels)
        {
            return TryTransform(model, referencedModels, out var result) ? result : default;
        }

        public bool TryTransform(RdmDataModel model, IDictionary<string, RdmDataModel> referencedModels, out IEdmModel edmModel)
        {
            try
            {
                var sw = Stopwatch.StartNew();

                // create the environment based on the RDM model's types
                var env = new TypeEnvironment(model, logger);

                // adds the dependencies to allow to resolve the imported types.
                env.AddReferences(referencedModels ?? new Dictionary<string, RdmDataModel>());

                // create the skeletons of each model type. This also allows the builder to resolve them by name.
                var result = env.CreateStubEdmModel();

                // build out the model types
                var builder = new ModelBuilder(logger, env);
                builder.Build(model, result);

                edmModel = result;
                logger.LogInfo("transformation time: {0}", sw.Elapsed);
                return true;
            }
            catch (TransformationException ex)
            {
                logger.LogError(ex, "error transforming rsdl model {0}", model.Namespace.NamespaceName);
                edmModel = default;
                return false;
            }
        }
    }
}
