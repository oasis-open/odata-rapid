// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.Restier.AspNet.Model;
using Microsoft.Restier.Core;
using Jetsons.Models;


namespace Jetsons.Api
{
    public partial class JetsonsApi : ApiBase
    {
        /// <summary>
        ///     Action to fire an employee.
        /// </summary>
        [Operation(OperationType = OperationType.Action, IsBound = true)]
        public void youreFired(employee employee, string reason)
        {
            company.employees.Remove(employee);
        }
    }
}