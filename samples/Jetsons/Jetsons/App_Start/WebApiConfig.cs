// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Query;
using Microsoft.Extensions.DependencyInjection;
using Jetsons.Api;
using Microsoft.Restier.Core;
using Microsoft.Restier.Core.Model;
using Microsoft.Restier.Core.Submit;
using Microsoft.Restier.Providers.InMemory.DataStoreManager;
using Microsoft.Restier.Providers.InMemory.Submit;
using Microsoft.OData;
using System.Net.Http;

namespace Jetsons
{
    public static class WebApiConfig
    {
        private const string routeName = "JetsonsApi";

        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();


            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.LocalOnly;
            config.MessageHandlers.Add(new ETagMessageHandler());
            config.SetUrlKeyDelimiter(ODataUrlKeyDelimiter.Slash);
            config.UseRestier<JetsonsApi>((services) =>
            {
                Func<IServiceProvider, ODataValidationSettings> validationSettingFactory = sp => new ODataValidationSettings
                {
                    MaxAnyAllExpressionDepth = 4,
                    MaxExpansionDepth = 4
                };

                services.AddSingleton<ODataValidationSettings>(validationSettingFactory);
                services.AddChainedService<IModelBuilder>((sp, next) => new JetsonsApi.ModelBuilder());
                services.AddChainedService<IChangeSetInitializer>((sp, next) => new ChangeSetInitializer<JetsonsDataSource>());
                services.AddChainedService<ISubmitExecutor>((sp, next) => new SubmitExecutor());
                services.AddSingleton<IDataStoreManager<string, JetsonsDataSource>>(new SingleDataStoreManager<string, JetsonsDataSource>());
                services.AddScoped<ODataMessageWriterSettings>((sp) => 
                    new ODataMessageWriterSettings {
                        Version=ODataVersion.V401
                    });
                //services.AddScoped<ODataQuerySettings>((sp) => new ODataQuerySettings
                //{
                //    PageSize = 2
                //});
            });

            RegisterJetsons(config, GlobalConfiguration.DefaultServer);
        }

        public static void RegisterJetsons(
            HttpConfiguration config, HttpServer server)
        {
            // enable query options for all properties
            config.Filter().Expand().Select().OrderBy().MaxTop(null).Count().SkipToken();
            config.SetTimeZoneInfo(TimeZoneInfo.Utc);
            config.MapRestier<JetsonsApi>(
                routeName,
                "",
                true); // use default batchhandler 
        }
    }
}