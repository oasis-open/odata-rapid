using CommandLine;

namespace rapid
{
    partial class Program
    {
        public class Options
        {
            [Option('v', "verbose", Required = false, HelpText = "Set output to verbose messages.")]
            public bool Verbose { get; set; }

            [Value(0, MetaName = "rsdl file", HelpText = "Input file including path")]
            public string InputPath { get; set; }

            [Option('f', "format", Required = false, HelpText = "Specify the format of the generated CSDL. One of JSON, XML or both.", Default = CsdlFormat.All)]
            public CsdlFormat Format { get; set; }

            [Option('o', "output", Required = false, HelpText = "Output direcotry. Defaults to input file's directory.")]
            public string OutputPath { get; set; }
        }
    }
}
