---
id: rsdl-capabilities
title: Capabilities
sidebar_label: RSDL API Capabilities
---

# Path Centric Service Capabilities 

The previous sections described how to define the format of the request and response bodies based on types and their relationships. These structures also imply which URL paths are valid in the service: starting with the service properties and following properties of the structured types. For example in the service below, `orders` is a service property which allows access via the `/orders` URL. Since an order has multiple order items via the `items` property, the URL `/orders/<order id>/items` and `/orders/<order id>/items/<item id>` are also a valid URLs.

Without further constraints this would allow a huge number of URLs that a service would need to support. And it is important not just to specify which paths are allowed, but also to specify different functionality and behaviors supported for different paths.

The following sections introduce the notion of paths and capabilities that the service provides per path.

## Example service

For the examples in the section of this document, we assume the following type definitions. This is a simplified service that provides a top level orders collection together with their (contained) order items. Each item references a SKU, that can be accessed via the top level entity set. 

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

The amount of potential URLs that the service may support is large - in larger services potentially unbounded. Just to name a few of the more important ones:

``` http
/skus, /skus/{id}, /orders, /orders/{id}, /orders/{id}/items, /orders/{id}/items/{id},
/orders/{id}/items/{id}/skus, /orders/{id}/items/{id}/skus/{id}, ...
```

The path-centric view in RSDL allows to enumerate the allowed requests and specify which  query options are supported for these requests.

## HTTP capabilities
The first level of the above mentioned capabilities is to specify the path of theURL and the HTTP method, Here is a partial RSDL to demonstrate this.

``` rsdl
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

|        |        filter        |        expand        |        paging        |        count         |
|--------|:--------------------:|:--------------------:|:--------------------:|:--------------------:|
| GET    |       &#x2713;       |       &#x2713;       |       &#x2713;       |       &#x2713;       |
| POST   | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> |
| PATCH  | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> |
| PUT    | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> | &#x2713;<sup>1</sup> |
| DELETE | |                      |                      |                      |

[1] to shape the POST/PATCH/PUT response. Rarely used but supported<br/>
[2] deleting multiple items. Rarely used but supported<br/>
[!!TODO: check if filter segment on delete is allowed in RAPID ]

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
path /orders {
    GET { 
        filter { 
            eq     { id name description createdDate fulfillmentDate }
            ranges { createdDate description }
            prefix { name }
            text   { description }                   
        }

        filter { 
            eq     except { description }                 
            ranges { createdDate description }
            prefix { name }
            text   { description }                   
        }
    }
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


type Order {

}

capability Order defaultOrder {
    filter {
        eq { id name }
        prefix { nam description }
        range { createdDateTime }
    }
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
    paging
    count
}

capability Order limitedOrder {   
    filter {
        eq { id name }
    } 
}

path /orders {
    GET { 
       defaultOrder
    }
}

path /customers/{id}/orders {
    GET { 
        limitedOrder
    }
}
```

- `/order?$expand=items`
- `/order?$expand=items(expand=sku)`
- `/order?$expand=items(expand=sku; filter=id eq '100')`
- `/order?$expand=items(select=id; expand=sku; filter=id eq '100')`


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

## Extensibility

The RSDL API capabilities allow to specify custom capabilities, so called traits, for the service to implement that are outside the scope of the patterns known by the RSDL specification. 

One example for these could be the handling of requests when throttling is needed, where the service responds with certain headers for requests that cross a throttling threshold. There are multiple established pattern (protocol) to implement this but it is not covered in RSDL directly. But it can be specified in RSDL as an extension and the service implementation can read it and configure the right behavior based on the traits in RSDL.

The individual trait is treated as simple opaque (meta-) data that is passed on the service in the form of a trait name and a list of key-value pairs. The implementation is then free to interpret the presence of the trait and the parameters as it sees fit.

```rsdl
path /orders {
    GET { 
        traits { 
            longRunningOperation
            topWithoutSkip
            throttling { level: "premium\u12a4" }
        }
    }
}
```


## Other path based characteristics

```rsdl
path /user/{id}/recentOrders {
    # references an Order contained in /orders
    targets: /orders
    targets: unbound
    # 'targets' ':' ( path / 'unbound' )

    GET {  }
}

path /orders {
    # top level entity set
    GET {  }

}

path /orders/{id}/items {
    # containment navigation (informally an entity set)
    GET {  }

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

query-capabilities    = [ expand-capabilities ] / 
                        [ filter-capabilities ] / [ select-capabilities ] /
                        [ paging-capabilities ] / [ count-capabilities ] /

get-capabilities      = "GET" "{" [ query-capabilities ] "}"

post-capabilities     = "POST" "{" "}"

patch-capabilities    = "PATCH" "{" "}"

delete-capabilities   = "DELETE" "{" [ filter-capabilities ] "}"

expand-capabilities   = "expand" ["{" 
                           *( property-name "{" query-capabilities "}" ) 
                        "}"] 

filter-capabilities   = "filter" ["{" operator-filter "}"] 
operator-filter       = operator-group "{" *property-name  "}"
operator-group        = "eq" / "range" / "ranges" / "prefix" / "strings" / "any"

paging-capabilities   = "paging" ["{" "}"] 
count-capabilities    = "count" ["{" "}"] 

property-name         = identifier
path                  = "`" *( "/" identifier ) "`"  

```

