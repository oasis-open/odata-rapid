// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.Restier.Core;
using Microsoft.Restier.AspNetCore.Model;

namespace Jetsons
{
    public partial class JetsonsApi : ApiBase
    {
        /// <summary>
        ///     Action to fire an employee.
        /// </summary>
        [BoundOperation(OperationType = OperationType.Action)]
        public void youreFired(Employee employee, string reason)
        {
            company.employees.Remove(employee);
        }
    }
}