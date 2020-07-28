using System;
using System.Runtime.Serialization;

namespace rsdl.parser
{
    [Serializable]
    public class TransformationException : Exception
    {
        public TransformationException()
        {
        }

        public TransformationException(string message) : base(message)
        {
        }

        public TransformationException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected TransformationException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}