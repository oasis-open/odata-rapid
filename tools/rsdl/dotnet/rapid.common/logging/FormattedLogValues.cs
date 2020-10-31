namespace rapid
{
    internal readonly struct FormattedLogValues
    {
        public FormattedLogValues(string message, object[] args) { Message = message; Args = args; }
        public string Message { get; }
        public object[] Args { get; }

        public override string ToString()
        {
            return string.Format(Message, Args);
        }
    };
}