using System.Linq;
using Microsoft.OData.Edm;
using rapid.rsdl;
using Xunit;

namespace rapid.rdm.tests
{
    public class TransformationTests
    {

        private readonly RdmParser parser = new RdmParser();


        [Fact]
        public void KeylessTypeUsedInSingeltonBecomesEntity()
        {
            // arrange model with a keyless structured type used as a single valued service property type
            var text = @"type Complex1 { a: String } service { theComplex1: Complex1 }";
            var model = parser.Parse(text, "main");
            var transformer = new ModelTransformer(NullLogger.Instance);

            // act
            var edm = transformer.Transform(model, null);

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
            // arrange model with a keyless structured type NOT used as a single valued service property type
            var text = @"type Complex1 { a: String } service {  }";
            var model = parser.Parse(text, "main");
            var transformer = new ModelTransformer(NullLogger.Instance);

            // act
            var edm = transformer.Transform(model, null);

            // assert
            var actual = edm.SchemaElements
                .Where(e => e.Name == "Complex1")
                .OfType<IEdmStructuredType>()
                .First();
            Assert.Equal(EdmTypeKind.Complex, actual.TypeKind);
        }
    }
}
