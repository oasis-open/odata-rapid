using System;
using System.Collections.Generic;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace Microsoft.OData.Edm
{
    internal partial class SchemaDeltaBuilder
    {
        public void Visit(IEdmSchemaElement a, IEdmSchemaElement b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmAction aAction && b is IEdmAction bAction)
                {
                    Visit(aAction, bAction, path);
                }
                else if (a is IEdmComplexType aComplexType && b is IEdmComplexType bComplexType)
                {
                    Visit(aComplexType, bComplexType, path);
                }
                else if (a is IEdmEntityContainer aEntityContainer && b is IEdmEntityContainer bEntityContainer)
                {
                    Visit(aEntityContainer, bEntityContainer, path);
                }
                else if (a is IEdmEntityType aEntityType && b is IEdmEntityType bEntityType)
                {
                    Visit(aEntityType, bEntityType, path);
                }
                else if (a is IEdmEnumType aEnumType && b is IEdmEnumType bEnumType)
                {
                    Visit(aEnumType, bEnumType, path);
                }
                else if (a is IEdmFunction aFunction && b is IEdmFunction bFunction)
                {
                    Visit(aFunction, bFunction, path);
                }
                else if (a is IEdmPathType aPathType && b is IEdmPathType bPathType)
                {
                    Visit(aPathType, bPathType, path);
                }
                else if (a is IEdmPrimitiveType aPrimitiveType && b is IEdmPrimitiveType bPrimitiveType)
                {
                    Visit(aPrimitiveType, bPrimitiveType, path);
                }
                else if (a is IEdmTerm aTerm && b is IEdmTerm bTerm)
                {
                    Visit(aTerm, bTerm, path);
                }
                else if (a is IEdmTypeDefinition aTypeDefinition && b is IEdmTypeDefinition bTypeDefinition)
                {
                    Visit(aTypeDefinition, bTypeDefinition, path);
                }
                else if (a is IEdmUntypedType aUntypedType && b is IEdmUntypedType bUntypedType)
                {
                    Visit(aUntypedType, bUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmSchemaElementSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                    Visit(a.Namespace, b.Namespace, path + "Namespace");
                }
            }
        }

        readonly IList<Type> IEdmSchemaElementSubtypes = new[] { typeof(IEdmAction), typeof(IEdmComplexType), typeof(IEdmEntityContainer), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmFunction), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmTerm), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public void Visit(IEdmVocabularyAnnotation a, IEdmVocabularyAnnotation b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Qualifier, b.Qualifier, path + "Qualifier");
                Visit(a.Term, b.Term, path + "Term");
                Visit(a.Target, b.Target, path + "Target");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmModel a, IEdmModel b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                VisitNamedSeq(a.SchemaElements, b.SchemaElements, Visit, path, "SchemaElements");
                VisitAnnotationSet(a.VocabularyAnnotations, b.VocabularyAnnotations, path + "Annotations");
                VisitSeq(a.ReferencedModels, b.ReferencedModels, Visit, path + "ReferencedModels");
                VisitSeq(a.DeclaredNamespaces, b.DeclaredNamespaces, Visit, path + "DeclaredNamespaces");
                Visit(a.DirectValueAnnotationsManager, b.DirectValueAnnotationsManager, path + "DirectValueAnnotationsManager");
                Visit(a.EntityContainer, b.EntityContainer, path + "EntityContainer");
            }
        }

        public void Visit(IEdmDirectValueAnnotationsManager a, IEdmDirectValueAnnotationsManager b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
            }
        }

        public void Visit(IEdmEntityContainer a, IEdmEntityContainer b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                VisitNamedSeq(a.Elements, b.Elements, Visit, path, "Elements");
            }
        }

        public void Visit(IEdmAction a, IEdmAction b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.ReturnType, b.ReturnType, path + "ReturnType");
                VisitNamedSeq(a.Parameters, b.Parameters, Visit, path, "Parameters");
                Visit(a.IsBound, b.IsBound, path + "IsBound");
                Visit(a.EntitySetPath, b.EntitySetPath, path + "EntitySetPath");
            }
        }

        public void Visit(IEdmComplexType a, IEdmComplexType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.IsAbstract, b.IsAbstract, path + "IsAbstract");
                Visit(a.IsOpen, b.IsOpen, path + "IsOpen");
                Visit(a.BaseType, b.BaseType, path + "BaseType");
                VisitNamedSeq(a.DeclaredProperties, b.DeclaredProperties, Visit, path, "DeclaredProperties");
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
            }
        }

        public void Visit(IEdmEntityType a, IEdmEntityType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.IsAbstract, b.IsAbstract, path + "IsAbstract");
                Visit(a.IsOpen, b.IsOpen, path + "IsOpen");
                Visit(a.BaseType, b.BaseType, path + "BaseType");
                VisitNamedSeq(a.DeclaredProperties, b.DeclaredProperties, Visit, path, "DeclaredProperties");
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                VisitNamedSeq(a.DeclaredKey, b.DeclaredKey, Visit, path, "DeclaredKey");
                Visit(a.HasStream, b.HasStream, path + "HasStream");
            }
        }

        public void Visit(IEdmEnumType a, IEdmEnumType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.UnderlyingType, b.UnderlyingType, path + "UnderlyingType");
                VisitNamedSeq(a.Members, b.Members, Visit, path, "Members");
                Visit(a.IsFlags, b.IsFlags, path + "IsFlags");
            }
        }

        public void Visit(IEdmFunction a, IEdmFunction b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.ReturnType, b.ReturnType, path + "ReturnType");
                VisitNamedSeq(a.Parameters, b.Parameters, Visit, path, "Parameters");
                Visit(a.IsBound, b.IsBound, path + "IsBound");
                Visit(a.EntitySetPath, b.EntitySetPath, path + "EntitySetPath");
                Visit(a.IsComposable, b.IsComposable, path + "IsComposable");
            }
        }

        public void Visit(IEdmOperation a, IEdmOperation b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmAction aAction && b is IEdmAction bAction)
                {
                    Visit(aAction, bAction, path);
                }
                else if (a is IEdmFunction aFunction && b is IEdmFunction bFunction)
                {
                    Visit(aFunction, bFunction, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmOperationSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                    Visit(a.Namespace, b.Namespace, path + "Namespace");
                    Visit(a.ReturnType, b.ReturnType, path + "ReturnType");
                    VisitNamedSeq(a.Parameters, b.Parameters, Visit, path, "Parameters");
                    Visit(a.IsBound, b.IsBound, path + "IsBound");
                    Visit(a.EntitySetPath, b.EntitySetPath, path + "EntitySetPath");
                }
            }
        }

        readonly IList<Type> IEdmOperationSubtypes = new[] { typeof(IEdmAction), typeof(IEdmFunction) };

        public void Visit(IEdmPathType a, IEdmPathType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.PathKind, b.PathKind, path + "PathKind");
            }
        }

        public void Visit(IEdmPrimitiveType a, IEdmPrimitiveType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.PrimitiveKind, b.PrimitiveKind, path + "PrimitiveKind");
            }
        }

        public void Visit(IEdmSchemaType a, IEdmSchemaType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmComplexType aComplexType && b is IEdmComplexType bComplexType)
                {
                    Visit(aComplexType, bComplexType, path);
                }
                else if (a is IEdmEntityType aEntityType && b is IEdmEntityType bEntityType)
                {
                    Visit(aEntityType, bEntityType, path);
                }
                else if (a is IEdmEnumType aEnumType && b is IEdmEnumType bEnumType)
                {
                    Visit(aEnumType, bEnumType, path);
                }
                else if (a is IEdmPathType aPathType && b is IEdmPathType bPathType)
                {
                    Visit(aPathType, bPathType, path);
                }
                else if (a is IEdmPrimitiveType aPrimitiveType && b is IEdmPrimitiveType bPrimitiveType)
                {
                    Visit(aPrimitiveType, bPrimitiveType, path);
                }
                else if (a is IEdmTypeDefinition aTypeDefinition && b is IEdmTypeDefinition bTypeDefinition)
                {
                    Visit(aTypeDefinition, bTypeDefinition, path);
                }
                else if (a is IEdmUntypedType aUntypedType && b is IEdmUntypedType bUntypedType)
                {
                    Visit(aUntypedType, bUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmSchemaTypeSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                    Visit(a.Namespace, b.Namespace, path + "Namespace");
                    Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                }
            }
        }

        readonly IList<Type> IEdmSchemaTypeSubtypes = new[] { typeof(IEdmComplexType), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public void Visit(IEdmTerm a, IEdmTerm b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.AppliesTo, b.AppliesTo, path + "AppliesTo");
                Visit(a.DefaultValue, b.DefaultValue, path + "DefaultValue");
            }
        }

        public void Visit(IEdmTypeDefinition a, IEdmTypeDefinition b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.UnderlyingType, b.UnderlyingType, path + "UnderlyingType");
            }
        }

        public void Visit(IEdmUntypedType a, IEdmUntypedType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.SchemaElementKind, b.SchemaElementKind, path + "SchemaElementKind");
                Visit(a.Namespace, b.Namespace, path + "Namespace");
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
            }
        }

        public void Visit(IEdmVocabularyAnnotatable a, IEdmVocabularyAnnotatable b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmAction aAction && b is IEdmAction bAction)
                {
                    Visit(aAction, bAction, path);
                }
                else if (a is IEdmActionImport aActionImport && b is IEdmActionImport bActionImport)
                {
                    Visit(aActionImport, bActionImport, path);
                }
                else if (a is IEdmComplexType aComplexType && b is IEdmComplexType bComplexType)
                {
                    Visit(aComplexType, bComplexType, path);
                }
                else if (a is IEdmEntityContainer aEntityContainer && b is IEdmEntityContainer bEntityContainer)
                {
                    Visit(aEntityContainer, bEntityContainer, path);
                }
                else if (a is IEdmEntitySet aEntitySet && b is IEdmEntitySet bEntitySet)
                {
                    Visit(aEntitySet, bEntitySet, path);
                }
                else if (a is IEdmEntityType aEntityType && b is IEdmEntityType bEntityType)
                {
                    Visit(aEntityType, bEntityType, path);
                }
                else if (a is IEdmEnumMember aEnumMember && b is IEdmEnumMember bEnumMember)
                {
                    Visit(aEnumMember, bEnumMember, path);
                }
                else if (a is IEdmEnumType aEnumType && b is IEdmEnumType bEnumType)
                {
                    Visit(aEnumType, bEnumType, path);
                }
                else if (a is IEdmFunction aFunction && b is IEdmFunction bFunction)
                {
                    Visit(aFunction, bFunction, path);
                }
                else if (a is IEdmFunctionImport aFunctionImport && b is IEdmFunctionImport bFunctionImport)
                {
                    Visit(aFunctionImport, bFunctionImport, path);
                }
                else if (a is IEdmNavigationProperty aNavigationProperty && b is IEdmNavigationProperty bNavigationProperty)
                {
                    Visit(aNavigationProperty, bNavigationProperty, path);
                }
                else if (a is IEdmOperationReturn aOperationReturn && b is IEdmOperationReturn bOperationReturn)
                {
                    Visit(aOperationReturn, bOperationReturn, path);
                }
                else if (a is IEdmOptionalParameter aOptionalParameter && b is IEdmOptionalParameter bOptionalParameter)
                {
                    Visit(aOptionalParameter, bOptionalParameter, path);
                }
                else if (a is IEdmPathType aPathType && b is IEdmPathType bPathType)
                {
                    Visit(aPathType, bPathType, path);
                }
                else if (a is IEdmPrimitiveType aPrimitiveType && b is IEdmPrimitiveType bPrimitiveType)
                {
                    Visit(aPrimitiveType, bPrimitiveType, path);
                }
                else if (a is IEdmSingleton aSingleton && b is IEdmSingleton bSingleton)
                {
                    Visit(aSingleton, bSingleton, path);
                }
                else if (a is IEdmStructuralProperty aStructuralProperty && b is IEdmStructuralProperty bStructuralProperty)
                {
                    Visit(aStructuralProperty, bStructuralProperty, path);
                }
                else if (a is IEdmTerm aTerm && b is IEdmTerm bTerm)
                {
                    Visit(aTerm, bTerm, path);
                }
                else if (a is IEdmTypeDefinition aTypeDefinition && b is IEdmTypeDefinition bTypeDefinition)
                {
                    Visit(aTypeDefinition, bTypeDefinition, path);
                }
                else if (a is IEdmUntypedType aUntypedType && b is IEdmUntypedType bUntypedType)
                {
                    Visit(aUntypedType, bUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmVocabularyAnnotatableSubtypes, path);
                }
            }
        }

        readonly IList<Type> IEdmVocabularyAnnotatableSubtypes = new[] { typeof(IEdmAction), typeof(IEdmActionImport), typeof(IEdmComplexType), typeof(IEdmEntityContainer), typeof(IEdmEntitySet), typeof(IEdmEntityType), typeof(IEdmEnumMember), typeof(IEdmEnumType), typeof(IEdmFunction), typeof(IEdmFunctionImport), typeof(IEdmNavigationProperty), typeof(IEdmOperationReturn), typeof(IEdmOptionalParameter), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmSingleton), typeof(IEdmStructuralProperty), typeof(IEdmTerm), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public void Visit(IEdmExpression a, IEdmExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmApplyExpression aApplyExpression && b is IEdmApplyExpression bApplyExpression)
                {
                    Visit(aApplyExpression, bApplyExpression, path);
                }
                else if (a is IEdmBinaryConstantExpression aBinaryConstantExpression && b is IEdmBinaryConstantExpression bBinaryConstantExpression)
                {
                    Visit(aBinaryConstantExpression, bBinaryConstantExpression, path);
                }
                else if (a is IEdmBooleanConstantExpression aBooleanConstantExpression && b is IEdmBooleanConstantExpression bBooleanConstantExpression)
                {
                    Visit(aBooleanConstantExpression, bBooleanConstantExpression, path);
                }
                else if (a is IEdmCastExpression aCastExpression && b is IEdmCastExpression bCastExpression)
                {
                    Visit(aCastExpression, bCastExpression, path);
                }
                else if (a is IEdmCollectionExpression aCollectionExpression && b is IEdmCollectionExpression bCollectionExpression)
                {
                    Visit(aCollectionExpression, bCollectionExpression, path);
                }
                else if (a is IEdmDateConstantExpression aDateConstantExpression && b is IEdmDateConstantExpression bDateConstantExpression)
                {
                    Visit(aDateConstantExpression, bDateConstantExpression, path);
                }
                else if (a is IEdmDateTimeOffsetConstantExpression aDateTimeOffsetConstantExpression && b is IEdmDateTimeOffsetConstantExpression bDateTimeOffsetConstantExpression)
                {
                    Visit(aDateTimeOffsetConstantExpression, bDateTimeOffsetConstantExpression, path);
                }
                else if (a is IEdmDecimalConstantExpression aDecimalConstantExpression && b is IEdmDecimalConstantExpression bDecimalConstantExpression)
                {
                    Visit(aDecimalConstantExpression, bDecimalConstantExpression, path);
                }
                else if (a is IEdmDurationConstantExpression aDurationConstantExpression && b is IEdmDurationConstantExpression bDurationConstantExpression)
                {
                    Visit(aDurationConstantExpression, bDurationConstantExpression, path);
                }
                else if (a is IEdmEnumMemberExpression aEnumMemberExpression && b is IEdmEnumMemberExpression bEnumMemberExpression)
                {
                    Visit(aEnumMemberExpression, bEnumMemberExpression, path);
                }
                else if (a is IEdmFloatingConstantExpression aFloatingConstantExpression && b is IEdmFloatingConstantExpression bFloatingConstantExpression)
                {
                    Visit(aFloatingConstantExpression, bFloatingConstantExpression, path);
                }
                else if (a is IEdmGuidConstantExpression aGuidConstantExpression && b is IEdmGuidConstantExpression bGuidConstantExpression)
                {
                    Visit(aGuidConstantExpression, bGuidConstantExpression, path);
                }
                else if (a is IEdmIfExpression aIfExpression && b is IEdmIfExpression bIfExpression)
                {
                    Visit(aIfExpression, bIfExpression, path);
                }
                else if (a is IEdmIntegerConstantExpression aIntegerConstantExpression && b is IEdmIntegerConstantExpression bIntegerConstantExpression)
                {
                    Visit(aIntegerConstantExpression, bIntegerConstantExpression, path);
                }
                else if (a is IEdmIsTypeExpression aIsTypeExpression && b is IEdmIsTypeExpression bIsTypeExpression)
                {
                    Visit(aIsTypeExpression, bIsTypeExpression, path);
                }
                else if (a is IEdmLabeledExpression aLabeledExpression && b is IEdmLabeledExpression bLabeledExpression)
                {
                    Visit(aLabeledExpression, bLabeledExpression, path);
                }
                else if (a is IEdmLabeledExpressionReferenceExpression aLabeledExpressionReferenceExpression && b is IEdmLabeledExpressionReferenceExpression bLabeledExpressionReferenceExpression)
                {
                    Visit(aLabeledExpressionReferenceExpression, bLabeledExpressionReferenceExpression, path);
                }
                else if (a is IEdmNullExpression aNullExpression && b is IEdmNullExpression bNullExpression)
                {
                    Visit(aNullExpression, bNullExpression, path);
                }
                else if (a is IEdmPathExpression aPathExpression && b is IEdmPathExpression bPathExpression)
                {
                    Visit(aPathExpression, bPathExpression, path);
                }
                else if (a is IEdmRecordExpression aRecordExpression && b is IEdmRecordExpression bRecordExpression)
                {
                    Visit(aRecordExpression, bRecordExpression, path);
                }
                else if (a is IEdmStringConstantExpression aStringConstantExpression && b is IEdmStringConstantExpression bStringConstantExpression)
                {
                    Visit(aStringConstantExpression, bStringConstantExpression, path);
                }
                else if (a is IEdmTimeOfDayConstantExpression aTimeOfDayConstantExpression && b is IEdmTimeOfDayConstantExpression bTimeOfDayConstantExpression)
                {
                    Visit(aTimeOfDayConstantExpression, bTimeOfDayConstantExpression, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmExpressionSubtypes, path);
                    Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                }
            }
        }

        readonly IList<Type> IEdmExpressionSubtypes = new[] { typeof(IEdmApplyExpression), typeof(IEdmBinaryConstantExpression), typeof(IEdmBooleanConstantExpression), typeof(IEdmCastExpression), typeof(IEdmCollectionExpression), typeof(IEdmDateConstantExpression), typeof(IEdmDateTimeOffsetConstantExpression), typeof(IEdmDecimalConstantExpression), typeof(IEdmDurationConstantExpression), typeof(IEdmEnumMemberExpression), typeof(IEdmFloatingConstantExpression), typeof(IEdmGuidConstantExpression), typeof(IEdmIfExpression), typeof(IEdmIntegerConstantExpression), typeof(IEdmIsTypeExpression), typeof(IEdmLabeledExpression), typeof(IEdmLabeledExpressionReferenceExpression), typeof(IEdmNullExpression), typeof(IEdmPathExpression), typeof(IEdmRecordExpression), typeof(IEdmStringConstantExpression), typeof(IEdmTimeOfDayConstantExpression) };

        public void Visit(IEdmEntityContainerElement a, IEdmEntityContainerElement b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmActionImport aActionImport && b is IEdmActionImport bActionImport)
                {
                    Visit(aActionImport, bActionImport, path);
                }
                else if (a is IEdmEntitySet aEntitySet && b is IEdmEntitySet bEntitySet)
                {
                    Visit(aEntitySet, bEntitySet, path);
                }
                else if (a is IEdmFunctionImport aFunctionImport && b is IEdmFunctionImport bFunctionImport)
                {
                    Visit(aFunctionImport, bFunctionImport, path);
                }
                else if (a is IEdmSingleton aSingleton && b is IEdmSingleton bSingleton)
                {
                    Visit(aSingleton, bSingleton, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmEntityContainerElementSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                    Visit(a.Container, b.Container, path + "Container");
                }
            }
        }

        readonly IList<Type> IEdmEntityContainerElementSubtypes = new[] { typeof(IEdmActionImport), typeof(IEdmEntitySet), typeof(IEdmFunctionImport), typeof(IEdmSingleton) };

        public void Visit(IEdmTypeReference a, IEdmTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmBinaryTypeReference aBinaryTypeReference && b is IEdmBinaryTypeReference bBinaryTypeReference)
                {
                    Visit(aBinaryTypeReference, bBinaryTypeReference, path);
                }
                else if (a is IEdmCollectionTypeReference aCollectionTypeReference && b is IEdmCollectionTypeReference bCollectionTypeReference)
                {
                    Visit(aCollectionTypeReference, bCollectionTypeReference, path);
                }
                else if (a is IEdmComplexTypeReference aComplexTypeReference && b is IEdmComplexTypeReference bComplexTypeReference)
                {
                    Visit(aComplexTypeReference, bComplexTypeReference, path);
                }
                else if (a is IEdmDecimalTypeReference aDecimalTypeReference && b is IEdmDecimalTypeReference bDecimalTypeReference)
                {
                    Visit(aDecimalTypeReference, bDecimalTypeReference, path);
                }
                else if (a is IEdmEntityReferenceTypeReference aEntityReferenceTypeReference && b is IEdmEntityReferenceTypeReference bEntityReferenceTypeReference)
                {
                    Visit(aEntityReferenceTypeReference, bEntityReferenceTypeReference, path);
                }
                else if (a is IEdmEntityTypeReference aEntityTypeReference && b is IEdmEntityTypeReference bEntityTypeReference)
                {
                    Visit(aEntityTypeReference, bEntityTypeReference, path);
                }
                else if (a is IEdmEnumTypeReference aEnumTypeReference && b is IEdmEnumTypeReference bEnumTypeReference)
                {
                    Visit(aEnumTypeReference, bEnumTypeReference, path);
                }
                else if (a is IEdmPathTypeReference aPathTypeReference && b is IEdmPathTypeReference bPathTypeReference)
                {
                    Visit(aPathTypeReference, bPathTypeReference, path);
                }
                else if (a is IEdmSpatialTypeReference aSpatialTypeReference && b is IEdmSpatialTypeReference bSpatialTypeReference)
                {
                    Visit(aSpatialTypeReference, bSpatialTypeReference, path);
                }
                else if (a is IEdmStringTypeReference aStringTypeReference && b is IEdmStringTypeReference bStringTypeReference)
                {
                    Visit(aStringTypeReference, bStringTypeReference, path);
                }
                else if (a is IEdmTemporalTypeReference aTemporalTypeReference && b is IEdmTemporalTypeReference bTemporalTypeReference)
                {
                    Visit(aTemporalTypeReference, bTemporalTypeReference, path);
                }
                else if (a is IEdmTypeDefinitionReference aTypeDefinitionReference && b is IEdmTypeDefinitionReference bTypeDefinitionReference)
                {
                    Visit(aTypeDefinitionReference, bTypeDefinitionReference, path);
                }
                else if (a is IEdmUntypedTypeReference aUntypedTypeReference && b is IEdmUntypedTypeReference bUntypedTypeReference)
                {
                    Visit(aUntypedTypeReference, bUntypedTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmTypeReferenceSubtypes, path);
                    Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                    Visit(a.Definition, b.Definition, path + "Definition");
                }
            }
        }

        readonly IList<Type> IEdmTypeReferenceSubtypes = new[] { typeof(IEdmBinaryTypeReference), typeof(IEdmCollectionTypeReference), typeof(IEdmComplexTypeReference), typeof(IEdmDecimalTypeReference), typeof(IEdmEntityReferenceTypeReference), typeof(IEdmEntityTypeReference), typeof(IEdmEnumTypeReference), typeof(IEdmPathTypeReference), typeof(IEdmSpatialTypeReference), typeof(IEdmStringTypeReference), typeof(IEdmTemporalTypeReference), typeof(IEdmTypeDefinitionReference), typeof(IEdmUntypedTypeReference) };

        public void Visit(IEdmOperationParameter a, IEdmOperationParameter b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmOptionalParameter aOptionalParameter && b is IEdmOptionalParameter bOptionalParameter)
                {
                    Visit(aOptionalParameter, bOptionalParameter, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmOperationParameterSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.Type, b.Type, path + "Type");
                    Visit(a.DeclaringOperation, b.DeclaringOperation, path + "DeclaringOperation");
                }
            }
        }

        readonly IList<Type> IEdmOperationParameterSubtypes = new[] { typeof(IEdmOptionalParameter) };

        public void Visit(IEdmPathExpression a, IEdmPathExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                VisitSeq(a.PathSegments, b.PathSegments, Visit, path + "PathSegments");
                Visit(a.Path, b.Path, path + "Path");
            }
        }

        public void Visit(IEdmStructuredType a, IEdmStructuredType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmComplexType aComplexType && b is IEdmComplexType bComplexType)
                {
                    Visit(aComplexType, bComplexType, path);
                }
                else if (a is IEdmEntityType aEntityType && b is IEdmEntityType bEntityType)
                {
                    Visit(aEntityType, bEntityType, path);
                }
                else if (a is IEdmRowType aRowType && b is IEdmRowType bRowType)
                {
                    Visit(aRowType, bRowType, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmStructuredTypeSubtypes, path);
                    Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                    Visit(a.IsAbstract, b.IsAbstract, path + "IsAbstract");
                    Visit(a.IsOpen, b.IsOpen, path + "IsOpen");
                    Visit(a.BaseType, b.BaseType, path + "BaseType");
                    VisitNamedSeq(a.DeclaredProperties, b.DeclaredProperties, Visit, path, "DeclaredProperties");
                }
            }
        }

        readonly IList<Type> IEdmStructuredTypeSubtypes = new[] { typeof(IEdmComplexType), typeof(IEdmEntityType), typeof(IEdmRowType) };

        public void Visit(IEdmProperty a, IEdmProperty b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmNavigationProperty aNavigationProperty && b is IEdmNavigationProperty bNavigationProperty)
                {
                    Visit(aNavigationProperty, bNavigationProperty, path);
                }
                else if (a is IEdmStructuralProperty aStructuralProperty && b is IEdmStructuralProperty bStructuralProperty)
                {
                    Visit(aStructuralProperty, bStructuralProperty, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmPropertySubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.PropertyKind, b.PropertyKind, path + "PropertyKind");
                    Visit(a.Type, b.Type, path + "Type");
                    Visit(a.DeclaringType, b.DeclaringType, path + "DeclaringType");
                }
            }
        }

        readonly IList<Type> IEdmPropertySubtypes = new[] { typeof(IEdmNavigationProperty), typeof(IEdmStructuralProperty) };

        public void Visit(IEdmStructuralProperty a, IEdmStructuralProperty b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.PropertyKind, b.PropertyKind, path + "PropertyKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.DeclaringType, b.DeclaringType, path + "DeclaringType");
                Visit(a.DefaultValueString, b.DefaultValueString, path + "DefaultValueString");
            }
        }

        public void Visit(IEdmEnumMember a, IEdmEnumMember b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.Value, b.Value, path + "Value");
                Visit(a.DeclaringType, b.DeclaringType, path + "DeclaringType");
            }
        }

        public void Visit(IEdmActionImport a, IEdmActionImport b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                Visit(a.Container, b.Container, path + "Container");
                Visit(a.Operation, b.Operation, path + "Operation");
                Visit(a.EntitySet, b.EntitySet, path + "EntitySet");
                Visit(a.Action, b.Action, path + "Action");
            }
        }

        public void Visit(IEdmEntitySet a, IEdmEntitySet b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                Visit(a.Path, b.Path, path + "Path");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                Visit(a.Container, b.Container, path + "Container");
                Visit(a.IncludeInServiceDocument, b.IncludeInServiceDocument, path + "IncludeInServiceDocument");
            }
        }

        public void Visit(IEdmFunctionImport a, IEdmFunctionImport b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                Visit(a.Container, b.Container, path + "Container");
                Visit(a.Operation, b.Operation, path + "Operation");
                Visit(a.EntitySet, b.EntitySet, path + "EntitySet");
                Visit(a.IncludeInServiceDocument, b.IncludeInServiceDocument, path + "IncludeInServiceDocument");
                Visit(a.Function, b.Function, path + "Function");
            }
        }

        public void Visit(IEdmNavigationProperty a, IEdmNavigationProperty b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.PropertyKind, b.PropertyKind, path + "PropertyKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.DeclaringType, b.DeclaringType, path + "DeclaringType");
                Visit(a.Partner, b.Partner, path + "Partner");
                Visit(a.OnDelete, b.OnDelete, path + "OnDelete");
                Visit(a.ContainsTarget, b.ContainsTarget, path + "ContainsTarget");
                Visit(a.ReferentialConstraint, b.ReferentialConstraint, path + "ReferentialConstraint");
            }
        }

        public void Visit(IEdmOperationImport a, IEdmOperationImport b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmActionImport aActionImport && b is IEdmActionImport bActionImport)
                {
                    Visit(aActionImport, bActionImport, path);
                }
                else if (a is IEdmFunctionImport aFunctionImport && b is IEdmFunctionImport bFunctionImport)
                {
                    Visit(aFunctionImport, bFunctionImport, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmOperationImportSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                    Visit(a.Container, b.Container, path + "Container");
                    Visit(a.Operation, b.Operation, path + "Operation");
                    Visit(a.EntitySet, b.EntitySet, path + "EntitySet");
                }
            }
        }

        readonly IList<Type> IEdmOperationImportSubtypes = new[] { typeof(IEdmActionImport), typeof(IEdmFunctionImport) };

        public void Visit(IEdmOperationReturn a, IEdmOperationReturn b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.DeclaringOperation, b.DeclaringOperation, path + "DeclaringOperation");
            }
        }

        public void Visit(IEdmOptionalParameter a, IEdmOptionalParameter b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.DeclaringOperation, b.DeclaringOperation, path + "DeclaringOperation");
                Visit(a.DefaultValueString, b.DefaultValueString, path + "DefaultValueString");
            }
        }

        public void Visit(IEdmSingleton a, IEdmSingleton b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.ContainerElementKind, b.ContainerElementKind, path + "ContainerElementKind");
                Visit(a.Container, b.Container, path + "Container");
                VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                Visit(a.Path, b.Path, path + "Path");
                Visit(a.Type, b.Type, path + "Type");
            }
        }

        public void Visit(IEdmApplyExpression a, IEdmApplyExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.AppliedFunction, b.AppliedFunction, path + "AppliedFunction");
                VisitSeq(a.Arguments, b.Arguments, Visit, path + "Arguments");
            }
        }

        public void Visit(IEdmBinaryConstantExpression a, IEdmBinaryConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmBooleanConstantExpression a, IEdmBooleanConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmCastExpression a, IEdmCastExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Operand, b.Operand, path + "Operand");
                Visit(a.Type, b.Type, path + "Type");
            }
        }

        public void Visit(IEdmCollectionExpression a, IEdmCollectionExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.DeclaredType, b.DeclaredType, path + "DeclaredType");
                VisitSeq(a.Elements, b.Elements, Visit, path + "Elements");
            }
        }

        public void Visit(IEdmDateConstantExpression a, IEdmDateConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmDateTimeOffsetConstantExpression a, IEdmDateTimeOffsetConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmDecimalConstantExpression a, IEdmDecimalConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmDurationConstantExpression a, IEdmDurationConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmEnumMemberExpression a, IEdmEnumMemberExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                VisitNamedSeq(a.EnumMembers, b.EnumMembers, Visit, path, "EnumMembers");
            }
        }

        public void Visit(IEdmFloatingConstantExpression a, IEdmFloatingConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmGuidConstantExpression a, IEdmGuidConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmIfExpression a, IEdmIfExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.TestExpression, b.TestExpression, path + "TestExpression");
                Visit(a.TrueExpression, b.TrueExpression, path + "TrueExpression");
                Visit(a.FalseExpression, b.FalseExpression, path + "FalseExpression");
            }
        }

        public void Visit(IEdmIntegerConstantExpression a, IEdmIntegerConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmIsTypeExpression a, IEdmIsTypeExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Operand, b.Operand, path + "Operand");
                Visit(a.Type, b.Type, path + "Type");
            }
        }

        public void Visit(IEdmLabeledExpression a, IEdmLabeledExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Expression, b.Expression, path + "Expression");
            }
        }

        public void Visit(IEdmLabeledExpressionReferenceExpression a, IEdmLabeledExpressionReferenceExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.ReferencedLabeledExpression, b.ReferencedLabeledExpression, path + "ReferencedLabeledExpression");
            }
        }

        public void Visit(IEdmNullExpression a, IEdmNullExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
            }
        }

        public void Visit(IEdmRecordExpression a, IEdmRecordExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.DeclaredType, b.DeclaredType, path + "DeclaredType");
                VisitSeq(a.Properties, b.Properties, Visit, path + "Properties");
            }
        }

        public void Visit(IEdmStringConstantExpression a, IEdmStringConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmTimeOfDayConstantExpression a, IEdmTimeOfDayConstantExpression b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.ExpressionKind, b.ExpressionKind, path + "ExpressionKind");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ValueKind, b.ValueKind, path + "ValueKind");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmType a, IEdmType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmCollectionType aCollectionType && b is IEdmCollectionType bCollectionType)
                {
                    Visit(aCollectionType, bCollectionType, path);
                }
                else if (a is IEdmComplexType aComplexType && b is IEdmComplexType bComplexType)
                {
                    Visit(aComplexType, bComplexType, path);
                }
                else if (a is IEdmEntityReferenceType aEntityReferenceType && b is IEdmEntityReferenceType bEntityReferenceType)
                {
                    Visit(aEntityReferenceType, bEntityReferenceType, path);
                }
                else if (a is IEdmEntityType aEntityType && b is IEdmEntityType bEntityType)
                {
                    Visit(aEntityType, bEntityType, path);
                }
                else if (a is IEdmEnumType aEnumType && b is IEdmEnumType bEnumType)
                {
                    Visit(aEnumType, bEnumType, path);
                }
                else if (a is IEdmPathType aPathType && b is IEdmPathType bPathType)
                {
                    Visit(aPathType, bPathType, path);
                }
                else if (a is IEdmPrimitiveType aPrimitiveType && b is IEdmPrimitiveType bPrimitiveType)
                {
                    Visit(aPrimitiveType, bPrimitiveType, path);
                }
                else if (a is IEdmRowType aRowType && b is IEdmRowType bRowType)
                {
                    Visit(aRowType, bRowType, path);
                }
                else if (a is IEdmTypeDefinition aTypeDefinition && b is IEdmTypeDefinition bTypeDefinition)
                {
                    Visit(aTypeDefinition, bTypeDefinition, path);
                }
                else if (a is IEdmUntypedType aUntypedType && b is IEdmUntypedType bUntypedType)
                {
                    Visit(aUntypedType, bUntypedType, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmTypeSubtypes, path);
                    Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                }
            }
        }

        readonly IList<Type> IEdmTypeSubtypes = new[] { typeof(IEdmCollectionType), typeof(IEdmComplexType), typeof(IEdmEntityReferenceType), typeof(IEdmEntityType), typeof(IEdmEnumType), typeof(IEdmPathType), typeof(IEdmPrimitiveType), typeof(IEdmRowType), typeof(IEdmTypeDefinition), typeof(IEdmUntypedType) };

        public void Visit(IEdmBinaryTypeReference a, IEdmBinaryTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.IsUnbounded, b.IsUnbounded, path + "IsUnbounded");
                Visit(a.MaxLength, b.MaxLength, path + "MaxLength");
            }
        }

        public void Visit(IEdmCollectionTypeReference a, IEdmCollectionTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmComplexTypeReference a, IEdmComplexTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmDecimalTypeReference a, IEdmDecimalTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.Precision, b.Precision, path + "Precision");
                Visit(a.Scale, b.Scale, path + "Scale");
            }
        }

        public void Visit(IEdmEntityReferenceTypeReference a, IEdmEntityReferenceTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmEntityTypeReference a, IEdmEntityTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmEnumTypeReference a, IEdmEnumTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmPathTypeReference a, IEdmPathTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmPrimitiveTypeReference a, IEdmPrimitiveTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmBinaryTypeReference aBinaryTypeReference && b is IEdmBinaryTypeReference bBinaryTypeReference)
                {
                    Visit(aBinaryTypeReference, bBinaryTypeReference, path);
                }
                else if (a is IEdmDecimalTypeReference aDecimalTypeReference && b is IEdmDecimalTypeReference bDecimalTypeReference)
                {
                    Visit(aDecimalTypeReference, bDecimalTypeReference, path);
                }
                else if (a is IEdmSpatialTypeReference aSpatialTypeReference && b is IEdmSpatialTypeReference bSpatialTypeReference)
                {
                    Visit(aSpatialTypeReference, bSpatialTypeReference, path);
                }
                else if (a is IEdmStringTypeReference aStringTypeReference && b is IEdmStringTypeReference bStringTypeReference)
                {
                    Visit(aStringTypeReference, bStringTypeReference, path);
                }
                else if (a is IEdmTemporalTypeReference aTemporalTypeReference && b is IEdmTemporalTypeReference bTemporalTypeReference)
                {
                    Visit(aTemporalTypeReference, bTemporalTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmPrimitiveTypeReferenceSubtypes, path);
                    Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                    Visit(a.Definition, b.Definition, path + "Definition");
                }
            }
        }

        readonly IList<Type> IEdmPrimitiveTypeReferenceSubtypes = new[] { typeof(IEdmBinaryTypeReference), typeof(IEdmDecimalTypeReference), typeof(IEdmSpatialTypeReference), typeof(IEdmStringTypeReference), typeof(IEdmTemporalTypeReference) };

        public void Visit(IEdmSpatialTypeReference a, IEdmSpatialTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.SpatialReferenceIdentifier, b.SpatialReferenceIdentifier, path + "SpatialReferenceIdentifier");
            }
        }

        public void Visit(IEdmStringTypeReference a, IEdmStringTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.IsUnbounded, b.IsUnbounded, path + "IsUnbounded");
                Visit(a.MaxLength, b.MaxLength, path + "MaxLength");
                Visit(a.IsUnicode, b.IsUnicode, path + "IsUnicode");
            }
        }

        public void Visit(IEdmStructuredTypeReference a, IEdmStructuredTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmComplexTypeReference aComplexTypeReference && b is IEdmComplexTypeReference bComplexTypeReference)
                {
                    Visit(aComplexTypeReference, bComplexTypeReference, path);
                }
                else if (a is IEdmEntityTypeReference aEntityTypeReference && b is IEdmEntityTypeReference bEntityTypeReference)
                {
                    Visit(aEntityTypeReference, bEntityTypeReference, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmStructuredTypeReferenceSubtypes, path);
                    Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                    Visit(a.Definition, b.Definition, path + "Definition");
                }
            }
        }

        readonly IList<Type> IEdmStructuredTypeReferenceSubtypes = new[] { typeof(IEdmComplexTypeReference), typeof(IEdmEntityTypeReference) };

        public void Visit(IEdmTemporalTypeReference a, IEdmTemporalTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.Precision, b.Precision, path + "Precision");
            }
        }

        public void Visit(IEdmTypeDefinitionReference a, IEdmTypeDefinitionReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
                Visit(a.IsUnbounded, b.IsUnbounded, path + "IsUnbounded");
                Visit(a.MaxLength, b.MaxLength, path + "MaxLength");
                Visit(a.IsUnicode, b.IsUnicode, path + "IsUnicode");
                Visit(a.Precision, b.Precision, path + "Precision");
                Visit(a.Scale, b.Scale, path + "Scale");
                Visit(a.SpatialReferenceIdentifier, b.SpatialReferenceIdentifier, path + "SpatialReferenceIdentifier");
            }
        }

        public void Visit(IEdmUntypedTypeReference a, IEdmUntypedTypeReference b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.IsNullable, b.IsNullable, path + "IsNullable");
                Visit(a.Definition, b.Definition, path + "Definition");
            }
        }

        public void Visit(IEdmRowType a, IEdmRowType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.IsAbstract, b.IsAbstract, path + "IsAbstract");
                Visit(a.IsOpen, b.IsOpen, path + "IsOpen");
                Visit(a.BaseType, b.BaseType, path + "BaseType");
                VisitNamedSeq(a.DeclaredProperties, b.DeclaredProperties, Visit, path, "DeclaredProperties");
            }
        }

        public void Visit(IEdmEnumMemberValue a, IEdmEnumMemberValue b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmNavigationPropertyBinding a, IEdmNavigationPropertyBinding b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.NavigationProperty, b.NavigationProperty, path + "NavigationProperty");
                Visit(a.Target, b.Target, path + "Target");
                Visit(a.Path, b.Path, path + "Path");
            }
        }

        public void Visit(IEdmReferentialConstraint a, IEdmReferentialConstraint b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                VisitSeq(a.PropertyPairs, b.PropertyPairs, Visit, path + "PropertyPairs");
            }
        }

        public void Visit(IEdmPropertyConstructor a, IEdmPropertyConstructor b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                Visit(a.Value, b.Value, path + "Value");
            }
        }

        public void Visit(IEdmCollectionType a, IEdmCollectionType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.ElementType, b.ElementType, path + "ElementType");
            }
        }

        public void Visit(IEdmEntityReferenceType a, IEdmEntityReferenceType b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.TypeKind, b.TypeKind, path + "TypeKind");
                Visit(a.EntityType, b.EntityType, path + "EntityType");
            }
        }

        public void Visit(IEdmNavigationSource a, IEdmNavigationSource b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmContainedEntitySet aContainedEntitySet && b is IEdmContainedEntitySet bContainedEntitySet)
                {
                    Visit(aContainedEntitySet, bContainedEntitySet, path);
                }
                else if (a is IEdmEntitySet aEntitySet && b is IEdmEntitySet bEntitySet)
                {
                    Visit(aEntitySet, bEntitySet, path);
                }
                else if (a is IEdmSingleton aSingleton && b is IEdmSingleton bSingleton)
                {
                    Visit(aSingleton, bSingleton, path);
                }
                else if (a is IEdmUnknownEntitySet aUnknownEntitySet && b is IEdmUnknownEntitySet bUnknownEntitySet)
                {
                    Visit(aUnknownEntitySet, bUnknownEntitySet, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmNavigationSourceSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                    Visit(a.Path, b.Path, path + "Path");
                    Visit(a.Type, b.Type, path + "Type");
                }
            }
        }

        readonly IList<Type> IEdmNavigationSourceSubtypes = new[] { typeof(IEdmContainedEntitySet), typeof(IEdmEntitySet), typeof(IEdmSingleton), typeof(IEdmUnknownEntitySet) };

        public void Visit(IEdmContainedEntitySet a, IEdmContainedEntitySet b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                Visit(a.Path, b.Path, path + "Path");
                Visit(a.Type, b.Type, path + "Type");
                Visit(a.ParentNavigationSource, b.ParentNavigationSource, path + "ParentNavigationSource");
                Visit(a.NavigationProperty, b.NavigationProperty, path + "NavigationProperty");
            }
        }

        public void Visit(IEdmEntitySetBase a, IEdmEntitySetBase b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (a is IEdmContainedEntitySet aContainedEntitySet && b is IEdmContainedEntitySet bContainedEntitySet)
                {
                    Visit(aContainedEntitySet, bContainedEntitySet, path);
                }
                else if (a is IEdmEntitySet aEntitySet && b is IEdmEntitySet bEntitySet)
                {
                    Visit(aEntitySet, bEntitySet, path);
                }
                else if (a is IEdmUnknownEntitySet aUnknownEntitySet && b is IEdmUnknownEntitySet bUnknownEntitySet)
                {
                    Visit(aUnknownEntitySet, bUnknownEntitySet, path);
                }
                else
                {
                    CheckTypeEquality(a, b, IEdmEntitySetBaseSubtypes, path);
                    Visit(a.Name, b.Name, path + "Name");
                    VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                    Visit(a.Path, b.Path, path + "Path");
                    Visit(a.Type, b.Type, path + "Type");
                }
            }
        }

        readonly IList<Type> IEdmEntitySetBaseSubtypes = new[] { typeof(IEdmContainedEntitySet), typeof(IEdmEntitySet), typeof(IEdmUnknownEntitySet) };

        public void Visit(IEdmUnknownEntitySet a, IEdmUnknownEntitySet b, PropertyPath path)
        {
            using (PushLocation(a, b))
            {
                if (IsReferenceCheckComplete(a, b, path)) return;
                if (visited.Contains(a)) return;
                visited.Add(a);
                Visit(a.Name, b.Name, path + "Name");
                VisitSeq(a.NavigationPropertyBindings, b.NavigationPropertyBindings, Visit, path + "NavigationPropertyBindings");
                Visit(a.Path, b.Path, path + "Path");
                Visit(a.Type, b.Type, path + "Type");
            }
        }
    }
}