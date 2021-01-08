using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Xml;
using Microsoft.OData.Edm;
using Microsoft.OData.Edm.Csdl;
using Microsoft.OData.Edm.Vocabularies;
using rapid.rsdl;
using Xunit;

namespace rapid.rdm.tests
{

    public class EndToEndTests
    {
        private readonly RdmParser parser = new RdmParser();

        private readonly EdmModelComparer comparer = new EdmModelComparer();

        [Theory]
        [MemberData(nameof(TestFileProvider.TestFiles), MemberType = typeof(TestFileProvider))]
        public void EndToEnd(string path, string rsdlPath, string csdlPath)
        {
            Assert.True(rsdlPath != null, $"no RSDL file in directory {path}");
            Assert.True(csdlPath != null, $"no CSDL file in directory {path}");

            var actual = LoadAndTransformRsdlModel(rsdlPath);
            var expected = LoadEdmModel(csdlPath);

            Assert.Empty(comparer.Compare(expected, actual));
        }

        public class TestFileProvider
        {
            public static IEnumerable<object[]> TestFiles()
            {
                foreach (var path in Directory.GetDirectories("data"))
                {
                    var rsdl = Directory.GetFiles(path, "*.rsdl").FirstOrDefault();
                    var csdl = Directory.GetFiles(path, "*.csdl.xml").FirstOrDefault();
                    yield return new object[] { path, rsdl, csdl };
                }
            }
        }


        private static IEdmModel LoadEdmModel(string csdlPath)
        {
            var ext = System.IO.Path.GetExtension(csdlPath);
            if (ext == ".xml")
            {
                using var xml = XmlReader.Create(csdlPath);
                var expected = CsdlReader.Parse(xml);
                return expected;
            }
            throw new ArgumentOutOfRangeException($"unexpected file name extension in {csdlPath}");
        }

        private IEdmModel LoadAndTransformRsdlModel(string rsdlPath)
        {
            var model = parser.Parse(File.ReadAllText(rsdlPath), System.IO.Path.GetFileNameWithoutExtension(rsdlPath));
            var referencedModels = new Dictionary<string, RdmDataModel>();
            var transformer = new ModelTransformer(NullLogger.Instance);

            if (transformer.TryTransform(model, referencedModels, out var result))
            {
                // to work arround the problem of comparing generated models with the ones loaded from a file
                // we will save and load this model.

                using (var xml = XmlWriter.Create(rsdlPath + ".actual.csdl.xml"))
                {
                    CsdlWriter.TryWriteCsdl(result, xml, CsdlTarget.OData, out var errors);
                }

                using (var reader = XmlReader.Create(rsdlPath + ".actual.csdl.xml"))
                {
                    var loaded = CsdlReader.Parse(reader);
                    return loaded;
                }
            }
            else
            {
                throw new System.Exception("failed to transform model");
            }
        }
    }
}

