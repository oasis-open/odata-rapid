using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Vocabularies;

namespace Microsoft.OData.Edm
{
    internal partial class SchemaDeltaBuilder
    {
        private readonly HashSet<object> visited = new HashSet<object>();
        private readonly List<(PropertyPath, String, EdmLocation, EdmLocation)> errors = new List<(PropertyPath, String, EdmLocation, EdmLocation)>();

        public IEnumerable<(PropertyPath Path, String Message, EdmLocation Left, EdmLocation Right)> Errors => errors;

        protected void Visit(String a, String b, PropertyPath path)
        {
            if (!String.Equals(a, b))
                Report(path, $"different values '{a}' != '{b}'");
        }
        protected void Visit(Boolean a, Boolean b, PropertyPath path) { if (!Boolean.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Date a, Date b, PropertyPath path) { if (!Date.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(DateTimeOffset a, DateTimeOffset b, PropertyPath path) { if (!DateTimeOffset.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Decimal a, Decimal b, PropertyPath path) { if (!Decimal.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(TimeSpan a, TimeSpan b, PropertyPath path) { if (!TimeSpan.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Double a, Double b, PropertyPath path) { if (!Double.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Guid a, Guid b, PropertyPath path) { if (!Guid.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Int64 a, Int64 b, PropertyPath path) { if (!Int64.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(TimeOfDay a, TimeOfDay b, PropertyPath path) { if (!TimeOfDay.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(int? a, int? b, PropertyPath path) { if (!Nullable<int>.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(bool? a, bool? b, PropertyPath path) { if (!Nullable<bool>.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit(Byte[] a, Byte[] b, PropertyPath path) { if (!Enumerable.SequenceEqual(a, b)) Report(path, $"different values '{a}' != '{b}'"); }
        protected void Visit<T>(T a, T b, PropertyPath path) where T : Enum { { if (!object.Equals(a, b)) Report(path, $"different values '{a}' != '{b}'"); } }

        protected void Visit(EdmReferentialConstraintPropertyPair a, EdmReferentialConstraintPropertyPair b, PropertyPath path)
        {
            Visit(a.DependentProperty, b.DependentProperty, path + "DependentProperty");
            Visit(a.PrincipalProperty, b.PrincipalProperty, path + "PrincipalProperty");
        }

        protected void VisitSeq<T>(IEnumerable<T> a, IEnumerable<T> b, Action<T, T, PropertyPath> visit, PropertyPath path) where T : class
        {
            var aa = a.GetEnumerator();
            var bb = b.GetEnumerator();
            for (var i = 0; ; i++)
            {
                var aHasMoved = aa.MoveNext();
                var bHasMoved = bb.MoveNext();
                if (aHasMoved && bHasMoved)
                {
                    visit(aa.Current, bb.Current, path + i.ToString());
                }
                else if (aHasMoved || bHasMoved)
                {
                    // TODO, report non matching length
                    break;
                }
                else
                {
                    break;
                }
            }
        }

        public void VisitAnnotationSet(
                  IEnumerable<IEdmVocabularyAnnotation> a,
                  IEnumerable<IEdmVocabularyAnnotation> b,
                  PropertyPath path)
        {
            var aa = a.ToDictionary(a => (GetTargetPath(a.Target), a.Term.FullName(), a.Qualifier ?? ""));
            var bb = b.ToDictionary(b => (GetTargetPath(b.Target), b.Term.FullName(), b.Qualifier ?? ""));

            var keys = aa.Keys.Concat(bb.Keys).Distinct();
            foreach (var key in keys)
            {
                var (targetPath, termName, qualifier) = key;
                var segment = targetPath + (string.IsNullOrEmpty(qualifier) ? "" : "/" + qualifier);
                if (!aa.TryGetValue(key, out var ai))
                {
                    Report(path, $"additional {termName} annotation{(string.IsNullOrEmpty(qualifier) ? "" : $" with qualifier {qualifier}")}");
                }
                else if (!bb.TryGetValue(key, out var bi))
                {
                    Report(path, $"missing {termName} annotation{(string.IsNullOrEmpty(qualifier) ? "" : $" with qualifier {qualifier}")}");
                }
                else
                {
                    Visit(ai, bi, path + segment);
                }
            }
        }

        protected void VisitNamedSeq<T>(IEnumerable<T> e1, IEnumerable<T> e2, Action<T, T, PropertyPath> visit, PropertyPath path, string property) where T : class, IEdmNamedElement
        {
            var pairs = (e1 ?? Enumerable.Empty<T>()).FullOuterJoin(e2 ?? Enumerable.Empty<T>(), i => i.Name, i => i.Name);
            foreach (var (name, a, b) in pairs)
            {
                if (a != null && b != null)
                {
                    visit(a, b, path + $"{property}[{name}]");
                }
                else if (a == null)
                {
                    Report(path, $"additional item with name {name}");
                }
                else if (b == null)
                {
                    var loc = b is IEdmLocatable eloc ? eloc.Location : null;
                    Report(path, $"missing item with name {name}");
                }
            }
        }

        private class UnknwonEdmLocation : EdmLocation
        {
            public override string ToString() => string.Empty;
            public static UnknwonEdmLocation Instance = new UnknwonEdmLocation();
        }

        protected void Report(PropertyPath path, string message)
        {
            var (l, r) = locations.Count > 0 ? locations.Peek() : (UnknwonEdmLocation.Instance, UnknwonEdmLocation.Instance);
            errors.Add((path, message, l, r));
        }

        // check for reference equality and null, report on it and
        // return true if no further checks/visits are required.
        protected bool IsReferenceCheckComplete<T>(T a, T b, PropertyPath path)
        {
            if (object.ReferenceEquals(a, b))
            {
                return true;
            }
            if (a == null && b == null)
            {
                return true;
            }
            if (a == null && b != null)
            {
                Report(path, "expected no value but one present in actual");
                return true;
            }
            if (a != null && b == null)
            {
                Report(path, "expected a value but non in actual");
                return true;
            }
            return false;
        }

        protected void CheckTypeEquality<T>(T a, T b, IList<Type> types, PropertyPath path)
        {
            static Type FindInterface(T obj, IList<Type> interfaces)
            {
                var t = obj.GetType();
                return interfaces.SingleOrDefault(i => i.IsAssignableFrom(t));
            }

            var ai = FindInterface(a, types);
            var bi = FindInterface(b, types);
            if (ai != null && bi != null && ai != bi)
            {
                Report(path, $"different types '{ai.Name}' != '{bi.Name}'");
            }
        }

        // https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#_Toc38530407
        // https://github.com/OData/odata.net/blob/master/src/Microsoft.OData.Edm/EdmUtil.cs#L415
        private string GetTargetPath(IEdmVocabularyAnnotatable a)
        {
            if (a is IEdmSchemaElement aSchemaElement)
            {
                return $"{aSchemaElement.Namespace}.{aSchemaElement.Name}";
            }
            else if (a is IEdmStructuralProperty aProperty)
            {
                return $"{GetTargetPath((IEdmVocabularyAnnotatable)aProperty.DeclaringType)}/{aProperty.Name}";
            }
            else if (a is IEdmEnumMember aEnumMember)
            {
                return $"{GetTargetPath(aEnumMember.DeclaringType)}/{aEnumMember.Name}";
            }

            else if (a is IEdmEntityContainer aEntityContainer)
            {
                return $"{aEntityContainer.Namespace}.{aEntityContainer.Name}";
            }
            else if (a is IEdmEntityContainerElement aContainerElement)
            {
                return $"{GetTargetPath(aContainerElement.Container)}/{aContainerElement.Name}";
            }

            else if (a is IEdmOperation aAction)
            {
                return $"{aAction.Namespace}/{aAction.Name}"; // TODO parameters
            }
            else if (a is IEdmOperationParameter aOperationParameter)
            {
                return $"{GetTargetPath(aOperationParameter.DeclaringOperation)}/{aOperationParameter.Name}";
            }
            else if (a is IEdmOperationReturn aOperationReturn)
            {
                return $"{GetTargetPath(aOperationReturn.DeclaringOperation)}.$Return";
            }
            else
            {
                throw new NotSupportedException();
            }
        }

        #region locations

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

        class AnonymousDisposable : IDisposable
        {
            private readonly Action action;

            public AnonymousDisposable(Action action) { this.action = action; }

            public void Dispose() { action(); }
        }
    }
    #endregion
}