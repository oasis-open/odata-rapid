using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using rapid.rdm;

namespace rapid.rsdl
{
    public interface IRdmValidator
    {
        bool Validate(RdmDataModel model);
    }

    public class RdmValidator : IRdmValidator
    {
        private readonly ILogger logger;
        private readonly RdmParser parser;
        public readonly string baseDirectory;

        public RdmValidator(string baseDirectory, ILogger logger)
        {
            this.logger = logger;
            this.parser = new RdmParser(logger);
            this.baseDirectory = baseDirectory;
        }

        public bool Validate(RdmDataModel model)
        {
            var env = CreateEnvironment(model);

            // foreach (var x in typeLookup)
            // {
            //     logger.LogInfo("validate type {0}", x.Name);
            // }
            var ok = true;

            // verify type references
            foreach (var type in env.Types)
            {
                if (type is RdmStructuredType structured)
                {
                    foreach (var prop in structured.Properties)
                    {
                        var propertyType = prop.Type;
                        if (!env.TryResolve(propertyType.Name, out var _))
                        {
                            logger.LogInfo("unknown type {0} of property {1} type {2}", propertyType.Name, prop.Name, type.Name);
                            ok = false;
                        }

                        // if (BuiltInTypes.ContainsKey(propertyType.Name))
                        // {
                        //     continue;
                        // }
                        // var @namespace = propertyType.NamespaceName;

                        // // TODO: replace with checking all types in imported namespaces
                        // if (!model.References.Any(@ref => string.Equals(@ref.NamespaceName, @namespace) || string.Equals(@ref.Alias, @namespace)))
                        // {
                        //     logger.LogInfo("validate type {0}", x.Name);
                        //     ok = false;
                        // }
                    }
                }
            }
            return ok;
        }

        private Environment CreateEnvironment(RdmDataModel model)
        {

            var env = new Environment(model,
                model.References.Select(@ref => (@ref.Alias, LoadModel(@ref.Path))));

            return env;
        }

        private RdmDataModel LoadModel(string path)
        {
            if (!Path.IsPathRooted(path))
            {
                path = Path.Combine(baseDirectory, path);
            }
            var model = parser.Parse(File.ReadAllText(path), Path.GetFileName(path));
            logger.LogInfo("loaded model file {0} containing namespace {1}", path, model.Namespace.NamespaceName);
            return model;
        }
    }

    /// <summary>
    /// The (run time) Environment records the relationships between names and types accessible in a model
    /// </summary>
    internal class Environment
    {
        private readonly IDictionary<string, IRdmType> typeByFqn;
        private readonly IDictionary<string, IRdmType> typeByAlias;

        public Environment(RdmDataModel model, IEnumerable<(string alias, RdmDataModel model)> imports)
        {
            typeByFqn = new Dictionary<string, IRdmType>();
            typeByAlias = new Dictionary<string, IRdmType>();
            foreach (var import in imports)
            {
                foreach (var type in import.model.Items.OfType<IRdmType>())
                {
                    typeByFqn.Add(import.model.Namespace.NamespaceName + "." + type.Name, type);
                    typeByAlias.Add(import.alias + "." + type.Name, type);
                }
            }
        }

        public bool TryResolve(string name, out IRdmType type)
        {
            if (typeByAlias.TryGetValue(name, out type))
            {
                return true;
            }
            else if (typeByAlias.TryGetValue(name, out type))
            {
                return true;
            }
            type = default;
            return false;
        }

        public IEnumerable<IRdmType> Types
        {
            get
            {
                return typeByFqn.Values;
            }
        }

        private static Dictionary<string, string> BuiltInTypes = new Dictionary<string, string>
        {
            ["Integer"] = "Edm.Int32",
            ["String"] = "Edm.String",
            ["Boolean"] = "Edm.Boolean",
            ["DateTime"] = "Edm.DateTimeOffset",
            ["Date"] = "Edm.Date",
            ["Double"] = "Edm.Double"
        };
    }
}
