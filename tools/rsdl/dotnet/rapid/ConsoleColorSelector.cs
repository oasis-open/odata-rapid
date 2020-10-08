using System;

namespace rapid.rsdl
{
    public class ConsoleColorSelector : IDisposable
    {
        private readonly ConsoleColor foreground;

        public ConsoleColorSelector(ConsoleColor foreground)
        {
            this.foreground = Console.ForegroundColor;
            Console.ForegroundColor = foreground;
        }

        public void Dispose()
        {
            Console.ForegroundColor = foreground;
        }
    }
}
