---
id: rsdl
title: RAPID Schema Definition Language (RSDL)
sidebar_label: RAPID Schema Definition
---

RAPID allows to design your services using the RAPID Service Definition Language (RSDL).
RSDL is an expression language for capturing services, entities, operations and various expressions in human-readable format.

RSDL syntax is very similar to many popular schema formats like GraphQL,
bringing simplicity and lowering amount of time required to learn it. 
RSDL is compatible with GraphQL syntax which gives numerous benefits:

-   All existing IDE plugins for GraphQL syntax highlighting will work with RAPID format.
-   Numerous of tools for validating schema complexity, detecting changes can be also used with RAPID
-   Developers can use various tools to generate their models directly from database definitions or even code.
-   Simplified migration path from GraphQL to RAPID by reusing parts of the same schema.

> NOTE: RSDL can be compiled into CSDL JSON and CSDL XML formats using a subset of the features of the OData specification

## Building your first type

Developers who would like to represent their datamodel will need to create new RAPID schema file,
for example `MyRapidPro.graphql`. At minimum schema will require at least one Entity Type.
Entity type is being build by specifying `type` keyword and listing all it's fields like follows:

```graphql
type company {
    stockSymbol: String! @RapidID
    name: String
    incorporated: DateTimeOffset!
}
```

This minimal definition of the RAPID schema contains the following elements:

> `type company`  - definition of the `company` type

> `stockSymbol: String! @RapidID` -
definition of the `stockSymbol` field that has `String`
primitive type and `@RapidID` directive that assigns it to become Entity ID 

Fields are defined by specifying field name (for example `name`) followed by `:` and a primitive type like `String` etc.


## Building your service

A RAPID service consists of top-level resources that can be addressed via URLs.
These are defined via the special type `Query`:

```graphql
type Query {
    company: company
    competitors: [company]
}
```

Each field of `Query` defines a top-level resource that can be reached via a URI ending in the same name:

> GET `/v4/rapid/company`

will return the company this service is about.

> GET `/v4/rapid/competitors`

will return the list of the competitor companies: `[company]` means that `competitors` is a list resource, and  the list items are of type `company`.

> GET `/v4/rapid/competitors/cgswl`

will return the competitor company identified by the string `cgswl`.

## Enabling resource modification

By default RAPID is not exposing operations that can modify resources.
These are enabled via the special `type Mutation`:

```graphql
type Mutation {
    # Allows to perform write operation to the person object
    company: company @RapidUpdate
    competitors: company @RapidCreate @RapidUpdate  @RapidDelete
}
```

## Possible primitive types

RSDL provides multiple primitive types out of the 
box

```graphql
""" 
String input
"""
String

""" 
Int input that represents 32 bits integer
"""
Int

""" 
Float input that represents double precision decimal point value
"""
Float

""" 
Boolean input
"""
Boolean

""" Advanced types """ 

""" 
32bit Integer Data type
""" 
Int32

""" 
Decimal point variable
"""
Decimal

""" 
Date and time with a time-zone offset, no leap seconds
"""
DateTimeOffset

""" 
Date without a time-zone offset
"""
Date

""" 
Time without a time-zone offset
"""
TimeOfDay

""" 
Binary data, stream of octets
"""
Binary

""" 
64bit Integer Data type
"""
Int64

""" 
Describes double precision float
"""
Double

""" 
Describes Globally Unique Identifier (also known as UUID)
16-byte (128-bit) unique identifier
"""
Guid
```

## Relationships (Navigation components)

Types can have fields that use other structured types:

```graphql
type company {
    stockSymbol: String! @RapidID
    name: String
    incorporated: DateTimeOffset!
    employees: [employee]
}

type employee {
    id: Int32! @RapidID
    firstName: String
    lastName: String
    title: String
}
```

If these related types are not listed in the `Query` type, they can only be accessed indirectly:

> GET `/v4/rapid/company/employees`

will return the list of employees of the company this service is about.

> GET `/v4/rapid/company/employees/2`

will return the employee whose `id` equals `2`.

> GET `/v4/rapid/competitors/cgswl/employees`

will return the list of employees of the competitor `cgswl`.

## Custom operations

Type can contain bound functions that will be added as fields to the specific type:
Operations can accept various arguments by supplying them in parenthesis as follows:
`OperationName(argument: String): Person`

For example:

```graphql
type Trip {
    PlanItems(queryOptions: QueryOptions): [PlanItem]
    GetInvolvedPeople(queryOptions: QueryOptions): [Person]
}
```

Unbound functions can be represented using special type called Query.
Query can aggegate all operations that are not directly associated with the model

```graphql
type Query {
    GetPersonWithMostFriends: Person
    GetNearestAirport(lat: Float, lon: Float): Airport

}
```

For modifications developers can use actions.
Actions can be represented using special type called Mutation.
For example:

```graphql
type Mutation {
    UpdatePerson(person: Person): Person
}
```

## Directives reference

List contains all possible directives that can be used to modify behaviour of your 
models.

| Name    | Description                      | Location | Required | Singleton|
| ------- | ---------------------------------|----------|----------|:--------|
| @RapidID | Marks field in the type as identifying for instances of the type | Field    |  true    | true    |
