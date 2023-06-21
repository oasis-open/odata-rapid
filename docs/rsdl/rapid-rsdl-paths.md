---
id: rsdl-paths
title: RAPID Paths
---

# Paths in a RAPID Service

The set of valid paths for a RAPID service is the result of applying common path conventions to the model, as described below. You can optionally specify an subset of these paths that are supported by your service using [explicit paths](rapid-rsdl-intro.md#explicit-paths) in your RSDL.

- [Service Root](#service-root)
- [Key Segment](#key-segment)
- [Structured Properties](#structured-properties)
- [Nested Operations](#nested-operations)

## Service Root

The [service](./rapid-rsdl-intro.md#defining-a-service) element in RSDL defines the segments that are available at the service root:

```rsdl
service {
  company: Company
}
```

## | supported path |

`/company`

## Key Segment

Path segments that represent a collection of [structured types](rapid-rsdl-intro.md#defining-a-structured-type) with identity may be followed by a segment containing the key value of an instance within the collection:

```rsdl
service {
  competitors: [Company]
}

type Company
{
  key stockSymbol: String
}
```

## | supported paths |

`/competitors`
`/competitors/{stockSymbol}`

where `{stockSymbol}` is a string value representing the stock symbol of a competitor.

## Structured Properties

Path segments that represent a single [structured type](rapid-rsdl-intro.md#defining-a-structured-type) can be followed by the name of a structured-typed property defined on that structured type:

```rsdl
service {
  company: Company
}

type Company
{
  key stockSymbol: String
  employees: [Employee]
}

type Employee
{
  key id: Integer
}
```

## | supported paths |

`/company`
`/company/employees`
`/company/employees/{id}`

where `{id}` is an integer value representing a employee's id.

## Nested Operations

The name of a [nested operation](rapid-rsdl-intro.md#defining-methods) may follow a segment of the specified type in which the operation is defined:

```rsdl
service {
  company: Company
}

type Company
{
  topEmployees(num: Integer): [Employee]
  action youreFired(reason: String)
}
```

## | supported paths |

`/company`
`/company/topEmployees(num=5)`
`/company/topEmployees(num=5)/{id}`
`/company/youreFired(reason='bad day')`

where `{id}` is an integer value representing a employee's id.
