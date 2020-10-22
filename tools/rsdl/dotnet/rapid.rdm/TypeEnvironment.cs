using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{
    /// <summary>
    /// The (run time) TypeEnvironment records the relationships between names and types accessible in a model
    /// </summary>
    public class TypeEnvironment
    {
        private readonly IDictionary<string, IRdmType> typeByFqn;
        private readonly IDictionary<string, IRdmType> typeByAlias;

        public TypeEnvironment(RdmDataModel model, IEnumerable<(string alias, RdmDataModel model)> imports)
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
