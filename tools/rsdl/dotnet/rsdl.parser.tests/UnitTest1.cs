using Newtonsoft.Json;
using rsdl.parser.model;
using System;
using Xunit;

namespace rsdl.parser.tests
{
    public class UnitTest1
    {
        public void Test1()
        {
            var content = "type company { name: string incorporated: date}";
            var actual = RdmParser.Parse(content);

            var expected = new RdmDataModel(new[] {
                new RdmStructuredType("company", new [] {
                        new RdmProperty ("name", new RdmTypeReference("string"), null, new Position(1,16)),
                        new RdmProperty ("incorporated", new RdmTypeReference("date"), null, new Position(1,29))
                })
            });

            //Console.WriteLine(JsonConvert.SerializeObject(expected));
            //Console.WriteLine(JsonConvert.SerializeObject(actual));
            //Assert.Equal(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));

            Assert.Equal(expected, actual);
        }
    }
}
