using System;
using System.IO;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm;
using System.Linq;
using rapid.rsdl;
using rapid.rdm;
using Microsoft.OpenApi.OData;
using Microsoft.OpenApi.Extensions;
using Microsoft.OpenApi;
using System.Threading.Tasks;

namespace rapid
{
    /// <summary>
    /// Parse a RSDL file into a RDM model, validate and convert the model into CSDL
    /// </summary>
    internal class RsdlConverter
    {
        public RsdlConverter(ILogger logger)
        {
            this.logger = logger ?? NullLogger.Instance;
        }

        public readonly ILogger logger;

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="inputRsdl">reader to read the RSDL to parse</param>
        /// <param name="output">stream to write the output to</param>
        /// <param name="format">indicates whether it should be written as XML or JSON CSDL, or OpenAPI</param>
        /// <param name="modelName">the name of the model being converted</param>
        public async Task<bool> Convert(TextReader inputRsdl, Stream output, OutputFormat format, string modelName = "RapidModel")
        {
            // create parser and model transformer.
            RdmDataModel model;
            var parser = new RdmParser(logger);

            try
            {
                var rsdl = await inputRsdl.ReadToEndAsync();
                model = parser.Parse(rsdl, modelName);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, $"error parsing rsdl stream");
                return false;
            }

            // todo: Load referenced EDM models

            // transform into CSDL
            var transformer = new ModelTransformer(logger);
            if (transformer.TryTransform(model, null, out var csdlModel))
            {
                return await WriteOutput(csdlModel, output, format);
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="path">file path of input file to parse</param>
        /// <param name="format">indicates whether it should be written as XML or JSON CSDL, or OpenAPI</param>
        public async Task<bool> Convert(string path, OutputFormat format)
        {
            // create parser and model transformer.
            var parser = new RdmParser(logger);
            var transformer = new ModelTransformer(logger);

            // the model transformer has no ability to parse itself, so do the parsing upfront and
            // pass in the models (main and dependencies)

            // load main model file
            var model = ParseFile(parser, path);
            if (model == null)
            {
                return false;
            }

            // load referenced models
            var referencedModels = model.References.ToDictionary(
                reference => reference.Alias,
                reference => LoadModel(reference.Path, parser, Path.GetDirectoryName(path)));

            // transform into CSDL
            if (transformer.TryTransform(model, referencedModels, out var csdlModel))
            {
                return await WriteOutputToFile(csdlModel, path, format);
            }
            else
            {
                return false;
            }
        }

        private RdmDataModel LoadModel(string path, RdmParser parser, string baseDirectory)
        {
            if (!Path.IsPathRooted(path))
            {
                path = Path.Combine(baseDirectory, path);
            }
            if (Path.GetExtension(path) == "")
            {
                path = path + ".rsdl";
            };

            var model = parser.Parse(File.ReadAllText(path), Path.GetFileName(path));
            logger.LogInfo("loaded referenced model file {0} containing namespace {1}", path, model.Namespace.NamespaceName);
            return model;
        }

        private rdm.RdmDataModel ParseFile(RdmParser parser, string path)
        {
            try
            {
                var content = File.ReadAllText(path);
                var model = parser.Parse(content, Path.GetFileName(path));

                return model;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, $"error parsing rsdl file {path}");
                return default;
            }
        }

        private async Task<bool> WriteOutput(IEdmModel model, Stream stream, OutputFormat format)
        {
            if (format == OutputFormat.XML)
            {
                await WriteXml(model, stream);
            }
            else if (format == OutputFormat.JSON)
            {
                await WriteJson(model, stream);
            }
            else if (format == OutputFormat.OpenAPI)
            {
                await WriteOpenApi (model, stream);
            }
            else
            {
                return false;
            }

            return true;
        }

        private async Task<bool> WriteOutputToFile(IEdmModel model, string inputPath, OutputFormat format = OutputFormat.XML, bool verbose = false)
        {
            bool wroteOutput = false;

            if (format.HasFlag(OutputFormat.XML))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.xml");
                if (verbose)
                {
                    logger.LogInfo("writing {0}", path);
                }
                using (var file = File.Create(path))
                {
                    await WriteXml(model, file);
                }
                wroteOutput = true;
            }
            if (format.HasFlag(OutputFormat.JSON))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.json");
                if (verbose)
                {
                    logger.LogInfo("writing {0}", path);
                }
                using (var file = File.Create(path))
                {
                    await WriteJson(model, file);
                }
                wroteOutput = true;
            }
            if (format.HasFlag(OutputFormat.OpenAPI))
            {
                var path = Path.ChangeExtension(inputPath, ".openapi");
                if (verbose)
                {
                    logger.LogInfo("writing {0}", path);
                }
                using (var file = File.Create(path))
                {
                    await WriteOpenApi(model, file);
                }
                wroteOutput = true;
            }

            return wroteOutput;
        }

        private static async Task WriteXml(IEdmModel model, Stream stream)
        {
            using (MemoryStream memoryStream = new MemoryStream())
            using (var xmlWriter = System.Xml.XmlWriter.Create(memoryStream, new System.Xml.XmlWriterSettings { Indent = true }))
            {
                // Update once CsdlWriter adds an async overload
                if (CsdlWriter.TryWriteCsdl(model, xmlWriter, CsdlTarget.OData, out var errors))
                {
                    // until CsdlWriter supports writing async, write to a memory stream and copyasync to the target stream
                    // alternatively, could wrap the stream in an async wrapper
                    memoryStream.Seek(0, 0);
                    await memoryStream.CopyToAsync(stream);
                }
            }
        }

        private static async Task WriteJson(IEdmModel model, Stream stream)
        {
            using (MemoryStream memoryStream = new MemoryStream())
            using (var jsonWriter = new System.Text.Json.Utf8JsonWriter(memoryStream, new System.Text.Json.JsonWriterOptions { Indented = true }))
            {
                if (CsdlWriter.TryWriteCsdl(model, jsonWriter, out var errors))
                {
                    // until CsdlWriter supports writing async, write to a memory stream and copyasync to the target stream
                    // alternatively, could wrap the stream in an async wrapper
                    memoryStream.Seek(0, 0);
                    await memoryStream.CopyToAsync(stream);
                }
            }
        }

        private static async Task WriteOpenApi(IEdmModel model, Stream stream)
        {
            string title = "RAPID Service";
            string description = null;
            string version = null;
            if (model.EntityContainer != null)
            {
                title = model.EntityContainer.Name ?? title;
                description = model.GetDescriptionAnnotation(model.EntityContainer) ?? "RAPID Service for namespace " + model.EntityContainer.Namespace;
                version = model.GetAnnotationValue(model.EntityContainer, "Org.OData.Core.V1", "SchemaVersion") as string;
            }

            var document = model.ConvertToOpenApi();
            document.Servers.Clear();
            document.Info.Title = title;
            document.Info.Description = description;
            document.Info.Version = version;
            using (MemoryStream memoryStream = new MemoryStream())
            {
                // since SerializeAsJson is synchronous write to a memory stream and copyasync to the target stream
                // alternatively, could wrap the stream in an async wrapper
                document.SerializeAsJson(memoryStream, OpenApiSpecVersion.OpenApi3_0);
                memoryStream.Seek(0, 0);
                await stream.CopyToAsync(stream);
            }
        }
    }
}
