using System;
using System.IO;

namespace Microsoft.OData.Edm.Csdl
{

    [Flags]
    public enum CsdlFormat { XML = 1, JSON = 2, All = 3 };
}
