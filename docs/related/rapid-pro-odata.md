---
id: odata
title: RAPID and OData
---

RAPID Profile is a subset of the conventions defined in [OData](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html) that can be applied to any RESTful API.
A RAPID service can easily support generic OData V4 clients by:

- Supporting [OData calling conventions](https://docs.oasis-open.org/odata/odata/v4.01/os/part2-url-conventions/odata-v4.01-os-part2-url-conventions.html)
- Following [OData JSON conventions](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html)

RAPID services MAY support any additional conventions defined in the OData specification.
RAPID services SHOULD

- Describe the supported level of query functionality, if any, through [Capabilities annotations](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Capabilities.V1.md)

## Support OData canonical key syntax

Services SHOULD support the OData parens key syntax as an alternate syntax.

```
GET http://rapid-pro.org/company/employees(2)
```

To be interoperable with OData clients,
RAPID services that do not support the above OData key convention MUST include an `@id` property whose string value is a URL that can be used to retrieve the resource.

## Support `$` prefix for built-in query options

In addition to the "friendly" query option names `filter`, `orderby`, `select`, ... services SHOULD also support the `$`-prefixed versions `$filter`, `$orderby`, `$select`, ... with the same semantics.

## Support qualified action and function names

In addition to "short" action and function names services SHOULD also support namespace-qualified action and function names, for example

```
POST http://rapid-pro.org/company/employees/1/youreFired
POST http://rapid-pro.org/company/employees/1/enterprise.youreFired
```

where `enterprise` is the schema namespace that defines the `youreFired` action.

## Support XML resource description

To support generic OData V4 clients, RAPID services SHOULD provide their resource description at `/$metadata` (also) in XML format according to [OData V4 CSDL XML](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html).

## Following OData conventions for OData V4 Clients

A RAPID service determines that a request is from a generic OData V4 client by looking for any of the following:

- An `OData-MaxVersion` header
- An `OData-Version` header
- An `Accept` or `Content-Type` header with a value of `application/json` suffixed with an [OData-specific format parameter](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_RequestingtheJSONFormat)
