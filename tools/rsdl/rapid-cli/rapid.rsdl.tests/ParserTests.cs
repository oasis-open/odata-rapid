using System;
using System.Linq;
using rapid.rdm;
using Xunit;

namespace rapid.rsdl.tests
{
    public class ParserTests
    {
        private readonly RdmParser parser = new RdmParser();

        [Fact]
        public void TypePropertiesGetParsed()
        {
            var content = "type Company { name: String incorporated: Date}";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(null, new[] {
                new RdmStructuredType("Company", new [] {
                        new RdmProperty ("name", new RdmTypeReference("String"), null),
                        new RdmProperty ("incorporated", new RdmTypeReference("Date"), null)
                })
            });

            // Assert.Equal(((RdmStructuredType)expected.Items[0]).Properties[0], ((RdmStructuredType)actual.Items[0]).Properties[0]);
            // Assert.Equal(expected.Items[0], actual.Items[0]);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void NameSpaceDeclarationGetParsed()
        {
            var content = "namespace foo.bar type Company { }";
            var actual = parser.Parse(content, "test");

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
include ""other.rsdl"" as other
type Company { }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", new RdmProperty[] {})
                },
                new[] {
                    new RdmNamespaceReference("other.rsdl", "other")
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
include ""other.rsdl"" as other
type Company { }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", new RdmProperty[] {})
                },
                new[] {
                    new RdmNamespaceReference("other.rsdl", "other")
                }
            );

            Assert.Equal(expected.References, actual.References);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void QualifiedTypeNamesGetParsed()
        {
            var content = @"
include ""other.rsdl"" as other
type Company { something: other.Something }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Company", new [] { new RdmProperty("something", new RdmTypeReference("other.Something"))})
                },
                new[] {
                    new RdmNamespaceReference("other.rsdl", "other")
                }
            );

            Assert.Equal(expected.References, actual.References);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void FlagsGetParsed()
        {
            var content = @"flags Colors { red green blue }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmEnumType("Colors", new [] { "red", "green", "blue"}, true)
                }
            );

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void EnumGetsParsed()
        {
            var content = @"enum Colors { red green blue }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmEnumType("Colors", new [] { "red", "green", "blue"}, false)
                }
            );

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void PropertyAnnotationGetsParsed()
        {
            var content = @"type Foo { @Core.Description:""description"" @key id: String }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", new [] {
                        new RdmProperty("id",
                            new RdmTypeReference("String"),
                            new IAnnotation[] {
                                new CustomAnnotation("Core.Description", AnnotationExpression.String("description")),
                                new KeyAnnotation()
                            }
                        ),
                    })
                }
            );

            // var foo = actual.Items.OfType<RdmStructuredType>().First(t => t.Name == "Foo");
            // var id = foo.Properties.First(t => t.Name == "id");
            // Assert.Equal(2, id.Annotations.Count);
            Assert.Equal(expected, actual);
        }
    }
}
