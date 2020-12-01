using System;
using System.IO;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm;
using System.Linq;
using rapid.rsdl;
using rapid.rdm;

namespace rapid
{
    /// <summary>
    /// Parse a RSDL file into a RDM model, validate and convert the model into CSDL
    /// </summary>
    internal class RsdlConverter
    {
        public RsdlConverter(ILogger logger)
        {
            this.logger = logger;
        }

        public readonly ILogger logger;

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="path">file path of input file to parse</param>
        /// <param name="format">indicates whether it should be written as XML or JSON CSDL</param>
        public bool Convert(string path, CsdlFormat format)
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
                WriteCsdl(csdlModel, path, format);
                return true;
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

        private void WriteCsdl(IEdmModel model, string inputPath, CsdlFormat format = CsdlFormat.XML, bool verbose = false)
        {
            if (format.HasFlag(CsdlFormat.XML))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.xml");
                if (verbose)
                {
                    logger.LogInfo("writing {0}", path);
                }
                using (var file = File.CreateText(path))
                using (var writer = System.Xml.XmlWriter.Create(file, new System.Xml.XmlWriterSettings { Indent = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, writer, CsdlTarget.OData, out var errors);
                }
            }
            if (format.HasFlag(CsdlFormat.JSON))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.json");
                if (verbose)
                {
                    logger.LogInfo("writing {0}", path);
                }
                using (var file = File.Create(path))
                using (var jsonWriter = new System.Text.Json.Utf8JsonWriter(file, new System.Text.Json.JsonWriterOptions { Indented = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, jsonWriter, out var errors);
                }
            }
        }
    }
}
