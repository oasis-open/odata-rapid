// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.OData.Edm;
using Microsoft.OpenApi;
using Microsoft.OpenApi.Extensions;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.OData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Restier.Core.Model;
using Microsoft.OData.Edm.Csdl;
using System.Text.Json;
using System.Xml;
using System.Text;
using System;
using System.Collections;
using Microsoft.OData.Edm.Validation;
using System.Collections.Generic;
using System.IO;

namespace Jetsons.Controllers
{
    /// <summary>
    /// The OpenApiController exposes an OpenAPI description of the Jetsons service
    /// </summary>
    public class OpenApiController : ControllerBase
    {
        const string title = "Jetsons";
        const string description = "Sample Jetsons Service for OData RAPID Profile";
        const string service = "https://jetsons.azurewebsites.net";
        const string version = "1.0.0";
        static OpenApiDocument document;

        [Microsoft.AspNetCore.Mvc.Route("openapi.json")]
        public string Get()
        {
            return GetOpenApiDocument().SerializeAsJson(OpenApiSpecVersion.OpenApi3_0);
        }

        private OpenApiDocument GetOpenApiDocument()
        {
            if(document == null)
            {
                // Get the OData Model
                IEdmModel model = JetsonsApi.Model;

                #region hack
                //todo: fix exception when converting to OpenApi
                // seems to be caused by the "reason" string parameter to the "yourFired" action
                // doesn't appear if we read from CSDL, so serialize to csdl and read.
                // Code is probably bug in openapi; perhaps assumes csdlsemantic class?
                MemoryStream stream = new MemoryStream();
                IEnumerable<EdmError> errors;
                CsdlWriter.TryWriteCsdl(model, new Utf8JsonWriter(stream), out errors);
                stream.Position = 0;
                ReadOnlySpan<byte> jsonReadOnlySpan = Encoding.UTF8.GetBytes(new StreamReader(stream).ReadToEnd());
                var reader = new Utf8JsonReader(jsonReadOnlySpan);
                CsdlReader.TryParse(ref reader, out model, out errors);
                #endregion

                //Generate the OpenAPI description for the OData Model
                document = model.ConvertToOpenApi();

                // Set the service information for the OpenAPI Document
                document.Servers.Clear();
                document.Servers.Add(new OpenApiServer { Url = service, Description = description });
                document.Info.Title = title;
                document.Info.Description = description;
                document.Info.Version = version;
            }

            return document;
        }
    }
}
