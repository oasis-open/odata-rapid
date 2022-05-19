
RSDL specification status
==============

Status of the Rapid Schema Definition Language (RSDL) specification.

The following describe the RSDL syntactical construct, one per chapter, including the current state of its specification.

This document is intended to give an overview to committee members and decide on missing work.

# Schema 

**:green_circle: finalized**


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

**:yellow_circle: documentation gaps**

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

**:yellow_circle: documentation gaps**

- aligned with type definition
- entitySet, singleton distinction expressed via property type
- action and function imports and their implied unbound operations
```RSDL
service {
    company: Company
    competitors: [Company]
}
```

# Unbound operations

**:yellow_circle: documentation gaps**

- unbound operations for action/function imports defined as part of the `service` construct
- free-flying unbound functions intentionally out of scope, see [features](https://github.com/oasis-open/odata-rapid/blob/main/discussion/features.md)

# Annotations 

**:orange_circle: final but almost undocumented**

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

**:orange_circle: essentially undocumented**

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

**:red_circle: essentially undocumented**


# Appendix

https://rapid.rocks/docs/rsdl/rsdl-intro
