using System;
using rapid.rdm;
using Xunit;

namespace rapid.rsdl.tests
{
    public class ParserTests
    {
        private readonly RdmParser parser = new RdmParser();


        [Fact]
        public void SinglePropertyGetsParsed()
        {
            var content = @"type Thing { id: String } ";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(null, new IRdmSchemaElement[] {
                new RdmStructuredType("Thing", null, new [] {
                     new RdmProperty("id", new RdmTypeReference("String"), false)
                })
            });
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void TypePropertiesGetParsed()
        {
            var content = "type Company { name: String incorporated: Date}";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(null, new[] {
                new RdmStructuredType("Company", null, new [] {
                        new RdmProperty ("name", new RdmTypeReference("String"), false, null),
                        new RdmProperty ("incorporated", new RdmTypeReference("Date"), false, null)
                })
            });

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void TypePropertiesWithKeyGetParsed()
        {
            var content = "type Company { key symbol: String   name: String   incorporated: Date}";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(null, new[] {
                new RdmStructuredType("Company", null, new [] {
                        new RdmProperty ("symbol", new RdmTypeReference("String"), true),
                        new RdmProperty ("name", new RdmTypeReference("String"), false),
                        new RdmProperty ("incorporated", new RdmTypeReference("Date"), false)
                })
            });

            Assert.Equal(expected, actual);
        }


        [Fact]
        public void NameSpaceDeclarationGetParsed()
        {
            var content = "namespace foo.bar type Company { }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(new RdmNamespaceDeclaration("foo.bar"),
                new[] {
                    new RdmStructuredType("Company", null, new RdmProperty[] {
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
                    new RdmStructuredType("Company", null, new RdmProperty[] {})
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
                    new RdmStructuredType("Company", null, new RdmProperty[] {})
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
                    new RdmStructuredType("Company", null, new [] { new RdmProperty("something", new RdmTypeReference("other.Something"), false)})
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
                    new RdmEnumType("Colors", new [] { new RdmEnumMember("red"), new RdmEnumMember("green"), new RdmEnumMember("blue")}, true)
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
                    new RdmEnumType("Colors", new [] { new RdmEnumMember("red"), new RdmEnumMember("green"), new RdmEnumMember("blue")}, false)
                }
            );

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void EnumMemberAnnotationsGetsParsed()
        {
            var content = @"enum Colors { @Core.Description:""ruby"" red green blue }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmEnumType("Colors", new [] {
                        new RdmEnumMember("red", new [] { new Annotation("Core.Description", AnnotationExpression.String("ruby")) }),
                        new RdmEnumMember("green"),
                        new RdmEnumMember("blue")}, false)
                }
            );

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void PropertyAnnotationGetsParsed()
        {
            var content = @"type Foo { @Core.Description:""description"" key id: String }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null, new [] {
                        new RdmProperty("id",
                            new RdmTypeReference("String"),
                            true,
                            new [] {
                                new Annotation("Core.Description", AnnotationExpression.String("description"))
                            }
                        ),
                    })
                }
            );

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void PathExpressionGetsParsed()
        {
            var content = "@Core.Description: ./a/b type Foo { }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null, Array.Empty<RdmProperty>(), null, false,
                        new [] {
                            new Annotation("Core.Description", AnnotationExpression.Path(new string[]{"a", "b"}))
                        }
                    )
                }
            );
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void TypeFacetsGetsParsed()
        {
            var content = @"
                type Foo {
                    prop1: String
                    prop2: String?
                    prop3: [String]                
                    prop4: [String?]                
                }
            ";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null, new [] {
                        new RdmProperty("prop1", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = false}), false),
                        new RdmProperty("prop2", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = false}), false),
                        new RdmProperty("prop3", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = true }), false),
                        new RdmProperty("prop4", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = true }), false),
                    }, null, false)
                }
            );
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void MaxLengthTypeFacetsGetsParsed()
        {
            var content = @"
                type Foo {
                    prop1: String(9)
                    prop2: String(9)?
                    prop3: [String(9)]                
                    prop4: [String(9)?]                
                }
            ";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null,
                        new [] {
                            new RdmProperty("prop1", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = false, MaxLength = 9}), false),
                            new RdmProperty("prop2", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = false, MaxLength = 9}), false),
                            new RdmProperty("prop3", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = true, MaxLength = 9}), false),
                            new RdmProperty("prop4", new RdmTypeReference("String", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = true, MaxLength = 9 }), false),
                        },
                        null,
                        false
                    )
                }
            );
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void DecimalTypeFacetsGetsParsed()
        {
            var content = @"
                type Foo {
                    prop1: Decimal(9,2)
                    prop2: Decimal(9,2)?
                    prop3: [Decimal(9,2)]                
                    prop4: [Decimal(9,2)?]                
                    prop5: Decimal
                }
            ";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null,
                        new [] {
                            new RdmProperty("prop1", new RdmTypeReference("Decimal", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = false, Precision = 9, Scale = 2}), false),
                            new RdmProperty("prop2", new RdmTypeReference("Decimal", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = false, Precision = 9, Scale = 2}), false),
                            new RdmProperty("prop3", new RdmTypeReference("Decimal", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = true, Precision = 9, Scale = 2}), false),
                            new RdmProperty("prop4", new RdmTypeReference("Decimal", new RdmTypeReferenceFacets { IsNullable = true, IsMultivalued = true, Precision = 9, Scale = 2}), false),
                            new RdmProperty("prop5", new RdmTypeReference("Decimal", new RdmTypeReferenceFacets { IsNullable = false, IsMultivalued = false, Precision = null, Scale = null}), false),
                        },
                        null,
                        false
                    )
                }
            );
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void TypeAnnotation()
        {
            var content = @" @Core.Description: ""foo"" type Foo { }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null,
                        new RdmProperty[0],
                        null,
                        false,
                        new [] {
                            new Annotation( "Core.Description", AnnotationExpression.String("foo"))
                        }
                    )
                }
            );
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void PropertyAnnotation()
        {
            var content = @" type Foo { @Core.Description: ""foo"" prop1: String }";
            var actual = parser.Parse(content, "test");

            var expected = new RdmDataModel(
                null,
                new[] {
                    new RdmStructuredType("Foo", null,
                        new RdmProperty[] {
                            new RdmProperty("prop1", new RdmTypeReference("String",  RdmTypeReferenceFacets.None),
                                false,
                                new [] {
                                    new Annotation( "Core.Description", AnnotationExpression.String("foo"))
                                }
                            ),
                        },
                        null,
                        false
                    )
                }
            );
            Assert.Null(Diff.GetFirstDifference(expected, actual));
            Assert.Equal(expected, actual);
        }
    }
}