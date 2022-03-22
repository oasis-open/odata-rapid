// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System.ComponentModel.DataAnnotations;

namespace Jetsons
{
    public class Employee
    {
        [Key]
        public int id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string title { get; set; }

    }
}