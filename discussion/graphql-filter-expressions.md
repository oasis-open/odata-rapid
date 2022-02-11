# GraphQL representation of filter expressions to be translated to RAPID

Proposal: combine the approach taken by [Graphback](https://graphback.dev/docs/crud/queries/#filtering) and [GraphQLCRUD](https://graphqlcrud.org/docs/next/find/#filtering) with the [RSDL filter capabilities](https://github.com/oasis-open/odata-rapid/blob/d8ec19eb403db93a4436e5156af56506619841ab/docs/rsdl/rapid-rsdl-capabilities.md#filter-capabilities).

An RDSL capability description

```rsdl
path /orders {
    GET {
        filter {
            eq     { id name description createdDate fulfillmentDate }
            ranges { createdDate description }
            prefix { name }
            text   { description }
        }
    }
}
```

would be translated into a GraphQL query `orders` with an argument `filter`:

```gql
type Query {
  orders(filter: [orders_filter]): orders_list
}
```

The input object `orders_filter` has one field per property mentioned in the `filter` capability, and its type represents the combination of its primitive type and operator group(s) in which it is mentioned:

```gql
input orders_filter {
  id: [String_eq] # disjunction of "eq" expressions, which effectively is an "in" expression
  name: [String_eq_prefix]
  description: [String_filter] # combination of eq, range(s), and text
  createdDate: [Date_range] # disjunction of range expressions
  fulfillmentDate: [Date_eq]
  name: [String_eq_prefix] # combination of eq and prefix
}
```

The input types on the right-hand side are objects with one field per allowed expression:

```gql
input String_eq {
  eq: String
}

input String_filter {
  eq: String
  ne: String
  ge: String
  gt: String
  le: String
  lt: String
  startswith: String
  endswith: String
  contains: String
}

input String_eq_prefix {
  eq: String
  startswith: String
}

input Date_eq {
  eq: Date
}

input Date_range {
  eq: Date
  ne: Date
  ge: Date
  gt: Date
  le: Date
  lt: Date
}
```

This will allow queries such as

```gql
{
  orders(
    filter: {
      name: { startswith: "Foo" }
      createdDate: [
        { ge: "2021-11-01", le: "2021-11-30" }
        { ge: "2022-01-01", le: "2022-01-31" }
      ]
    }
  ) {
    id
    name
    description
  }
}
```

which translates into

```http
GET /orders?$filter=startswith(name,'Foo') and
                    ((createdDate ge 2021-11-01 and createdDate le 2021-11-30) or
                     (createdDate ge 2022-01-01 and createdDate le 2022-01-31))
           &$select=id,name,description
```

Note: only a single input object is passed to the filter argument, which is GraphQL shorthand for a one-element array. This is also used for the `name` field which accepts an array of `String_eq_prefix` objects.

The basic rule:

- fields of an object translate into and `and` expression
- objects in an array translate into an `or` expression

This means that the maximum expression complexity is a disjunction of conjunctions for different fields of disjunctions for the same field, which is complex enough for most use cases. The example above doesn't even use t
