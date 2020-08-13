# RAPID Pro syntax

<p style="font-size: xxx-large">DRAFT</p>
Initial Draft. July 2020


## Overview

This grammar uses ABNF as defined by [RFC5234](https://tools.ietf.org/html/rfc5234).

## Syntax rules

- [Model](#model)
- [Type definition](#type-definition)
- [Enum definition](#enum-definition)
- [Service definition](#service-definition)
- [Core syntax elements](#core-syntax-elements)

### Model

```ABNF
model               = 1*modelElement

modelElement        = typeDefinition /
                      serviceDefinition /
                      enumDefinition
```

### Type definition

```ABNF


typeDefinition      = "type" "{" typeMember "}"

typeMember          = property / function ; property or bound function

property            = \*propertyAnnotation identifier ":" typeReference

propertyAnnotation  = "@" "key"

function            = functionAnnotation identifier
                      "(" [ parameter *("," parameter) ] ")"
                      [":" typeReference]

functionAnnotation  = "@" ("action" / "function" )

parameter           = identifier ":" typeReference

typeReference       = typeName [ "?" ] / "[" typeName [ "?" ] "]"

typeName            = builtInType / "Edm" "." identifier / identifier
builtInType         = integer / string / boolean / double / decimal

```

### Enum definition

```ABNF

enumDefinition      = "enum" "{" enumMember "}"

enumMember          = identifier

```

### Service definition

```ABNF
serviceDefinition   = "service" "{" serviceMember "}"

serviceMember       = entitySet / singleton

entitySet           = identifier ":" "[" identifier "]"

singleton           = identifier ":" identifier

```

### Core syntax elements

```ABNF
identifier = identInitial \*identSubsequent
identInitial = ALPHA / "_"
identSubsequent = ALPHA / "_" / DIGIT
ALPHA = %x41-5A / %x61-7A
DIGIT = %x30-39

```
