---
id: rsdl-demo
title: RAPID SDL demo
---

# Demo

```rsdl title="Demo"

# comment
abstract type Entity
{
    key id: String
}

type Company extends Entity
{
    stockSymbol: String
    name: String
    incorporated: Date
}

@description: true
@description: 1.23e-3
@description: "hello world"
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