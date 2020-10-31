using System;
using System.IO;
using System.Diagnostics;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm;
using rapid.csdl;
using rapid.rdm;
using System.Linq;

namespace rapid.rsdl
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
            var parser = new RdmParser(logger);

            var model = ParseFile(parser, path);
            if (model == null)
            {
                return false;
            }

            try
            {
                // load referenced models and
                var referencedModels = model.References.ToDictionary(
                    reference => reference.Alias,
                    reference => LoadModel(reference.Path, parser, Path.GetDirectoryName(path)));
                var env = new TypeMapping(model, referencedModels, logger);

                //  transform to CSDL
                var sw = Stopwatch.StartNew();
                var transformer = new ModelTransformer(logger);
                var csdlModel = transformer.Transform(model, env);
                logger.LogInfo("transformation time: {0}", sw.Elapsed);

                WriteCsdl(csdlModel, path, format);
            }
            catch (TransformationException ex)
            {
                logger.LogError(ex, "error transforming rsdl file {0}", Path.GetFileName(path));
                return false;
            }
            return true;
        }

        private RdmDataModel LoadModel(string path, RdmParser parser, string baseDirectory)
        {
            if (!Path.IsPathRooted(path))
            {
                path = Path.Combine(baseDirectory, path);
            }
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
