using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm.Vocabularies;
using Microsoft.OData.Edm.Vocabularies.Measures.V1;
using Microsoft.OData.Edm.Vocabularies.V1;

namespace rapid.rdm
{
    public class AnnotationBuilder
    {
        private readonly ILogger logger;

        public AnnotationBuilder(ILogger logger)
        {
            this.logger = logger;
        }

        public void AddAnnotations(EdmModel edmModel, IEdmVocabularyAnnotatable annotatable, IEnumerable<Annotation> annotations)
        {
            foreach (var annotation in annotations)
            {
                this.AddAnnotation(edmModel, annotatable, annotation);
            }
        }

        public void AddAnnotation(EdmModel edmModel, IEdmVocabularyAnnotatable annotatable, Annotation annotation)
        {
            var term = FindTerm(annotation.Name);
            if (term != null)
            {
                var expr = ConvertAnnotationExpression(annotation.Value);

                var edmAnnotation = new EdmVocabularyAnnotation(annotatable, term, expr);
                edmModel.AddVocabularyAnnotation(edmAnnotation, EdmVocabularyAnnotationSerializationLocation.Inline);

                ValidateAppliesTo(term, annotatable, annotation.Position);
                ValidateExpressionType(term, expr, annotation.Position);
            }
            else
            {
                logger.LogError("can't find annotation term {0}", annotation.Name);
            }
        }

        private void ValidateExpressionType(IEdmTerm term, IEdmExpression expr, Position position)
        {
            var errors = new ErrorList();

            if (!(CheckType(term.Type, expr, ref errors) && errors.IsEmpty))
            {
                logger.LogError("annotation value invalid for annotation {0} of type '{1}' ({2}){3}",
                    term.FullName(), term.Type.FullName(), position, errors);
            }
        }

        private class ErrorList
        {
            public IList<string> Errors { get; } = new List<string>();

            public bool IsEmpty => Errors.Count == 0;


            public override string ToString()
            {
                return string.Concat(from error in Errors select $"\n\t{error}");
            }

            internal void Add(string format, params object[] args)
            {
                Errors.Add(string.Format(format, args));
            }
        }

        private static bool CheckType(IEdmTypeReference type, IEdmExpression expr, ref ErrorList errors)
        {
            if (type.IsNullable)
            {
                return true;
            }

            var def = type.Definition;
            switch (def)
            {
                case IEdmPrimitiveType primitive:
                    switch (primitive.PrimitiveKind)
                    {
                        case EdmPrimitiveTypeKind.Boolean:
                            return Ensure(expr, k => k == EdmExpressionKind.BooleanConstant, "boolean", ref errors);
                        case EdmPrimitiveTypeKind.String:
                            return Ensure(expr, k => k == EdmExpressionKind.StringConstant, "string", ref errors);
                        case EdmPrimitiveTypeKind.Decimal:
                            return Ensure(expr, k => k == EdmExpressionKind.DecimalConstant || k == EdmExpressionKind.IntegerConstant, "number", ref errors);
                        default:
                            errors.Add("not implemented: check primitive type {0}", primitive.PrimitiveKind);
                            return false;
                    }
                case IEdmCollectionType collectionType:
                    if (expr is IEdmCollectionExpression collection)
                    {
                        var elementType = collectionType.ElementType;
                        var valid = true;
                        foreach (var element in collection.Elements)
                        {
                            valid &= CheckType(elementType, element, ref errors);
                        }
                        return valid;
                    }
                    else
                    {
                        errors.Add("expected collection");
                        return false;
                    }
                case IEdmStructuredType structuredType:
                    if (expr is IEdmRecordExpression record)
                    {
                        var pairs = record.Properties.FullOuterJoin(structuredType.Properties(),
                            pv => pv.Name,
                            pt => pt.Name,
                            (name, pv, pt) => (name, pt?.Type, pv?.Value)
                        );
                        // errors.Add("matching {0} {1}",
                        //     string.Join(",", record.Properties.Select(p => p.Name)),
                        //     string.Join(",", structuredType.Properties().Select(p => p.Name)));
                        var valid = true;
                        foreach (var match in pairs)
                        {
                            var (name, propType, propValue) = match;
                            if (propType == null)
                            {
                                valid = false;
                                errors.Add("redundant property '{0}' for type {1}", name, structuredType.FullTypeName());
                            }
                            else if (propValue == null)
                            {
                                valid = false;
                                errors.Add("missing property '{0}' for type {1}", name, structuredType.FullTypeName());
                            }
                            else
                            {
                                valid &= CheckType(propType, propValue, ref errors);
                            }
                        }
                        return valid;
                    }
                    else
                    {
                        errors.Add("expected record, found {0}", expr.ExpressionKind);
                        return false;
                    }
                case IEdmTypeDefinition definition:
                    var proxy = new EdmPrimitiveTypeReference(definition.UnderlyingType, type.IsNullable);
                    return CheckType(proxy, expr, ref errors);
                default:
                    errors.Add("not implemented: check type {0}", def);
                    return false;
            }
        }

        private static bool Ensure(IEdmExpression expr, Func<EdmExpressionKind, bool> predicate, string name, ref ErrorList errors)
        {

            if (predicate(expr.ExpressionKind))
            {
                return true;
            }
            else
            {
                errors.Add("expected {0} expression", name);
                return false;
            }
        }

        private void ValidateAppliesTo(IEdmTerm term, IEdmVocabularyAnnotatable annotatable, Position position)
        {
            // https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Applicability
            if (string.IsNullOrWhiteSpace(term.AppliesTo))
            {
                //  If no list is supplied, the term is not intended to be restricted in its application
                return;
            }
            var appliesTo = (term.AppliesTo.Split(' ') ?? Array.Empty<string>()).ToHashSet();

            bool Check<T>(string kind, string edmName)
                where T : IEdmNamedElement
            {
                if (annotatable is T instance)
                {
                    if (!appliesTo.Contains(kind))
                    {
                        logger.LogError("annotation {0} can not be applied to {1} '{2}' ({3})", term.FullName(), edmName, instance.Name, position);
                    }
                    return true;
                }
                return false;
            }
            if (Check<IEdmProperty>("Property", "property")) return;
            if (Check<IEdmEntityType>("EntityType", "type")) return;
            if (Check<IEdmComplexType>("ComplexType", "type")) return;
            if (Check<IEdmEnumType>("EnumType", "enum")) return;
            if (Check<IEdmAction>("Action", "function")) return;
            if (Check<IEdmFunction>("EntityType", "function")) return;
        }

        private IEdmTerm FindTerm(string name)
        {
            bool TryFind(string name, string alias, string @namespace, IEdmModel model, out IEdmTerm term)
            {
                if (name.StartsWith(alias)) { name = name.Replace(alias, @namespace); }
                term = model.FindTerm(name);
                return term != null;
            }

            if (TryFind(name, "Core", "Org.OData.Core.V1", CoreVocabularyModel.Instance, out var term))
            {
                return term;
            }
            if (TryFind(name, "Measures", "Org.OData.Measures.V1", MeasuresVocabularyModel.Instance, out term))
            {
                return term;
            }
            if (TryFind(name, "Capabilities", "Org.OData.Capabilities.V1", CapabilitiesVocabularyModel.Instance, out term))
            {
                return term;
            }
            if (TryFind(name, "Validation", "Org.OData.Validation.V1", ValidationVocabularyModel.Instance, out term))
            {
                return term;
            }
            if (TryFind(name, "Authorization", "Org.OData.Authorization.V1", AuthorizationVocabularyModel.Instance, out term))
            {
                return term;
            }
            this.logger.LogError("Annotation term {0} can't be found", name);
            return null;
        }

        private IEdmExpression ConvertAnnotationExpression(AnnotationExpression expression)
        {

            switch (expression.Kind)
            {
                case AnnotationExpressionKind.Null:
                    return EdmNullExpression.Instance;
                case AnnotationExpressionKind.Integer:
                    return new EdmIntegerConstant((long)expression.Value);
                case AnnotationExpressionKind.Float:
                    return new EdmFloatingConstant((long)expression.Value);
                case AnnotationExpressionKind.String:
                    return new EdmStringConstant((string)expression.Value);
                case AnnotationExpressionKind.Boolean:
                    return new EdmBooleanConstant((bool)expression.Value);

                case AnnotationExpressionKind.Path:
                    return new EdmPathExpression((string)expression.Value);

                case AnnotationExpressionKind.Object:
                    return new EdmRecordExpression(
                        from prop in expression.Properties
                        select new EdmPropertyConstructor(
                            prop.Name,
                            ConvertAnnotationExpression(prop.Value))
                    );
                case AnnotationExpressionKind.Array:
                    return new EdmCollectionExpression(
                         from item in expression.Items
                         select ConvertAnnotationExpression(item)
                     );
                default:
                    throw new NotSupportedException($"Expression kind {expression.Kind}");
            }
        }
    }
}
