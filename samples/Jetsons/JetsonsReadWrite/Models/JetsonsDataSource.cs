// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Microsoft.Spatial;

namespace Jetsons.Models
{
    public class JetsonsDataSource
    {
        public List<company> competitors { get; set; }

        public company company { get; set; }

        public JetsonsDataSource()
        {
            this.Initialize();
        }

        private void Initialize()
        {
            #region company
            this.company = new company()
            {
                name = "Spacely's Space Sprockets",
                incorporated = DateTime.Parse("2054-10-4"),
                stockSymbol = "spcly",
                employees = new List<employee>
                {
                    new employee()
                    {
                        id = 1,
                        firstName = "Cosmo",
                        lastName = "Spacely",
                        title = "CEO"
                    },
                    new employee()
                    {
                        id = 2,
                        firstName = "George",
                        lastName = "Jetson",
                        title = "Digital Index Operator"
                    },
                    new employee()
                    {
                        id = 3,
                        firstName = "R.U.D.I.",
                        lastName = null,
                        title = "Computer"
                    },
                    new employee()
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

            this.competitors = new List<company>
            {
                new company()
                {
                    name = "Cogswell's Cosmic COGs",
                    incorporated = DateTime.Parse("2054-10-4"),
                    stockSymbol = "cgswl",
                    employees = new List<employee>
                    {
                        new employee()
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