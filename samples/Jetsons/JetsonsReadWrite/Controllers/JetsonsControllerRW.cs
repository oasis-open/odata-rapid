// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Routing;
using Microsoft.Extensions.DependencyInjection;
using Jetsons.Api;
using Microsoft.Restier.Core;
using Jetsons.Models;
using System.Collections.Generic;
using Microsoft.Restier.AspNet.Model;

namespace JetsonsRW.Controllers
{
    public class JetsonsController : ODataController
    {
        private JetsonsApi _api;
        private JetsonsApi Api
        {
            get
            {
                if (_api == null)
                {
                    _api = (JetsonsApi)this.Request.GetRequestContainer().GetService<ApiBase>();
                }

                return _api;
            }
        }

        /// <summary>
        /// Add a employee to company.
        /// </summary>
        /// <param name="employee">The employee to add</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        [HttpPost]
        [ODataRoute("company/employees")]
        public IHttpActionResult AddEmployeeToCompany([FromBody]employee employee)
        {
            return AddEmployee(Api.company, employee);
        }

        /// <summary>
        /// Add a competitor.
        /// </summary>
        /// <param name="competitor">The competitor to add</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        [HttpPost]
        [ODataRoute("competitors")]
        public IHttpActionResult AddCompetitor([FromBody]company competitor)
        {
            return AddCompetitor(Api._competitors, competitor);
        }

        /// <summary>
        /// Delete an employee from company.
        /// </summary>
        /// <param name="employeeId">The id of the employee to delete</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        [HttpDelete]
        [ODataRoute("company/employees/{id}")]
        [ODataRoute("company/employees({id})")]
        public IHttpActionResult DeleteEmployeeFromCompany([FromODataUri]int employeeId)
        {
            return DeleteEmployee(Api.company, employeeId);
        }

        /// <summary>
        /// Delete a competitor.
        /// </summary>
        /// <param name="stockSymbol">The stockSymbol of the competitor to delete</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        [HttpDelete]
        [ODataRoute("competitors/{stockSymbol}")]
        [ODataRoute("competitors({stockSymbol})")]
        public IHttpActionResult DeleteCompetitor([FromODataUri]string stockSymbol)
        {
            return DeleteCompetitor(Api._competitors, stockSymbol);
        }

        /// <summary>
        /// Add an employee to a company.
        /// </summary>
        /// <param name="company">Company to add the employee to.</param>
        /// <param name="employee">The employee to add.</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        private IHttpActionResult AddEmployee(company company, employee employee)
        {
            if (company != null)
            {
                if (employee != null)
                {
                    company.employees.Add(employee);
                    return Ok(employee);
                }

                return BadRequest();
            }

            return NotFound();
        }

        /// <summary>
        /// Add a competitor.
        /// </summary>
        /// <param name="competitors">The list of competitors to add the employee to.</param>
        /// <param name="competitor">The competitor to add.</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        private IHttpActionResult AddCompetitor(IList<company> competitors, company competitor)
        {
            if (competitors != null)
            {
                if (competitor != null)
                {
                    competitors.Add(competitor);
                    return Ok(competitor);
                }

                return BadRequest();
            }

            return NotFound();
        }

        /// <summary>
        /// Delete an employee from a company.
        /// </summary>
        /// <param name="company">Company containing the employee to delete.</param>
        /// <param name="employeeId">The id of the employee to delete.</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        private IHttpActionResult DeleteEmployee(company company, int employeeId)
        {
            if (company != null)
            {
                var employee = company.employees.Where(t => t.id == employeeId).FirstOrDefault();
                if (employee != null)
                {
                    company.employees.Remove(employee);
                }

                return StatusCode(System.Net.HttpStatusCode.NoContent);
            }

            return NotFound();
        }

        /// <summary>
        /// Delete a competitor.
        /// </summary>
        /// <param name="competitors">List of competitors containing the company to delete.</param>
        /// <param name="competitor">The competitor to delete.</param>
        /// <returns><see cref="IHttpActionResult"></returns>
        private IHttpActionResult DeleteCompetitor(IList<company> competitors, string competitorStockSymbol)
        {
            if (competitors != null)
            {
                var competitor = competitors.Where(c => c.stockSymbol == competitorStockSymbol).FirstOrDefault();
                if (competitor != null)
                {
                    competitors.Remove(competitor);
                }

                return StatusCode(System.Net.HttpStatusCode.NoContent);
            }

            return NotFound();
        }


        ///// <summary>
        ///// Get the key value from a URI.
        ///// </summary>
        ///// <param name="request">Request message.</param>
        ///// <param name="uri">The uri to return.</param>
        ///// <returns><see cref="IHttpActionResult"></returns>
        //private static TKey GetKeyFromUri<TKey>(HttpRequestMessage request, Uri uri, IServiceProvider api)
        //{
        //    if (uri == null)
        //    {
        //        throw new ArgumentNullException("uri");
        //    }

        //    var urlHelper = request.GetUrlHelper() ?? new UrlHelper(request);

        //    string serviceRoot = urlHelper.CreateODataLink(
        //        request.ODataProperties().RouteName,
        //        request.GetPathHandler(), new List<ODataPathSegment>());

        //    var odataPath = request.GetPathHandler().Parse(
        //        JetsonsApi.RemoveSessionIdFromUri(new Uri(serviceRoot)).AbsoluteUri, JetsonsApi.RemoveSessionIdFromUri(uri).LocalPath, api);

        //    var keySegment = odataPath.Segments.OfType<KeySegment>().FirstOrDefault();
        //    if (keySegment == null)
        //    {
        //        throw new InvalidOperationException("The link does not contain a key.");
        //    }

        //    // Note: assumes a single key value
        //    var value = keySegment.Keys.FirstOrDefault().Value;
        //    return (TKey)value;
        //}
    }
}