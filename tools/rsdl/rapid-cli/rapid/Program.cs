using System;
using System.Collections.Generic;
using CommandLine;

namespace rapid
{
    partial class Program
    {
        static int Main(string[] args)
        {
            var parser = new Parser(config =>
            {
                config.EnableDashDash = true;
                config.HelpWriter = Console.Out;
                config.CaseInsensitiveEnumValues = true;
            });

            return parser
                .ParseArguments<Options>(args)
                .MapResult(Run, ReturnError);
        }

        private static int Run(Options options)
        {
            var logger = new ConsoleLogger(options.Verbose ? LogLevel.Information : LogLevel.Error);
            var converter = new RsdlConverter(logger);
            var result = converter.Convert(options.InputPath, options.Format).Result;
            return result ? 0 : 1;
        }

        private static int ReturnError(IEnumerable<Error> errors)
        {
            return 1;
        }
    }
}
