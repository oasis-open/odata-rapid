using System;

namespace rapid
{
    public static class LoggerExtensions
    {
        public static void LogInfo(this ILogger logger, string message, params object[] args)
        {
            logger.Log(LogLevel.Information, new FormattedLogValues(message, args), null, _messageFormatter);
        }

        public static void LogError(this ILogger logger, Exception exception, string message, params object[] args)
        {
            logger.Log(LogLevel.Error, new FormattedLogValues(message, args), exception, _messageFormatter);
        }

        public static void LogError(this ILogger logger, string message, params object[] args)
        {
            logger.Log(LogLevel.Error, new FormattedLogValues(message, args), null, _messageFormatter);
        }


        private static string MessageFormatter(FormattedLogValues state, Exception error)
        {
            return state.ToString() + (error != null ? ("\n\t" + error.Message) : string.Empty);
        }

        private static readonly Func<FormattedLogValues, Exception, string> _messageFormatter = MessageFormatter;
    }
}
