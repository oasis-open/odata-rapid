---
id: rapid-read
title: Reading Resources
sidebar_label: Reading Resources
---

## Retrieving a Resource

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

### Selecting Individual Properties of a Resource

The client can select individual properties of the resource using the `select` option:

| Template    | GET {resource-path}?select={propertyName,…}                                                                                     |
| ----------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Example** | GET [`http://rapid-pro.org/company?select=name,stockSymbol`](https://jetsons.azurewebsites.net/company?$select=name,stockSymbol) |

**Result:**

```json
{
    "@context": "$metadata#company(name,stockSymbol)",
    "name": "Spacely's Space Sprockets",
    "stockSymbol": "spcly"
}
```

The first line says that only the `name` and `stockSymbol` properties are selected to be returned from the `company` resource.

### Including Related Resources

Related resources can be retrieved as nested resources through the `expand` query option.

| Template    | GET {collection-resource-path}?expand={navigationProperty,…}                                                      |
| ----------- | :---------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company?expand=employees`](https://jetsons.azurewebsites.net/company?$expand=employees) |

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

The context property specifies that the `employees` are expanded within the `company`. 
Because the next link refers to the nested `employees` property, the `nextLink` property is prefixed with the name of the nested property.

When expanding related resources, 
you can express the same options for the related resource that you can for any other resource path.

| Template    | GET {collection-resource-path}?expand={navigationProp(queryOptions),…}                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company?expand=employees(select=firstName)`](<https://jetsons.azurewebsites.net/company?$expand=employees($select=firstName)>) |

**Result:**

```json
{
    "@context": "$metadata#company(employees(firstName))",
    "name": "Spacely's Space Sprockets",
    "incoporated": "2054-10-4",
    "stockSymbol": "spcly",
    "employees": [
        {
            "firstName": "Cosmo"
        },
        {
            "firstName": "George"
        }
    ],
    "employees@nextLink": "company/employees?select=firstName&skiptoken=xyz"
}
```

## Retrieving a Collection of Resources

RAPID services return collections of resources as a JSON array:

| Template    | GET {collection-resource-path}                                                                      |
| ----------- | :-------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company/employees`](https://jetsons.azurewebsites.net/company/employees) |

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

If the result is large, the service may include a next link to tell the client that there are more items in the collection.
The value of the next link is an opaque URL that the client can use to retrieve the next set of resources from the collection. 
The absence of the next link signals the client that they have retrieved all of the resources in the collection.

### Retrieving an Individual Member of a Collection

Individual members of a collection can be identified by appending the key to the URL of the collection.

| Template    | GET {collection-resource-path}/{key}                                                                    |
| ----------- | :------------------------------------------------------------------------------------------------------ |
| **Example** | GET [`http://rapid-pro.org/company/employees/2`](https://jetsons.azurewebsites.net/company/employees/2) |

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

Here the context property specifies that the result is an individual resource within the `employees` collection of the `company`.

### Selecting Individual Properties of Collection Members

Query options are composable;
the client can select a subset of properties to be returned for each instance in the collection.

| Template    | GET {collection-resource-path}?select={propertyName,…}                                                                              |
| ----------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company/employees?select=lastName`](https://jetsons.azurewebsites.net/company/employees?$select=lastName) |

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

### Requesting a Range of Members

The client can use `top` and/or `skip` query options to select a range of resources within a collection. 
They can use the `count` query option to request the count of all resources in the collection.

| Template    | GET {collection-resource-path}?skip={int}<br/>GET {collection-resource-path}?top={int}<br/>GET {collection-resource-path}?count=true                  |
| ----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company/employees?skip=1&top=2&count=true`](https://jetsons.azurewebsites.net/company/employees?$skip=1&$top=2&$count=true) |

**Result:**

```json
{
    "@context": "$metadata#company/employees",
    "@count": 4,
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

The result skips the first member and returns the next two.
The `@count` property denotes the total number of resources in the collection, and is not affected by `skip` or `top`. 
There is no next link because all two of the requested resources are returned.

### Ordering Results

The client can use the `orderby` query option to order the results returned within a collection.

| Template    | GET {collection-resource-path}?orderby={propertyName [asc \| desc],…}                                                                                                 |
| ----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company/employees?orderby=lastName asc, id desc`](https://jetsons.azurewebsites.net/company/employees?$orderby=lastName%20asc,%20id%20desc) |

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

If `asc` or `desc` is not specified, the default ordering is ascending.

### Filtering Results

The client can use the `filter` query option to filter the results returned from the collection.

| Template    | GET {collection-resource-path}?filter={filter-expression}                                                                                                       |
| ----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Example** | GET [`http://rapid-pro.org/company/employees?filter=lastName eq 'Jetson'`](https://jetsons.azurewebsites.net/company/employees?$filter=lastName%20eq%20'Jetson') |

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

There is a full expression language to describe what the client can express in the filter. 
For more information, see [RAPID Expression Language](./spec/rapid-pro-expression_language.md)

## Combining Query Options

Query options can be combined using the ampersand (`&`). 
To comply with URL parsing rules, query options within an expand clause are separated using semi-colons (`;`). 
The order of query options is not significant.

| Template    | GET {resource-path}?select={propertyName,…}&expand={navigationProperty(queryOptions),…}                                                                                                                                                     |
| ----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|             | GET {collection-resource-path}?<br/> select={propertyName,…}<br/> &top={int}<br/> &skip={int}<br/> &count=true<br/> &filter={filter-expression}<br/> &orderby={propertyName [asc \| desc],…}<br/> &expand={navigationProperty(queryOptions),…}     |
| **Example** | GET [`http://rapid-pro.org/company?select=name&expand=employees(select=firstName;filter=lastName eq 'Jetson')`](<https://jetsons.azurewebsites.net/company?$select=name&$expand=employees($select=firstName;$filter=lastName%20eq%20'Jetson')>) |

**Result:**

```json
{
    "@context": "$metadata#company(name,employees(firstName))",
    "name": "Spacely's Space Sprockets",
    "employees": [
        {
            "firstName": "George"
        },
        {
            "firstName": "Judy"
        }
    ]
}
```

## Passing Query Strings in the Body

Don't like long query strings? No problem!
RAPID allows you to pass the query string in the body, making it easy to write and format as text. 
The target is still the resource being queried or modified, making it easy to route the request,
and the syntax is the same, making it easy to execute.

| Template    | POST {single-resource-path}/\$query        |
| ----------- | :----------------------------------------- |
| **Example** | POST `http://rapid-pro.org/company/$query` |

**Body:**

    select=name
    &expand=employees(
                select=firstName;
                filter=lastName eq 'Jetson')

