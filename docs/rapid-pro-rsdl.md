---
id: rsdl
title: Rapid Schema Definition Language (RSDL)
sidebar_label: Rapid Schema Definition
---

RapidPro allows to design your services using the Rapid Service Definition Language (RSDL).
RSDL is an expression language for capturing services, entities, operations and various expressions in human-readable format.

RSDL syntax is very similar to many popular schema formats like GraphQL,
bringing simplicity and lowering amount of time required to learn it. 
RSDL is compatible with GraphQL syntax which gives numerous benefits:

-   All existing IDE plugins for GraphQL syntax highlighting will work with Rapid format.
-   Numerous of tools for validating schema complexity, detecting changes can be also used with Rapid
-   Developers can use various tools to generate their models directly from database definitions or even code.
-   Simplified migration path from GraphQL to Rapid by reusing parts of the same schema.

> NOTE: RSDL can be compiled into CSDL JSON and CSDL XML formats using a subset of the features of the OData specification

## Building your first type

Developers who would like to represent their datamodel will need to create new Rapid schema file,
for example `MyRapidPro.graphql`. At minimim schema will require at least one EntityType.
Entity type is being build by specifying `type` keyword and listing all it's fields like follows:


```graphql
type Person {
    UserName: String! @RapidID
    FirstName: String
    LastName: String
    MiddleName: String
    Age: BigInt
}
```

This minimal definition of the Rapid schema contain following elements:

> `type Person`  - definition of the `Person` type

> `UserName: String! @RapidID` -
definition of the UserName field that has `String`
 primitive type and `@RapidID` modifier that assigns it to become Entity ID 


Fields are build by specifying fieldname (for example UserName) followed by `:` and primitive type like `String` etc.


## Type representation in URI scheme

By default each type is being represented in the URI scheme using it's name.
Default representation will let developers obtain list of the results (as opposed to single value)
For example when defining `Person` type in schema as follows :

> `type Person` => GET `/v4/Rapid/Person`

Executing `GET` should return list of the Persons in the database

### Customization of the URI scheme

Developers can control how each type is exposed under URI scheme by utilizing special 
types `type Query` and `type Mutation`.

`type Query` is being used to expose read operations.
For example

```graphql
type Query {
    ## Returns array of person objects (/v4/Rapid/Persons)
    Persons: [Person]
    ## Returns single of person object (/v4/Rapid/Admin)
    Admin: Person
}
```

By default RapidPro is not exposing operations that can modify resources.
To enable modifications developers need to specify special `type mutation`

```graphql
type Mutation {
    ## Allows to perform write operation to the person object
    Person: Person
}
```

## Possible primitive types

RSDL provides mutiple primitive types out of the 
box

```graphql
""" 
String input
"""
String

""" 
Boolean input
"""
Boolean

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

TODO

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
