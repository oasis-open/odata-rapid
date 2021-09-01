---
id: rapid-pro-capabilities
title: Path centric service capabilities.
sidebar_label: Capabilities
---

# Path Centric Service Capabilities. 

The previous sections demonstrate how to define the format of the request/response bodies based on types and their relationship. This structure also implies which URLs are valid in the service: starting with the service properties and following properties that have a structured type.

Without further constraints this would allow a huge number of URLs that a service would need to support. And it is important not just to specify which paths are allowed, but also to specify different functionality and behaviors supported for different paths.

The following sections introduce the notion of paths and descriptions of capabilities that the service provides per path.

# Example

```
path /orders
{
    POST { }
    GET { ... }
}

path /orders/{id}
{
    GET { expand { items } }
    PATCH { ... }
}

path /orders/{id}/items/{id}
{
    GET { filter }
    DELETE { }
}

path /skus {
    GET { 
       facets {
          quota: 500
          permissions: "xyz"
       }  
    }
}

```

# Syntax

``` ABNF
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
select-capabilities   = "select" ["{" *( property-name ) "}"] 
filter-capabilities   = "filter" ["{" *( property-name ) [ *filter-operator-group ] "}"] 
filter-operator-group = "eq" / "in" / "range" / "ranges" / "strings"

paging-capabilities   = "paging" ["{" "}"] 


property-name         = identifier
path                  = "`" *( "/" identifier ) "`"  

```


# Capabilities document 
