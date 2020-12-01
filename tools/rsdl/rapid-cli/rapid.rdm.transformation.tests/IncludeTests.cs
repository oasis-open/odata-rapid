using System.Collections.Generic;
using Microsoft.OData.Edm;
using rapid.rsdl;
using Xunit;

namespace rapid.rdm.tests
{
    public class IncludeTests
    {
        private readonly RdmParser parser = new RdmParser();

        [Fact]
        public void TypesFromReferencedModelsAreResolveable()
        {
            // arrange
            var mainText = @"include ""common"" as common type Employee { employmentType: common.EmploymentType }";
            var inclText = "namespace com.example.common enum EmploymentType { }";

            var main = parser.Parse(mainText, "main");
            var incl = parser.Parse(inclText, "incl");

            var env = new TypeEnvironment(NullLogger.Instance);
            env.AddReferences(main, new Dictionary<string, RdmDataModel> { ["common"] = incl });

            // act
            var actual = env.ResolveTypeReference(new RdmTypeReference("common.EmploymentType", false));

            // assert
            // note that the enumeration has zero members
            var expected = new EdmEnumTypeReference(new EdmEnumType("com.example.common", "EmploymentType"), false);

            Assert.Equal(expected.FullName(), actual.FullName());
        }
    }
}
