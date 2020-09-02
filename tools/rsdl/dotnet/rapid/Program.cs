using Newtonsoft.Json;
using Superpower;
using System;
using System.IO;
using Microsoft.OData.Edm.Csdl;
using System.Diagnostics;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Serialization;
using System.Reflection;
using System.Linq;
using System.Collections;
using Microsoft.OData.Edm;
using System.Threading;

namespace rsdl.parser
{
    class Program
    {
       
        static void Main(string[] args)
        {
            var switchMappings = new Dictionary<string, string>()
            {
                { "--input", "input" },
                { "--format", "format" },
            };
            var builder = new ConfigurationBuilder().AddCommandLine(args, switchMappings);
            var config = builder.Build();

            var input = config["input"];
            var format = string.IsNullOrWhiteSpace(config["format"]) ? CsdlFormat.All : Enum.Parse<CsdlFormat>(config["format"], true);

            Console.WriteLine($"converting input: '{input}' to CSDL ('{format}') ");

            Convert(input, format);
        }

        /// <summary>
        /// Converts a RAPID pro schema definition language file (.rsdl) to a CSDL file
        /// </summary>
        /// <param name="inputPath">file name to parse</param>
        /// <param name="format">indicates wether it should be written as XML or JSON CSDL</param>
        static void Convert(string inputPath, CsdlFormat format)
        {
            var expression = File.ReadAllText(inputPath);

            // 1. tokenize
            var sw = Stopwatch.StartNew();
            var tokenizer = RdmTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(expression);
            sw.Stop();
            Console.WriteLine("tokenization {0}", sw.Elapsed);
            // show tokens
            //foreach (var token in tokenList)
            //{
            //    Console.WriteLine(token);
            //}

            // 2. parse
            sw.Start();
            var parser = RdmParser.DataModel;
            var model = parser.Parse(tokenList);
            Console.WriteLine("parsing      {0}", sw.Elapsed);
            //Console.WriteLine(JsonConvert.SerializeObject(model, Formatting.Indented, settings));

            // 3. transform to CSDL
            try
            {
                var transformer = new ModelTransformer();
                var csdlModel = transformer.Transform(model);
                Console.WriteLine("transforming {0}", sw.Elapsed);

                WriteCsdl(csdlModel, inputPath, format);
            }
            catch (TransformationException ex)
            {
                using (new ConsoleColorSelector(ConsoleColor.Red))
                {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            }
        }
              

        private static void WriteCsdl(IEdmModel model, string inputPath, CsdlFormat format = CsdlFormat.XML)
        {
            if (format.HasFlag(CsdlFormat.XML))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.xml");
                Console.WriteLine("writing {0}", path);
                using (var file = File.CreateText(path))
                using (var writer = System.Xml.XmlWriter.Create(file, new System.Xml.XmlWriterSettings { Indent = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, writer, CsdlTarget.OData, out var errors);
                }
            }
            if (format.HasFlag(CsdlFormat.JSON))
            {
                var path = Path.ChangeExtension(inputPath, ".csdl.json");
                Console.WriteLine("writing {0}", path);
                using (var file = File.Create(path))
                using (var jsonWriter = new System.Text.Json.Utf8JsonWriter(file, new System.Text.Json.JsonWriterOptions { Indented = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, jsonWriter, out var errors);
                }
            }
        }
    }
}
