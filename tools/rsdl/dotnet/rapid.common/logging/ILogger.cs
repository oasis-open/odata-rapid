using System;

namespace rapid
{
    public enum LogLevel 
    {
        Information, Error
    }

    public interface ILogger
    {
        void Log<TState>(LogLevel level, TState state, Exception exception, Func<TState, Exception, string> formatter);
    }
}