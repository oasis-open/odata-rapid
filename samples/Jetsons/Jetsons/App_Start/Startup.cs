// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Query;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Restier.Core;
using Microsoft.OData;
using Microsoft.OData.UriParser;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Restier.AspNetCore;
using Microsoft.Extensions.Hosting;
using Microsoft.Restier.Core.Submit;
using Microsoft.Restier.Core.Model;
using Microsoft.Restier.Providers.InMemory.DataStoreManager;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace Jetsons
{
    public class Startup
    {
        private const string routeName = "JetsonsApi";
        private const string corsPolicy = "_allowAllCORS";
        internal const string serviceName = "jetsons.azurewebsites.net";

        /// <summary>
        /// The application configuration
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Startup"/> class.
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// Configures the container.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRestier((builder) =>
            {
                // This delegate is executed after OData is added to the container.
                // Add replacement services here.
                builder.AddRestierApi<JetsonsApi>(routeServices =>
                {
                    routeServices
                        .AddSingleton(new ODataValidationSettings
                        {
                            MaxTop = 5,
                            MaxAnyAllExpressionDepth = 3,
                            MaxExpansionDepth = 3,
                        })
                        .AddScoped<ODataMessageWriterSettings>((sp) =>
                        new ODataMessageWriterSettings
                        {
                            Version = ODataVersion.V401,
                            BaseUri = new Uri("http://" + serviceName, UriKind.Absolute)
                        })

                    // omit @odata prefixes
                    .AddSingleton<ODataSimplifiedOptions>((sp) =>
                    {
                        ODataSimplifiedOptions simplifiedOptions = new ODataSimplifiedOptions();
                        simplifiedOptions.SetOmitODataPrefix(true);
                        return simplifiedOptions;
                    })
                    .AddScoped<ODataUriResolver>((serviceProvider) =>
                        new ODataUriResolver
                        {
                            EnableNoDollarQueryOptions = true,
                            EnableCaseInsensitive = true,
                        })
                    .AddSingleton<IChangeSetInitializer, Microsoft.Restier.Providers.InMemory.Submit.ChangeSetInitializer<JetsonsApi>>()
                    .AddSingleton<ISubmitExecutor, Microsoft.Restier.Providers.InMemory.Submit.SubmitExecutor>()
                    .AddChainedService<IModelBuilder, JetsonsApi.ModelBuilder>()
                    .AddSingleton<IDataStoreManager<string, JetsonsDataSource>>(new SingleDataStoreManager<string, JetsonsDataSource>())

                    //.AddScoped<ODataQuerySettings>((sp) => new ODataQuerySettings
                    //{
                    //    PageSize = 2
                    //});
                    ;
                });
            });

            services.AddControllers(options => options.EnableEndpointRouting = false);

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = false;
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: corsPolicy,
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    });
            });
        }

        /// <summary>
        /// Configures the application and the HTTP Request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(corsPolicy);

            app.UseThreadPrincipals();
            app.UseSession();
            app.UseJetsonsMiddleware();

            app.UseMvc(builder =>
            {
                builder.Select().Expand().Filter().OrderBy().MaxTop(100).Count().SetTimeZoneInfo(TimeZoneInfo.Utc);

                builder.MapRestier(builder =>
                {
                    builder.MapApiRoute<JetsonsApi>(routeName, "", true);
                });
            });
        }
    }

    /// <summary>
    /// Jetsons-specific request handling
    /// </summary>
    public class JetsonsMiddleware
    {
        private RequestDelegate _next;
        public JetsonsMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // set the host to be Jetsons
            context.Request.Host = new HostString(Startup.serviceName);

            // set the default format to be application/json
            string accepts = "application/json";
            StringValues acceptValues;
            if (context.Request.Headers.TryGetValue("Accept", out acceptValues)  && acceptValues.Count > 0)
            {
                accepts = acceptValues[0].Replace("*/*", "application/json").Replace("application/*", "application/json");
                foreach (string accept in accepts.Split(','))
                {
                    if (accept.StartsWith("application/json") | accept.StartsWith("application/xml"))
                    {
                        break;
                    }
                }
            }

            context.Request.Headers["Accept"] = accepts;

            await _next.Invoke(context);
        }
    }

    /// <summary>
    /// Extension method for registering JetsonsMiddleware
    /// </summary>    
    public static class JetsonsMiddlewareExtensions
    {
        public static IApplicationBuilder UseJetsonsMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<JetsonsMiddleware>();
        }
    }
}
