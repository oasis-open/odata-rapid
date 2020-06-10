---
id: rsdl
title: Rapid Schema Definition Language (RSDL)
sidebar_label: Rapid Data Definition
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

## Workflow

Developers who would like to represent their datamodel will need to create new Rapid schema file,
for example `MyRapidPro.graphql`.
At minimim schema will require at least one EntityType.
Entity type is being build by specifying `type` keyword and listing all it's fields names like follows:


```graphql
type Person {
    UserName: String! @RapidID
    FirstName: String
    LastName: String
    MiddleName: String
    Age: BigInt
}
```

Fields are build by specifying fieldname (for example UserName) followed by `:` and type like `String` etc.

## Possible types

TODO

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
