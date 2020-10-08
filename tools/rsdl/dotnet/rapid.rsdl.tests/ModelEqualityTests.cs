using rapid.rdm;
using System.Collections.Generic;
using Xunit;

namespace rapid.rsdl.tests
{
    public class ModelEqualityTests
    {

        public static IEnumerable<object[]> Data => new List<object[]>
        {
            new object[] {
                new Position(1,10),
                new Position(1,10) },
            new object[] {
                new RdmTypeReference("int"),
                new RdmTypeReference("int") },
            new object[] {
                new RdmProperty("a", new RdmTypeReference("int")),
                new RdmProperty("a", new RdmTypeReference("int")) },
            new object[] {
                new RdmProperty("a", new RdmTypeReference("int")),
                new RdmProperty("a", new RdmTypeReference("int"),null, new Position(1,10)) },
            new object[] {
                new RdmProperty("b", new RdmTypeReference("int"), new [] { new KeyAnnotation() }),
                new RdmProperty("b", new RdmTypeReference("int"), new [] { new KeyAnnotation() }) },
            new object[] {
                new RdmParameter("b", new RdmTypeReference("int"), false, new [] { new KeyAnnotation() }),
                new RdmParameter("b", new RdmTypeReference("int"), false, new [] { new KeyAnnotation() }) },
            new object[] {
                new RdmStructuredType("a", new [] { new RdmProperty("a", new RdmTypeReference("int"))}),
                new RdmStructuredType("a", new [] { new RdmProperty("a", new RdmTypeReference("int"))}) },
        };

        [Theory]
        [MemberData(nameof(Data))]
        public void StructurallyEqualObjectsAreEqual(object a, object b)
        {
            Assert.Equal(a, b);
        }
    }
}
