---
id: rsdl-abnf
title: RAPID SDL ABNF
---

# RAPID Pro syntax

> DRAFT
> March 2021

## Overview

This grammar uses ABNF as defined by [RFC5234](https://tools.ietf.org/html/rfc5234), with the addition for case-sensitive strings defined by [RFC7405](https://tools.ietf.org/html/rfc7405)

Note: to increase readability of the grammar, whitespace is not reflected

## Syntax rules

- [RAPID Pro syntax](#rapid-pro-syntax)
  - [Overview](#overview)
  - [Syntax rules](#syntax-rules)
    - [Model](#model)
    - [Structured Type](#structured-type)
    - [Enumeration Type](#enumeration-type)
    - [Type Definition](#type-definition)
    - [Service](#service)
    - [Annotations](#annotations)
    - [Core Syntax Elements](#core-syntax-elements)

### Model

```ABNF
model                = [ namespace ] *include *modelElement

namespace            = %s"namespace" RWS qualifiedName

include              = %s"include" RWS DQUOTE 1*CHAR DQUOTE RWS %s"as" RWS identifier

modelElement         = ( structuredType / enumType / typeDefinition / service )
```

### Structured Type

```ABNF
structuredType       = annotations [ %s"abstract" RWS ] %s"type" RWS identifier [ %s"extends" RWS qualifiedName ] OWS "{" OWS *structuredTypeMember OWS "}" OWS

structuredTypeMember = property / operation ; property, action, or function

property             = annotations [propertyModifier RWS] identifier OWS ":" OWS typeReference

propertyModifier     = %s"key"

typeReference        = typeName [ "?" ] / "[" typeName [ "?" ] "]"

typeName             = builtInType / %s"Edm" "." identifier / qualifiedName

builtInType          = %s"Boolean"
                     / %s"DateTime"
                     / %s"Date"
                     / %s"Decimal" [ "(" precision "," scale ")"]
                     / %s"Double"
                     / %s"Duration"
                     / %s"Integer"
                     / %s"String" [ "(" maxLength ")" ]
                     / %s"TimeOfDay"

operation            = annotations operationKind identifier
                       "(" [ parameter *("," parameter) ] ")"
                       [ ":" annotations typeReference ]

operationKind        = %s"action" / %s"function"

parameter            = annotations identifier OWS ":" OWS typeReference
```

### Enumeration Type

```ABNF
enumType             = annotations ( %s"enum" / %s"flags" ) identifier "{" 1*enumMember "}"

enumMember           = identifier
```

### Type Definition

```ABNF
typeDefinition       = annotations %s"typedef" identifier ":" ( builtInType / %s"Edm" "." identifier )
```

### Service

```ABNF
service              = %s"service" [ RWS identifier ] OWS "{" OWS serviceMember *( RWS serviceMember ) OWS "}" OWS

serviceMember        = entitySet / singleton / serviceOperation

entitySet            = identifier OWS ":" OWS "[" qualifiedName "]"

singleton            = identifier OWS ":" OWS qualifiedName

serviceOperation     = operationKind RWS identifier
                       OWS "(" OWS [ parameter *(OWS "," OWS parameter) OWS ] ")"
                       [ OWS ":" OWS typeReference ]
```

### Annotations

```ABNF
annotations          = *annotation

annotation           = "@" qualifiedName ":" annotationValue

annotationValue      = %s"true"
                     / %s"false"
                     / %s"null"
                     / number
                     / DQUOTE 1*CHAR DQUOTE
                     / "[" annotationValue *( [ "," ] annotationValue ) [ "," ] "]"
                     / "{" annotationProperty *( [ "," ] annotationProperty ) [ "," ] "}"
                     / "." *( "/"  identifier )

annotationProperty   = propertyName ":" annotationValue

propertyName         = identifier / DQUOTE 1*CHAR DQUOTE
```

### Core Syntax Elements

```ABNF
qualifiedName       = identifier *( "." identifier )

identifier          = identInitial *identSubsequent

identInitial        = ALPHA / "_" ; Note: actually all Unicode letters

identSubsequent     = identInitial / DIGIT

number              = [ "-" ] DIGIT *DIGIT ["." *DIGIT ]

integer             = [ "-" ] DIGIT *DIGIT

precision           = integer

scale               = integer

maxLength           = integer

ALPHA               = %x41-5A / %x61-7A

DIGIT               = %x30-39

CHAR                = %x20-21 / %x23-5B / %x5D-10FFFF
                    / ESCAPE ESCAPE
                    / ESCAPE DQUOTE

DQUOTE              = %x22              ; "

ESCAPE              = %x5C              ; \

OWS                 = *WS
RWS                 = 1*WS
WS                  = %x8 / %xA / %xD / %x20 ; TAB, LF, CR, SPACE
```
