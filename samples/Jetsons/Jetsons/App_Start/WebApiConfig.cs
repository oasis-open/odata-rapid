// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Web.Http;
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
using Microsoft.OData.UriParser;

namespace Jetsons
{
    public static class WebApiConfig
    {
        private const string routeName = "JetsonsApi";

        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Filter().Expand().Select().OrderBy().MaxTop(100).Count().SetTimeZoneInfo(TimeZoneInfo.Utc);

            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.LocalOnly;
            config.MessageHandlers.Add(new ETagMessageHandler());
            config.SetUrlKeyDelimiter(ODataUrlKeyDelimiter.Slash);
            config.UseRestier((builder) =>
            {
                Func<IServiceProvider, ODataValidationSettings> validationSettingFactory = sp => new ODataValidationSettings
                {
                    MaxAnyAllExpressionDepth = 4,
                    MaxExpansionDepth = 4
                };

                builder.AddRestierApi<JetsonsApi>(services =>
                {
                    services.AddSingleton<ODataValidationSettings>(validationSettingFactory);
                    services.AddChainedService<IModelBuilder>((sp, next) => new JetsonsApi.ModelBuilder());
                    services.AddChainedService<IChangeSetInitializer>((sp, next) => new ChangeSetInitializer<JetsonsDataSource>());
                    services.AddChainedService<ISubmitExecutor>((sp, next) => new SubmitExecutor());
                    services.AddSingleton<IDataStoreManager<string, JetsonsDataSource>>(new SingleDataStoreManager<string, JetsonsDataSource>());
                    services.AddScoped<ODataMessageWriterSettings>((sp) =>
                        new ODataMessageWriterSettings
                        {
                            Version = ODataVersion.V401,
                            BaseUri = new Uri("myUri")
                        });

                    // omit @odata prefixes
                    services.AddScoped<ODataSimplifiedOptions>((serviceProvider) =>
                    {
                        ODataSimplifiedOptions simplifiedOptions = new ODataSimplifiedOptions();
                        simplifiedOptions.SetOmitODataPrefix(true);
                        return simplifiedOptions;
                    });

                    services.AddScoped<ODataUriResolver>((serviceProvider) =>
                        new ODataUriResolver {
                            EnableNoDollarQueryOptions = true,
                            EnableCaseInsensitive = true,
                        });

                    //services.AddScoped<ODataQuerySettings>((sp) => new ODataQuerySettings
                    //{
                    //    PageSize = 2
                    //});
                });
            });

            RegisterJetsons(config, GlobalConfiguration.DefaultServer);
        }

        public static void RegisterJetsons(
            HttpConfiguration config, HttpServer server)
        {
            // enable query options for all properties
            config.Filter().Expand().Select().OrderBy().MaxTop(null).Count().SkipToken();
            config.SetTimeZoneInfo(TimeZoneInfo.Utc);
            config.MapRestier((builder)=>
                builder.MapApiRoute<JetsonsApi>(routeName,
                "",
                true) // use default batchhandler
                );
        }
    }
}
