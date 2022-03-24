// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.Extensions.DependencyInjection;
using Jetsons;
using Microsoft.Restier.Core;

namespace Jetsons.Controllers
{
    public class JetsonsController : ODataController
    {
        private JetsonsApi _api;
        private JetsonsApi Api
        {
            get
            {
                if (_api == null)
                {
                    _api = (JetsonsApi)this.Request.GetRequestContainer().GetService<ApiBase>();
                }

                return _api;
            }
        }
    }
}
