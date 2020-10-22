using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using rapid.rdm;

namespace rapid.rdm
{
    public interface IRdmValidator
    {
        bool Validate(RdmDataModel model);
    }


    public class RdmValidator : IRdmValidator
    {
        private readonly Func<string, RdmDataModel> resolver;
        private readonly ILogger logger;

        public RdmValidator(Func<string, RdmDataModel> resolver, ILogger logger)
        {
            this.resolver = resolver;
            this.logger = logger;
        }

        public bool Validate(RdmDataModel model)
        {
            var env = CreateEnvironment(model);

            // verify type references
            var ok = true;
            foreach (var type in env.Types)
            {
                if (type is RdmStructuredType structured)
                {
                    logger.LogInfo("Validating structured type {0}", structured.Name);
                    foreach (var prop in structured.Properties)
                    {
                        var propertyType = prop.Type;
                        if (!env.TryResolve(propertyType.Name, out var _))
                        {
                            logger.LogInfo("unknown type {0} of property {1} type {2}", propertyType.Name, prop.Name, type.Name);
                            ok = false;
                        }
                    }
                }
            }
            return ok;
        }

        private TypeEnvironment CreateEnvironment(RdmDataModel model)
        {
            var types = model.References.Select(@ref => (@ref.Alias, resolver(@ref.Path))).ToList();
            logger.LogInfo("Creating environment of models {0}", string.Join(",", types.Select(p => $"{p.Item2.Namespace.NamespaceName} as {p.Alias}")));
            var env = new TypeEnvironment(model, types);
            return env;
        }
    }
}
