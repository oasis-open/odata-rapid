---
id: rsdl-abnf
title: RAPID SDL ABNF
---

# RAPID Pro syntax

> DRAFT
> October 2020

## Overview

This grammar uses ABNF as defined by [RFC5234](https://tools.ietf.org/html/rfc5234), with the addition for case-sensitive strigs defined by [RFC7405](https://tools.ietf.org/html/rfc7405)

Note: to increase readability of the grammer, whitespace is not reflected

## Syntax rules

- [Model](#model)
- [Structured Type](#structured-type)
- [Enumeration Type](#enumeration-type)
- [Service](#service)
- [Core Syntax Elements](#core-syntax-elements)

### Model

```ABNF
model        = [ namespace ] *include *modelElement

namespace    = %s"namespace" qualifiedName

include      = %s"include" DQUOTE 1*CHAR DQUOTE %s"as" identifier

modelElement = structuredType / enumType / service
```

### Structured Type

```ABNF
structuredType       = %s"type" identifier "{" *typeMember "}"

structuredTypeMember = property / operation ; property, bound action, or bound function

property             = *propertyAnnotation identifier ":" typeReference

propertyAnnotation   = %s"@key"

typeReference        = typeName [ "?" ] / "[" typeName [ "?" ] "]"

typeName             = builtInType / %s"Edm" "." identifier / qualifiedName

builtInType          = %s"Boolean" / %s"Date" / %s"Datetime" / %s"Double" / %s"Integer" / %s"String"

operation            = [ actionAnnotation ] identifier
                       "(" [ parameter *("," parameter) ] ")"
                       [ ":" typeReference ]

actionAnnotation     = %s"@action"

parameter            = identifier ":" typeReference
```

### Enumeration Type

```ABNF
enumType   = %s"enum" identifier "{" 1*enumMember "}"

enumMember = identifier
```

### Service

```ABNF
service          = %s"service" "{" 1*serviceMember "}"

serviceMember    = entitySet / singleton / serviceOperation

entitySet        = identifier ":" "[" qualifiedName "]"

singleton        = identifier ":" qualifiedName

serviceOperation = [ actionAnnotation ] identifier
                   "(" [ parameter *("," parameter) ] ")"
                   [ ":" typeReference ]
```

### Core Syntax Elements

```ABNF
qualifiedName   = identifier *( "." identifier )

identifier      = identInitial *identSubsequent
identInitial    = ALPHA / "_" ; Note: actually all Unicode letters
identSubsequent = identInitial / DIGIT

ALPHA  = %x41-5A / %x61-7A
DIGIT  = %x30-39

CHAR   = %x20-21 / %x23-5B / %x5D-10FFFF
       / ESCAPE ESCAPE
       / ESCAPE DQUOTE

DQUOTE = %x22              ; "
ESCAPE = %x5C              ; \
```
