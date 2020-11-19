using System;
using System.IO;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm.Vocabularies;
using Microsoft.OData.Edm.Vocabularies.V1;

namespace json5
{
    class Program
    {
        static void Main(string[] args)
        {

            if (args.Length > 0 && args[0].Equals("--clean", StringComparison.InvariantCultureIgnoreCase))
            {
                Clean("samples");
            }
            else
            {
                Transform("samples");
            }
        }


        private static void Transform(string root)
        {

            var logger = new ConsoleLogger();
            foreach (var dir in Directory.EnumerateDirectories(root))
            {
                var input = Path.Combine(dir, "sample.txt");
                if (File.Exists(input))
                {
                    Run(input, logger);
                    Console.WriteLine();
                }
            }
        }

        private static void Clean(string root)
        {
            foreach (var dir in Directory.EnumerateDirectories(root))
            {
                foreach (var file in Directory.EnumerateFiles(dir, "*.csdl.xml"))
                {
                    File.Delete(file);
                }
                foreach (var file in Directory.EnumerateFiles(dir, "*.csdl.json"))
                {
                    File.Delete(file);
                }
            }
        }

        private static void Run(string path, ILogger logger)
        {
            Console.WriteLine(path);

            // 1.
            var tokenizer = ExpressionTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(File.ReadAllText(path));

            // foreach (var token in tokenList)
            // {
            //     Console.WriteLine(token);
            // }
            // Console.WriteLine();

            // 2.
            var parser = new ExpressionParser();
            var expression = parser.Parse(tokenList);

            // Console.WriteLine(expression);
            // Console.WriteLine();

            // 3.
            var termName = Path.GetFileName(Path.GetDirectoryName(path));
            var term =
                ValidationVocabularyModel.Instance.FindTerm(termName) ??
                CapabilitiesVocabularyModel.Instance.FindTerm(termName);
            if (term == null)
            {
                logger.LogError("Can't find {0}", termName);
                return;
            }
            var transformer = new AnnotationExpressionTransformer(logger);
            var edmExpression = transformer.Transform(expression, term.Type);

            // 4. attach to model
            var ns = "example.com";
            var model = new EdmModel();
            var type = model.AddComplexType(ns, "complex01");

            model.AddVocabularyAnnotation(type, term, edmExpression);

            // 5. save
            // model.WriteTo(Console.OpenStandardOutput(), true);
            File.Delete(Path.ChangeExtension(path, ".csdl.xml"));
            File.Delete(Path.ChangeExtension(path, ".csdl.json"));
            model.WriteTo(File.Create(Path.ChangeExtension(path, ".csdl.xml")), true);
            model.WriteTo(File.Create(Path.ChangeExtension(path, ".csdl.json")), false);
        }
    }

    internal static class EdmModelExtensions
    {
        public static void WriteTo(this EdmModel model, Stream stream, bool asXml)
        {
            if (asXml)
            {
                using (var writer = System.Xml.XmlWriter.Create(stream, new System.Xml.XmlWriterSettings { Indent = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, writer, CsdlTarget.OData, out var errors);
                }
            }
            else
            {
                using (var writer = new System.Text.Json.Utf8JsonWriter(stream, new System.Text.Json.JsonWriterOptions { Indented = true }))
                {
                    CsdlWriter.TryWriteCsdl(model, writer, out var errors);
                }
            }
        }

        public static IEdmVocabularyAnnotation AddVocabularyAnnotation(this EdmModel model, IEdmVocabularyAnnotation annotation, bool inline)
        {
            model.AddVocabularyAnnotation(annotation);
            if (inline)
            {
                annotation.SetSerializationLocation(model, EdmVocabularyAnnotationSerializationLocation.Inline);
            }
            return annotation;
        }

        public static IEdmVocabularyAnnotation AddVocabularyAnnotation(this EdmModel model,
             IEdmVocabularyAnnotatable target, IEdmTerm term, IEdmExpression value, bool inline = true)
        {
            var annotation = new EdmVocabularyAnnotation(target, term, value);
            model.AddVocabularyAnnotation(annotation, inline);
            return annotation;
        }
    }
}
