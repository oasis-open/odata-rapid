---
id: jetsons
title: Jetsons Sample Service
sidebar_label: Jetsons Sample Service
---

## Overview

The [Jetsons sample service](https://jetsons.azurewebsites.net/) is a simple RAPID service that demonstrates concepts of a RAPID service.

The Jetsons sample service is used throughout the [overview](../rapid-pro-read.md) and documentation to describe RAPID concepts.

## Schema

The Jetsons sample service exposes a simple schema comprising of:

1.  A Company type
2.  An Employee type
3.  A service that exposes
    1.  A single instance of a Company, representing the current (home) company, and
    2.  A collection of Companies, representing competitors

In RSDL, this simple schema would be described as:

```rsdl
type Company
{
    key stockSymbol: String
    name: String
    incorporated: DateTime
    employees: [Employee]
}

type Employee
{
    key id: Integer
    firstName : String?
    lastName : String?
    title: String?
}

service
{
    competitors: [Company]
    company: Company
}
```

## Try it out!

You can check out the [live Jetsons sample service](https://jetsons.azurewebsites.net/) to get a feel for how you can interact with a RESTier service.

## Under the covers

The Jetsons sample service is built using the [RESTier](https://github.com/OData/RESTier) framework. RESTier makes it easy to build OData services that support RAPID requests/responses.

The source code for the Jetsons sample service can be found in the [odata-rapid](https://github.com/oasis-open/odata-rapid/tree/main/samples/Jetsons/Jetsons) open source repo.
