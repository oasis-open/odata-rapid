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
                new RdmTypeReference("Integer"),
                new RdmTypeReference("Integer") },
            new object[] {
                new RdmProperty("a", new RdmTypeReference("Integer"), false),
                new RdmProperty("a", new RdmTypeReference("Integer"), false) },
            new object[] {
                new RdmProperty("a", new RdmTypeReference("Integer"), false),
                new RdmProperty("a", new RdmTypeReference("Integer"), false, null, new Position(1,10)) },
            new object[] {
                new RdmProperty("a", new RdmTypeReference("Integer"), true),
                new RdmProperty("a", new RdmTypeReference("Integer"), true, null, new Position(1,10)) },
            new object[] {
                new RdmProperty("b", new RdmTypeReference("Integer"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }),
                new RdmProperty("b", new RdmTypeReference("Integer"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }) },
            new object[] {
                new RdmParameter("b", new RdmTypeReference("Integer"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }),
                new RdmParameter("b", new RdmTypeReference("Integer"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }) },
            new object[] {
                new RdmStructuredType("a", null, new [] { new RdmProperty("a", new RdmTypeReference("Integer"), false)}),
                new RdmStructuredType("a", null, new [] { new RdmProperty("a", new RdmTypeReference("Integer"), false)}) },
            new object[] {
                new RdmEnumType("b", new [] {new RdmEnumMember("a"), new RdmEnumMember("b"), new RdmEnumMember("c")}, true),
                new RdmEnumType("b", new [] {new RdmEnumMember("a"), new RdmEnumMember("b"), new RdmEnumMember("c")}, true) }
        };

        [Theory]
        [MemberData(nameof(Data))]
        public void StructurallyEqualObjectsAreEqual(object a, object b)
        {
            Assert.Equal(a, b);
        }

        public static IEnumerable<object[]> NegativeTestData => new List<object[]>
        {
            new object[] {
                new RdmEnumType("b", new [] { new RdmEnumMember("a"), new RdmEnumMember("b"), new RdmEnumMember("c")}, false),
                new RdmEnumType("b", new [] { new RdmEnumMember("a"), new RdmEnumMember("b"), new RdmEnumMember("c")}, true)
            }
        };

        [Theory]
        [MemberData(nameof(NegativeTestData))]
        public void DifferentObjectsAreNotEqual(object a, object b)
        {
            Assert.NotEqual(a, b);
        }
    }
}
