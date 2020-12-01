using System;

namespace rapid
{
    public enum LogLevel
    {
        Trace = 0, Information = 1, Error = 2, None = 3
    }

    public interface ILogger
    {
        LogLevel LogLevel { get; }
        void Log<TState>(LogLevel level, TState state, Exception exception, Func<TState, Exception, string> formatter);
    }
}
