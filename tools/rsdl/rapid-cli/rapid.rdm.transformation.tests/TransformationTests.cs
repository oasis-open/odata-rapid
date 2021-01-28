using System.Collections.Generic;
using System.Linq;
using Microsoft.OData.Edm;
using rapid.rsdl;
using Xunit;

namespace rapid.rdm.tests
{

    public class TransformationTests
    {

        private readonly RdmParser parser = new RdmParser();

        private IEdmModel CreateEdmModelFromString(string text)
        {

            var model = parser.Parse(text, "main");
            var referencedModels = new Dictionary<string, RdmDataModel>();
            var transformer = new ModelTransformer(NullLogger.Instance);

            if (transformer.TryTransform(model, referencedModels, out var result))
            {
                return result;
            }
            else
            {
                throw new System.Exception("failed to transform model");
            }
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
            // arrange model with a keyless structured type NOT used as a single valued service property type
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
            foreach (var member in actual.Members)
            {
                Assert.True(1 == System.Numerics.BitOperations.PopCount((uint)member.Value.Value), $"member {member.Name} is not a single bit (value = {member.Value.Value:x}");
            }
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


        [Fact]
        public void AnnotationsGetTransformed()
        {
            // arrange
            var text = @"
                type Dog
                {
                    @Core.Description: ""a thing""
                    key name: String

                    numberOfLegs: Integer
                }";

            // act
            IEdmModel edm = CreateEdmModelFromString(text);

            // assert
            var entity = edm.SchemaElements
                .Where(e => e.Name == "Dog")
                .OfType<IEdmEntityType>()
                .First();
            Assert.Equal(EdmTypeKind.Entity, entity.TypeKind);

            var prop01 = entity.Properties()
                .Where(e => e.Name == "name")
                .First();
            // assert that "name" is a key property
            Assert.Contains(prop01, entity.DeclaredKey);

            // assert that "name" has a description annotation
            Assert.Contains(
                Microsoft.OData.Edm.Vocabularies.V1.CoreVocabularyModel.DescriptionTerm,
                prop01.VocabularyAnnotations(edm).Select(v => v.Term));
        }
    }
}
