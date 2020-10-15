using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using rapid.rdm;

namespace rapid.rsdl
{

    public class ModelValidationError
    {
        public ModelValidationError(string message)
        {
            Message = message;
        }

        public string Message { get; }
    }

    public interface IRdmValidator
    {
        bool Validate(RdmDataModel model, out IEnumerable<ModelValidationError> errors);
    }

    public class RdmValidator : IRdmValidator
    {
        public bool Validate(RdmDataModel model, out IEnumerable<ModelValidationError> errors)
        {
            var temp = GetErrors(model).ToList();
            if (temp.Any())
            {
                errors = temp;
                return false;
            }
            errors = default;
            return true;
        }

        private IEnumerable<ModelValidationError> GetErrors(RdmDataModel model)
        {
            var typeLookup = LoadAllTypes(model);

            foreach (var x in typeLookup)
            {
                System.Console.WriteLine(x.Name);
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
            return Enumerable.Empty<ModelValidationError>();
        }

        private IEnumerable<IRdmType> LoadAllTypes(RdmDataModel model)
        {
            var models = LoadDependentModels(model);
            foreach (var x in models.Keys)
            {
                System.Console.WriteLine(x);
            }
            System.Console.WriteLine();

            return models.SelectMany(model => model.Value.Items.OfType<IRdmType>());
        }

        private static IDictionary<string, RdmDataModel> LoadDependentModels(RdmDataModel model)
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
                        queue.Enqueue(m);
                    }
                }
            }
            return models;
        }

        private static RdmDataModel LoadModel(string namespaceName, string path)
        {
            var model = RdmParser.Parse(System.IO.File.ReadAllText(path));
            if (!namespaceName.Equals(model.Namespace))
            {
                throw new ValidationException($"can not include file {path} with namespace {model.Namespace.NamespaceName} as {namespaceName}");
            }
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


    [Serializable]
    internal class ValidationException : Exception
    {
        private string v;
        private IEnumerable<ModelValidationError> errors;

        public ValidationException()
        {
        }

        public ValidationException(string message) : base(message)
        {
        }

        public ValidationException(string v, IEnumerable<ModelValidationError> errors)
        {
            this.v = v;
            this.errors = errors;
        }

        public ValidationException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected ValidationException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
