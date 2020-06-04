# Rest API Design (RAPID) DSL

Rapid allows to design your entities using a GraphQL compatible Service Definition Language: RSDL.
RSDL is an expression language for capturing data models, queries, and expressions in human-readable format that can be compiled into JSON and XML representations.

Developers can write GraphQL like schema that will be later processed by Rapid Pro engine (Cli in prototype) and transformed to JSON CSDL

Developers who would like to represent their datamodel will need to create new 
Rapid Pro schema file for example `Person.rgraphql`. 
At minimim schema will require at least one business type.


```graphql
type Person  {
  UserName: String!
  FirstName: String!
  LastName: String
  MiddleName: String
  Age: BigInt
  Comments: [Comment!]!
}
```

Type can contain Bound Functions:

```graphql
type Trip {
  PlanItems(queryOptions: QueryOptions): [IPlanItem]
  GetInvolvedPeople(queryOptions: QueryOptions): [IPerson]
}
```

Unbound functions can be represented using Query type:

```graphql
type Query {
  GetPersonWithMostFriends: Person
  GetNearestAirport(lat: Float, lon: Float): Airport
  Me: Person
}
```

Actons can be represented using Mutation type:

```graphql
type Mutation {
  UpdatePerson(person: Person): Person
}
```
