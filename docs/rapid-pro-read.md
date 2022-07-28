---
id: rapid-read
title: Reading Resources
sidebar_label: Reading Resources
---

import InteractiveQuerying from '../website/src/components/documentation-queries/InteractiveQuerying.js';

import TemplateRequest from '../website/src/components/documentation-queries/TemplateRequest.js';

import Request from '../website/src/components/documentation-queries/Request.js';

## Retrieving a Resource

RAPID services support retrieving a resource using the GET method, then returning it as a json object.

<TemplateRequest command="GET" query="{resource-path}"/>

<InteractiveQuerying defaultQuery="company" id="1"/>

RAPID responses are self-describing.
The first line says that the response is described by the `company` singleton defined in the `$metadata` resource.
The `$metadata` resource may be represented as a relative or absolute URL.

RAPID uses properties prefixed with the `@` symbol to denote control information that is not part of the data.

RAPID payloads use native JSON types for string, boolean, and double values.
Dates, Times, and DateTimeOffset values are represented as ISO-8601 strings.

### Selecting Individual Properties of a Resource

The client can select individual properties of the resource using the `select` option:

<TemplateRequest command="GET" query="{resource-path}?select={propertyName,…}"/>

<InteractiveQuerying defaultQuery="company?select=name,stockSymbol" id="2"/>

The first line says that only the `name` and `stockSymbol` properties are selected to be returned from the `company` resource.

### Including Related Resources

Related resources can be retrieved as nested resources through the `expand` query option.

<TemplateRequest command="GET" query="{collection-resource-path}?expand={navigationProperty,…}"/>

<InteractiveQuerying defaultQuery="company?expand=employees" id="3"/>

The context property specifies that the `employees` are expanded within the `company`.
Because the next link refers to the nested `employees` property, the `nextLink` property is prefixed with the name of the nested property.

When expanding related resources,
you can express the same options for the related resource that you can for any other resource path.

<TemplateRequest command="GET" query="{collection-resource-path}?expand={navigationProp(queryOptions),…}"/>

<InteractiveQuerying defaultQuery="company?expand=employees(select=firstName)" id="4"/>

## Retrieving a Collection of Resources

RAPID services return collections of resources as a JSON array:

<TemplateRequest command="GET" query="{collection-resource-path}"/>

<InteractiveQuerying defaultQuery="company/employees" id="5"/>

If the result is large, the service may include a next link to tell the client that there are more items in the collection.
The value of the next link is an opaque URL that the client can use to retrieve the next set of resources from the collection.
The absence of the next link signals the client that they have retrieved all of the resources in the collection.

### Retrieving an Individual Member of a Collection

Individual members of a collection can be identified by appending the key to the URL of the collection.

<TemplateRequest command="GET" query="{collection-resource-path}/{key}"/>

<InteractiveQuerying defaultQuery="company/employees/2" id="6"/>

Here the context property specifies that the result is an individual resource within the `employees` collection of the `company`.

### Selecting Individual Properties of Collection Members

Query options are composable;
the client can select a subset of properties to be returned for each instance in the collection.

<TemplateRequest command="GET" query="{collection-resource-path}?select={propertyName,…}"/>

<InteractiveQuerying defaultQuery="company/employees?select=lastName" id="7"/>

### Requesting a Range of Members

The client can use `skip` and/or `top` query options to select a range of resources within a collection.
They can use the `count` query option to request the count of all resources in the collection.

<TemplateRequest command="GET" query="{collection-resource-path}?skip={int}"/>

<Request command="GET" query="{collection-resource-path}?top={int}"/>

<Request command="GET" query="{collection-resource-path}?count=true"/>

<InteractiveQuerying defaultQuery="company/employees?skip=1&top=2&count=true" id="8"/>

The `skip` option is used to specify how many members at the beginning of a collection to ignore; `top` refers to how many members to return from the beginning of the remaining collection. Therefore, in this example, the result skips the first member and returns the next two.

The `@count` property denotes the total number of resources in the collection, and is not affected by `skip` or `top`.
There is no next link because all two of the requested resources are returned.

### Ordering Results

The client can use the `orderby` query option to order the results returned within a collection.

<TemplateRequest command="GET" query="{collection-resource-path}?orderby={propertyName [asc \| desc],…}"/>

<InteractiveQuerying defaultQuery="company/employees?orderby=lastName asc, id desc" id="9"/>

Null values sort before non-null values in ascending order and after non-null values in descending order.

If `asc` or `desc` is not specified, the default ordering is ascending.

### Filtering Results

The client can use the `filter` query option to filter the results returned from the collection.

<TemplateRequest command="GET" query="{collection-resource-path}?filter={filter-expression}"/>

<InteractiveQuerying defaultQuery="company/employees?filter=lastName eq 'Jetson'" id="10"/>

In this case, there is no next link since all of the resources matching the filter predicate were returned inline.

There is a full expression language to describe what the client can express in the filter.
For more information, see [RAPID Expression Language](./spec/rapid-pro-expression_language.md)

## Combining Query Options

Query options can be combined using the ampersand (`&`).
To comply with URL parsing rules, query options within an expand clause are separated using semi-colons (`;`).
The order of query options is not significant.

<TemplateRequest command="GET" query="{resource-path}?select={propertyName,…}&expand={navigationProperty(queryOptions),…}"/>

<InteractiveQuerying defaultQuery="/company?select=name&expand=employees(select=firstName;filter=lastName eq 'Jetson')" id="11"/>

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
