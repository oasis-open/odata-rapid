// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.AspNet.OData.Builder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Jetsons
{
    /// <summary>
    /// The Company class represents a company in the Jetsons schema.
    /// The same class is used both for the Entity Framework model and the OData model.
    /// </summary>
    public partial class Company
    {
        public Company()
        {
            employees = new HashSet<Employee>();
        }

        [Key]
        public string stockSymbol { get; set; }

        public string name { get; set; }

        public DateTime incorporated { get; set; }

        [Contained]
        public virtual ICollection<Employee> employees { get; set; }

    }
}
