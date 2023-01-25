// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
using Jetsons.Data;
using Microsoft.AspNet.OData.Builder;
using Microsoft.OData.Edm;
using Microsoft.Restier.AspNetCore.Model;
using Microsoft.Restier.Core;
using Microsoft.Restier.Core.Model;

namespace Jetsons
{
    public partial class JetsonsApi : ApiBase
    {
        const string companyStockSymbol = "spcly";
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
        [BoundOperation(EntitySetPath = "company/employees", OperationType = OperationType.Function)]
        public IEnumerable<Employee> topEmployees(Company company, int num)
        {
            return company.employees.OrderByDescending(e => e.id).Take(num);
        }

        #endregion

        #region Model Building
        public static IEdmModel Model;

        internal class ModelBuilder : IModelBuilder
        {
            public IEdmModel GetModel(ModelContext context)
            {
                if (Model == null)
                {
                    // Create the model and add the types.
                    // The singletons, entity sets, actions and functions will be added automatically
                    // based on the JetsonsApi class.
                    var modelBuilder = new ODataConventionModelBuilder();
                    modelBuilder.Namespace = "Jetsons";
                    modelBuilder.EntityType<Employee>();
                    modelBuilder.EntityType<Company>();
                    Model = modelBuilder.GetEdmModel();
                }

                return Model;
            }
        }

        #endregion
    }
}
