using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.OData.Edm;

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

        public bool TryTransform(RdmSchemaDefinition model, IDictionary<string, RdmSchemaDefinition> referencedModels, out IEdmModel edmModel)
        {
            // The transformation essentially happens in the phases
            // 1) create the type environment with all external and pre-defined types
            // 2) add "stubs" for each defined type. these "stubs" have no properties or base types yet.
            //    the EDM model elements are added to the environment and the resulting RDM model
            // 3) add the properties, base types etc. to the stubs
            // The three phases are necessary since the graph of types is potentially a circular graph.
            try
            {
                var sw = Stopwatch.StartNew();

                // create the environment based on the RDM model's types
                var env = new TypeEnvironment(logger);

                // adds the dependencies to allow to resolve the imported types.
                env.AddReferences(model, referencedModels ?? new Dictionary<string, RdmSchemaDefinition>());

                // create the model that is going to be filled on by the builder;
                var result = new EdmModel();

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
