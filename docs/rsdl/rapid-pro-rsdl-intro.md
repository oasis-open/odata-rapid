# Introduction to RAPID Pro schema definition language (RSDL)

<p style="font-size: xxx-large">DRAFT</p>


RAPID Pro schema definition language (RSDL) is language to describe Web APIs.
RSDL is based on a [profile](<https://en.wikipedia.org/wiki/Profile_(engineering)>) of the
[OData](https://en.wikipedia.org/wiki/Open_Data_Protocol) specification with the goal to provide an easy way
to create a Web API that is compatible with OData and can evolve into a more elaborate version.

## Introductory Example

The core description of the "shape" of the API is given by a RSDL document.

Below is a first example of an RSDL file that describes an API of a service that provides data on companies and their employees

```
type company
{
    @key stockSymbol: string
    name: string
    incorporated: dateTime
    employees: [employee]
}

type employee
{
    @key id: integer
    name : string
    title: string
    employmentType: employmentType
}

enum employmentType { salaried hourly }

service {
    companies: [company]
    employees: [employee]
}
```

With this relatively small API definition, the service can already serve many different requests to create, update, and delete companies and employees and query for them in multiple ways.
Below is a (incomplete) list of URLs that can be used with the service. Let's assume the web service is hosted on http://example.com

| Request                                                                                              | Comment                                                          |
| :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| GET http://example.com/companies                                                                     | List all companies                                               |
| GET http://example.com/companies/msft                                                                | get the company identified by stock symbol msft                  |
| GET http://example.com/companies/msft/employees                                                      | get the employees of the company identified by stock symbol msft |
| GET http://example.com/employees/123567                                                              | get the employee with employee id 123567                         |
| POST http://example.com/companies/msft <br/> { "name": "futterkiste", "incorporated": "2010-01-01" } | create a new company identified by stock symbol                  |
| ...                                                                                                  |                                                                  |

## Defining enums in RSDL

## Defining types in RSDL

### filtering collections of objects

### Expanding properties

## Defining top level collections of objects

## Defining top level single objects

## Querying a graph of objects

### Types with keys vs types without

### Navigation from one object to another

## Changing data

### create

### update

### delete
