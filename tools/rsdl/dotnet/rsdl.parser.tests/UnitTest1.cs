using Newtonsoft.Json;
using rsdl.parser.model;
using System;
using Xunit;

namespace rsdl.parser.tests
{
    public class ParserTests
    {
        [Fact]
        public void TypePropertiesGetParsed()
        {
            var content = "type company { name: string incorporated: date}";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(null, new[] {
                new RdmStructuredType("company", new [] {
                        new RdmProperty ("name", new RdmTypeReference("string"), null, new Position(1,16)),
                        new RdmProperty ("incorporated", new RdmTypeReference("date"), null, new Position(1,29))
                })
            });
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void NameSpaceDeclarationGetParsed()
        {
            var content = "namespace foo.bar type company { }";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("company", new RdmProperty[] {
                })
            });

            Assert.Equal(expected, actual);
        }
    }
}
