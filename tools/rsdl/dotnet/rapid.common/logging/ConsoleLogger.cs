using System;
using System.IO;

namespace rapid
{
    public class ConsoleLogger : ILogger
    {
        public LogLevel LogLevel { get; }

        private readonly TextWriter writer;

        public ConsoleLogger(LogLevel level)
        {
            this.LogLevel = level;
            this.writer = Console.Out;
        }

        public void Log<TState>(LogLevel level, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (level >= LogLevel)
            {
                var original = SetConsoleColor(level);
                writer.WriteLine(formatter(state, exception));
                Console.ForegroundColor = original;
            }
        }

        private ConsoleColor SetConsoleColor(LogLevel level)
        {
            var original = Console.ForegroundColor;
            if (level == LogLevel.Error)
            {
                Console.ForegroundColor = ConsoleColor.Red;
            }
            return original;
        }
    }
}