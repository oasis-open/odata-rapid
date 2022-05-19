
RSDL specification status
==============

Status of the Rapid Schema Definition Language (RSDL) specification.

The following chapters each describe one RSDL syntactical construct and the current state of its specification.

This document is intended to give an overview to comittee members and decide on missing work.

# Schema 

<span style="background-color: green">finalized</span>

- structural types, complex and entity, keys
- enums including flag enums
- built in (primitive) types including type facets
- ability to express optional and multi-valued types
- bound operations
- abstract types and inheritance 

```RSDL
type Company
{
    key stockSymbol: String
    name: String(32)
    incorporated: Date
}

enum EmploymentType
{
    salaried
    hourly
}
```




# Navigation properties 

<span style="background-color: orange">documentation gaps</span>
- syntactically similar to other properties
- more documentation required 
- containment automatically derived based on service (CSDL container)
- mapping to navigation property bindings needs to be verified
    
```RSDL
type Company
{    
    employees: [Employee]
}

type Employee
{
   key id: String
}
```




# Service Definition

<span style="background-color: yellow">documentation gaps</span>

- aligned with type definition
- entitySet, singelton distinction expressed via property type

```RSDL
service {
    company: Company
    competitors: [Company]
}
```

# Unbound operations

<span style="background-color: yellow">missing</span>

# Annotations 

<span style="background-color: yellow">final but almost undocumented</span>

- only [ABNF](https://rapid.rocks/docs/rsdl/rsdl-abnf#annotations), no prose  
- excludes capability annotations
- syntax is : `@` {annotation term qualified identifier} `:` {json value/expression}

```RSDL
@Core.Description: "Kingdom: Animalia"
abstract type Animal
{
  
    @Validation.MultipleOf: 2
    numberOfLegs: Integer
}

## a pet, 
## a domesticated animal living in a houshold
type Pet
{
    @Validation.AllowedValues: ["Rex", "Fifi"]
    name: String
}
```


# Service capabilities

<span style="background-color: orange">essentially undocumented</span>

- list of paths and their supported HTTP verbs and query parameters
- hierarchical syntax to address the nested nature of some query options
- using { } to structure the expressions

```RSDL
path /orders {
    GET { 
        expand {
            items { 
                filter { eq { id }}
                expand { 
                    sku
                }
            }    
        }
    }
}

```


## open questions

- path annotations as part of the service or top level RSDL construct?
- mapping to CSDL capability annotations only as a rough prototype



# Schema import/export 

<span style="background-color: red">essentially undocumented</span>

# Appendix

https://rapid.rocks/docs/rsdl/rsdl-intro
