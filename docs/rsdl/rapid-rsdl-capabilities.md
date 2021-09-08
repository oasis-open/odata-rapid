---
id: rsdl-capabilities
title: Path Centric Service Capabilities.
sidebar_label: RSDL Capabilities
---

# Path Centric Service Capabilities. 

The previous sections go into detail how to define the format of the request and response bodies based on types and their relationships. This structure also implies which URLs are valid in the service: starting with the service properties and following properties of a structured type. For example in the service below, `orders` is a service property which allows access via the `/orders` URL. Since an order has multiple order items via the `items` property, the URL `/orders/<order id>/items` and `/orders/<order id>/items/<item id>` are also a valid URLs.

Without further constraints this would allow a huge number of URLs that a service would need to support. And it is important not just to specify which paths are allowed, but also to specify different functionality and behaviors supported for different paths.

The following sections introduce the notion of paths and descriptions of capabilities that the service provides per path.

## Example service

For the following examples we assume the following type definitions for a service that has a top level orders entity set together with their (contained) order items. Each item references a SKU, that can be accessed via the top level entity set. 

```rsdl
type Order {
    key id: String
    created: DateTime
    status: OrderStatus
    items: [OrderItem]
}

enum OrderStatus {
    Open
    Archived
    Canceled 
}

type OrderItem {
    key id: String
    sku: *SKU
    amount: Integer
}

type SKU {
    key id: String
    name: String
    description: String
    unitPrice: Decimal
}

service {
    orders: [Order]
    skus: [SKU]
}
```

The amount of potential URLs that the service needs to support is large. Just to name some of the more important ones:

- /skus
- /skus/{id}
- /orders
- /orders/{id}
- /orders/{id}/items
- /orders/{id}/items/{id}
- /orders/{id}/items/{id}/skus
- /orders/{id}/items/{id}/skus/{id}

The path-centric view in RSDL allows to enumerate the allowed requests and specify which  query options are supported for these requests.

## HTTP capabilities
The first level of the above mentioned capabilities is to specify the path of theURL and the HTTP method, Here is a partial RSDL to demonstrate this.

```rsdl
path /orders {
    GET { ... }
    POST { ... }
}

path /orders/{id} {
    GET { ... }
    PATCH { ... }
    DELETE { ... }
}

path /orders/{id}/items {
    GET { ... }
    POST { ... }
}

path /orders/{id}/items/{id} {
    GET { ... }
    DELETE { ... }
}

path /skus {
    GET { ... }
}

```
The effect of this is that for each declared `path` declaration and HTTP method the service is expected to return data, data in the form as specified by the corresponding type. The service is free to respond with success messages for other combinations but the service guarantees to work for the ones listed.

Important to notice is that the path after the `path` keyword are not literal paths but sort of templates. Many of the interesting paths in a REST service have path segments that are entity ids. this is indicated via the `{id}` syntax. the `id` in there is exactly the name of the key.

The placeholders `...` are used to declare which query options are supported by the service. For example a GET capability lists that certain $filter options are allowed or that paging is supported via the $top, $skip options. More details in the next sections.

The specific capabilities that can be used in the HTTP capabilities section instead of the `...` in the example above can vary by HTTP method. Here is an overview 

|        |    filter     |    expand     |    paging     |     count     |
|--------|:-------------:|:-------------:|:-------------:|:-------------:|
| GET    |       x       |       x       |       x       |       x       |
| POST   | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> |
| PATCH  | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> |
| PUT    | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> | x<sup>1</sup> |
| DELETE | x<sup>2</sup> |               |               |               |

<p >
[<sup>1</sup>] to shape the POST/PATCH/PUT response. Rarely used but supported<br/>
[<sup>2</sup>] deleting multiple items. Rarely used but supported<br/>
</p>

## Individual Query capabilities

### Filter capabilities

The filter capability allows to specify which property can be used in which filter expression. There is a vast amount of possible filter expressions (see [odata abnf](https://github.com/oasis-tcs/odata-abnf/blob/main/abnf/odata-abnf-construction-rules.txt#L502)). Therefore, the filter capabilities allow to specify a few well-known but restrictive expressions or allow any expression.

The format for filter capabilities is a sequence of pairs of a so called operator group and a list of property names. An operator group is constraining the form of the expression allowed in the $filter system query option.

| operator group | comment                                                                                                               |
|----------------|-----------------------------------------------------------------------------------------------------------------------|
| eq             | `<property> eq <literal>` or <br/> `<property> in (<literal1>, <literal2>, ... ) `                                    |
| range          | `<literal> le <property> and <property> le <literal>` <br/> or equivalent expressions with operators `ge`, `gt`, `lt` |
| ranges         | a disjunction of `range` expressions                                                                                  |
| prefix         | `startswith(<property>, <literal>)`                                                                                   |
| text           | `<string op>(<property>, <literal>)`,<br/>where `<string op>` is one of `startswith`, `endswith`, `contains`         |
| any            | any expression including expressions combined with `not`, `and`, and `or`                                             |

In RSDL this 

```rsdl
filter { 
    eq     { id name description createdDate fulfillmentDate }
    ranges { createdDate description }
    prefix { name }
    text   { description }                   
}
```

### Expand capabilities

The expand capability allows to specify which property can be used in `$expand` query parameter. 

The format is a sequence of properties that can be expanded.

```rsdl
path /orders {
    GET { 
        expand {
            items
        }
    }
}
```

 The expand capability introduces a nesting of capabilities since the type of the expandable property can itself be used in select, filter, and expand.

```rsdl
path /orders {
    GET { 
        expand {
            items { 
                filter { 
                    eq { id name } 
                    prefix { name }
                }
                expand { 
                    sku
                }
            }    
        }
    }
}
```


### Paging capabilities

The paging capability allows to specify  if a request returning a collection can specify $top and $skip query parameters.

```rsdl
path /orders {
    GET { 
        paging
    }
}
```

The paging capability has no parameters itself. If a service uses a different way to implement paging, please refer to the [extensibility](#extensibility) section below

The paging capability is typically seen in a GET capability but can also be nested in an expand capability.

### Count capabilities

The count capability allows to specify if a request returning a collection can specify $count query parameter.

```rsdl
path /orders {
    GET { 
        count
    }
}
```

The count capability is typically seen in a GET capability but can also be nested in an expand capability.

### Select capabilities (DRAFT)

The select capability allows to specify if a response contains certain properties. To be precise, it specifies the properties that are not returned in a request or response respectively.

```rsdl
path /orders {
    GET { 
        select { 
            readonly { createDate lastUpdateDate }
            writeonly { password attachment }
        }
    }
}
```

The properties in `readonly` are written by the service (hence the readonly) and any value sent in a request is ignored.<br/>
The properties in `writeonly` are never returned by the service (hence the writeonly) but can be used in create and update requests. 


## Extensibility

The RSDL capabilities allow to specify custom patterns, so called traits, for the service to implement that are outside the scope of the RSDL specification. One example for these could be the handling of requests when throttling is needed, where the service responds with certain headers for requests that cross a throttling threshold. This could be a well established pattern (protocol) but is not covered in RSDL. The service implementation can read the traits and configure the right behavior based on the settings in RSDL.

The individual traits are treated by RSDL as simple opaque (meta-) data that is passed on the the service in the form of a trait name and a list of key-value pairs. The implementation is then free to interpret the presence of the trait and the parameters as it sees fit.

```rsdl
path /orders {
    GET { 
        traits { 
            longRunningOperation
            throttling { level: "premium" }
        }
    }
}
```


## Syntax

!! NOTE: incomplete

``` abnf
path-capability       = "path" path "{" 
        [ get-capabilities ]
        [ post-capabilities ]
        [ patch-capabilities ]
        [ delete-capabilities ]
    "}"

esf-capabilities      = [ expand-capabilities ] [ select-capabilities ] [ filter-capabilities ]
get-capabilities      = "GET" "{" [ esf-capabilities ] [ paging-capabilities ] "}"
post-capabilities     = "POST" "{" "}"
patch-capabilities    = "PATCH" "{" "}"
delete-capabilities   = "DELETE" "{" [ filter-capabilities ] "}"

expand-capabilities   = "expand" ["{" *( property-name "{" esf-capabilities "}" ) "}"] 

filter-capabilities   = "filter" ["{" *( operator-group ) [ *operator-group ] "}"] 
operator-group        = "eq" / "in" / "range" / "ranges" / "strings"
operator-group-filter = operator-group "{"  "}"
paging-capabilities   = "paging" ["{" property-name* "}"] 


property-name         = identifier
path                  = "`" *( "/" identifier ) "`"  

```

