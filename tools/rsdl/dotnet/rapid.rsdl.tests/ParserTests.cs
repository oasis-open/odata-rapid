using System;
using rapid.rdm;
using Xunit;

namespace rapid.rsdl.tests
{
    public class ParserTests
    {
        [Fact]
        public void TypePropertiesGetParsed()
        {
            var content = "type Company { name: String incorporated: Date}";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(null, new[] {
                new RdmStructuredType("Company", new [] {
                        new RdmProperty ("name", new RdmTypeReference("String"), null, new Position(1,16)),
                        new RdmProperty ("incorporated", new RdmTypeReference("Date"), null, new Position(1,29))
                })
            });
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void NameSpaceDeclarationGetParsed()
        {
            var content = "namespace foo.bar type Company { }";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", new RdmProperty[] {
                })
            });

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void NamespaceReferencesGetParsed()
        {
            var content = @"
namespace foo.bar
include other.namespace as other from ""other.rsdl""
type Company { }";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(
                new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", new RdmProperty[] {})
                },
                new[] {
                    new RdmNamespaceReference("other.namespace", "other", "other.rsdl")
                }
            );

            Assert.Equal(expected.References, actual.References);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void NamespaceReferencesWithoutAliasGetParsed()
        {
            var content = @"
namespace foo.bar
include other.namespace from ""other.rsdl""
type Company { }";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(
                new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", new RdmProperty[] {})
                },
                new[] {
                    new RdmNamespaceReference("other.namespace", null, "other.rsdl")
                }
            );

            Assert.Equal(expected.References, actual.References);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void QualifiedTypeNamesGetParsed()
        {
            var content = @"
include other.namespace as other from ""other.rsdl""
type Company { something: other.Something }";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Company", new [] { new RdmProperty("something", new RdmTypeReference("other.Something"))})
                },
                new[] {
                    new RdmNamespaceReference("other.namespace", "other", "other.rsdl")
                }
            );

            Assert.Equal(expected.References, actual.References);
            Assert.Equal(expected, actual);
        }
    }
}
