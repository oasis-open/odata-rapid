using System;
using System.Linq;


namespace json5
{

    public enum LogLevel { Info, Warn, Error }

    public struct EventId
    {
        public EventId(int id, string name) { Id = id; Name = name; }
        public int Id { get; }
        public string Name { get; }
    }

    public interface ILogger
    {
        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter);
    }

    public static class LoggerExtensions
    {
        public static void LogError(this ILogger logger, string format, params object[] args) =>
            logger.Log(LogLevel.Error, default, new LogMessage(format, args), null, LogMessage.Format);

        public static void LogWarn(this ILogger logger, string format, params object[] args) =>
                  logger.Log(LogLevel.Warn, default, new LogMessage(format, args), null, LogMessage.Format);

        public static void LogInfo(this ILogger logger, string format, params object[] args) =>
            logger.Log(LogLevel.Info, default, new LogMessage(format, args), null, LogMessage.Format);


        class LogMessage
        {
            private string format;
            private object[] args;

            public LogMessage(string format, object[] args)
            {
                this.format = format;
                this.args = args;
            }

            public static string Format(LogMessage message, Exception exception)
            {
                return string.Format(message.format, message.args);
            }
        }
    }

    public class ConsoleLogger : ILogger
    {
        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            var original = Console.ForegroundColor;
            switch (logLevel)
            {
                case LogLevel.Error:
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                case LogLevel.Warn:
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    break;
            }
            Console.WriteLine(formatter(state, exception));
            Console.ForegroundColor = original;
        }
    }
}
