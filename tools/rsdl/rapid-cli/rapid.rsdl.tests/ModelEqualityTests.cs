using rapid.rdm;
using System.Collections.Generic;
using Xunit;

namespace rapid.rsdl.tests
{
    public class ModelEqualityTests
    {

        public static IEnumerable<object[]> Data => new List<object[]>
        {
            // new object[] {
            //     new Position(1,10),
            //     new Position(1,10) },
            // new object[] {
            //     new RdmTypeReference("int"),
            //     new RdmTypeReference("int") },
            // new object[] {
            //     new RdmProperty("a", new RdmTypeReference("int"), false),
            //     new RdmProperty("a", new RdmTypeReference("int"), false) },
            // new object[] {
            //     new RdmProperty("a", new RdmTypeReference("int"), false),
            //     new RdmProperty("a", new RdmTypeReference("int"), false, null, new Position(1,10)) },
            // new object[] {
            //     new RdmProperty("a", new RdmTypeReference("int"), true),
            //     new RdmProperty("a", new RdmTypeReference("int"), true, null, new Position(1,10)) },
            new object[] {
                new RdmProperty("b", new RdmTypeReference("int"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }),
                new RdmProperty("b", new RdmTypeReference("int"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }) },
            new object[] {
                new RdmParameter("b", new RdmTypeReference("int"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }),
                new RdmParameter("b", new RdmTypeReference("int"), false, new [] { new Annotation("foo", AnnotationExpression.Null()) }) },
            // new object[] {
            //     new RdmStructuredType("a", new [] { new RdmProperty("a", new RdmTypeReference("int"), false)}),
            //     new RdmStructuredType("a", new [] { new RdmProperty("a", new RdmTypeReference("int"), false)}) },
            // new object[] {
            //     new RdmEnumType("b", new [] {"a", "b", "c"}, true),
            //     new RdmEnumType("b", new [] {"a", "b", "c"}, true) }
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
                new RdmEnumType("b", new [] {"a", "b", "c"}, false),
                new RdmEnumType("b", new [] {"a", "b", "c"}, true) }
        };

        [Theory]
        [MemberData(nameof(NegativeTestData))]
        public void DifferentObjectsAreNotEqual(object a, object b)
        {
            Assert.NotEqual(a, b);
        }
    }
}
