---
id: rsdl-abnf
title: RAPID SDL ABNF
---

# RAPID Pro syntax

> DRAFT
> October 2020

## Overview

This grammar uses ABNF as defined by [RFC5234](https://tools.ietf.org/html/rfc5234).

Note: to increase readability of the grammer

- whitespace is not reflected
- double-quoted literals are case-_sensitive_

## Syntax rules

- [Model](#model)
- [Structured Type](#structured-type)
- [Enumeration Type](#enumeration-type)
- [Service](#service)
- [Core Syntax Elements](#core-syntax-elements)

### Model

```ABNF
model               = [ namespace ] *modelElement

namespace           = "namespace" qualifiedName

modelElement        = structuredType / enumType / service
```

### Structured Type

```ABNF
structuredType      = "type" identifier "{" *typeMember "}"

typeMember          = property / operation ; property or bound action or bound function

property            = *propertyAnnotation identifier ":" typeReference

propertyAnnotation  = "@key"

typeReference       = typeName [ "?" ] / "[" typeName [ "?" ] "]"

typeName            = builtInType / "Edm" "." identifier / qualifiedName

builtInType         = "boolean" / "date" / "datetime" / "decimal" / "double" / "integer" / "string"

operation           = [ actionAnnotation ] identifier
                      "(" [ parameter *("," parameter) ] ")"
                      [ ":" typeReference ]

actionAnnotation    = "@function"

parameter           = identifier ":" typeReference
```

### Enumeration Type

```ABNF
enumType            = "enum" identifier "{" 1*enumMember "}"

enumMember          = identifier
```

### Service

```ABNF
service             = "service" "{" 1*serviceMember "}"

serviceMember       = entitySet / singleton / serviceOperation

entitySet           = identifier ":" "[" qualifiedName "]"

singleton           = identifier ":" qualifiedName

serviceOperation    = [ actionAnnotation ] identifier
                      "(" [ parameter *("," parameter) ] ")"
                      [ ":" typeReference ]
```

### Core Syntax Elements

```ABNF
qualifiedName   = identifier *( "." identifier )
identifier      = identInitial *identSubsequent
identInitial    = ALPHA / "_" ; Note: actually all Unicode letters
identSubsequent = identInitial / DIGIT

ALPHA = %x41-5A / %x61-7A
DIGIT = %x30-39
```
