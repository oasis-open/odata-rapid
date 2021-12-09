---
id: rsdl-security
title: RSDL Security Requirements
sidebar_label: Security Requirements
---

# Path Centric Service Authorization 

The previous section (RSDL Capabilities)[rsdl-capabilitites] describes how capabilities can be specified on a per path basis. In a similar way we need to be able to specify the authorization requirements for each allowed path.

The syntax to specify the authorization requirements is similar to the capabilities.
For a given path and HTTP ver it list the requirements 

``` rsdl
path /orders {
    GET { 
        security { 
            authorization {

            }
        }
    }
    POST { 
        security { 
            authorization {
                
            }
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

query-capabilities    = [ expand-capabilities ] / 
                        [ filter-capabilities ] / [ select-capabilities ] /
                        [ paging-capabilities ] / [ count-capabilities ] /

get-capabilities      = "GET" "{" [ query-capabilities ] [ security-capabilities ] "}"

post-capabilities     = "POST" "{" [ security-capabilities ] "}"

patch-capabilities    = "PATCH" "{"[ security-capabilities ]  "}"

delete-capabilities   = "DELETE" "{" [ filter-capabilities ] [ security-capabilities ] "}"

expand-capabilities   = "security" "{" 
                           "scopes" ":" security-scopes
                           "authorization" ":" authorization
                        "}"

security-scopes   = "security" "{" 

authorization     = 

security-capabilities = "GET" "{" [ query-capabilities ] "}"


```

