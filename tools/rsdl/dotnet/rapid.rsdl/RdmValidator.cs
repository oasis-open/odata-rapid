using System;
using System.Collections.Generic;
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
            var typeLookup = LoadAllTypes(model);

            foreach (var x in typeLookup)
            {
                logger.LogInfo("validate type {0}", x.Name);
            }
            // foreach (var type in model.Items.OfType<RdmStructuredType>())
            // {
            //     foreach (var prop in type.Properties)
            //     {
            //         var propertyType = prop.Type;
            //         if (BuiltInTypes.ContainsKey(propertyType.Name))
            //         {
            //             continue;
            //         }
            //         var @namespace = prop.Type.NamespaceName;

            //         // TODO: replace with checking all types in imported namespaces
            //         if (!model.References.Any(@ref => string.Equals(@ref.NamespaceName, @namespace) || string.Equals(@ref.Alias, @namespace)))
            //         {
            //             yield return new ModelValidationError($"type {prop.Type}, namespace can not be found");
            //         }
            //     }
            // }
            return true;
        }

        private IEnumerable<IRdmType> LoadAllTypes(RdmDataModel model)
        {
            var models = LoadDependentModels(model);
            foreach (var x in models.Keys)
            {
                logger.LogInfo("loaded type {0}", x);
            }

            return models.SelectMany(model => model.Value.Items.OfType<IRdmType>());
        }

        private IDictionary<string, RdmDataModel> LoadDependentModels(RdmDataModel model)
        {
            // this is essentially a breadth first search in the (potentially cyclic) model dependency graph
            var models = new Dictionary<string, RdmDataModel> { [model.Namespace.NamespaceName] = model };
            var queue = new Queue<RdmDataModel> { model };
            while (queue.Count > 0)
            {
                var item = queue.Dequeue();

                // load and enqueue all referenced models
                foreach (var @ref in item.References)
                {
                    var m = LoadModel(@ref.NamespaceName, @ref.Path);
                    // try to ann model, and if not added before enqueue it
                    if (models.TryAdd(item.Namespace.NamespaceName, m))
                    {
                        models.Add(@ref.Alias, m);
                        queue.Enqueue(m);
                    }
                }
            }
            return models;
        }

        private RdmDataModel LoadModel(string namespaceName, string path)
        {
            var model = parser.Parse(path);
            if (!namespaceName.Equals(model.Namespace))
            {
                logger.LogError($"failed to include '{model.Namespace.NamespaceName}' declared as '{namespaceName}' in file '{path}'");
            }
            logger.LogInfo("loaded file {0}", path);
            return model;
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
