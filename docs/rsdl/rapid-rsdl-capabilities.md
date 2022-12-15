---
id: rsdl-capabilities
title: RSDL Capabilities
---

# RAPID Schema Definition Language (RSDL) Capabilities

RSDL allows to define structured types and service properties that in combination define which URLs are mapped to which types, i.e. which "shape" are the JSON documents that are expected in HTTP requests and responses for each URL.
The amount of these potential URLs can be quite large due to the combination of service and type properties that form these URLs. A concrete service implementation needs to be able to choose which ones are actually supported and describe  the capabilities of the service for each of these URLs: which actions, HTTP verbs and query options are valid to be used.



RSDL takes the approach that common patterns are easy to express, and that the API description does not necessarily imply that all requests that the model allows have to be implemented. The document shows the challenges in expressing what requests are supported and how the language finds a balance between being overly verbose (i.e. indicating the support for every possible request) and still being able to have the fidelity to specify exceptions from common patterns.   

 
Example schema 

The examples in the rest of the document are based on the following sample RSDL schema. 

```RSDL
type Product { 
    key id: String, 
    name: String, 
    category: Category, 
}

type OrderItem { 
    key id: String, 
    address: String, 
    product: Product, 
} 

type Order { 
    key id: String, 
    address: String, 
    deliveryDate: Date, 
    items: [OrderItem], 
} 
 
type Category { 
    key id: String, 
    name: String, 
} 
 
service Service { 
    products : [Product]; 
    orders : [Order]; 
} 
```

Even though the model is not overly complex, it has two important features that will help to illustrate some advanced features of the RSDL capabilities:
- A contained multi-valued navigation property from Order to OrderItem 
- A single valued (non-contained) navigation property from OrderItem to Product 

This model induces the following valid URLs (URL patterns). The list also shows the type of the HTTP request body. 

- `/products`: [Product] 
- `/products/{id}`: Product 
- `/orders`: [Order] 
- `/orders/{id}`: Order 
- `/orders/{id}/items`: [OrderItem] 
- `/orders/{id}/items/{id}`: OrderItem 
- `/orders/{id}/items/{id}/product`: Product 

It is important to note, that Product instance can  be reached (addressed) via two URLs, the entity set `/products/{id}` and via orders that are associated with  an order item for this product `/orders/{id}/items/{id}/product`. 


## Capabilities Section in an RSDL model

RSDL allows to specify the implemented capabilities on two different levels
- on the type level which defines the capabilities for each request (URL) that that uses that type in its request body
- on a URL (template) level which defines the capabilities for that specific URL only.

```RSDL
type Product { 
    key id: String, 
    name: String, 
    category: Category, 
}

capabilities 
{
    # type level capabilities
    [Product] { GET POST PATCH } # allows PATCHing a collection 
    Product { GET PATCH DELETE  } 
    OrderItem { GET PATCH DELETE }  

    # path-level capabilities 
    /orders/{id}/items/{id}/product { GET /* no PATCH, DELETE */ } 
} 
```

The service uses the path-specific capabilities if it finds a matching capability declaration and otherwise falls back to the type-level capability declaration. If neither is specified, the service implements all possible capabilities that are induced by the schema




## Capabilities and query options 


## ABNF
syntactically this is :

```ABNF

pathsDefinition = "paths" "{" *( pathCapabilities ) "}"


pathCapabilities = path ":" "{" *pathCapability "}"

pathCapability = "GET" [ "{" *getCapabilities "}" ]
               / "PUT"
               / "POST"
               / "PATCH"
               / "DELETE" 

getCapability   = "expand"  ; syntax for nested expand/filter/order tbd 
                / "filter"
                / "ordeby"
                / "top" / "skip" 
                
```



# Capabilities Extensibility 

The above mentioned capabilities are predefined and are scoped to the well known service capabilities of an RSDL service. 
In service implementations  are many ore aspects that go beyond supported HTTP methods and valid query parameters. Complex behaviors, for example throttling or long running transactions, are beyond the scope of what RSDL specifies but would nonetheless fit very well into the RSDL paths.

We are proposing an extensiility where RSDL allows to add so called traits to the RSDL paths definition. These traits are opaque identifiers from the perspective of RSDL but can be translated into actual behavior by the implementing service.

An exmple snippte look like the following
```RSDL

    /competitors/{stockSymbol}: {
        GET {
            expand {
                employees{filter}
            }
            filter
            traits {
                PremiumBusinessModel
                Throttling { Level=10 }
            }
        }
    }

```


To achive this extensibility we allow to add trait identifiers in the right places of the paths capabilities:

```ABNF


pathCapability = "GET" [ "{" *getCapabilities "}" ]
               / "PUT" [ "{" ?traits "}" ]
               / "POST" [ "{" ?traits "}" ]
               / "PATCH" [ "{" ?traits "}" ]
               / "DELETE" [ "{" ?traits "}" ]

getCapabilities = "expand"  /* tbd */
                / "filter"
                / "ordeby"
                / "top" / "skip"
                / traits

traits = "traits" "{" *trait "}" 

trait = identifier ; tbd: can traits have parameters

```


## open questions

- syntactically: should traits be nested in the `traits` block or should the be in line with the GET, PUT, ... capabilities. (if the later we might need to quote traits or have a prefix to visually distinguish them)
- syntactically: nesting of "block's" (sections enclosed in "{" "}") is becoming quite deep, and there is no obvious pattern when a ":" is needed and when not.
- should traits be just plain identifiers or can the be parameterized (e.g. `serviceLevel(level=premium)`  or syntactically similar but always identifier + key/value pairs)
- 