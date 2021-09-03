---
id: rsdl-capabilities
title: Path centric service capabilities.
sidebar_label: RSDL Capabilities
---

# Path Centric Service Capabilities. 

The previous sections go into detail how to define the format of the request and response bodies based on types and their relationships. This structure also implies which URLs are valid in the service: starting with the service properties and following properties of a structured type. For example in the service below, `orders` is a service property which allows access via the `/orders` URL. Since an order has multiple order items via the `items` property, the URL `/orders/<order id>/items` and `/orders/<order id>/items/<item id>` are also a valid URLs.

Without further constraints this would allow a huge number of URLs that a service would need to support. And it is important not just to specify which paths are allowed, but also to specify different functionality and behaviors supported for different paths.

The following sections introduce the notion of paths and descriptions of capabilities that the service provides per path.

## Example service

for the following examples we assume the following type definitions for a service that has a top level orders entity set together with and their (contained) order items. Each item references a SKU, that is also available via a top level entity set. 

```rsdl
type Order
{
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

type OrderItem
{
    key id: String
    sku: *SKU
    amount: Integer
}

type SKU
{
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

The path-centric view in RSDL now allows to enumerate the allowed requests (URL + verb)
 and which query options are supported for these requests

## HTTP capabilities
The first level of this (i.e. URL + verb ) looks for example like the following

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

path /orders/{id}/items/{id} {
    GET { ... }
    DELETE { ... }
}

path /skus {
    GET { ... }
}

```
The effect of this declaration is that for each URL and HTTP method combination the service is expected to return data, data in the form as specified by the corresponding type. The service is free to respond with success messages for other combinations but these ones are required.

The placeholders `...` are used to declare which query options are supported by the service. For example a GET capability lists that certain $filter options are allowed or that paging is supported via the $top, $skip options. More details in the next sections.

The specific capabilities that can be used in the HTTP capabilities section instead of the `...` in the example above can vary by HTTP method. Here is an overview 

|        | filter | expand | paging | count | read-model | write-model
|--------|:------:|:------:|:------:|:-----:|----- | --- |
| GET    |   x    |   x    |   x    |   x   | 
| POST   |        |        |        |       | 
| PATCH  |        |        |        |       |
| PUT    |        |        |        |       |
| DELETE |   x    |        |        |       |

## Individual Query capabilities

### Filter capabilities

The filter capability allows to specify which property can be used in which filter expression. There is a vast amount of possible filter expressions (see [odata abnf](https://github.com/oasis-tcs/odata-abnf/blob/main/abnf/odata-abnf-construction-rules.txt#L502)). Therefore, the filter capabilities allow to specify a few well-known but restrictive expressions or allow any expression.

The format for filter capabilities is a sequence of pairs of a so called operator group and a list of property names. An operator group is constraining the form of the expression allowed in the $filter system query option.

| operator group | comment                                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------------------|
| eq             | `<property> eq <literal>` or <br/> `<property> in (<literal1>, <literal2>, ... ) `                                |
| range          | `<literal> le <property> and <property> le <literal>` <br/> or equivalent with `ge`, `gt`, `lt`                                                      |
| ranges         | a disjunction of the `range` expressions                                                                    |
| prefix         | `startswith(<property>, <literal>)`                                                                           |
| text           | `<string op>(<property>  <literal>)`, <br/>where `<string op>` is one of `startswith`, `endswith`, `contains`      |
| any            | any expression including expressions combined with `not`, `and`, and `or`                                           |

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

The format is a sequence of properties together with a description how they can be expanded. The expand capability introduces a nesting of capabilities since the type od the  expandable property type can allow for select, filter, and expand.

```rsdl

expand {
    items { 
        expand { 
            sku { 
                filter { id: [eq], name: [prefix] }
                select: [name, description, unitPrice ]
            }
        }
    }    
}
```


### Paging capabilities

### Count capabilities

### Select capabilities


```rsdl
select { 
    read-only { createdDate, lastUpdateDate, fulfillmentDate }
    write-only { password attachment }
}
```

## Extensibility

## Syntax

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


# Capabilities document 
