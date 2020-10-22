using System.Diagnostics;
using rapid.rdm;
using Superpower;

namespace rapid.rsdl
{
    /// <summary>
    /// Rapid data model parser
    /// </summary>
    public class RdmParser
    {
        private readonly ILogger logger;

        public RdmParser(ILogger logger = null)
        {
            this.logger = logger ?? NullLogger.Instance;
        }

        public RdmDataModel Parse(string content, string name)
        {
            // TODO: check https://github.com/serilog/serilog-filters-expressions/blob/dev/src/Serilog.Filters.Expressions/Filters/Expressions/Parsing/FilterExpressionParser.cs
            // for reference implementation

            // 1. tokenize
            var sw = Stopwatch.StartNew();
            var tokenizer = RdmTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(content);
            sw.Stop();
            logger.LogInfo("tokenized \"{0}\" in {1}", name, sw.Elapsed);

            // 2. parse
            sw.Start();
            var parser = Parsers.DataModel;
            var model = parser.Parse(tokenList);
            logger.LogInfo("parsed    \"{0}\" in {1}", name, sw.Elapsed);

            return model;
        }
    }
}
