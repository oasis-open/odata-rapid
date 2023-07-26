---
id: rsdl-capabilities
title: RSDL Capabilities
---

# Expressing Capabilities in RAPID Schema Definition Language (RSDL)

RAPID uses a Schema Definition Language ([RSDL](./rsdl-intro)) to describe the structure of a REST service. Developers can be annotate their schema model with [capabilities](./rsdl-abnf#model-capabilities) in order to describe the capabilities of their service.

- [Annotating Model Elements](#annotating-model-elements)
  - [Reading Data](#support-for-reading-data)
    - [Read Options](#read-options)
      - [expand Option](#expand-option)
  - [Listing Collections](#listing-collections)
    - [List Options](#list-options)
      - [filter Option](#filter-option)
      - [orderby Option](#orderby-option)
      - [top/skip Options](#top-and-skip-options)
      - [count Option](#count-option)
  - [Modifying Data](#support-for-modifying-data)
    - [Creating Resources](#create-support)
      - [Create options](#create-options)
    - [Updating Resources](#update-support)
      - [Update options](#update-options)
    - [Replacing Resources](#replace-support)
      - [Replace Options](#replace-options)
    - [Deleting Resources](#delete-support)
      - [Delete Options](#delete-options)
  - [Invoking Operations](#operation-support)
  - [Default Capabilities](#default-capabilities)
- [Annotating Paths](#annotating-paths)

# Annotating Model Elements

Model elements are the service, operations, types, and properties defined in in an RSDL Schema.

Capabilities applied to model elements determine the set of paths and capabilities implemented by the service. The developer can generate a set of paths and capabilities from the annotated model to explore or further refine the supported functionality.

Capabilities for a model element are specified in curly braces following the model element definition. Omitting a capability within the curly braces means that capability is not supported. If no curly braces follow the model element, a [default set of capabilities](#default-capabilities) is assumed.

## Support for reading data

A top level singleton or single-valued navigation property can be annotated with the `READ` capability to show that it supports reading.

```rsdl
service {
  company: Company { READ }
}
```

States that the path `GET /company` is supported.

Applying the `READ` capability to a top-level collection or collection valued navigation property states that individual members of the collection can be read using their key value.

```rsdl
service {
  competitors: [Company] { READ }
}

type Company
{
  key stockSymbol: String
  ...
}

```

States that the path `GET /competitors/{stockSymbol}` is supported.

### Read Options

The `READ` capability can be further refined to specify the specific read capabilities that are supported. If no curly braces follow the `READ` capability then a default set of capabilities is assumed. If empty curly braces follow the `READ` capability then the value can be read, but none of the read options are supported.

#### Expand Option

The `expand` option within the `READ` capability specifies that navigation properties within the referenced type can be expanded.

```rsdl
service {
  company: Company { READ { expand } }
}
```

The `expand` option alone means that all navigation properties within the referenced type can be expanded. So, for example, the user can specify `GET /company?$expand=employees`.

The `expand` option may be followed by a list of individual navigation properties that can be expanded.

```rsdl
service {
  company: Company { READ { expand { employees } } }
}
```

Means that only the employees navigation property can be expanded.

##### Nested Expand Options

The `expand` option followed by an empty set of curly braces means that no properties can be expanded.

Collection-valued navigation properties can include nested expand [expand](#expand-option), [filter](#filter-option), [orderBy](#orderby-option), [top/skip](#top-and-skip-options) and [count](#count-option) options, as appropriate.

In the example:

```rsdl
service {
  company: Company { READ { expand { employees { top, skip, count, filter, orderby } } } }
}
```

`top`, `skip`, `count`, `filter`, and `orderby` query options are supported when expanding employees from company:

`GET /company?expand=employees(top=10;skip=1;count=true;filter=lastName eq 'Jetson';orderby=firstName)`

Expand options can be applied to all navigation properties not otherwise specified using the `*`

```rsdl
service {
  company: Company { READ { expand { * { top, skip, count, filter, orderby } } } }
}
```

`top`, `skip`, `count`, `filter`, and `orderby` query options are supported when expanding all navigation properties from company.

If no curly braces follow a collection-valued navigation property, then top, skip, count, filter, and orderby are all assumed to be supported.

Additionally, if no curly braces follow a navigation property or `*`, then it is assumed that `expand` supports nested expands according to the capabilities of each navigation property of the target type, recursively.

If the navigation property or `*` is suffixed by empty curly braces, then no expand options are supported when expanding the property.

## Listing Collections

A [top level collection](./rsdl-intro#defining-a-top-level-Collection) can be annotated with the `LIST` capability to show that it supports listing members.

```rsdl
service {
  competitors: [Company] { LIST }
}
```

States that the path `GET /competitors` is supported.

Similarly, a collection-valued navigation property can be annotated with the same capability:

```rsdl
service {
  company: Company { READ }
  competitors: [Company] { LIST, READ }
}

type Company
{
  key stockSymbol: String
  name: String
  incorporated: Date
  employees: [Employee] { LIST, READ }
}
```

The `LIST` capability on `competitors` means that the path `GET /competitors` is supported.

The `LIST` capability on `employees`, along with the `READ` capability on `competitors`, means that the path `GET /competitors/employees` is supported.

The `LIST` capability on `employees`, together with the `READ` capability on `company`, means that the path `GET /company/{stockSymbol}/employees` is supported.

If there are no curly braces following a top-level collection or collection-valued navigation property within a type, it is assumed to support `LIST` and `READ`, as well as `CREATE`, `UPDATE`, and `DELETE`.

### List Options

The `LIST` capability can be followed by a set of options that specify what capabilities the service supports when enumerating the collection.

LIST options include [expand](#expand-option), [filter](#filter-option), [orderBy](#orderby-option), [top and skip](#top-and-skip-options), and [count](#count-option). If no options are supported, it is assumed that expand, filter, orderby, top, skip, and count are all supported when listing the collection. If an empty curly brace follows the LIST capability, it means that no list options are supported.

#### Filter Option

The `filter` option specifies that a filter can be applied when listing the collection.

```rsdl
service {
  competitors: [Company] { LIST { filter }, READ }
}
```

Specifies that the [`filter`](../rapid-pro-read.md#filtering-results) query option can be used when listing competitors.

The `filter` option may be followed by a list of individual navigation properties that can be filtered, optionally followed by a [`filter option`](#filter-operations).

```rsdl
service {
  competitors: [Company] { LIST { filter { name {stringComp} } } }
}
```

The `competitors` collection can be filtered by name using the string comparison operators.

If no curly braces follow the `filter` option, then the [`filterable`](#filterable-capability) capability, if present on a property, is used to determine whether or not that property can be filtered upon. If `filter` is followed by empty curly braces, then the collection does not support filtering on any properties.

##### Filterable capability

Individual properties of the collection type may be annotated with the `filterable` capability to show that they can be used when filtering a collection of that type.

```rsdl
type Company
{
  key stockSymbol: String { filterable }
  name: String { filterable }
  incorporated: Date { filterable }
  employees: [Employee] { LIST { filter }, READ }
}
```

Specifies that filterable collections of companies can be filtered on stockSymbol, name, and incorporated.

###### Filter Operations

The `filterable` capability can include a filter operation to specify the filter operators that can be applied when filtering by the property:

```rsdl
  name: String { filterable { stringComp } }
```

Possible values for filter operations are as follows:

| Property Type | filter operation | supported filter operators                                         |
| ------------- | ---------------- | ------------------------------------------------------------------ |
| any primitive | `none`           | not filterable                                                     |
| any primitive | `eq`             | `eq`                                                               |
| any primitive | `comp`           | `eq`, `gt`, `ge`, `lt`, `le`                                       |
| string        | `string`         | `eq`, `startswith`, `endswith`, `contains`                         |
| string        | `stringComp`     | `eq`, `gt`, `ge`, `lt`, `le`, `startswith`, `endswith`, `contains` |

Properties that do not have a `filterable` capability, or that have a `filterable` capability with no specified filter option, are assumed to be filterable in collections that support filtering using the filter operators appropriate to their type.

#### OrderBy Option

The `orderby` option within the `LIST` capability specifies that an orderby can be applied when listing the collection.

```rsdl
service {
  competitors: [Company] { LIST { filter, orderby }, READ }
}
```

Specifies that the [`orderby`](../rapid-pro-read.md#ordering-results) query option can be used when listing competitors.

The `orderby` option may be followed by a list of individual properties that can be ordered, optionally followed by a [`filter option`](#filter-operations).

```rsdl
service {
  competitors: [Company] { LIST { orderby { name {asc, desc} } } }
}
```

The competitors collection can be ordered by name in ascending or descending order.

If no curly braces follow the `orderby` option, then the [`orderability`](#orderable-capability) capability, if present on a property, is used to determine whether or not that property can be ordered by. If `orderby` is followed by empty curly braces, then the collection does not support ordering on any properties.

##### Orderable capability

Individual properties of the collection type may be annotated with the `orderable` capability to show that they can be used when ordering a collection of that type.

```rsdl
type Company
{
  key stockSymbol: String { orderable }
  name: String { orderable }
  incorporated: Date { orderable }
  employees: [Employee] { LIST { filter, orderby }, READ }
}
```

Orderable collections of `Company` can be ordered on `stockSymbol`, `name`, and `incorporated`.

The `orderable` capability can include the set of orderby options to specify whether the property can be ordered ascending, descending, or both.

```rsdl
  name: String { orderable { asc, desc} }
```

The `name` property can be ordered by ascending (`asc`) or descending (`desc`).

Primitive properties that do not have an `orderable` capability, or that have a `orderable` capability without specifying `asc` or `desc`, are assumed to be orderable in ascending or descending order.

#### Top and Skip Options

The `top` and `skip` option within the `LIST` capability specify that `top` and `skip` [query options](../rapid-pro-read.md#requesting-a-range-of-members) can be used when listing the collection.

```rsdl
service {
  competitors: [Company] { LIST { top, skip }, READ }
}
```

The `top` and `skip` query option can be used when listing competitors.

#### Count Option

The `count` option within the `LIST` capability specify that the [count](../rapid-pro-read.md#requesting-a-range-of-members) query option can be used when listing the collection.

```rsdl
service {
  competitors: [Company] { LIST { count }, READ }
}
```

The `count` query option can be used when listing competitors.

## Support For Modifying Data

Capabilities can be applied to top-level collections and collection-valued navigation properties to specify whether they support [`POST`](#create-capability), [`PATCH`](#update-capability), [`PUT`](#replace-capability), or [`DELETE`](#delete-capability) operations.

If no capabilities are applied to a top-level collection, or to a collection-valued navigation property, it is assumed to support `POST`, `PATCH`, and `DELETE`, as well as `GET`, but not `PUT`.

### Create Support

The `CREATE` capability can be applied to a collection of navigation values to state that members can be inserted into the collection.

```rsdl
service {
  competitors: [Company] { CREATE }
}

type Company
{
  key stockSymbol: String
  employees: [Employee] { CREATE }
}
```

States that the paths `POST /competitors` and `POST /competitors/{stockSymbol}/employees` are supported.

#### Create Options

The `CREATE` capability can be followed by the [`expand`](#expand-option) option to specify that the `expand` query option can be applied to the `POST` request in order to include related resources when returning the created item.

```rsdl
service {
  competitors: [Company] { CREATE { expand { employees } } }
}
```

States that the path `POST /competitors?expand=employees` is supported to return the new competitor along with related employees.

### Update Support

The `UPDATE` capability can be applied to a navigation property to state that the property is updatable.

```rsdl
service {
  company: Company { UPDATE }
}
```

States that the path `PATCH /company` is supported.

The `UPDATE` capability can also be applied to an entity set or collection-valued navigation property to state that individual members of the collection can be updated.

```rsdl
service {
  competitors: [Company] { UPDATE }
}

type Company
{
  key stockSymbol: String
  employees: [Employee] { UPDATE }
}
```

States that the paths `PATCH /competitors/{stockSymbol}` and `PATCH /competitors/{stockSymbol}/employees/{id}` are supported.

### Update Options

The `UPDATE` capability can be followed by the [`expand`](#expand-option) option to specify that the `expand` query option can be applied to the `PATCH` request in order to include related resources when returning the updated item.

```rsdl
service {
  company: Company { UPDATE { expand { employees } } }
}
```

States that the path `PATCH /company?expand=employees` is supported to return the related employees along with the updated competitor.

### Replace Support

The `REPLACE` capability can be applied to a navigation property to state that the property can be replaced.

```rsdl
service {
  company: Company { REPLACE }
}
```

States that the path `PUT /company` is supported.

The `REPLACE` capability can be applied to an entity set or collection-valued navigation property to state that individual members of the collection can be replaced.

```rsdl
service {
  competitors: [Company] { REPLACE }
}
type Company
{
  key stockSymbol: String
  employees: [Employee] { REPLACE }
}
```

States that the paths States that the path `PUT /competitors/{stockSymbol}` and
`PUT /competitors{stockSymbol}/employees/{id}` are supported.

#### Replace Options

The `REPLACE` capability can be followed by the [`expand`](#expand-option) option to specify that the `expand` query option can be applied the `PUT` request in order to include related resources when returning the replaced item.

```rsdl
service {
  company: Company { REPLACE { expand { employees } } }
}
```

States that the path `PUT /company?expand=employees` is supported to return the related employees along with the competitor.

### Delete Support

The `DELETE` capability can be applied to a navigation property to state that the property can be deleted.

```rsdl
service {
  company: Company { DELETE {} }
}
```

States that the path `DELETE /company` is supported.

The `DELETE` capability can also be applied to an entity set or collection-valued navigation property to state that individual members of the collection can be deleted.

```rsdl
service {
  competitors: [Company] { DELETE{} }
}
type Company
{
  key stockSymbol: String
  employees: [Employee] { DELETE{} }
}
```

States that the paths `DELETE /competitors/{stockSymbol}` and `DELETE /competitors/{stockSymbol}/employees/{id}` are supported.

#### Delete options

The `DELETE` capability does not support any delete options and must be followed by empty braces `{}` to denote that no query options are supported.

## Operation Support

Operations that return a single result can be followed by [`expand`](#expand-option) to specify that the `expand` query option can be applied the request in order to include related resources when returning the result.

```rsdl
service {
  topCompany() : Company { expand { employees } }
}
type Company
{
  key stockSymbol: String
  employees: [Employee]
}
```

States that the path `GET /topCompany?expand=employees` is supported to return the related employees along with the top company.

In addition to [`expand`](#expand-option), operations that return a collection can be followed by any of the [`LIST`](#list-options) capability options to specify [`filter`](#filter-option), [`orderby`](#orderby-option), [`top`, `skip`](#top-and-skip-options), and [`count`](#count-option) support.

```rsdl
service {
  topCompanies( num: Integer ) : [Company] { filter, orderby, top, skip, count, expand }
}
```

States that query options `filter`, `orderby`, `top`, `skip`, `count`, and `expand` are all supported when calling `topCompanies`.

## Default Capabilities

Not applying capabilities to a model element means that you support the default capabilities for that element, as defined in the following table:

| Model Element                                                 | Default Capabilities               |
| ------------------------------------------------------------- | ---------------------------------- |
| Top-level collection or collection-valued navigation property | LIST, READ, CREATE, UPDATE, DELETE |
| Singleton or single-valued navigation property                | READ                               |

# Annotating Paths

**todo...**

```

```
