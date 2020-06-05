# Rest API Design (RAPID) Profile and OData

# ---THIS WHOLE DOCUMENT IS A PLACEHOLDER---

RAPID is designed to be a profile that applies a subset of the conventions defined in OData applicable to any RESTful
API. A RAPID service can easily support generic OData V4 clients by:

-   Supporting OData calling conventions
-   Following OData JSON conventions for OData V4 Clients

RAPID services MAY support any additional conventions defined in the OData specification as appropriate to the service.
RAPID services SHOULD

-   Describe supported level of query functionality, if any, through Capabilities annotations

# Supporting OData Calling Conventions

<todo…>

## Supporting alternate key syntax or OData ids in responses

Services SHOULD support the OData parens key syntax as an alternate syntax.

GET http://rapid-pro.org/company/employees(2)

To be interoperable with OData clients, RAPID services that do not support the above OData key convention MUST include
an "@id" property whose string value is a URL that can be used to retrieve the resource.

## Support qualified function/action names

<TODO…> -Namespace-qualified action/function names

-Support "\$" prefix for built-in query options

-Namespace-qualified enums

## Supporting application/xml for service description?

<TODO…> reference OData V4 CSDL specification

## Following OData JSON conventions for OData V4 Clients

A RAPID service determines that a request is from a generic OData V4 client by looking for any of the following:

-   An OData-MaxVersion header value of 4.01
-   An OData-Version header value of 4.01
-   A mime type of application/json with an odata.metadata type parameter
