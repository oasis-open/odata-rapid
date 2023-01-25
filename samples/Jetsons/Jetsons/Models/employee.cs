// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System.ComponentModel.DataAnnotations;

namespace Jetsons
{
    /// <summary>
    /// The Employee class represents an employee in the Jetsons schema.
    /// The same class is used both for the Entity Framework model and the OData model.
    /// </summary>
    public partial class Employee
    {
        [Key]
        public int id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string title { get; set; }

    }
}
