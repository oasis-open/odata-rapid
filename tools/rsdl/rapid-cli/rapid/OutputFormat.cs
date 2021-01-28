using System;
using System.IO;

namespace rapid
{
    [Flags]
    public enum OutputFormat { XML = 1, JSON = 2, OpenAPI = 4, All = 7};
}
