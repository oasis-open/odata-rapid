using System;
using System.IO;
using System.Diagnostics;
using System.Collections.Generic;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm;
using CommandLine;

namespace rsdl.parser
{
    class Program
    {
        public class Options
        {
            [Option('v', "verbose", Required = false, HelpText = "Set output to verbose messages.")]
            public bool Verbose { get; set; }

            [Option('f', "format", Required = false, HelpText = "Specify the format of the generated CSDL.", Default = CsdlFormat.All)]
            public CsdlFormat Format { get; set; }

            [Value(0, MetaName = "inputPath", HelpText = "Input file-name including path")]
            public string InputPath { get; set; }
        }

        static int Main(string[] args)
        {
            var parser = new Parser(config =>
            {
                config.EnableDashDash = true;
                config.HelpWriter = Console.Out;
            });

            return parser.ParseArguments<Options>(args)
                .MapResult(
                    options => Run(options),
                    errors => Error(errors));
        }

        private static int Error(IEnumerable<Error> errors)
        {
            return 1;
        }

        private static int Run(Options options)
        {
            Convert(options.InputPath, options.Format, options.Verbose);
            return 0;
        }

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="inputPath">file name to parse</param>
        /// <param name="format">indicates wether it should be written as XML or JSON CSDL</param>
        static void Convert(string inputPath, CsdlFormat format, bool verbose = false)
        {
            var content = File.ReadAllText(inputPath);

            // Parse RDM model
            var model = RdmParser.Parse(content, out var diagnostics);
            if (verbose)
            {
                Console.Error.WriteLine("tokenization: {0}", diagnostics.TokenizationTime);
                Console.Error.WriteLine("parsing:      {0}", diagnostics.ParsingTime);
            }

            // Transform to CSDL
            try
            {
                var sw = Stopwatch.StartNew();
                var transformer = new ModelTransformer();
                var csdlModel = transformer.Transform(model);

                if (verbose)
                {
                    Console.Error.WriteLine("transforming: {0}", sw.Elapsed);
                }
                WriteCsdl(csdlModel, inputPath, format, verbose);
            }
            catch (TransformationException ex)
            {
                using (new ConsoleColorSelector(ConsoleColor.Red))
                {
                    Console.Error.WriteLine($"Error: {ex.Message}");
                }
            }
        }


        private static void WriteCsdl(IEdmModel model, string inputPath, CsdlFormat format = CsdlFormat.XML, bool verbose = false)
        {
            if (format.HasFlag(CsdlFormat.XML))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.xml");
                if (verbose)
                {
                    Console.Error.WriteLine("writing {0}", path);
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
                    Console.WriteLine("writing {0}", path);
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
