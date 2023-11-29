---
id: rsdl-intro
title: RSDL Intro
---

# Introduction to RAPID Schema Definition Language (RSDL)

RAPID Schema Definition Language (RSDL) is a language to define Web APIs.

RSDL is based on the RAPID [Profile](<https://en.wikipedia.org/wiki/Profile_(engineering)>) of the
[OData](https://en.wikipedia.org/wiki/Open_Data_Protocol) specification. RAPID provides an easy way
to envision, create, and consume a Web API that is compatible with the OData Standard and can evolve over time to support more advanced scenarios.

## Introductory Example

RAPID APIs are defined by a schema, which can easily be specified using RSDL.

### Defining a Structured Type

Let's say that we wanted our API to deal with information about a company. We could specify the properties of a company as follows:

```rsdl
type Company
{
  stockSymbol: String
  name: String
  incorporated: Date
}
```

Our company has three properties: a stockSymbol, a name, and the date of incorporation.

A property in RAPID can be an Integer, String, Boolean, DateTime, Date, Double, Decimal, TimeOfDay, Duration built-in types, an [enum type](#defining-an-enum), a [structured type](#defining-a-structured-type), or a collection of any of the former.

### Defining a Service

Now we can create a service that returns information about our company:

```rsdl
service {
  company: Company
}
```

This allows us to make simple requests against our company:

| Request                                                                                                                        | Comment                                      |
| :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| GET [http://rapid-pro.org/company?select=stockSymbol,name](https://jetsons.azurewebsites.net/company?$select=stockSymbol,name) | get the stock symbol and name of the company |
| PATCH http://rapid-pro.org/company <br/> \{ "name":"Spacely's Space Sprockets" \}                                              | update the company name                      |

### Defining a Structured Type Property

Now let's say that we wanted to add employees to our company.

First, we would define the employee type:

```rsdl
type Employee
{
  key id: Integer
  firstName : String
  lastName : String
  title: String
}
```

The id property is identified as a key, meaning that instances of employees within a collection can be referenced by their id.

Now we can add employees to our company:

```rsdl
type Company
{
  stockSymbol: String
  name: String
  incorporated: Date
  employees: [Employee]
}
```

The employees property is a collection of our employee type. Because it is a collection, the type is enclosed in square brackets `[`...`]`.

Now we can get employees for our company:

| Request                                                                                                                                                                        | Comment                                                         |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| GET [http://rapid-pro.org/company/employees?select=lastName,title](https://jetsons.azurewebsites.net/company/employees?$select=lastName,title)                                 | list the last name and title for all employees for the company  |
| GET [http://rapid-pro.org/company/employees/1?select=lastName,title](https://jetsons.azurewebsites.net/company/employees/1?$select=lastName,title)                             | get the last name and title of the employee with id=1           |
| GET [http://rapid-pro.org/company?select=name&expand=employees(select=lastName)](<https://jetsons.azurewebsites.net/company?$select=name&$expand=employees($select=lastName)>) | get the company name and the last names of all of its employees |
| POST http://rapid-pro.org/company/employees <br/> \{ "firstName": "Cosmo","lastName": "Spacely","title": "CEO" \}                                                              | add a new employee                                              |
| PATCH [http://rapid-pro.org/company/employees/1](https://jetsons.azurewebsites.net/company/employees/1) \{"title": "Assistant to the Assistant Regional Manager"\}             | change the title of the employee with id=1                      |
| DELETE http://rapid-pro.org/company/employees/1                                                                                                                                | delete the employee with id=1                                   |

### Defining a Top-Level Collection

Our service exposes a single top-level company instance.

We could also add a top-level collection.

For example, we could reuse the same company type to create a collection of companies that are competitors.

```rsdl
service {
  company: Company
  competitors: [Company]
}
```

Because company is now part of a collection, if we want to reference individual companies within the collection we would define a key. In this case, we use stockSymbol as the key:

```rsdl
type Company
{
  key stockSymbol: String
  name: String
  incorporated: Date
  employees: [Employee]
}
```

Now we can request individual companies within the competitors collection:

| Request                                                                                                                                                | Comment                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| POST http://rapid-pro.org/competitors <br/> \{ "stockSymbol":"cgswl", "name":"Cogswell's Cosmic COGs" "incorporated":"2054-10-04T00:00:00Z" \}         | create a new competitor                                                       |
| GET [http://rapid-pro.org/competitors?select=name](https://jetsons.azurewebsites.net/competitors?$select=name)                                         | list the names of all of the competitors                                      |
| GET [http://rapid-pro.org/competitors/cgswl?select=name](https://jetsons.azurewebsites.net/competitors/cgswl?$select=name)                             | get the name of the competitor with the stock symbol cgswl                    |
| GET [http://rapid-pro.org/competitors/cgswl/employees?select=lastName](https://jetsons.azurewebsites.net/competitors/cgswl/employees?$select=lastName) | get the last name of employees for the competitor with the stock symbol cgswl |
| DELETE http://rapid-pro.org/competitors/cgswl                                                                                                          | delete the competitor with the stock symbol cgswl                             |

### Defining an Enum

Enumerations allow us to define a string-valued property with a fixed set of values.

Let's say that we wanted to define an employmentType enumeration, with possible values "salaried" and "hourly". We could do so as follows:

```rsdl
enum EmploymentType
{
  salaried
  hourly
}
```

Now we could use that employmentType enum in our employees example:

```rsdl
type Employee
{
  key id: Integer
  firstName: String
  lastName: String
  title: String
  employeeType: EmploymentType
}
```

### Defining a Structured Property without Identity

Our employee has first name and last name properties. We could define a "fullName" type to group those properties together:

```rsdl
type FullName
{
  firstName: String
  lastName: String
}
```

and then use that type in our employee:

```rsdl
type Employee
{
  key id: Integer
  name: FullName
  title: String
}
```

Grouping these properties together keeps them organized and makes them easy to use in various structured types.

### Defining Methods

RAPID supports actions and functions.

#### Actions

An action takes zero or more input parameters and may or may not return a value. Actions may have side effects.

We can define a "youreFired" action on our company that takes a string parameter "reason":

```rsdl
type Company
{
  key stockSymbol: String
  name: String
  incorporated: Date
  employees: [Employee]
  topEmployees(num: Integer): [Employee]
  action youreFired(reason: String)
}
```

youreFired has the `action` attribute to show that it is an action and may have side-affects. It does not return a value.

Because actions may have side-affects, they are invoked using POST. Their parameters are passed in the body of the request.

| Request                                                                                       | Comment                                              |
| :-------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| POST http://rapid-pro.org/company/employees/1/youreFired <br/> \{ "reason": "Embezzlement" \} | invoke the youreFired action on employee with id = 1 |

Actions and functions may also be defined on the service.

```rsdl
service {
  company: Company
  competitors: [Company]
  currentStockPrice(stockSymbol: String): Decimal
}
```

| Request                                                                                                                                  | Comment                               |
| :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| GET [http://rapid-pro.org/currentStockPrice?stockSymbol=cgswl](<https://jetsons.azurewebsites.net/currentStockPrice(stockSymbol=cgswl)>) | get the current stock price for cgswl |

#### Functions

A function takes zero or more input parameters, and returns a value. Functions must not have side effects.

We can define a "topEmployees" function on our company:

```rsdl
type Company
{
  key stockSymbol: String
  name: String
  incorporated: Date
  employees: [Employee]
  topEmployees(num: Integer) : [Employee]
}
```

topEmployees takes a single Integer parameter "num" and returns a collection of employees.

Functions are invoked using a GET request. Function parameters are passed in the URL.

| Request                                                                                                                                 | Comment                            |
| :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------- |
| GET [http://rapid-pro.org/company/topEmployees?num=10](<https://jetsons.azurewebsites.net/company/Jetsons.Models.topEmployees(num=10)>) | get the company's top 10 employees |

#### Explicit Paths

The set of paths supported by a RAPID service generally do not need to be explicitly enumerated in the RSDL because they are defined by the model. However, in some cases you may want to be explicit about the set of paths supported, either because the service supports only a subset of paths or because you want to specify [capabilities](rapid-rsdl-capabilities.md#annotating-paths) that are specific to that path.

The set of paths supported by a RAPID service can be explicitly enumerated in the RSDL specification:

```rsdl
paths :
{
  /company
  /company/employees
  /company/employees/{id}
  /competitors
  /competitors/{stockSymbol}
  /competitors/{stockSymbol}/employees
  /competitors/{stockSymbol}/employees/{id}
  /company/topEmployees(num={num})
  /company/topEmployees(num={num})/{id}
  /company/youreFired
}
```

Paths that are omitted are not supported, even if valid according to the model.

A nice way of documenting that a path is not supported is by it by adding it as a comment. From a syntax perspective this is equivalent to omitting that path:

```rsdl

paths :
{
  /company
  /company/employees
  /company/employees/{id}
  /competitors
  /competitors/{stockSymbol}
# /competitors/{stockSymbol}/employees
# /competitors/{stockSymbol}/employees/{id}
  /company/topEmployees(num={num})
# /company/topEmployees(num={num})/{id}
  /company/youreFired
}
```
