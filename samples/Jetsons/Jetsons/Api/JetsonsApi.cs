// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNet.OData.Builder;
using Microsoft.OData.Edm;
using Microsoft.Restier.AspNet.Model;
using Microsoft.Restier.Core;
using Microsoft.Restier.Core.Model;
using Microsoft.Restier.Providers.InMemory.DataStoreManager;
using Microsoft.Restier.Providers.InMemory.Utils;

namespace Jetsons.Api
{
    public partial class JetsonsApi : ApiBase
    {
        internal IDataStoreManager<string, JetsonsDataSource> DataStoreManager
        {
            get { return this.GetApiService<IDataStoreManager<string, JetsonsDataSource>>(); }
        }

        private string Key
        {
            get { return InMemoryProviderUtils.GetSessionId(); }
        }

        public JetsonsApi(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        internal static Uri RemoveSessionIdFromUri(Uri fullUri)
        {
            string key = default(string);
            var match = Regex.Match(fullUri.AbsolutePath, @"/\(S\((\w+)\)\)");
            if (match.Success)
            {
                key = match.Groups[1].Value;
            }

            return new Uri(
                   new Uri(fullUri.AbsoluteUri),
                   fullUri.PathAndQuery.Replace("/(S(" + key + "))", ""));
        }


        #region Entity Set

        [Resource]
        public IQueryable<Company> competitors
        {
            get
            {
                return _competitors.AsQueryable();
            }
        }

        internal List<Company> _competitors
        {
            get
            {
                var datasource = DataStoreManager.GetDataStoreInstance(Key);
                if (datasource != null)
                {
                    return datasource.competitors;
                }

                return null;
            }
        }

        [Resource]
        public Company company
        {
            get
            {
                var datasource = DataStoreManager.GetDataStoreInstance(Key);
                if (datasource != null)
                {
                    return datasource.company;
                }

                return null;
            }
        }

        #endregion

        #region function/action

        /// <summary>
        ///     Function to return top employees.
        /// </summary>
        [Operation(OperationType = OperationType.Function, IsBound = true)]
        public IEnumerable<Employee> topEmployees(Company company, int num)
        {
            return company.employees.OrderByDescending(e=>e.id).Take(num);
        }

        #endregion

        internal class ModelBuilder : IModelBuilder
        {
            public Task<IEdmModel> GetModelAsync(ModelContext context, CancellationToken cancellationToken)
            {
                var modelBuilder = new ODataConventionModelBuilder();
                modelBuilder.Namespace = "Jetsons";
                modelBuilder.EntitySet<Company>("competitors");
                modelBuilder.Singleton<Company>("company");
                return Task.FromResult(modelBuilder.GetEdmModel());
            }
        }
    }
}