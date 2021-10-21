---
id: rsdl-demo
title: RSDL syntax highlighting demo
---

# Demo

```rsdl title="Demo"

# comment
abstract type Entity
{
    key id: String
}

@Edm.Description: "the company entity"
type Company extends Entity
{
    stockSymbol: String
    name: String
    incorporated: Date
}

## an enumeration
enum { a b c d }


path /foo/bar/baz {
    GET {
        expand {}
        filter { 
            eq: {foo bar baz}
            range: {foo bar baz}
        }
        paging 
    }
    POST {

    }
}
```