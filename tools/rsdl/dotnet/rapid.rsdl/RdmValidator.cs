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

    public class RdmValidator
    {

        public bool Validate(RdmDataModel model, out IEnumerable<ModelValidationError> errors)
        {
            var temp = GetErrors(model);
            if (temp.Any())
            {
                errors = temp;
                return false;
            }
            errors = default;
            return true;
        }

        public IEnumerable<ModelValidationError> GetErrors(RdmDataModel model)
        {
            foreach (var type in model.Items.OfType<RdmStructuredType>())
            {
                foreach (var prop in type.Properties)
                {
                    var propertyType = prop.Type;
                    if (BuiltInTypes.ContainsKey(propertyType.Name))
                    {
                        continue;
                    }
                    var @namespace = prop.Type.NamespaceName;

                    // TODO: replace with checking all types in imported namespaces
                    if (!model.References.Any(@ref => string.Equals(@ref.NamespaceName, @namespace) || string.Equals(@ref.Alias, @namespace)))
                    {
                        yield return new ModelValidationError($"type {prop.Type}, namespace can not be found");
                    }
                }
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
