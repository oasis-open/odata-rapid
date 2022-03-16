using System.Web.Http;
using Microsoft.OData.Edm;
using Microsoft.OpenApi;
using Microsoft.OpenApi.Extensions;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.OData;
using Jetsons.Api;
using System.Web.Http.Results;
using System.IO;

namespace Jetsons.Controllers
{
    public class OpenApiController : ApiController
    {
        const string title = "Jetsons";
        const string description = "Sample Jetsons Service for OData RAPID Profile";
        const string service = "https://jetsons.azurewebsites.net";
        const string version = "1.0.0";

        [Route("openapi.json")]
        public JsonResult<object> Get()
        {
            IEdmModel model = new JetsonsApi.ModelBuilder().GetModel(null);
            OpenApiDocument document = model.ConvertToOpenApi();
            document.Servers.Clear();
            document.Servers.Add(new OpenApiServer { Url = service, Description = description });
            document.Info.Title = title;
            document.Info.Description = description;
            document.Info.Version = version;
            object openApi = new Newtonsoft.Json.JsonSerializer().Deserialize(new StringReader(document.SerializeAsJson(OpenApiSpecVersion.OpenApi3_0)), typeof(object));

            return Json<object>(openApi);
        }
    }
}
