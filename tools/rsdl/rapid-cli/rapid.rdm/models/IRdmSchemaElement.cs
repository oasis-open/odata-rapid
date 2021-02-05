namespace rapid.rdm
{
    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations:
    //  RdmStructuredType, RdmService, RdmEnum
    /// </summary>
    public interface IRdmSchemaElement
    {
        string Name { get; }
    }
}
