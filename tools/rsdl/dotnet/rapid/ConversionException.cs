using System;
using System.Runtime.Serialization;

namespace rapid.rsdl
{
    [Serializable]
    internal class ConversionException : Exception
    {
        public int ReturnCode { get; }

        public ConversionException(int returnCode)
        {
            ReturnCode = returnCode;
        }

        public ConversionException(int returnCode, string message) : base(message)
        {
            ReturnCode = returnCode;
        }

        public ConversionException(int returnCode, string message, Exception innerException) : base(message, innerException)
        {
            ReturnCode = returnCode;
        }

        protected ConversionException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
