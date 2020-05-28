﻿# Rest API Design (RAPID) Profile

RAPID is a simple profile for building well designed APIs that can scale to the level of functionality required for any situation. By following RAPID conventions, services are able to leverage common libraries and tools, and can share their information in a discoverable and interoperable way.

Because the RAPID profile is based on, and compatible with, the industry standard OData protocol, services following RAPID conventions know that, as their needs grow, there are well defined conventions and semantics that allow them to seamlessly and incrementally grow without having to rewrite as their needs evolve.

## What makes a RAPID service?

The RAPID profile defines conventions and best practices for services that:

- Retrieve and (optionally) update resources using a simple standard REST API
- Describe their resources, operations and capabilities in an interoperable JSON Format
- Support common URL patterns and query parameters
- Support JSON representations that follow well defined conventions

## Why REST?

REST defines an extremely popular architectural style for designing APIs where URLs represent resources that clients interact with using simple GET, PUT, PATCH, POST and DELETE operations.

REST has been criticized as not allowing you to specify the data you want returned, resulting either in over-fetching data or having to make multiple requests to fetch the desired data. However, there is nothing in the architecture of REST that restricts the ability to further specify what data is retrieved from a resource; REST itself just doesn't define such patterns. You don't need to abandon the benefits of REST in order to have an API that gives you fine-grained control over how you retrieve and work with resources.

The RAPID profile expands REST by defining common conventions for specifying exactly what properties, including properties from related resources, to return in a single request. By standardizing these conventions you get the elegance of REST, the power of a robust query language, and the interoperability of a standard.

Sweet. Who says you can't have it all?

# Resource Description

RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service. For more information on the RAPID resource description language, see [RAPID-PRO Resource Description](./rapid-pro-resource_description.md).

# RAPID Requests

RAPID uses standard GET, POST, PATCH, and DELETE requests to retrieve and update resources.

## Retrieving a Resource

RAPID services support retrieving a resource using the GET method:
 
|Template| GET {resource-path}  
| ---------- | :--------------------------------------------------- | 
|**Example**| GET  [`http://rapid-pro.org/company`](https://jetsons.azurewebsites.net/company)  

RAPID services return individual resources as a json object. 

```json
{
    "@context": "$metadata#company",
    "name": "Spacely's Space Sprockets",
    "incorporated": "2054-10-04",
    "stockSymbol": "spcly"
}
```

RAPID responses are self-describing. The first line says that the response is described by the "company" singleton defined in the $metadata resource. The $metadata resource may be represented as a relative or absolute URI.

RAPID uses properties prefixed with the "@" symbol to denote control information that is not part of the data.

RAPID payloads use native JSON types for string, boolean, and double values. Dates, Times, and DateTimeOffset values are represented as ISO-8601 strings.

## Selecting Individual Properties of a Resource
The client can select individual properties of the resource using the select option:
 
|Template| GET {resource-path}?select={propertyName,…}  
| ---------- | :--------------------------------------------------- |
| **Example**| GET  [`http://rapid-pro.org/company?select=name,stockSymbol`](https://jetsons.azurewebsites.net/company?select=name,stockSymbol) 

  **Result:**
 
```json
{
    "@context": "$metadata#company(name,stockSymbol)",
    "name": "Spacely's Space Sprockets",
    "stockSymbol": "spcly"
}
```

The first line says that only the name and stockSymbol properties are selected to be returned from the company resource.

## Retrieving a Collection of Resources

RAPID services return collections of resources as a json array: 
 
|Template| GET {collection-resource-path}  
| ---------- | :--------------------------------------------------- |
|**Example**| GET  [`http://rapid-pro.org/company/employees`](https://jetsons.azurewebsites.net/company/employees)  

  **Result:**

```json
{
    "@context": "$metadata#company/employees",
    "value": [
        {
            "id": 1,
            "firstName": "Cosmo",
            "lastName": "Spacely",
            "title": "CEO"
        },
        {
            "id": 2,
            "firstName": "George",
            "lastName": "Jetson",
            "title": "Digital Index Operator"
        }
    ],
    "@nextLink": "company/employees?skiptoken=xyz"
}
```

If the result is large, the service may include a next link to tell the client that there are more items in the collection. The value of the next link is an opaque URL that the client can use to retrieve the next set of resources from the collection. The absence of the next link signals the client that they have retrieved all of the resources in the collection.

## Retrieving an Individual Member of a Collection

Individual members of a collection can be identified by appending the key to the url.
 
|Template| GET {collection-resource-path}/{key}  
|----------| :---------------------------------------------------|
|**Example**| GET [`http://rapid-pro.org/company/employees/2`](https://jetsons.azurewebsites.net/company/employees/2)
  
  **Result:**

```json
{
    "@context": "$metadata#company/employees/$entity",
    "id": 2,
    "firstName": "George",
    "lastName": "Jetson",
    "title": "Digital Index Operator"
}
```

Here the context property specifies that the result is an individual resource within the employees collection of the company.

## Selecting Individual Properties of Resources Within a Collection

Query options are composable; the client can select a subset of properties to be returned for each instance in the collection.
 
|Template | GET {collection-resource-path}?select={propertyName,…}
|---------- |:---------------------------------------------------|
|**Example**| GET  [`http://rapid-pro.org/company/employees?select=lastName`](https://jetsons.azurewebsites.net/company/employees?select=lastName) 

  **Result:**

```json
http://rapid-pro.org/company/employees?select=lastName  
{
    "@context": "$metadata#company/employees(lastName)",
    "value": [
        {
            "lastName": "Spacely"
        },
        {
            "lastName": "Jetson"
        }
    ],
    "@nextLink":  "company/employees?select=lastName&skiptoken=xyz"
}
```

## Requesting a Range of Results

The client can use top and/or skip query options to select a range of resources within a collection. They can use the count query option to request the count of all resources in the collection.
 
|Template: | GET {collection-resource-path}?skip={int}<br>GET {collection-resource-path}?top={int}<br>GET {collection-resource-path}?count=true
|-----------| :---------------------------------------------------|
|**Example**| GET [`http://rapid-pro.org/company/employees?skip=1&top=2&count=true`](https://jetsons.azurewebsites.net/company/employees?skip=1&top=2&count=true)  

  **Result:**

```json
{
    "@context": "$metadata#company/employees",
    "@count":4,
    "value": [
        {
            "id": 2,
            "firstName": "George",
            "lastName": "Jetson",
            "title": "Digital Index Operator"
        },
        {
            "id": 3,
            "firstName": "R.U.D.I.",
            "lastName": null,
            "title": "Computer"
        }
    ]
}
```

The results skip the first record and return the next two. The count property denotes the total number of resources in the collection, and is not affected by the skip or top. 
There is no next link because all 2 of the requested resources are returned.

## Ordering Results

The client can use the orderby query option to order the results returned within a collection.

| Template | GET {collection-resource-path}?orderby={propertyName [asc \| desc],…}  |
|----------| :---------------------------------------------------|
| **Example** | GET [`http://rapid-pro.org/company/employees?orderby=lastName asc, id desc`](https://jetsons.azurewebsites.net/company/employees?orderby=lastName%20asc,%20id%20desc)

  **Result:**

```json
{
    "@context": "$metadata#company/employees",
    "value": [
        {
            "id": 3,
            "firstName": "R.U.D.I.",
            "lastName": null,
            "title": "Computer"
        },
        {
            "id": 4,
            "firstName": "Judy",
            "lastName": "Jetson",
            "title": "Intern"
        },
        {
            "id": 2,
            "firstName": "George",
            "lastName": "Jetson",
            "title": "Digital Index Operator"
        }
    ],
    "@nextLink": "company/employees?orderby=lastName,id desc&skiptoken=xyz"
}
```

Null values sort before non-null values in ascending order and after non-null values in descending order.

If "asc" or "desc" is not specified, the default ordering is ascending.

## Filtering results

The client can use the filter query option to filter the results returned from the collection. 
 
|Template| GET {collection-resource-path}?filter={filter-expression}  
|---| :---|
|**Example**| GET  [`http://rapid-pro.org/company/employees?filter=lastName eq 'Jetson'`](https://jetsons.azurewebsites.net/company/employees?filter=lastName%20eq%20'Jetson')  

  **Result:**

```json
{
    "@context": "$metadata#company/employees",
    "value": [
        {
            "id": 2,
            "firstName": "George",
            "lastName": "Jetson",
            "title": "Digital Index Operator"
        },
        {
            "id": 4,
            "firstName": "Judy",
            "lastName": "Jetson",
            "title": "Intern"
        }
    ]
}
```

In this case, there is no next link since all of the resources matching the filter predicate were returned inline.

There is a full expression language to describe what the client can express in the filter. For more information, see [RAPID Expression Language](.\rapid-pro-expression_language.md]).

## Including Related Resources

Related resources can be retrieved as nested resources through the expand query option.
 
|Template| GET {collection-resource-path}?expand={navigationProperty,…}  
|----------| :---------------------------------------------------|
|**Example**| GET [`http://rapid-pro.org/company?expand=employees`](https://jetsons.azurewebsites.net/company?expand=employees)  

  **Result:**

```json
{
    "@context": "$metadata#company(employees())",
    "name": "Spacely's Space Sprockets",
    "incoporated": "2054-10-4",
    "stockSymbol": "spcly",
    "employees": [
        {
            "id": 1,
            "firstName": "Cosmo",
            "lastName": "Spacely",
            "title": "CEO"
        },
        {
            "id": 2,
            "firstName": "George",
            "lastName": "Jetson",
            "title": "Digital Index Operator"
        }
    ],
    "employees@nextLink": "company/employees?skiptoken=xyz"
}
```

The context property specifies that the employees are expanded within the company.
Because the next link refers to the nested "employees" property, the nextLink property is prefixed with the name of the nested property.

When expanding related resources, you can express the same options for the related resource that you can for any other resource path.
 
|Template| GET {collection-resource-path}?expand={navigationProp(queryOptions),…}  
|----------|---------------------------------------------------|
|**Example**| GET [`http://rapid-pro.org/company?expand=employees(select=firstName)`](https://jetsons.azurewebsites.net/company?expand=employees(select=firstName))  

  **Result:**

```json
{
    "@context": 
       "$metadata#company(employees(firstName))",
    "name": "Spacely's Space Sprockets",
    "incoporated": "2054-10-4",
    "stockSymbol": "spcly",
    "employees": [
        {
            "firstName": "Cosmo",
        },
        {
            "firstName": "George",
        }
    ],
    "employees@nextLink": "company/employees?select=firstName&skiptoken=xyz"
}
```

## Combining Query Options

Query options can be combined using the ampersand (&). To comply with URL parsing rules, query options within an expand clause are separated using semi-colons (;). The order of query options is not significant
 
|Template| GET {resource-path}?select={propertyName,…}&expand={navigationProperty(queryOptions),…}  
|----------|:---------------------------------------------------|
| |  GET {collection-resource-path}?<br>  select={propertyName,…}<br>  &top={int}<br>  &skip={int}<br>  &count=true<br>  &filter={filter-expression}<br>  &orderby={propertyName [asc \| desc],…}<br>  &expand={navigationProperty(queryOptions),…}  
|**Example**| GET  [`http://rapid-pro.org/company?select=name&expand=employees(select=firstName;filter=lastName eq 'Jetson')`](https://jetsons.azurewebsites.net/company?select=name&expand=employees(select=firstName;filter=lastName%20eq%20'Jetson'))  

  **Result:**

```json
{
    "@context": "$metadata#company(name,employees(firstName))",
    "name": "Spacely's Space Sprockets",
    "employees": [
        {
            "firstName": "George",
        },
        {
            "firstName": "Judy",
        }
    ] 
}
```

# Passing Query Strings in the Body

Don't like long query strings? No problem! RAPID allows you to pass the query string in the body, making it easy to write and format as text. The target is still the resource being queried or modified, making it easy to route the request, and the syntax is the same, making it easy to execute.
 
| Template| POST {single-resource-path}/$query               |
|----------| :---------------------------------------------------|
| **Example**| POST  `http://rapid-pro.org/company/$query`    |

  **Body:**


    select=name
    &expand=employees(
                select=firstName;
                filter=lastName eq 'Jetson')  


# Data Modification
For details on modifying data in RAPID-PRO, see [Data Modification in RAPID-PRO](rapid-pro-data_modification.md)

# Optional Features
Although RAPID services can be very simple, because they follow core patterns they can be extended using optional Features, as appropriate, to support more advanced scenarios such as those described in [RAPID-PRO Features](./rapid-pro-features.md).

# RAPID and OpenAPI
OpenAPI is an extremely popular specification for documenting a REST API. Because the RAPID profile builds upon REST, it is natural and encouraged for RAPID services to support OpenAPI.

As the RAPID service description defines a superset of what a service might want to document through OpenAPI, a [suggested translation](http://docs.oasis-open.org/odata/odata-openapi/v1.0/odata-openapi-v1.0.html) is defined for translating a RAPID service description to OpenAPI.

# RAPID and OData
RAPID is designed to be a profile that applies a subset of the conventions defined in OData applicable to any RESTful API. A RAPID service can easily support generic OData V4 clients by:

- Supporting OData calling conventions
- Following OData JSON conventions for OData V4 Clients

RAPID services MAY support any additional conventions defined in the OData specification as appropriate to the service.

For more information on how RAPID works with OData services, see [RAPID and OData](./rapid-pro-odata.md)

































