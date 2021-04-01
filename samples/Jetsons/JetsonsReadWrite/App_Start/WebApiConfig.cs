// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Batch;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Query;
using Microsoft.Extensions.DependencyInjection;
using Jetsons.Api;
using Jetsons.Models;
using Microsoft.Restier.Core;
using Microsoft.Restier.Core.Model;
using Microsoft.Restier.Core.Submit;
using Microsoft.Restier.Providers.InMemory.DataStoreManager;
using Microsoft.Restier.Providers.InMemory.Submit;
using Microsoft.OData;

namespace JetsonsRW
{
    public static class WebApiConfig
    {
        private const string routeName = "JetsonsRWApi";

        public static void Register(HttpConfiguration config)
        {
            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.LocalOnly;
            config.MessageHandlers.Add(new ETagMessageHandler());
            config.SetUrlKeyDelimiter(ODataUrlKeyDelimiter.Slash);
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
            config.UseRestier<JetsonsApi>((services) =>
            {
                Func<IServiceProvider, IDataStoreManager<string, JetsonsDataSource>> defaultDataStoreManager =
                 sp => new DefaultDataStoreManager<string, JetsonsDataSource>()
                 {
                     MaxDataStoreInstanceCapacity = 1000,
                     MaxDataStoreInstanceLifeTime = new TimeSpan(0, 30, 0)
                 };

                Func<IServiceProvider, ODataValidationSettings> validationSettingFactory = sp => new ODataValidationSettings
                {
                    MaxAnyAllExpressionDepth = 4,
                    MaxExpansionDepth = 4
                };

                services.AddSingleton<ODataValidationSettings>(validationSettingFactory);
                services.AddChainedService<IModelBuilder>((sp, next) => new JetsonsApi.ModelBuilder());
                services.AddChainedService<IChangeSetInitializer>((sp, next) => new ChangeSetInitializer<JetsonsDataSource>());
                services.AddChainedService<ISubmitExecutor>((sp, next) => new SubmitExecutor());
                services.AddSingleton(defaultDataStoreManager);

               // Add custom JetsonsBatchHandler
               ODataBatchHandler JetsonsBatchHandler = new JetsonsBatchHandler(GlobalConfiguration.DefaultServer);
               JetsonsBatchHandler.ODataRouteName = routeName;
               services.AddSingleton(JetsonsBatchHandler);
            });

            RegisterJetsons(config, GlobalConfiguration.DefaultServer);
        }

        public static void RegisterJetsons(
            HttpConfiguration config, HttpServer server)
        {
            // enable query options for all properties
            config.Filter().Expand().Select().OrderBy().MaxTop(null).Count();
            config.SetTimeZoneInfo(TimeZoneInfo.Utc);
            config.MapRestier<JetsonsApi>(
                routeName,
                "",
                false); // Custom JetsonsBatchHandler registered in UseRestier 
        }
    }
}