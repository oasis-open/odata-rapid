---
id: graphql
title: RAPID and GraphQL
---

RAPID and GraphQL both provide a means of describing and requesting data from a service that represents a graph of data.

## Schema Description

In GraphQL, the schema of a service can be described through introspection.

In RAPID, the schema of a service can be described through a [request](..\spec\rapid-pro-resource_description.md) to the `$metadata` endpoint of the service.

GraphQL defines a simple syntax for defining the shape of a service.

## Query Syntax

In a GraphQL query, the developer describes the properties to be retrieved, and depth traversed, through a JSON-like structure.

In a RAPID query, the developer describes the properties to be retrieved through a [projection](..\rapid-pro-read.md#selecting-individual-properties-of-a-resource),
and the depth traversed through an [expansion](..\rapid-pro-read.md#including-related-resources) operator.

## Filter

GraphQL does not define predicates that can be applied to filter the membership of the result.
Instead, GraphQL extensions such as OpenCRUD define use custom operations, defined in schema, to define each type of filter operation.

While RAPID supports [custom functions](..\rapid-pro-operations.md#functions) that may be used to encapsulate business logic or other predefined operations,
it also defines a [filter syntax](..\rapid-pro-read.md#filtering-results) that can be used to support dynamic queries against properties described by the service as queryable, providing a more flexible way for developers to interact with the data.

## Use of HTTP

GraphQL submits requests using HTTP POST, passing the query in the body of the request.

RAPID builds on REST, using HTTP verbs to GET [(retrieve)](..\rapid-pro-read.md), POST [(create)](..\rapid-pro-data_modification.md#creating-a-resource), PATCH [(update)](..\rapid-pro-data_modification.md#updating-a-resource), and DELETE [(delete)](..\rapid-pro-data_modification.md#deleting-a-resource) data.
By making fuller use of HTTP, RAPID is able to leverage HTTP Caching and other built-in mechanisms.
