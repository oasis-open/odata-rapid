---
id: servicedescription
title: Runtime Service Description
---

Client applications and tooling can use a runtime service description to understand how to interact with the service.
By convention, this description is retrieved by requesting the `/$metadata` resource, located at the root of the service.

| Example | GET [`https://jetsons.azurewebsites.net/$metadata`](https://jetsons.azurewebsites.net/$metadata?$format=application/json)<br/>Accept: application/json |
| ------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |


**Result:**

```json
{
  "$Version": "4.01",
  "jetsons": {
    "company": {
      "$Kind": "EntityType",
      "$Key": ["stockSymbol"],
      "name": { "Type": "Edm.String" },
      "incorporated": { "$Type": "Edm.Date" },
      "stockSymbol": {},
      "employees": {
        "$Kind": "NavigationProperty",
        "$Collection": true,
        "$Type": "jetsons.employee",
        "$ContainsTarget": true
      }
    },
    "employee": {
      "$Kind": "EntityType",
      "$Key": ["id"],
      "id": { "$Type": "Edm.Int32" },
      "firstName": { "$Type": "Edm.String" },
      "lastName": { "$Type": "Edm.String" },
      "title": { "$Type": "Edm.String" }
    },
    "Service": {
      "$Kind": "EntityContainer",
      "company": {
        "$Type": "jetsons.company"
      },
      "competitors": {
        "$Collection": true,
        "$Type": "jetsons.company"
      }
    },
    "$EntityContainer": "jetsons.Service"
  }
}
```

## Types

Types are defined within a namespace. The namespace defined for this service is `jetsons`.

Within the `jetsons` namespace two types are defined: `company` and `employee`.

## Properties

### Meta Properties

Properties representing meta information about the model, such as key, type, kind, collection, contains target,
and entity container, are prefixed with a dollar sign (`$`).

#### Types

By default, properties are strings.
The `$Type` property specifies the type for the core `Edm.String`, `Edm.Int32`,
`Edm.Double`, `Edm.Boolean`, `Edm.Date`, `Edm.Time`, and `Edm.DateTimeOffset` properties.
More advanced services may define stream, binary, geography, or geometry types.

#### Collections

Because the `employee` type is used in a collection,
it defines a property (`id`) as the key value for referencing instances within the collection.

The `company` type has a property for navigating to a collection of employees.
The employees are contained within the company; that is, they do not exist in a separate top-level collection.

### Dynamic Properties

Resources can also include properties not advertised in metadata.
These "dynamic" properties can be referenced in query options and included in result payloads,
just like normal declared properties.

## Service Entity Container

The last line defines the `Service` entity container as the root of the service. Its members are top-level resources exposed by the service;
`company` is a single instance of the `company` type, and `competitors` is a collection of companies.
