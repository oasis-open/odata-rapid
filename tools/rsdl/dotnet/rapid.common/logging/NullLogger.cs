using System;

namespace rapid
{
    public class NullLogger : ILogger
    {
        public static NullLogger Instance = new NullLogger();

        public void Log<TState>(LogLevel level, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
        }
    }
}