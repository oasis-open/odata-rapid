using System;
using System.IO;
using System.Diagnostics;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm;
using rapid.csdl;

namespace rapid.rsdl
{
    /// <summary>
    /// Parse a RSDL file into a RDM model, validate and convert the model into CSDL
    /// </summary>
    internal class RsdlConverter
    {
        public RsdlConverter(ConsoleLogger logger)
        {
            this.logger = logger;
        }

        public readonly ConsoleLogger logger;

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="path">file path of input file to parse</param>
        /// <param name="format">indicates whether it should be written as XML or JSON CSDL</param>
        public bool Convert(string path, CsdlFormat format)
        {
            var model = ParseFile(path);
            if (model == null)
            {
                return false;
            }

            var validator = new RdmValidator(Path.GetDirectoryName(path), logger);
            if (!validator.Validate(model))
            {
                return false;
            }

            // Transform to CSDL
            try
            {
                var sw = Stopwatch.StartNew();
                var transformer = new ModelTransformer(logger);
                var csdlModel = transformer.Transform(model);

                logger.LogInfo("transformation time: {0}", sw.Elapsed);

                WriteCsdl(csdlModel, path, format);
            }
            catch (TransformationException ex)
            {
                logger.LogError(ex, "error transforming rsdl");
                return false;
            }
            return true;
        }

        private rdm.RdmDataModel ParseFile(string inputPath)
        {
            try
            {
                var content = File.ReadAllText(inputPath);
                var parser = new RdmParser(logger);
                var model = parser.Parse(content);

                return model;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "error parsing rsdl");
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
