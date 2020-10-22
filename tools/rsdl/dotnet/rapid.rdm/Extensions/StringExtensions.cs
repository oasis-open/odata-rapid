
using System;
using System.Collections.Generic;
using System.Linq;

namespace rapid.rdm
{

    public static class StringExtensions
    {

        /// <summary>
        /// returns the substring of <param name="str"/> before the last occurrence of <param name="separator"/>
        /// or the empty string if seperator doesn't occur.
        /// </summary>
        public static string BeforeLast(this string str, string separator)
        {
            var ix = str.LastIndexOf(".");
            return ix >= 0 ? str.Substring(0, ix) : string.Empty;
        }

        public static string AfterLast(this string str, string separator)
        {
            var ix = str.LastIndexOf(".");
            return ix >= 0 ? str.Substring(ix + 1) : str;
        }
    }
}
