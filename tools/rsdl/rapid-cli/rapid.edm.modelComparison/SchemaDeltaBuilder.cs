using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace rapid.edm.modelComparison
{

    partial class SchemaDeltaBuilder
    {
        private readonly HashSet<object> visited = new HashSet<object>();
        private readonly List<Difference> errors = new List<Difference>();

        public IEnumerable<Difference> Differences => errors;

        protected bool IsDifferent(String a, String b, PropertyPath path) { if (!String.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Boolean a, Boolean b, PropertyPath path) { if (!Boolean.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Date a, Date b, PropertyPath path) { if (!Date.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(DateTimeOffset a, DateTimeOffset b, PropertyPath path) { if (!DateTimeOffset.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Decimal a, Decimal b, PropertyPath path) { if (!Decimal.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(TimeSpan a, TimeSpan b, PropertyPath path) { if (!TimeSpan.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Double a, Double b, PropertyPath path) { if (!Double.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Guid a, Guid b, PropertyPath path) { if (!Guid.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Int64 a, Int64 b, PropertyPath path) { if (!Int64.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(TimeOfDay a, TimeOfDay b, PropertyPath path) { if (!TimeOfDay.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(int? a, int? b, PropertyPath path) { if (!Nullable<int>.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(bool? a, bool? b, PropertyPath path) { if (!Nullable<bool>.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent(Byte[] a, Byte[] b, PropertyPath path) { if (!Enumerable.SequenceEqual(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } }
        protected bool IsDifferent<T>(T a, T b, PropertyPath path) where T : Enum { { if (!object.Equals(a, b)) { Report(path, $"different values '{a}' != '{b}'"); return true; } else { return false; } } }

        protected bool IsDifferent(EdmReferentialConstraintPropertyPair a, EdmReferentialConstraintPropertyPair b, PropertyPath path)
        {
            var anyDifferent = false;
            anyDifferent |= IsDifferent(a.DependentProperty, b.DependentProperty, path + "DependentProperty");
            anyDifferent |= IsDifferent(a.PrincipalProperty, b.PrincipalProperty, path + "PrincipalProperty");
            return anyDifferent;
        }

        protected bool IsDifferentSeq<T>(IEnumerable<T> expected, IEnumerable<T> actual, Func<T, T, PropertyPath, bool> visit, PropertyPath path) where T : class
        {
            var expectedEnumerator = expected.GetEnumerator();
            var actualEnumerator = actual.GetEnumerator();
            var anyDifferent = false;
            for (var i = 0; ; i++)
            {
                var expectedHasMore = expectedEnumerator.MoveNext();
                var actualHasMore = actualEnumerator.MoveNext();
                if (expectedHasMore && actualHasMore)
                {
                    anyDifferent |= visit(expectedEnumerator.Current, actualEnumerator.Current, path + i.ToString());
                }
                else
                {
                    if (expectedHasMore) { Report(path, $"missing element after element {i}"); }
                    if (actualHasMore) { Report(path, $"extraneous element after element {i}"); }
                    break;
                }
            }
            return anyDifferent;
        }

        protected bool IsDifferentNamedSeq<T>(IEnumerable<T> e1, IEnumerable<T> e2, Func<T, T, PropertyPath, bool> visit, PropertyPath path) where T : class, IEdmNamedElement
        {
            var pairs = e1.FullOuterJoin(e2, i => i.Name, i => i.Name);
            var anyDifferent = false;
            foreach (var (name, a, b) in pairs)
            {
                if (a != null && b != null)
                {
                    anyDifferent |= visit(a, b, path + name);
                }
                else if (a == null)
                {
                    var lox = b is IEdmLocatable loc ? loc.Location : null;
                    Report(path, $"superfluous item with name {name}", lox);
                }
                else if (b == null)
                {
                    Report(path, $"missing item with name {name}");
                }
            }
            return anyDifferent;
        }

        protected void Report(PropertyPath path, string message, EdmLocation loc = null)
        {
            if (locations.Count > 0)
            {
                var (l, r) = locations.Peek();
                errors.Add(new Difference(path, message, l, r));
            }
            else
            {
                errors.Add(new Difference(path, message, UnknownEdmLocation.Instance, UnknownEdmLocation.Instance));
            }
        }

        private class UnknownEdmLocation : EdmLocation
        {
            private UnknownEdmLocation(bool v) { }

            public static UnknownEdmLocation Instance = new UnknownEdmLocation(false);

            public override string ToString() => "unknown";
        }

        // check for reference equality and null. 
        // if equal, set `areDifferent` to false; else report on it and set `areDifferent`  to false;
        // return true if no further checks are required.
        protected bool IsReferenceCheckComplete<T>(T a, T b, PropertyPath path, out bool areDifferent)
        {
            if (object.ReferenceEquals(a, b))
            {
                areDifferent = false;
                return true;
            }
            if (a == null && b == null)
            {
                areDifferent = false;
                return true;
            }
            if (a == null && b != null)
            {
                Report(path, "expected is null, actual is not null");
                areDifferent = true;
                return true;
            }
            if (a != null && b == null)
            {
                Report(path, "expected is not null, actual is null");
                areDifferent = true;
                return true;
            }
            areDifferent = default;
            return false;
        }

        private bool IsDuplicateVisit(object a)
        {
            var visited = this.visited.Contains(a);
            this.visited.Add(a);
            return visited;
        }


        protected void CheckTypeEquality<T>(T a, T b, IList<Type> types, PropertyPath path)
        {
            static Type FindInterface(T obj, IList<Type> interfaces)
            {
                var t = obj.GetType();
                return interfaces.SingleOrDefault(i => t.IsAssignableTo(i));
            }

            var ai = FindInterface(a, types);
            var bi = FindInterface(b, types);
            if (ai != null && bi != null && ai != bi)
            {
                Report(path, $"different types '{ai.Name}' != '{bi.Name}'");
            }
        }


        private readonly Stack<(EdmLocation, EdmLocation)> locations = new Stack<(EdmLocation, EdmLocation)>();

        private IDisposable PushLocation(object a, object b)
        {
            var aloc = a as IEdmLocatable;
            var bloc = b as IEdmLocatable;
            if (aloc != null || bloc != null)
            {
                locations.Push((aloc?.Location, bloc?.Location));
                return new AnonymousDisposable(() => locations.Pop());
            }
            else
            {
                return NullDisposable.Instance;
            }
        }

        class NullDisposable : IDisposable
        {
            private NullDisposable() { }
            public void Dispose() { }
            public static IDisposable Instance = new NullDisposable();
        }

        record AnonymousDisposable(Action action) : IDisposable
        {
            public void Dispose() { action(); }
        }


        // https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Target
        static string AnnotationTargetPath(IEdmVocabularyAnnotatable target)
        {
            // structured types and their properties
            if (target is IEdmEntityType targetEntityType)
            {
                return $"{targetEntityType.Namespace}.{targetEntityType.Name}";
            }
            else if (target is IEdmComplexType targetComplexType)
            {
                return $"{targetComplexType.Namespace}.{targetComplexType.Name}";
            }
            else if (target is IEdmStructuralProperty targetStructuralProperty)
            {
                return $"{AnnotationTargetPath((IEdmVocabularyAnnotatable)targetStructuralProperty.DeclaringType)}.{targetStructuralProperty.Name}";
            }
            else if (target is IEdmNavigationProperty targetNavigationProperty)
            {
                return $"{AnnotationTargetPath((IEdmVocabularyAnnotatable)targetNavigationProperty.DeclaringType)}.{targetNavigationProperty.Name}";
            }

            // enum types
            else if (target is IEdmEnumType targetEnumType)
            {
                return $"{targetEnumType.Namespace}.{targetEnumType.Name}";
            }
            else if (target is IEdmEnumMember targetEnumMember)
            {
                return $"{targetEnumMember.DeclaringType.Namespace}.{targetEnumMember.DeclaringType.Name}.{targetEnumMember.Name}";
            }

            // service
            else if (target is IEdmEntityContainer targetEntityContainer)
            {
                return $"{targetEntityContainer.Namespace}.{targetEntityContainer.Name}";
            }
            else if (target is IEdmEntitySet targetEntitySet)
            {
                return $"{targetEntitySet.Container.Namespace}.{targetEntitySet.Container.Name}.{targetEntitySet.Name}";
            }
            else if (target is IEdmSingleton targetSingleton)
            {
                return $"{targetSingleton.Container.Namespace}.{targetSingleton.Container.Name}.{targetSingleton.Name}";
            }

            // operations
            else if (target is IEdmAction targetAction)
            {
                // TODO: deal with overloads
                return $"{targetAction.Namespace}.{targetAction.Name}";
            }
            else if (target is IEdmFunction targetFunction)
            {
                // TODO: deal with overloads
                return $"{targetFunction.Namespace}.{targetFunction.Name}";
            }

            else if (target is IEdmOperationReturn targetOperationReturn)
            {
                return $"{AnnotationTargetPath(targetOperationReturn.DeclaringOperation)}.$ReturnType";
            }
            else if (target is IEdmOperationParameter targetOperationParameter)
            {
                return $"{AnnotationTargetPath(targetOperationParameter.DeclaringOperation)}.{targetOperationParameter.Name}";
            }

            else if (target is IEdmActionImport targetActionImport)
            {
                return $"{targetActionImport.Container.Namespace}.{targetActionImport.Container.Name}/{targetActionImport.Name}";
            }
            else if (target is IEdmFunctionImport targetFunctionImport)
            {
                return $"{targetFunctionImport.Container.Namespace}.{targetFunctionImport.Container.Name}/{targetFunctionImport.Name}";
            }


            else if (target is IEdmPathType targetPathType)
            {
                return "notImplemented";
            }
            else if (target is IEdmPrimitiveType targetPrimitiveType)
            {
                return "notImplemented";
            }

            else if (target is IEdmTerm targetTerm)
            {
                return "notImplemented";
            }
            else if (target is IEdmTypeDefinition targetTypeDefinition)
            {
                return "notImplemented";
            }
            else if (target is IEdmUntypedType targetUntypedType)
            {
                return "notImplemented";
            }
            else
            {
                throw new NotImplementedException();
            }
        }
    }
}