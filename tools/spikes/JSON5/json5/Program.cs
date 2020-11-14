using System;
using System.IO;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm.Vocabularies;
using Microsoft.OData.Edm.Vocabularies.V1;
using Superpower;

namespace json5
{
    class Program
    {
        static void Main(string[] args)
        {
            // var text = File.ReadAllText("sample.txt");
            // var text = "{a: [1, 1.2, 123456789012, true, null, 'a'], b: 2}";
            var text = "[{value: 'red'}, {value: 'green'}, {value: 'blue'}, ]";

            // 1.
            var tokenizer = ExpressionTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(text);

            // foreach (var token in tokenList)
            // {
            //     Console.WriteLine(token);
            // }
            // Console.WriteLine();

            // 2.
            var parser = ExpressionParser.Expression; // parser built with combinators
            var expression = parser.Parse(tokenList);

            Console.WriteLine(expression);
            Console.WriteLine();

            // 3.
            var transformer = new AnnotationExpressionTransformer();
            var edmExpression = transformer.Transform(expression);

            // 4. attach to model
            var ns = "example.com";
            var model = new EdmModel();
            var term = ValidationVocabularyModel.Instance.FindTerm("Org.OData.Validation.V1.AllowedValues");
            var type = model.AddComplexType(ns, "complex01");

            model.AddVocabularyAnnotation(type, term, edmExpression);

            // 5. show
            model.WriteTo(Console.OpenStandardOutput(), true);
            model.WriteTo(File.Create("sample.csdl.xml"), true);
            model.WriteTo(File.Create("sample.csdl.json"), false);
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
