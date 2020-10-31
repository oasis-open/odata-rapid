using System;
using System.Collections.Generic;
using Microsoft.OData.Edm;
using rapid.rdm;
using Xunit;

namespace rapid.rsdl.tests
{
    public class IncludeTests
    {
        private readonly RdmParser parser = new RdmParser();

        [Fact]
        public void TypesFromReferencedModelsAreResolved()
        {
            // create two models, one referencing the other
            var mainText = @"include ""common"" as common type Employee { employmentType: common.EmploymentType }";
            var inclText = "namespace com.example.common enum EmploymentType { }";

            var main = parser.Parse(mainText, "main");
            var incl = parser.Parse(inclText, "incl");

            // system under test
            var env = new TypeMapping(
                main,
                new Dictionary<string, RdmDataModel> { ["common"] = incl },
                NullLogger.Instance);
            // resolve the referenced type
            var actual = env.ResolveTypeReference(new RdmTypeReference("common.EmploymentType", false));

            // note that the enumeration has zero members
            var expected = new EdmEnumTypeReference(new EdmEnumType("com.example.common", "EmploymentType"), false);

            // TODO: fix equality comparison
            Assert.Equal(expected.FullName(), actual.FullName());
        }
    }
}
