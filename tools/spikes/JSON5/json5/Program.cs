using System;
using System.IO;
using Superpower;
using Superpower.Model;

namespace json5
{
    class Program
    {
        static void Main(string[] args)
        {
            var expression = File.ReadAllText("sample.txt");

            // 1.
            var tokenizer = ExpressionTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(expression);

            // foreach (var token in tokenList)
            // {
            //     Console.WriteLine(token);
            // }

            // 2.
            var parser = ExpressionParser.Expression; // parser built with combinators
            var expressionTree = parser.Parse(tokenList);

            Console.WriteLine();
            Console.WriteLine(expressionTree);

            // // Use the result
            // var eval = expressionTree.Compile();
            // Console.WriteLine(eval()); // -> 5
        }
    }
}
