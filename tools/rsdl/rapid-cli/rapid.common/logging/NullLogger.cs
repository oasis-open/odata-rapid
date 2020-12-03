using System;

namespace rapid
{
    public class NullLogger : ILogger
    {
        public static NullLogger Instance = new NullLogger();

        public LogLevel LogLevel => LogLevel.None;

        public void Log<TState>(LogLevel level, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
        }
    }
}
