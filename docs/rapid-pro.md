---
id: gettingstarted
title: Rest API Design (RAPID) Profile
sidebar_label: Getting Started
---

RAPID is a simple profile for building well-designed APIs that can scale to the level of functionality required for any situation. 
By following RAPID conventions, services are able to leverage common libraries and tools,
and can share their information in a discoverable and interoperable way.

Because the RAPID profile is based on, and compatible with, the industry standard OData protocol,
services following RAPID conventions know that, as their needs grow,
there are well defined conventions and semantics that allow them to seamlessly and incrementally grow without having to rewrite as their needs evolve.

## What makes a RAPID service?

The RAPID profile defines conventions and best practices for services that:

-   Retrieve and (optionally) update resources using a simple standard REST API
-   Describe their resources, operations and capabilities in an interoperable JSON Format
-   Support common URL patterns and query parameters
-   Support JSON representations that follow well-defined conventions

## Why REST?

REST is an extremely popular architectural style for designing APIs where URLs represent resources that clients
interact with using simple GET, PATCH, POST and DELETE operations.

REST has been criticized as not allowing you to specify the data you want returned,
resulting either in over-fetching data or having to make multiple requests to fetch the desired data.
However, there is nothing in the architecture of REST that restricts the ability to further specify what data is retrieved from a resource; 
REST itself just doesn't define such patterns. 
You don't need to abandon the benefits of REST in order to have an API that gives you fine-grained control over how you retrieve and work with resources.

The RAPID profile expands REST by defining common conventions for specifying exactly what properties, 
including properties from related resources, to return in a single request.
By standardizing these conventions you get the elegance of REST, the power of a robust query language,
and the interoperability of a standard.

Sweet. Who says you can't have it all?

## Resource Description

RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service. 
For more information on the RAPID resource description language, see [RAPID Resource Description](./spec/rapid-pro-resource_description.md).

## RAPID Requests

RAPID uses standard GET, POST, PATCH, and DELETE requests to retrieve and update resources.

### Retrieving a Resource

RAPID services support retrieving a resource using the GET method:

| Template    | GET {resource-path}                                                             |
| ----------- | :------------------------------------------------------------------------------ |
| **Example** | GET [`http://rapid-pro.org/company`](https://jetsons.azurewebsites.net/company) |

RAPID services return individual resources as a json object.

```json
{
    "@context": "$metadata#company",
    "name": "Spacely's Space Sprockets",
    "incorporated": "2054-10-04",
    "stockSymbol": "spcly"
}
```

RAPID responses are self-describing. 
The first line says that the response is described by the `company` singleton defined in the `$metadata` resource. 
The `$metadata` resource may be represented as a relative or absolute URL.

RAPID uses properties prefixed with the `@` symbol to denote control information that is not part of the data.

RAPID payloads use native JSON types for string, boolean, and double values. 
Dates, Times, and DateTimeOffset values are represented as ISO-8601 strings.


For details on reading data in RAPID, see [Retrieving Resources in RAPID](./rapid-pro-read.md)

### Modifying a Resource

RAPID services support modifying a resource using the PATCH, POST, and DELETE methods.

| Template    | PATCH {single-resource-path}                   |
| ----------- | :--------------------------------------------- |
| **Example** | PATCH http://rapid-pro.org/company |

**Body:**

```json
{
    "name": "Spacely's Superior Space Sprockets"
}
```

For details on modifying data in RAPID, see [Modifying Resources in RAPID](./rapid-pro-data_modification.md)

## Optional Features

Although RAPID services can be very simple, because they follow core patterns they can be extended using optional Features,
as appropriate, to support more advanced scenarios such as those described in [RAPID Features](./spec/rapid-pro-features.md).

## RAPID and OpenAPI

OpenAPI is an extremely popular specification for documenting a REST API. 
Because the RAPID profile builds upon REST, it is natural and encouraged for RAPID services to support OpenAPI.

As the RAPID service description defines a superset of what a service might want to document through OpenAPI, 
a [suggested translation](http://docs.oasis-open.org/odata/odata-openapi/v1.0/odata-openapi-v1.0.html) 
is defined for translating a RAPID service description to OpenAPI.

## RAPID and OData

RAPID is designed to be a profile that applies a subset of the conventions defined in OData applicable to any RESTful API. 
A RAPID service can easily support generic OData V4 clients by:

-   Supporting OData calling conventions
-   Following OData JSON conventions for OData V4 Clients

RAPID services MAY support any additional conventions defined in the OData specification as appropriate to the service.

For more information on how RAPID works with OData services, see [RAPID and OData](./related/rapid-pro-odata.md)
