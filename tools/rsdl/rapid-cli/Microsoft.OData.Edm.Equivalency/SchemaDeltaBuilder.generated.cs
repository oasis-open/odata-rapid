using System;
using System.Collections.Generic;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace rapid.edm.modelComparison
{
    partial class SchemaDeltaBuilder
    {
        public bool IsDifferent(IEdmSchemaElement expected, IEdmSchemaElement actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmAction expectedAction && actual is IEdmAction actualAction)
                {
                    return IsDifferent(expectedAction, actualAction, path);
                }
                else if (expected is IEdmComplexType expectedComplexType && actual is IEdmComplexType actualComplexType)
                {
                    return IsDifferent(expectedComplexType, actualComplexType, path);
                }
                else if (expected is IEdmEntityContainer expectedEntityContainer && actual is IEdmEntityContainer actualEntityContainer)
                {
                    return IsDifferent(expectedEntityContainer, actualEntityContainer, path);
                }
                else if (expected is IEdmEntityType expectedEntityType && actual is IEdmEntityType actualEntityType)
                {
                    return IsDifferent(expectedEntityType, actualEntityType, path);
                }
                else if (expected is IEdmEnumType expectedEnumType && actual is IEdmEnumType actualEnumType)
                {
                    return IsDifferent(expectedEnumType, actualEnumType, path);
                }
                else if (expected is IEdmFunction expectedFunction && actual is IEdmFunction actualFunction)
                {
                    return IsDifferent(expectedFunction, actualFunction, path);
                }
                else if (expected is IEdmPathType expectedPathType && actual is IEdmPathType actualPathType)
                {
                    return IsDifferent(expectedPathType, actualPathType, path);
                }
                else if (expected is IEdmPrimitiveType expectedPrimitiveType && actual is IEdmPrimitiveType actualPrimitiveType)
                {
                    return IsDifferent(expectedPrimitiveType, actualPrimitiveType, path);
                }
                else if (expected is IEdmTerm expectedTerm && actual is IEdmTerm actualTerm)
                {
                    return IsDifferent(expectedTerm, actualTerm, path);
                }
                else if (expected is IEdmTypeDefinition expectedTypeDefinition && actual is IEdmTypeDefinition actualTypeDefinition)
                {
                    return IsDifferent(expectedTypeDefinition, actualTypeDefinition, path);
                }
                else if (expected is IEdmUntypedType expectedUntypedType && actual is IEdmUntypedType actualUntypedType)
                {
                    return IsDifferent(expectedUntypedType, actualUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmSchemaElementSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                    if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmSchemaElementSubtypes = new[] { typeof(IEdmAction), typeof(IEdmComplexType), typeof(IEdmEntityContainer), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmFunction), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmTerm), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public bool IsDifferent(IEdmVocabularyAnnotation expected, IEdmVocabularyAnnotation actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Qualifier, actual.Qualifier, path + "Qualifier")) { return true; }
                if (IsDifferent(expected.Term, actual.Term, path + "Term")) { return true; }
                if (IsDifferent(expected.Target, actual.Target, path + "Target")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmModel expected, IEdmModel actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferentNamedSeq(expected.SchemaElements, actual.SchemaElements, IsDifferent, path)) { return true; }
                if (IsDifferentSeq(expected.VocabularyAnnotations, actual.VocabularyAnnotations, IsDifferent, path + "VocabularyAnnotations")) { return true; }
                if (IsDifferentSeq(expected.ReferencedModels, actual.ReferencedModels, IsDifferent, path + "ReferencedModels")) { return true; }
                if (IsDifferentSeq(expected.DeclaredNamespaces, actual.DeclaredNamespaces, IsDifferent, path + "DeclaredNamespaces")) { return true; }
                if (IsDifferent(expected.DirectValueAnnotationsManager, actual.DirectValueAnnotationsManager, path + "DirectValueAnnotationsManager")) { return true; }
                if (IsDifferent(expected.EntityContainer, actual.EntityContainer, path + "EntityContainer")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDirectValueAnnotationsManager expected, IEdmDirectValueAnnotationsManager actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntityContainer expected, IEdmEntityContainer actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferentNamedSeq(expected.Elements, actual.Elements, IsDifferent, path)) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmAction expected, IEdmAction actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.ReturnType, actual.ReturnType, path + "ReturnType")) { return true; }
                if (IsDifferentNamedSeq(expected.Parameters, actual.Parameters, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.IsBound, actual.IsBound, path + "IsBound")) { return true; }
                if (IsDifferent(expected.EntitySetPath, actual.EntitySetPath, path + "EntitySetPath")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmComplexType expected, IEdmComplexType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.IsAbstract, actual.IsAbstract, path + "IsAbstract")) { return true; }
                if (IsDifferent(expected.IsOpen, actual.IsOpen, path + "IsOpen")) { return true; }
                if (IsDifferent(expected.BaseType, actual.BaseType, path + "BaseType")) { return true; }
                if (IsDifferentNamedSeq(expected.DeclaredProperties, actual.DeclaredProperties, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntityType expected, IEdmEntityType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.IsAbstract, actual.IsAbstract, path + "IsAbstract")) { return true; }
                if (IsDifferent(expected.IsOpen, actual.IsOpen, path + "IsOpen")) { return true; }
                if (IsDifferent(expected.BaseType, actual.BaseType, path + "BaseType")) { return true; }
                if (IsDifferentNamedSeq(expected.DeclaredProperties, actual.DeclaredProperties, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferentNamedSeq(expected.DeclaredKey, actual.DeclaredKey, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.HasStream, actual.HasStream, path + "HasStream")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEnumType expected, IEdmEnumType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.UnderlyingType, actual.UnderlyingType, path + "UnderlyingType")) { return true; }
                if (IsDifferentNamedSeq(expected.Members, actual.Members, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.IsFlags, actual.IsFlags, path + "IsFlags")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmFunction expected, IEdmFunction actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.ReturnType, actual.ReturnType, path + "ReturnType")) { return true; }
                if (IsDifferentNamedSeq(expected.Parameters, actual.Parameters, IsDifferent, path)) { return true; }
                if (IsDifferent(expected.IsBound, actual.IsBound, path + "IsBound")) { return true; }
                if (IsDifferent(expected.EntitySetPath, actual.EntitySetPath, path + "EntitySetPath")) { return true; }
                if (IsDifferent(expected.IsComposable, actual.IsComposable, path + "IsComposable")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmOperation expected, IEdmOperation actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmAction expectedAction && actual is IEdmAction actualAction)
                {
                    return IsDifferent(expectedAction, actualAction, path);
                }
                else if (expected is IEdmFunction expectedFunction && actual is IEdmFunction actualFunction)
                {
                    return IsDifferent(expectedFunction, actualFunction, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmOperationSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                    if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                    if (IsDifferent(expected.ReturnType, actual.ReturnType, path + "ReturnType")) { return true; }
                    if (IsDifferentNamedSeq(expected.Parameters, actual.Parameters, IsDifferent, path)) { return true; }
                    if (IsDifferent(expected.IsBound, actual.IsBound, path + "IsBound")) { return true; }
                    if (IsDifferent(expected.EntitySetPath, actual.EntitySetPath, path + "EntitySetPath")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmOperationSubtypes = new[] { typeof(IEdmAction), typeof(IEdmFunction) };

        public bool IsDifferent(IEdmPathType expected, IEdmPathType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.PathKind, actual.PathKind, path + "PathKind")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmPrimitiveType expected, IEdmPrimitiveType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.PrimitiveKind, actual.PrimitiveKind, path + "PrimitiveKind")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmSchemaType expected, IEdmSchemaType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmComplexType expectedComplexType && actual is IEdmComplexType actualComplexType)
                {
                    return IsDifferent(expectedComplexType, actualComplexType, path);
                }
                else if (expected is IEdmEntityType expectedEntityType && actual is IEdmEntityType actualEntityType)
                {
                    return IsDifferent(expectedEntityType, actualEntityType, path);
                }
                else if (expected is IEdmEnumType expectedEnumType && actual is IEdmEnumType actualEnumType)
                {
                    return IsDifferent(expectedEnumType, actualEnumType, path);
                }
                else if (expected is IEdmPathType expectedPathType && actual is IEdmPathType actualPathType)
                {
                    return IsDifferent(expectedPathType, actualPathType, path);
                }
                else if (expected is IEdmPrimitiveType expectedPrimitiveType && actual is IEdmPrimitiveType actualPrimitiveType)
                {
                    return IsDifferent(expectedPrimitiveType, actualPrimitiveType, path);
                }
                else if (expected is IEdmTypeDefinition expectedTypeDefinition && actual is IEdmTypeDefinition actualTypeDefinition)
                {
                    return IsDifferent(expectedTypeDefinition, actualTypeDefinition, path);
                }
                else if (expected is IEdmUntypedType expectedUntypedType && actual is IEdmUntypedType actualUntypedType)
                {
                    return IsDifferent(expectedUntypedType, actualUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmSchemaTypeSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                    if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                    if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmSchemaTypeSubtypes = new[] { typeof(IEdmComplexType), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public bool IsDifferent(IEdmTerm expected, IEdmTerm actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.AppliesTo, actual.AppliesTo, path + "AppliesTo")) { return true; }
                if (IsDifferent(expected.DefaultValue, actual.DefaultValue, path + "DefaultValue")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmTypeDefinition expected, IEdmTypeDefinition actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.UnderlyingType, actual.UnderlyingType, path + "UnderlyingType")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmUntypedType expected, IEdmUntypedType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.SchemaElementKind, actual.SchemaElementKind, path + "SchemaElementKind")) { return true; }
                if (IsDifferent(expected.Namespace, actual.Namespace, path + "Namespace")) { return true; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmVocabularyAnnotatable expected, IEdmVocabularyAnnotatable actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmAction expectedAction && actual is IEdmAction actualAction)
                {
                    return IsDifferent(expectedAction, actualAction, path);
                }
                else if (expected is IEdmActionImport expectedActionImport && actual is IEdmActionImport actualActionImport)
                {
                    return IsDifferent(expectedActionImport, actualActionImport, path);
                }
                else if (expected is IEdmComplexType expectedComplexType && actual is IEdmComplexType actualComplexType)
                {
                    return IsDifferent(expectedComplexType, actualComplexType, path);
                }
                else if (expected is IEdmEntityContainer expectedEntityContainer && actual is IEdmEntityContainer actualEntityContainer)
                {
                    return IsDifferent(expectedEntityContainer, actualEntityContainer, path);
                }
                else if (expected is IEdmEntitySet expectedEntitySet && actual is IEdmEntitySet actualEntitySet)
                {
                    return IsDifferent(expectedEntitySet, actualEntitySet, path);
                }
                else if (expected is IEdmEntityType expectedEntityType && actual is IEdmEntityType actualEntityType)
                {
                    return IsDifferent(expectedEntityType, actualEntityType, path);
                }
                else if (expected is IEdmEnumMember expectedEnumMember && actual is IEdmEnumMember actualEnumMember)
                {
                    return IsDifferent(expectedEnumMember, actualEnumMember, path);
                }
                else if (expected is IEdmEnumType expectedEnumType && actual is IEdmEnumType actualEnumType)
                {
                    return IsDifferent(expectedEnumType, actualEnumType, path);
                }
                else if (expected is IEdmFunction expectedFunction && actual is IEdmFunction actualFunction)
                {
                    return IsDifferent(expectedFunction, actualFunction, path);
                }
                else if (expected is IEdmFunctionImport expectedFunctionImport && actual is IEdmFunctionImport actualFunctionImport)
                {
                    return IsDifferent(expectedFunctionImport, actualFunctionImport, path);
                }
                else if (expected is IEdmNavigationProperty expectedNavigationProperty && actual is IEdmNavigationProperty actualNavigationProperty)
                {
                    return IsDifferent(expectedNavigationProperty, actualNavigationProperty, path);
                }
                else if (expected is IEdmOperationReturn expectedOperationReturn && actual is IEdmOperationReturn actualOperationReturn)
                {
                    return IsDifferent(expectedOperationReturn, actualOperationReturn, path);
                }
                else if (expected is IEdmOptionalParameter expectedOptionalParameter && actual is IEdmOptionalParameter actualOptionalParameter)
                {
                    return IsDifferent(expectedOptionalParameter, actualOptionalParameter, path);
                }
                else if (expected is IEdmPathType expectedPathType && actual is IEdmPathType actualPathType)
                {
                    return IsDifferent(expectedPathType, actualPathType, path);
                }
                else if (expected is IEdmPrimitiveType expectedPrimitiveType && actual is IEdmPrimitiveType actualPrimitiveType)
                {
                    return IsDifferent(expectedPrimitiveType, actualPrimitiveType, path);
                }
                else if (expected is IEdmSingleton expectedSingleton && actual is IEdmSingleton actualSingleton)
                {
                    return IsDifferent(expectedSingleton, actualSingleton, path);
                }
                else if (expected is IEdmStructuralProperty expectedStructuralProperty && actual is IEdmStructuralProperty actualStructuralProperty)
                {
                    return IsDifferent(expectedStructuralProperty, actualStructuralProperty, path);
                }
                else if (expected is IEdmTerm expectedTerm && actual is IEdmTerm actualTerm)
                {
                    return IsDifferent(expectedTerm, actualTerm, path);
                }
                else if (expected is IEdmTypeDefinition expectedTypeDefinition && actual is IEdmTypeDefinition actualTypeDefinition)
                {
                    return IsDifferent(expectedTypeDefinition, actualTypeDefinition, path);
                }
                else if (expected is IEdmUntypedType expectedUntypedType && actual is IEdmUntypedType actualUntypedType)
                {
                    return IsDifferent(expectedUntypedType, actualUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmVocabularyAnnotatableSubtypes, path);
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmVocabularyAnnotatableSubtypes = new[] { typeof(IEdmAction), typeof(IEdmActionImport), typeof(IEdmComplexType), typeof(IEdmEntityContainer), typeof(IEdmEntitySet), typeof(IEdmEntityType), typeof(IEdmEnumMember), typeof(IEdmEnumType), typeof(IEdmFunction), typeof(IEdmFunctionImport), typeof(IEdmNavigationProperty), typeof(IEdmOperationReturn), typeof(IEdmOptionalParameter), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmSingleton), typeof(IEdmStructuralProperty), typeof(IEdmTerm), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public bool IsDifferent(IEdmExpression expected, IEdmExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmApplyExpression expectedApplyExpression && actual is IEdmApplyExpression actualApplyExpression)
                {
                    return IsDifferent(expectedApplyExpression, actualApplyExpression, path);
                }
                else if (expected is IEdmBinaryConstantExpression expectedBinaryConstantExpression && actual is IEdmBinaryConstantExpression actualBinaryConstantExpression)
                {
                    return IsDifferent(expectedBinaryConstantExpression, actualBinaryConstantExpression, path);
                }
                else if (expected is IEdmBooleanConstantExpression expectedBooleanConstantExpression && actual is IEdmBooleanConstantExpression actualBooleanConstantExpression)
                {
                    return IsDifferent(expectedBooleanConstantExpression, actualBooleanConstantExpression, path);
                }
                else if (expected is IEdmCastExpression expectedCastExpression && actual is IEdmCastExpression actualCastExpression)
                {
                    return IsDifferent(expectedCastExpression, actualCastExpression, path);
                }
                else if (expected is IEdmCollectionExpression expectedCollectionExpression && actual is IEdmCollectionExpression actualCollectionExpression)
                {
                    return IsDifferent(expectedCollectionExpression, actualCollectionExpression, path);
                }
                else if (expected is IEdmDateConstantExpression expectedDateConstantExpression && actual is IEdmDateConstantExpression actualDateConstantExpression)
                {
                    return IsDifferent(expectedDateConstantExpression, actualDateConstantExpression, path);
                }
                else if (expected is IEdmDateTimeOffsetConstantExpression expectedDateTimeOffsetConstantExpression && actual is IEdmDateTimeOffsetConstantExpression actualDateTimeOffsetConstantExpression)
                {
                    return IsDifferent(expectedDateTimeOffsetConstantExpression, actualDateTimeOffsetConstantExpression, path);
                }
                else if (expected is IEdmDecimalConstantExpression expectedDecimalConstantExpression && actual is IEdmDecimalConstantExpression actualDecimalConstantExpression)
                {
                    return IsDifferent(expectedDecimalConstantExpression, actualDecimalConstantExpression, path);
                }
                else if (expected is IEdmDurationConstantExpression expectedDurationConstantExpression && actual is IEdmDurationConstantExpression actualDurationConstantExpression)
                {
                    return IsDifferent(expectedDurationConstantExpression, actualDurationConstantExpression, path);
                }
                else if (expected is IEdmEnumMemberExpression expectedEnumMemberExpression && actual is IEdmEnumMemberExpression actualEnumMemberExpression)
                {
                    return IsDifferent(expectedEnumMemberExpression, actualEnumMemberExpression, path);
                }
                else if (expected is IEdmFloatingConstantExpression expectedFloatingConstantExpression && actual is IEdmFloatingConstantExpression actualFloatingConstantExpression)
                {
                    return IsDifferent(expectedFloatingConstantExpression, actualFloatingConstantExpression, path);
                }
                else if (expected is IEdmGuidConstantExpression expectedGuidConstantExpression && actual is IEdmGuidConstantExpression actualGuidConstantExpression)
                {
                    return IsDifferent(expectedGuidConstantExpression, actualGuidConstantExpression, path);
                }
                else if (expected is IEdmIfExpression expectedIfExpression && actual is IEdmIfExpression actualIfExpression)
                {
                    return IsDifferent(expectedIfExpression, actualIfExpression, path);
                }
                else if (expected is IEdmIntegerConstantExpression expectedIntegerConstantExpression && actual is IEdmIntegerConstantExpression actualIntegerConstantExpression)
                {
                    return IsDifferent(expectedIntegerConstantExpression, actualIntegerConstantExpression, path);
                }
                else if (expected is IEdmIsTypeExpression expectedIsTypeExpression && actual is IEdmIsTypeExpression actualIsTypeExpression)
                {
                    return IsDifferent(expectedIsTypeExpression, actualIsTypeExpression, path);
                }
                else if (expected is IEdmLabeledExpression expectedLabeledExpression && actual is IEdmLabeledExpression actualLabeledExpression)
                {
                    return IsDifferent(expectedLabeledExpression, actualLabeledExpression, path);
                }
                else if (expected is IEdmLabeledExpressionReferenceExpression expectedLabeledExpressionReferenceExpression && actual is IEdmLabeledExpressionReferenceExpression actualLabeledExpressionReferenceExpression)
                {
                    return IsDifferent(expectedLabeledExpressionReferenceExpression, actualLabeledExpressionReferenceExpression, path);
                }
                else if (expected is IEdmNullExpression expectedNullExpression && actual is IEdmNullExpression actualNullExpression)
                {
                    return IsDifferent(expectedNullExpression, actualNullExpression, path);
                }
                else if (expected is IEdmPathExpression expectedPathExpression && actual is IEdmPathExpression actualPathExpression)
                {
                    return IsDifferent(expectedPathExpression, actualPathExpression, path);
                }
                else if (expected is IEdmRecordExpression expectedRecordExpression && actual is IEdmRecordExpression actualRecordExpression)
                {
                    return IsDifferent(expectedRecordExpression, actualRecordExpression, path);
                }
                else if (expected is IEdmStringConstantExpression expectedStringConstantExpression && actual is IEdmStringConstantExpression actualStringConstantExpression)
                {
                    return IsDifferent(expectedStringConstantExpression, actualStringConstantExpression, path);
                }
                else if (expected is IEdmTimeOfDayConstantExpression expectedTimeOfDayConstantExpression && actual is IEdmTimeOfDayConstantExpression actualTimeOfDayConstantExpression)
                {
                    return IsDifferent(expectedTimeOfDayConstantExpression, actualTimeOfDayConstantExpression, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmExpressionSubtypes, path);
                    if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmExpressionSubtypes = new[] { typeof(IEdmApplyExpression), typeof(IEdmBinaryConstantExpression), typeof(IEdmBooleanConstantExpression), typeof(IEdmCastExpression), typeof(IEdmCollectionExpression), typeof(IEdmDateConstantExpression), typeof(IEdmDateTimeOffsetConstantExpression), typeof(IEdmDecimalConstantExpression), typeof(IEdmDurationConstantExpression), typeof(IEdmEnumMemberExpression), typeof(IEdmFloatingConstantExpression), typeof(IEdmGuidConstantExpression), typeof(IEdmIfExpression), typeof(IEdmIntegerConstantExpression), typeof(IEdmIsTypeExpression), typeof(IEdmLabeledExpression), typeof(IEdmLabeledExpressionReferenceExpression), typeof(IEdmNullExpression), typeof(IEdmPathExpression), typeof(IEdmRecordExpression), typeof(IEdmStringConstantExpression), typeof(IEdmTimeOfDayConstantExpression) };

        public bool IsDifferent(IEdmEntityContainerElement expected, IEdmEntityContainerElement actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmActionImport expectedActionImport && actual is IEdmActionImport actualActionImport)
                {
                    return IsDifferent(expectedActionImport, actualActionImport, path);
                }
                else if (expected is IEdmEntitySet expectedEntitySet && actual is IEdmEntitySet actualEntitySet)
                {
                    return IsDifferent(expectedEntitySet, actualEntitySet, path);
                }
                else if (expected is IEdmFunctionImport expectedFunctionImport && actual is IEdmFunctionImport actualFunctionImport)
                {
                    return IsDifferent(expectedFunctionImport, actualFunctionImport, path);
                }
                else if (expected is IEdmSingleton expectedSingleton && actual is IEdmSingleton actualSingleton)
                {
                    return IsDifferent(expectedSingleton, actualSingleton, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmEntityContainerElementSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                    if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmEntityContainerElementSubtypes = new[] { typeof(IEdmActionImport), typeof(IEdmEntitySet), typeof(IEdmFunctionImport), typeof(IEdmSingleton) };

        public bool IsDifferent(IEdmTypeReference expected, IEdmTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmBinaryTypeReference expectedBinaryTypeReference && actual is IEdmBinaryTypeReference actualBinaryTypeReference)
                {
                    return IsDifferent(expectedBinaryTypeReference, actualBinaryTypeReference, path);
                }
                else if (expected is IEdmCollectionTypeReference expectedCollectionTypeReference && actual is IEdmCollectionTypeReference actualCollectionTypeReference)
                {
                    return IsDifferent(expectedCollectionTypeReference, actualCollectionTypeReference, path);
                }
                else if (expected is IEdmComplexTypeReference expectedComplexTypeReference && actual is IEdmComplexTypeReference actualComplexTypeReference)
                {
                    return IsDifferent(expectedComplexTypeReference, actualComplexTypeReference, path);
                }
                else if (expected is IEdmDecimalTypeReference expectedDecimalTypeReference && actual is IEdmDecimalTypeReference actualDecimalTypeReference)
                {
                    return IsDifferent(expectedDecimalTypeReference, actualDecimalTypeReference, path);
                }
                else if (expected is IEdmEntityReferenceTypeReference expectedEntityReferenceTypeReference && actual is IEdmEntityReferenceTypeReference actualEntityReferenceTypeReference)
                {
                    return IsDifferent(expectedEntityReferenceTypeReference, actualEntityReferenceTypeReference, path);
                }
                else if (expected is IEdmEntityTypeReference expectedEntityTypeReference && actual is IEdmEntityTypeReference actualEntityTypeReference)
                {
                    return IsDifferent(expectedEntityTypeReference, actualEntityTypeReference, path);
                }
                else if (expected is IEdmEnumTypeReference expectedEnumTypeReference && actual is IEdmEnumTypeReference actualEnumTypeReference)
                {
                    return IsDifferent(expectedEnumTypeReference, actualEnumTypeReference, path);
                }
                else if (expected is IEdmPathTypeReference expectedPathTypeReference && actual is IEdmPathTypeReference actualPathTypeReference)
                {
                    return IsDifferent(expectedPathTypeReference, actualPathTypeReference, path);
                }
                else if (expected is IEdmSpatialTypeReference expectedSpatialTypeReference && actual is IEdmSpatialTypeReference actualSpatialTypeReference)
                {
                    return IsDifferent(expectedSpatialTypeReference, actualSpatialTypeReference, path);
                }
                else if (expected is IEdmStringTypeReference expectedStringTypeReference && actual is IEdmStringTypeReference actualStringTypeReference)
                {
                    return IsDifferent(expectedStringTypeReference, actualStringTypeReference, path);
                }
                else if (expected is IEdmTemporalTypeReference expectedTemporalTypeReference && actual is IEdmTemporalTypeReference actualTemporalTypeReference)
                {
                    return IsDifferent(expectedTemporalTypeReference, actualTemporalTypeReference, path);
                }
                else if (expected is IEdmTypeDefinitionReference expectedTypeDefinitionReference && actual is IEdmTypeDefinitionReference actualTypeDefinitionReference)
                {
                    return IsDifferent(expectedTypeDefinitionReference, actualTypeDefinitionReference, path);
                }
                else if (expected is IEdmUntypedTypeReference expectedUntypedTypeReference && actual is IEdmUntypedTypeReference actualUntypedTypeReference)
                {
                    return IsDifferent(expectedUntypedTypeReference, actualUntypedTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmTypeReferenceSubtypes, path);
                    if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                    if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmTypeReferenceSubtypes = new[] { typeof(IEdmBinaryTypeReference), typeof(IEdmCollectionTypeReference), typeof(IEdmComplexTypeReference), typeof(IEdmDecimalTypeReference), typeof(IEdmEntityReferenceTypeReference), typeof(IEdmEntityTypeReference), typeof(IEdmEnumTypeReference), typeof(IEdmPathTypeReference), typeof(IEdmSpatialTypeReference), typeof(IEdmStringTypeReference), typeof(IEdmTemporalTypeReference), typeof(IEdmTypeDefinitionReference), typeof(IEdmUntypedTypeReference) };

        public bool IsDifferent(IEdmOperationParameter expected, IEdmOperationParameter actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmOptionalParameter expectedOptionalParameter && actual is IEdmOptionalParameter actualOptionalParameter)
                {
                    return IsDifferent(expectedOptionalParameter, actualOptionalParameter, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmOperationParameterSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                    if (IsDifferent(expected.DeclaringOperation, actual.DeclaringOperation, path + "DeclaringOperation")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmOperationParameterSubtypes = new[] { typeof(IEdmOptionalParameter) };

        public bool IsDifferent(IEdmPathExpression expected, IEdmPathExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferentSeq(expected.PathSegments, actual.PathSegments, IsDifferent, path + "PathSegments")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmStructuredType expected, IEdmStructuredType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmComplexType expectedComplexType && actual is IEdmComplexType actualComplexType)
                {
                    return IsDifferent(expectedComplexType, actualComplexType, path);
                }
                else if (expected is IEdmEntityType expectedEntityType && actual is IEdmEntityType actualEntityType)
                {
                    return IsDifferent(expectedEntityType, actualEntityType, path);
                }
                else if (expected is IEdmRowType expectedRowType && actual is IEdmRowType actualRowType)
                {
                    return IsDifferent(expectedRowType, actualRowType, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmStructuredTypeSubtypes, path);
                    if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                    if (IsDifferent(expected.IsAbstract, actual.IsAbstract, path + "IsAbstract")) { return true; }
                    if (IsDifferent(expected.IsOpen, actual.IsOpen, path + "IsOpen")) { return true; }
                    if (IsDifferent(expected.BaseType, actual.BaseType, path + "BaseType")) { return true; }
                    if (IsDifferentNamedSeq(expected.DeclaredProperties, actual.DeclaredProperties, IsDifferent, path)) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmStructuredTypeSubtypes = new[] { typeof(IEdmComplexType), typeof(IEdmEntityType), typeof(IEdmRowType) };

        public bool IsDifferent(IEdmProperty expected, IEdmProperty actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmNavigationProperty expectedNavigationProperty && actual is IEdmNavigationProperty actualNavigationProperty)
                {
                    return IsDifferent(expectedNavigationProperty, actualNavigationProperty, path);
                }
                else if (expected is IEdmStructuralProperty expectedStructuralProperty && actual is IEdmStructuralProperty actualStructuralProperty)
                {
                    return IsDifferent(expectedStructuralProperty, actualStructuralProperty, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmPropertySubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.PropertyKind, actual.PropertyKind, path + "PropertyKind")) { return true; }
                    if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                    if (IsDifferent(expected.DeclaringType, actual.DeclaringType, path + "DeclaringType")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmPropertySubtypes = new[] { typeof(IEdmNavigationProperty), typeof(IEdmStructuralProperty) };

        public bool IsDifferent(IEdmStructuralProperty expected, IEdmStructuralProperty actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.PropertyKind, actual.PropertyKind, path + "PropertyKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.DeclaringType, actual.DeclaringType, path + "DeclaringType")) { return true; }
                if (IsDifferent(expected.DefaultValueString, actual.DefaultValueString, path + "DefaultValueString")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEnumMember expected, IEdmEnumMember actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                if (IsDifferent(expected.DeclaringType, actual.DeclaringType, path + "DeclaringType")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmActionImport expected, IEdmActionImport actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                if (IsDifferent(expected.Operation, actual.Operation, path + "Operation")) { return true; }
                if (IsDifferent(expected.EntitySet, actual.EntitySet, path + "EntitySet")) { return true; }
                if (IsDifferent(expected.Action, actual.Action, path + "Action")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntitySet expected, IEdmEntitySet actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                if (IsDifferent(expected.IncludeInServiceDocument, actual.IncludeInServiceDocument, path + "IncludeInServiceDocument")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmFunctionImport expected, IEdmFunctionImport actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                if (IsDifferent(expected.Operation, actual.Operation, path + "Operation")) { return true; }
                if (IsDifferent(expected.EntitySet, actual.EntitySet, path + "EntitySet")) { return true; }
                if (IsDifferent(expected.IncludeInServiceDocument, actual.IncludeInServiceDocument, path + "IncludeInServiceDocument")) { return true; }
                if (IsDifferent(expected.Function, actual.Function, path + "Function")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmNavigationProperty expected, IEdmNavigationProperty actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.PropertyKind, actual.PropertyKind, path + "PropertyKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.DeclaringType, actual.DeclaringType, path + "DeclaringType")) { return true; }
                if (IsDifferent(expected.Partner, actual.Partner, path + "Partner")) { return true; }
                if (IsDifferent(expected.OnDelete, actual.OnDelete, path + "OnDelete")) { return true; }
                if (IsDifferent(expected.ContainsTarget, actual.ContainsTarget, path + "ContainsTarget")) { return true; }
                if (IsDifferent(expected.ReferentialConstraint, actual.ReferentialConstraint, path + "ReferentialConstraint")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmOperationImport expected, IEdmOperationImport actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmActionImport expectedActionImport && actual is IEdmActionImport actualActionImport)
                {
                    return IsDifferent(expectedActionImport, actualActionImport, path);
                }
                else if (expected is IEdmFunctionImport expectedFunctionImport && actual is IEdmFunctionImport actualFunctionImport)
                {
                    return IsDifferent(expectedFunctionImport, actualFunctionImport, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmOperationImportSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                    if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                    if (IsDifferent(expected.Operation, actual.Operation, path + "Operation")) { return true; }
                    if (IsDifferent(expected.EntitySet, actual.EntitySet, path + "EntitySet")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmOperationImportSubtypes = new[] { typeof(IEdmActionImport), typeof(IEdmFunctionImport) };

        public bool IsDifferent(IEdmOperationReturn expected, IEdmOperationReturn actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.DeclaringOperation, actual.DeclaringOperation, path + "DeclaringOperation")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmOptionalParameter expected, IEdmOptionalParameter actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.DeclaringOperation, actual.DeclaringOperation, path + "DeclaringOperation")) { return true; }
                if (IsDifferent(expected.DefaultValueString, actual.DefaultValueString, path + "DefaultValueString")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmSingleton expected, IEdmSingleton actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.ContainerElementKind, actual.ContainerElementKind, path + "ContainerElementKind")) { return true; }
                if (IsDifferent(expected.Container, actual.Container, path + "Container")) { return true; }
                if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmApplyExpression expected, IEdmApplyExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.AppliedFunction, actual.AppliedFunction, path + "AppliedFunction")) { return true; }
                if (IsDifferentSeq(expected.Arguments, actual.Arguments, IsDifferent, path + "Arguments")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmBinaryConstantExpression expected, IEdmBinaryConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmBooleanConstantExpression expected, IEdmBooleanConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmCastExpression expected, IEdmCastExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Operand, actual.Operand, path + "Operand")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmCollectionExpression expected, IEdmCollectionExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.DeclaredType, actual.DeclaredType, path + "DeclaredType")) { return true; }
                if (IsDifferentSeq(expected.Elements, actual.Elements, IsDifferent, path + "Elements")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDateConstantExpression expected, IEdmDateConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDateTimeOffsetConstantExpression expected, IEdmDateTimeOffsetConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDecimalConstantExpression expected, IEdmDecimalConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDurationConstantExpression expected, IEdmDurationConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEnumMemberExpression expected, IEdmEnumMemberExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferentNamedSeq(expected.EnumMembers, actual.EnumMembers, IsDifferent, path)) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmFloatingConstantExpression expected, IEdmFloatingConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmGuidConstantExpression expected, IEdmGuidConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmIfExpression expected, IEdmIfExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.TestExpression, actual.TestExpression, path + "TestExpression")) { return true; }
                if (IsDifferent(expected.TrueExpression, actual.TrueExpression, path + "TrueExpression")) { return true; }
                if (IsDifferent(expected.FalseExpression, actual.FalseExpression, path + "FalseExpression")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmIntegerConstantExpression expected, IEdmIntegerConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmIsTypeExpression expected, IEdmIsTypeExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Operand, actual.Operand, path + "Operand")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmLabeledExpression expected, IEdmLabeledExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Expression, actual.Expression, path + "Expression")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmLabeledExpressionReferenceExpression expected, IEdmLabeledExpressionReferenceExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.ReferencedLabeledExpression, actual.ReferencedLabeledExpression, path + "ReferencedLabeledExpression")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmNullExpression expected, IEdmNullExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmRecordExpression expected, IEdmRecordExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.DeclaredType, actual.DeclaredType, path + "DeclaredType")) { return true; }
                if (IsDifferentSeq(expected.Properties, actual.Properties, IsDifferent, path + "Properties")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmStringConstantExpression expected, IEdmStringConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmTimeOfDayConstantExpression expected, IEdmTimeOfDayConstantExpression actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.ExpressionKind, actual.ExpressionKind, path + "ExpressionKind")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ValueKind, actual.ValueKind, path + "ValueKind")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmType expected, IEdmType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmCollectionType expectedCollectionType && actual is IEdmCollectionType actualCollectionType)
                {
                    return IsDifferent(expectedCollectionType, actualCollectionType, path);
                }
                else if (expected is IEdmComplexType expectedComplexType && actual is IEdmComplexType actualComplexType)
                {
                    return IsDifferent(expectedComplexType, actualComplexType, path);
                }
                else if (expected is IEdmEntityReferenceType expectedEntityReferenceType && actual is IEdmEntityReferenceType actualEntityReferenceType)
                {
                    return IsDifferent(expectedEntityReferenceType, actualEntityReferenceType, path);
                }
                else if (expected is IEdmEntityType expectedEntityType && actual is IEdmEntityType actualEntityType)
                {
                    return IsDifferent(expectedEntityType, actualEntityType, path);
                }
                else if (expected is IEdmEnumType expectedEnumType && actual is IEdmEnumType actualEnumType)
                {
                    return IsDifferent(expectedEnumType, actualEnumType, path);
                }
                else if (expected is IEdmPathType expectedPathType && actual is IEdmPathType actualPathType)
                {
                    return IsDifferent(expectedPathType, actualPathType, path);
                }
                else if (expected is IEdmPrimitiveType expectedPrimitiveType && actual is IEdmPrimitiveType actualPrimitiveType)
                {
                    return IsDifferent(expectedPrimitiveType, actualPrimitiveType, path);
                }
                else if (expected is IEdmRowType expectedRowType && actual is IEdmRowType actualRowType)
                {
                    return IsDifferent(expectedRowType, actualRowType, path);
                }
                else if (expected is IEdmTypeDefinition expectedTypeDefinition && actual is IEdmTypeDefinition actualTypeDefinition)
                {
                    return IsDifferent(expectedTypeDefinition, actualTypeDefinition, path);
                }
                else if (expected is IEdmUntypedType expectedUntypedType && actual is IEdmUntypedType actualUntypedType)
                {
                    return IsDifferent(expectedUntypedType, actualUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmTypeSubtypes, path);
                    if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmTypeSubtypes = new[] { typeof(IEdmCollectionType), typeof(IEdmComplexType), typeof(IEdmEntityReferenceType), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmRowType), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public bool IsDifferent(IEdmBinaryTypeReference expected, IEdmBinaryTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.IsUnbounded, actual.IsUnbounded, path + "IsUnbounded")) { return true; }
                if (IsDifferent(expected.MaxLength, actual.MaxLength, path + "MaxLength")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmCollectionTypeReference expected, IEdmCollectionTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmComplexTypeReference expected, IEdmComplexTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmDecimalTypeReference expected, IEdmDecimalTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.Precision, actual.Precision, path + "Precision")) { return true; }
                if (IsDifferent(expected.Scale, actual.Scale, path + "Scale")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntityReferenceTypeReference expected, IEdmEntityReferenceTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntityTypeReference expected, IEdmEntityTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEnumTypeReference expected, IEdmEnumTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmPathTypeReference expected, IEdmPathTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmPrimitiveTypeReference expected, IEdmPrimitiveTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmBinaryTypeReference expectedBinaryTypeReference && actual is IEdmBinaryTypeReference actualBinaryTypeReference)
                {
                    return IsDifferent(expectedBinaryTypeReference, actualBinaryTypeReference, path);
                }
                else if (expected is IEdmDecimalTypeReference expectedDecimalTypeReference && actual is IEdmDecimalTypeReference actualDecimalTypeReference)
                {
                    return IsDifferent(expectedDecimalTypeReference, actualDecimalTypeReference, path);
                }
                else if (expected is IEdmSpatialTypeReference expectedSpatialTypeReference && actual is IEdmSpatialTypeReference actualSpatialTypeReference)
                {
                    return IsDifferent(expectedSpatialTypeReference, actualSpatialTypeReference, path);
                }
                else if (expected is IEdmStringTypeReference expectedStringTypeReference && actual is IEdmStringTypeReference actualStringTypeReference)
                {
                    return IsDifferent(expectedStringTypeReference, actualStringTypeReference, path);
                }
                else if (expected is IEdmTemporalTypeReference expectedTemporalTypeReference && actual is IEdmTemporalTypeReference actualTemporalTypeReference)
                {
                    return IsDifferent(expectedTemporalTypeReference, actualTemporalTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmPrimitiveTypeReferenceSubtypes, path);
                    if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                    if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmPrimitiveTypeReferenceSubtypes = new[] { typeof(IEdmBinaryTypeReference), typeof(IEdmDecimalTypeReference), typeof(IEdmSpatialTypeReference), typeof(IEdmStringTypeReference), typeof(IEdmTemporalTypeReference) };

        public bool IsDifferent(IEdmSpatialTypeReference expected, IEdmSpatialTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.SpatialReferenceIdentifier, actual.SpatialReferenceIdentifier, path + "SpatialReferenceIdentifier")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmStringTypeReference expected, IEdmStringTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.IsUnbounded, actual.IsUnbounded, path + "IsUnbounded")) { return true; }
                if (IsDifferent(expected.MaxLength, actual.MaxLength, path + "MaxLength")) { return true; }
                if (IsDifferent(expected.IsUnicode, actual.IsUnicode, path + "IsUnicode")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmStructuredTypeReference expected, IEdmStructuredTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmComplexTypeReference expectedComplexTypeReference && actual is IEdmComplexTypeReference actualComplexTypeReference)
                {
                    return IsDifferent(expectedComplexTypeReference, actualComplexTypeReference, path);
                }
                else if (expected is IEdmEntityTypeReference expectedEntityTypeReference && actual is IEdmEntityTypeReference actualEntityTypeReference)
                {
                    return IsDifferent(expectedEntityTypeReference, actualEntityTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmStructuredTypeReferenceSubtypes, path);
                    if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                    if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmStructuredTypeReferenceSubtypes = new[] { typeof(IEdmComplexTypeReference), typeof(IEdmEntityTypeReference) };

        public bool IsDifferent(IEdmTemporalTypeReference expected, IEdmTemporalTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.Precision, actual.Precision, path + "Precision")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmTypeDefinitionReference expected, IEdmTypeDefinitionReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                if (IsDifferent(expected.IsUnbounded, actual.IsUnbounded, path + "IsUnbounded")) { return true; }
                if (IsDifferent(expected.MaxLength, actual.MaxLength, path + "MaxLength")) { return true; }
                if (IsDifferent(expected.IsUnicode, actual.IsUnicode, path + "IsUnicode")) { return true; }
                if (IsDifferent(expected.Precision, actual.Precision, path + "Precision")) { return true; }
                if (IsDifferent(expected.Scale, actual.Scale, path + "Scale")) { return true; }
                if (IsDifferent(expected.SpatialReferenceIdentifier, actual.SpatialReferenceIdentifier, path + "SpatialReferenceIdentifier")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmUntypedTypeReference expected, IEdmUntypedTypeReference actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.IsNullable, actual.IsNullable, path + "IsNullable")) { return true; }
                if (IsDifferent(expected.Definition, actual.Definition, path + "Definition")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmRowType expected, IEdmRowType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.IsAbstract, actual.IsAbstract, path + "IsAbstract")) { return true; }
                if (IsDifferent(expected.IsOpen, actual.IsOpen, path + "IsOpen")) { return true; }
                if (IsDifferent(expected.BaseType, actual.BaseType, path + "BaseType")) { return true; }
                if (IsDifferentNamedSeq(expected.DeclaredProperties, actual.DeclaredProperties, IsDifferent, path)) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEnumMemberValue expected, IEdmEnumMemberValue actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmNavigationPropertyBinding expected, IEdmNavigationPropertyBinding actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.NavigationProperty, actual.NavigationProperty, path + "NavigationProperty")) { return true; }
                if (IsDifferent(expected.Target, actual.Target, path + "Target")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmReferentialConstraint expected, IEdmReferentialConstraint actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferentSeq(expected.PropertyPairs, actual.PropertyPairs, IsDifferent, path + "PropertyPairs")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmPropertyConstructor expected, IEdmPropertyConstructor actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferent(expected.Value, actual.Value, path + "Value")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmCollectionType expected, IEdmCollectionType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.ElementType, actual.ElementType, path + "ElementType")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntityReferenceType expected, IEdmEntityReferenceType actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.TypeKind, actual.TypeKind, path + "TypeKind")) { return true; }
                if (IsDifferent(expected.EntityType, actual.EntityType, path + "EntityType")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmNavigationSource expected, IEdmNavigationSource actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmContainedEntitySet expectedContainedEntitySet && actual is IEdmContainedEntitySet actualContainedEntitySet)
                {
                    return IsDifferent(expectedContainedEntitySet, actualContainedEntitySet, path);
                }
                else if (expected is IEdmEntitySet expectedEntitySet && actual is IEdmEntitySet actualEntitySet)
                {
                    return IsDifferent(expectedEntitySet, actualEntitySet, path);
                }
                else if (expected is IEdmSingleton expectedSingleton && actual is IEdmSingleton actualSingleton)
                {
                    return IsDifferent(expectedSingleton, actualSingleton, path);
                }
                else if (expected is IEdmUnknownEntitySet expectedUnknownEntitySet && actual is IEdmUnknownEntitySet actualUnknownEntitySet)
                {
                    return IsDifferent(expectedUnknownEntitySet, actualUnknownEntitySet, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmNavigationSourceSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                    if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                    if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmNavigationSourceSubtypes = new[] { typeof(IEdmContainedEntitySet), typeof(IEdmEntitySet), typeof(IEdmSingleton), typeof(IEdmUnknownEntitySet) };

        public bool IsDifferent(IEdmContainedEntitySet expected, IEdmContainedEntitySet actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                if (IsDifferent(expected.ParentNavigationSource, actual.ParentNavigationSource, path + "ParentNavigationSource")) { return true; }
                if (IsDifferent(expected.NavigationProperty, actual.NavigationProperty, path + "NavigationProperty")) { return true; }
                return false;
            }
        }

        public bool IsDifferent(IEdmEntitySetBase expected, IEdmEntitySetBase actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (expected is IEdmContainedEntitySet expectedContainedEntitySet && actual is IEdmContainedEntitySet actualContainedEntitySet)
                {
                    return IsDifferent(expectedContainedEntitySet, actualContainedEntitySet, path);
                }
                else if (expected is IEdmEntitySet expectedEntitySet && actual is IEdmEntitySet actualEntitySet)
                {
                    return IsDifferent(expectedEntitySet, actualEntitySet, path);
                }
                else if (expected is IEdmUnknownEntitySet expectedUnknownEntitySet && actual is IEdmUnknownEntitySet actualUnknownEntitySet)
                {
                    return IsDifferent(expectedUnknownEntitySet, actualUnknownEntitySet, path);
                }
                else
                {
                    CheckTypeEquality(expected, actual, IEdmEntitySetBaseSubtypes, path);
                    if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                    if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                    if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                    if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                    return false;
                }
            }
        }

        readonly IList<Type> IEdmEntitySetBaseSubtypes = new[] { typeof(IEdmContainedEntitySet), typeof(IEdmEntitySet), typeof(IEdmUnknownEntitySet) };

        public bool IsDifferent(IEdmUnknownEntitySet expected, IEdmUnknownEntitySet actual, PropertyPath path)
        {
            using (PushLocation(expected, actual))
            {
                if (IsReferenceCheckComplete(expected, actual, path, out var areDifferent)) { return areDifferent; }
                if (IsDuplicateVisit(expected)) { return false; }
                if (IsDifferent(expected.Name, actual.Name, path + "Name")) { return true; }
                if (IsDifferentSeq(expected.NavigationPropertyBindings, actual.NavigationPropertyBindings, IsDifferent, path + "NavigationPropertyBindings")) { return true; }
                if (IsDifferent(expected.Path, actual.Path, path + "Path")) { return true; }
                if (IsDifferent(expected.Type, actual.Type, path + "Type")) { return true; }
                return false;
            }
        }
    }
}
