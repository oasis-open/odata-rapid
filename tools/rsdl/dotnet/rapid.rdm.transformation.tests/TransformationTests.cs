using System.Linq;
using Microsoft.OData.Edm;
using Xunit;

namespace rapid.rsdl.tests
{
    public class TransformationTests
    {

        private readonly RdmParser parser = new RdmParser();

        private IEdmModel CreateEdmModelFromString(string text)
        {

            var model = parser.Parse(text, "main");
            var env = new TypeMapping(model, NullLogger.Instance);
            var transformer = new ModelTransformer(NullLogger.Instance);
            // act
            var edm = transformer.Transform(model, env);
            return edm;
        }

        [Fact]
        public void KeylessTypeUsedInSingeltonBecomesEntity()
        {
            // arrange model with a keyless structured type used as a single valued service property type
            var text = @"type Complex1 { a: String } service { theComplex1: Complex1 }";

            // act
            IEdmModel edm = CreateEdmModelFromString(text);

            // assert
            var actual = edm.SchemaElements
                .Where(e => e.Name == "Complex1")
                .OfType<IEdmStructuredType>()
                .First();
            Assert.Equal(EdmTypeKind.Entity, actual.TypeKind);
        }

        [Fact]
        public void KeylessTypeNotUsedInSingeltonBecomesComplex()
        {
            // arrange model with a keyless structured type NOT used as a single valued service propert type
            var text = @"type Complex1 { a: String } service {  }";

            // act
            IEdmModel edm = CreateEdmModelFromString(text);

            // assert
            var actual = edm.SchemaElements
                .Where(e => e.Name == "Complex1")
                .OfType<IEdmStructuredType>()
                .First();
            Assert.Equal(EdmTypeKind.Complex, actual.TypeKind);
        }

        [Fact]
        public void FlagsGetTransformed()
        {
            // arrange
            var text = @"flags Color { red green blue }";
            // act
            IEdmModel edm = CreateEdmModelFromString(text);
            // assert
            var actual = edm.SchemaElements
                .Where(e => e.Name == "Color")
                .OfType<IEdmEnumType>()
                .First();
            Assert.Equal(EdmTypeKind.Enum, actual.TypeKind);
            Assert.True(actual.IsFlags);
        }

        [Fact]
        public void EnumGetTransformed()
        {
            // arrange
            var text = @"enum Color { red green blue }";
            // act
            IEdmModel edm = CreateEdmModelFromString(text);
            // assert
            var actual = edm.SchemaElements
                .Where(e => e.Name == "Color")
                .OfType<IEdmEnumType>()
                .First();
            Assert.Equal(EdmTypeKind.Enum, actual.TypeKind);
            Assert.False(actual.IsFlags);
        }
    }
}
