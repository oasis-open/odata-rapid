

using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace rapid.rdm
{


    public static class EdmExtensions
    {
        public static bool TryFindTerm(this IEdmModel model, string qualifiedName, out IEdmTerm term)
        {
            term = model.FindTerm(qualifiedName);
            return term != null;
        }
    }
}
