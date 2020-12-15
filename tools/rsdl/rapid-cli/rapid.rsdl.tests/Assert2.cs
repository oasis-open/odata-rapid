using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using rapid.rdm;

namespace rapid.rsdl.tests
{
    public static class Assert2
    {

        public static string ObjectDifference(object a, object b, string path = null)
        {
            if ((a == null || b == null) && a != b)
            {
                return $"different values at {path} {a} != {b}";
            }
            var aType = a.GetType();
            var bType = b.GetType();
            if (aType == bType && (aType.IsPrimitive || aType == typeof(string))) // The primitive types are Boolean, Byte, SByte, Int16, UInt16, Int32, UInt32, Int64, UInt64, IntPtr, UIntPtr, Char, Double, and Single.
            {
                if (a.Equals(b))
                {
                    return null;
                }
                else
                {
                    return $"different primitive values at {path}: {a} != {b}";
                }
            }
            else if (typeof(IEnumerable).IsAssignableFrom(aType) && typeof(IEnumerable).IsAssignableFrom(bType))
            {
                var ae = ((IEnumerable)a).GetEnumerator();
                var be = ((IEnumerable)b).GetEnumerator();
                while (true)
                {
                    var an = ae.MoveNext();
                    var bn = be.MoveNext();
                    if (an && bn)
                    {
                        var e = ObjectDifference(ae.Current, be.Current, path);
                        if (e != null)
                            return e;
                    }
                    else if (an || bn)
                    {
                        return $"different number of elements at {path}";
                    }
                    else
                    {
                        break;
                    }
                }
            }
            else if (aType.IsClass && aType == bType)
            {
                foreach (var prop in aType.GetProperties().Where(p => p.Name != "Position"))
                {
                    var e = ObjectDifference(prop.GetValue(a), prop.GetValue(b), (string.IsNullOrEmpty(path) ? "" : path + ".") + prop.Name);
                    if (e != null)
                        return e;
                }
            }
            else if (aType != bType)
            {
                return $"different types at {path} {aType} != {bType}";
            }
            else
            {
                throw new NotImplementedException($"different at {path} {aType} != {bType}");
            }
            return null;
        }


        public static IEnumerable<Type> EnumerableElementTypes(this Type type)
        {
            return
                from i in type.GetInterfaces()
                where i.IsInterface && i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IEnumerable<>)
                select i.GetGenericArguments()[0];
        }
    }
}
