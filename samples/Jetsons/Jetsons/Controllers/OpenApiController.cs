using Microsoft.OData.Edm;
using Microsoft.OpenApi;
using Microsoft.OpenApi.Extensions;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.OData;
using Jetsons;
using System.IO;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace Jetsons.Controllers
{
    public class OpenApiController : ControllerBase
    {
        const string title = "Jetsons";
        const string description = "Sample Jetsons Service for OData RAPID Profile";
        const string service = "https://jetsons.azurewebsites.net";
        const string version = "1.0.0";

        [Microsoft.AspNetCore.Mvc.Route("openapi.json")]
        public string Get()
        {
            IEdmModel model = new JetsonsApi.ModelBuilder().GetModel(null);
            OpenApiDocument document = model.ConvertToOpenApi();
            document.Servers.Clear();
            document.Servers.Add(new OpenApiServer { Url = service, Description = description });
            document.Info.Title = title;
            document.Info.Description = description;
            document.Info.Version = version;

            return document.SerializeAsJson(OpenApiSpecVersion.OpenApi3_0);
        }
    }
}
