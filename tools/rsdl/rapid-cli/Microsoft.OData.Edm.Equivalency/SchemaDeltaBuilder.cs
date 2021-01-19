using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;


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

        protected void VisitNamedSeq<T>(IEnumerable<T> e1, IEnumerable<T> e2, Action<T, T, PropertyPath> visit, PropertyPath path, string property) where T : class, IEdmNamedElement
        {
            var pairs = e1.FullOuterJoin(e2, i => i.Name, i => i.Name);
            foreach (var (name, a, b) in pairs)
            {
                if (a != null && b != null)
                {
                    visit(a, b, path + (property + ":" + name));
                }
                else if (a == null)
                {
                    var loc = b is IEdmLocatable eloc ? eloc.Location : null;
                    Report(path, $"missing item with name {name} on left", loc);
                }
                else if (b == null)
                {
                    var loc = b is IEdmLocatable eloc ? eloc.Location : null;
                    Report(path, $"missing item with name {name} on right", loc);
                }
            }
        }

        protected void Report(PropertyPath path, string message, EdmLocation loc = null)
        {
            var (l, r) = locations.Peek();
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
                Report(path, "left == null, right not");
                return true;
            }
            if (a != null && b == null)
            {
                Report(path, "right == null, left not");
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
}