// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
using Jetsons.Data;
using Microsoft.AspNet.OData.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.OData.Edm;
using Microsoft.Restier.AspNetCore.Model;
using Microsoft.Restier.Core;
using Microsoft.Restier.Core.Model;
using Microsoft.Restier.EntityFrameworkCore;

namespace Jetsons
{
    public partial class JetsonsApi : ApiBase // EntityFrameworkApi<JetsonsDbContext>
    {
        const string companyStockSymbol = "spcly";
        static IEdmModel model;
        JetsonsDbContext DbContext;

        public JetsonsApi(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            DbContext = new JetsonsDbContext();
        }

        #region EntitySets/Singletons

        // company singleton
        [Resource]
        public Company company
        {
            get
            {
                return this.DbContext.Companies.SingleOrDefault(c => c.stockSymbol == companyStockSymbol);
            }
        }

        // competitors Entity Set
        [Resource]
        public IQueryable<Company> competitors
        {
            get
            {
                //todo: understand why we need the ToList() here, and whether that means the query is evaluated in memory
                var result = this.DbContext.Companies.Where(c => c.stockSymbol != companyStockSymbol).ToList().AsQueryable<Company>();
                return result;
            }
        }

        #endregion

        #region function/action

        /// <summary>
        ///     Function to return top employees.
        /// </summary>
        //[BoundOperation(EntitySetPath = "company/employees", OperationType = OperationType.Function)]
        //public IEnumerable<Employee> topEmployees(Company company, int num)
        //{
        //    return company.employees.OrderByDescending(e => e.id).Take(num);
        //}

        #endregion

        #region Model Building
        internal class ModelBuilder : IModelBuilder
        {
            public IEdmModel GetModel(ModelContext context)
            {
                if (model == null)
                {
                    var modelBuilder = new ODataConventionModelBuilder();
                    modelBuilder.Namespace = "Jetsons";
                    modelBuilder.EntitySet<Company>("competitors");
                    modelBuilder.Singleton<Company>("company");
                    model = modelBuilder.GetEdmModel();
                }

                return model;
            }
        }

        #endregion
    }
}
