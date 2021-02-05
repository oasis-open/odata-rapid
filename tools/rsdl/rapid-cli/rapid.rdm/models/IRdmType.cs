namespace rapid.rdm
{
    /// <summary>
    /// interfaces can't be sealed but remainder assumes only two implementations:
    //  RdmStructuredType, RdmEnum
    /// </summary>
    public interface IRdmType : IRdmSchemaElement
    {
    }
}
