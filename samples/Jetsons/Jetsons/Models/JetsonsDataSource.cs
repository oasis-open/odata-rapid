// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;

namespace Jetsons
{
    public class JetsonsDataSource
    {
        public List<Company> competitors { get; set; }

        public Company company { get; set; }

        public JetsonsDataSource()
        {
            this.Initialize();
        }

        private void Initialize()
        {
            #region company
            this.company = new Company()
            {
                name = "Spacely's Space Sprockets",
                incorporated = DateTime.Parse("2054-10-4"),
                stockSymbol = "spcly",
                employees = new List<Employee>
                {
                    new Employee()
                    {
                        id = 1,
                        firstName = "Cosmo",
                        lastName = "Spacely",
                        title = "CEO"
                    },
                    new Employee()
                    {
                        id = 2,
                        firstName = "George",
                        lastName = "Jetson",
                        title = "Digital Index Operator"
                    },
                    new Employee()
                    {
                        id = 3,
                        firstName = "R.U.D.I.",
                        lastName = null,
                        title = "Computer"
                    },
                    new Employee()
                    {
                        id = 4,
                        firstName = "Judy",
                        lastName = "Jetson",
                        title = "Intern"
                    }
                }
            };

            #endregion company

            #region competitors

            this.competitors = new List<Company>
            {
                new Company()
                {
                    name = "Cogswell's Cosmic COGs",
                    incorporated = DateTime.Parse("2054-10-4"),
                    stockSymbol = "cgswl",
                    employees = new List<Employee>
                    {
                        new Employee()
                        {
                            id = 1,
                            firstName = "Spencer",
                            lastName = "Cogswell",
                            title = "CEO"
                        }
                    }
                }
            };

            #endregion competitors
        }
    }
}