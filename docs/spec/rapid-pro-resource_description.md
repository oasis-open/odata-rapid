---
id: resourceformat
title: Resource Description
---

RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service.
By convention, this description is retrieved by requesting the `/$metadata` resource, located at the root of the service.

| Example | GET [`http://rapid-pro.org/$metadata`](https://jetsons.azurewebsites.net/$metadata)<br/>Accept: application/json |
| ------- | :--------------------------------------------------------------------------------------------------------------- |


**Result:**

```json
{
  "$Version": "4.01",
  "enterprise": {
    "company": {
      "$Kind": "EntityType",
      "$Key": ["stockSymbol"],
      "name": { "Type": "Edm.String" },
      "incorporated": { "$Type": "Edm.Date" },
      "stockSymbol": {},
      "employees": {
        "$Kind": "NavigationProperty",
        "$Collection": true,
        "$Type": "enterprise.employees",
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
    "serviceRoot": {
      "$Kind": "EntityContainer",
      "company": {
        "$Type": "enterprise.company"
      },
      "competitors": {
        "$Collection": true,
        "$Type": "enterprise.company"
      }
    },
    "$EntityContainer": "enterprise.serviceRoot"
  }
}
```

Types are defined within a namespace. The namespace defined for this service is `enterprise`.

Within the `enterprise` namespace two types are defined: `company` and `employee`.

Properties representing meta information about the model, such as key, type, kind, collection, contains target,
and entity container, are prefixed with a dollar sign (`$`).

By default, properties are strings.
The `$Type` property specifies the type for the core `Edm.String`, `Edm.Int32`,
`Edm.Double`, `Edm.Boolean`, `Edm.Date`, `Edm.Time`, and `Edm.DateTimeOffset` properties.
More advanced services may define stream, binary, geography, or geometry types.

Because the `employee` type is used in a collection,
it defines a property (`id`) as the key value for referencing instances within the collection.

The `company` type has a property for navigating to a collection of employees.
The employees are contained by the company; that is, they do not exist in a separate top-level collection.

Resources can also include properties not advertised in metadata.
These "dynamic" properties can be referenced in query options and included in result payloads,
just like normal declared properties.

The last line defines the `serviceRoot` entity container as the root of the service.
Its members are top-level resources exposed by the service;
`company` is a single instance of the `company` type, and `competitors` is a collection of companies.
