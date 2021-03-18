using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rsdl.tests
{
    public static class Diff
    {

        public static string GetFirstDifference(object a, object b, string path = null)
        {
            if (a == null || b == null)
            {
                if (a != b)
                {
                    return $"different values at {path}: {a} != {b}";
                }
                else
                {
                    return null;
                }
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
                for (int i = 0; ; i++)
                {
                    var an = ae.MoveNext();
                    var bn = be.MoveNext();
                    if (an && bn)
                    {
                        var e = GetFirstDifference(ae.Current, be.Current, Combine(path, i.ToString()));
                        if (e != null)
                            return e;
                    }
                    else if (an || bn)
                    {
                        if (an)
                            return $"more than {i} elements expected at {path}";
                        else
                            return $"less than {i} elements elements at {path}";
                    }
                    else
                    {
                        break;
                    }
                }
            }
            else if (aType.IsEnum && aType == bType)
            {
                if (a.Equals(b))
                {
                    return null;
                }
                else
                {
                    return $"different enum values at {path}: {a} != {b}";
                }
            }
            else if (aType.IsClass && aType == bType)
            {
                foreach (var prop in aType.GetProperties().Where(p => p.Name != "Position"))
                {
                    var e = GetFirstDifference(prop.GetValue(a), prop.GetValue(b), Combine(path, prop.Name));
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

        public static IEnumerable<string> GetDifferences(object a, object b, string path = null)
        {
            if (a == null || b == null)
            {
                if (a != b)
                {
                    yield return $"different values at {path}: {a} != {b}";
                }
                yield break;
            }
            var aType = a.GetType();
            var bType = b.GetType();
            if (aType == bType && (aType.IsPrimitive || aType == typeof(string))) // The primitive types are Boolean, Byte, SByte, Int16, UInt16, Int32, UInt32, Int64, UInt64, IntPtr, UIntPtr, Char, Double, and Single.
            {
                if (!a.Equals(b))
                {
                    yield return $"different primitive values at {path}: {a} != {b}";
                }
                yield break;
            }
            else if (typeof(IEnumerable).IsAssignableFrom(aType) && typeof(IEnumerable).IsAssignableFrom(bType))
            {
                var ae = ((IEnumerable)a).GetEnumerator();
                var be = ((IEnumerable)b).GetEnumerator();
                for (int i = 0; ; i++)
                {
                    var an = ae.MoveNext();
                    var bn = be.MoveNext();
                    if (an && bn)
                    {
                        foreach (var d in GetDifferences(ae.Current, be.Current, Combine(path, i.ToString())))
                        {
                            yield return d;
                        }
                    }
                    else if (an || bn)
                    {
                        if (an)
                            yield return $"more than {i} elements at {path}";
                        else
                            yield return $"less than {i} elements at {path}";
                        yield break;
                    }
                    else
                    {
                        yield break;
                    }
                }
            }
            else if (aType.IsEnum && aType == bType)
            {
                if (!a.Equals(b))
                {
                    yield return $"different enum values at {path}: {a} != {b}";
                }
                yield break;
            }
            else if (aType.IsClass && aType == bType)
            {
                foreach (var prop in aType.GetProperties().Where(p => p.Name != "Position"))
                {
                    foreach (var d in GetDifferences(prop.GetValue(a), prop.GetValue(b), Combine(path, prop.Name)))
                    {
                        yield return d;
                    }
                }
            }
            else if (aType != bType)
            {
                yield return $"different types at {path} {aType} != {bType}";
            }
            else
            {
                throw new NotImplementedException($"difference at {path} {aType} != {bType}");
            }
        }


        public static string Combine(string path, string component) => (string.IsNullOrEmpty(path) ? "" : path + ".") + component;
    }
}
