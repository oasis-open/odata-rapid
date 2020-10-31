using System.Collections.Generic;

namespace rapid.rsdl
{
    internal static class QueueExtensions
    {
        /// <summary>
        /// allows easy construction using collection initializer syntax new Queue<T> { t }
        /// </summary>
        public static T Add<T>(this Queue<T> queue, T item)
        {
            queue.Enqueue(item); return item;
        }
    }
}
