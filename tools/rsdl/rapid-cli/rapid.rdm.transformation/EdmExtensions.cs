

using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
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

        public static void AddVocabularyAnnotation(this EdmModel model, IEdmVocabularyAnnotation annotation, EdmVocabularyAnnotationSerializationLocation location)
        {
            model.AddVocabularyAnnotation(annotation);
            annotation.SetSerializationLocation(model, location);
        }
    }
}
