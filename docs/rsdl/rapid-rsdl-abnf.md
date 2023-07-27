---
id: rsdl-abnf
title: RSDL ABNF
---

# RAPID Schema Definition Language (RSDL) Syntax

## Overview

This grammar uses ABNF as defined by [RFC5234](https://tools.ietf.org/html/rfc5234), with the addition for case-sensitive strings defined by [RFC7405](https://tools.ietf.org/html/rfc7405)

Note: to increase readability of the grammar, whitespace is not reflected

## Syntax rules

- [RAPID Schema Definition Language (RSDL) Syntax](<#rapid-schema-definition-language-(RSDL)-Syntax>)
  - [Overview](#overview)
  - [Syntax rules](#syntax-rules)
    - [Model](#model)
    - [Structured Type](#structured-type)
    - [Enumeration Type](#enumeration-type)
    - [Type Definition](#type-definition)
    - [Service](#service)
    - [Annotations](#annotations)
    - [Model Capabilities](#model-capabilities)
    - [Paths](#paths)
    - [Path Capabilities](#path-capabilities)
    - [Capability Elements](#capability-elements)
    - [Core Syntax Elements](#core-syntax-elements)

### Model

```ABNF
model                = OWS [ namespace RWS ] *include [ modelElement *( RWS modelElement ) ] [ OWS service ] [ OWS paths ] OWS

namespace            = %s"namespace" RWS qualifiedName

include              = %s"include" RWS DQUOTE 1*CHAR DQUOTE RWS %s"as" RWS identifier RWS

modelElement         = ( structuredType / enumType / typeDefinition )
```

### Structured Type

```ABNF
structuredType       = annotations [ %s"abstract" RWS ] %s"type" RWS identifier [ %s"extends" RWS qualifiedName ] OWS "{" *( OWS structuredTypeMember ) OWS "}"

structuredTypeMember = property / operation ; property, action, or function

property             = singlePropertyDefinition [ OWS (primitivePropertyCapabilities / singleNavigationCapabilities) ]
                     / collectionPropertyDefinition [ OWS ( collectionCapabilities / collectionNavigationCapabilities) ]

singlePropertyDefinition  = annotations [propertyModifier RWS] identifier OWS ":" OWS singleTypeReference

collectionPropertyDefinition  = annotations identifier OWS ":" OWS collectionTypeReference

propertyModifier     = %s"key"

singleTypeReference      = typeName [ "?" ]

collectionTypeReference  = "[" typeName [ "?" ] "]"

typeReference            = singleTypeReference / collectionTypeReference

typeName             = builtInType / edmType / qualifiedName

builtInType          = %s"Boolean"
                     / %s"DateTime"
                     / %s"Date"
                     / %s"Decimal" [ "(" precision "," scale ")"]
                     / %s"Double"
                     / %s"Duration"
                     / %s"Integer"
                     / %s"String" [ "(" maxLength ")" ]
                     / %s"TimeOfDay"

edmType              = %s"Edm" "." identifier

operation            = annotations operationKind RWS identifier OWS
                       "(" OWS [ parameter *( OWS "," OWS parameter) OWS ] ")"
                       [ OWS ":" OWS annotations typeReference ]
                       [ separator collectionNavCapabilities ]

operationKind        = %s"action" / %s"function"

parameter            = annotations identifier OWS ":" OWS typeReference
```

### Enumeration Type

```ABNF
enumType             = annotations ( %s"enum" / %s"flags" ) RWS identifier OWS "{" OWS 1*enumMember "}"

enumMember           = annotations identifier OWS
```

### Type Definition

```ABNF
typeDefinition       = annotations %s"typedef" RWS identifier OWS ":" OWS ( builtInType / edmType )
```

### Service

```ABNF
service              = annotations %s"service" [ RWS identifier ] OWS "{" OWS serviceMember *( RWS serviceMember ) OWS "}"

serviceMember        = annotations ( entitySet / singleton / serviceOperation )

entitySet            = identifier OWS ":" OWS "[" qualifiedName "]" [ OWS collectionNavigationCapabilities ]

singleton            = identifier OWS ":" OWS qualifiedName [ OWS singleNavigationCapabilities ]

serviceOperation     = operationKind RWS identifier
                       OWS "(" OWS [ parameter *(OWS "," OWS parameter) OWS ] ")"
                       [ OWS ":" OWS annotations typeReference ]
```

### Annotations

```ABNF
annotations          = *( annotation RWS )

annotation           = "@" qualifiedName [ "#" identifier ] OWS ":" OWS annotationValue / DOC-COMMENT

annotationValue      = %s"true"
                     / %s"false"
                     / %s"null"
                     / number
                     / DQUOTE *CHAR DQUOTE
                     / "[" OWS [ annotationValue *( separator annotationValue ) OWS [ "," OWS ] ] "]"
                     / "{" OWS [ annotationProperty *( separator annotationProperty ) OWS [ "," OWS ] ] "}"
                     / "." *( "/"  identifier )

annotationProperty   = propertyName OWS ":" OWS annotationValue

propertyName         = identifier / DQUOTE 1*CHAR DQUOTE / "@" qualifiedName [ "#" identifier ]
```

### Model Capabilities

```ABNF
primitivePropertyCapability = "filterable" [ OWS filterOptions ] / "orderable" [ OWS orderByDirection ]

primitivePropertyCapabilities = "{" OWS [ primitivePropertyCapability *( separator primitivePropertyCapability )] OWS "}"

singleNavigationCapability = ("READ" / "UPDATE" / "REPLACE") [ OWS navCapabilities ] / "DELETE" noOptions

singleNavigationCapabilities = "{" OWS [ singleNavigationCapability *( separator singleNavigationCapability )] OWS "}"

collectionNavigationCapability = "DELETE" OWS noOptions
                              / "LIST" [ OWS collectionNavCapabilities ]
                              / ("READ" / "CREATE" / "REPLACE" / "UPDATE") [ OWS navCapabilities ]

collectionNavigationCapabilities = "{" OWS [ collectionNavigationCapability *( separator collectionNavigationCapability )] OWS "}"

```

### Paths

```ABNF
paths = %s"paths" OWS "{" *( OWS "/" path ) OWS "}"

path =  propertySegment "/" keySegment [ pathSegment / ( RWS singleNavPathCapabilities ) ]
        / serviceOperationSegment "/" keySegment [ pathSegment / ( RWS singleNavPathCapabilities ) ]
        / serviceOperationSegment [ pathSegment / ( RWS capabilities ) ]
        / castSegment [ pathSegment / ( RWS capabilities ) ]
        / propertySegment  [  pathSegment / ( RWS capabilities ) ]

propertySegment = identifier;  structural or navigation property

pathSegment = "/" path

castSegment = identifier 1*( "." identifier )      ; qualified type name

keySegment = "{" keyProperty "}"

keyProperty = identifier                           ; name of the key property

serviceOperationSegment = identifier parameters [ "/" castSegment ] [ "/" keySegment ]

parameters = "(" OWS [ parameterSpecification *( "," OWS parameterSpecification ) OWS ] ")"

parameterSpecification = identifier OWS "=" OWS "{" identifier "}"

capabilities = singlePathCapabilities / collectionPathCapabilities / singleNavPathCapabilities / collectionNavPathCapabilities

```

### Path Capabilities

```ABNF

singlePathCapability = ("GET" / "PUT" / "PATCH" / "DELETE") [noOptions]

singlePathCapabilities = "{" OWS [singlePathCapability *( separator singlePathCapability) OWS] "}"

collectionPathCapability = "GET" [ collectionCapabilities ] / "POST" [noOptions]

collectionPathCapabilities = "{" OWS [ collectionPathCapability *( separator collectionPathCapability ) OWS ] "}"

singleNavPathCapability = ("GET" / "PATCH" / "PUT") [ OWS navCapabilities ] / "DELETE" noOptions

singleNavPathCapabilities = "{" OWS [singleNavPathCapability *( separator singleNavPathCapability ) OWS ] "}"

collectionNavPathCapability = "GET" [ OWS collectionNavCapabilities ] / "POST" [ OWS navCapabilities ]

collectionNavPathCapabilities = "{" OWS [ collectionNavPathCapability *( separator collectionNavPathCapability ) OWS ] "}"

```

### Capability Elements

```ABNF

collectionCapability = filterCapability / orderByCapability / "top" / "skip" / "count"

collectionCapabilities =  "{" OWS [ collectionCapability *( separator collectionCapability ) OWS ] "}"

collectionNavCapability = collectionCapability / navCapability

collectionNavCapabilities = "{" OWS [ collectionNavCapability *( separator collectionNavCapability ) OWS ] "}"

navCapability       = "expand" [ OWS "{" OWS [ expandProperty *( OWS "," OWS expandProperty OWS ) ] OWS "}" ]

navCapabilities     =  "{" OWS [ navCapability OWS ] "}"

expandProperty      = star / [ castSegment "/" ] navigationProperty ( [ OWS collectionNavCapabilities ] / [ OWS navCapabilities ] )

navigationProperty = identifier     ; single or collection valued navigation property

filterCapability    = "filter" [ "{" [ OWS filterProperty *( "," OWS filterProperty OWS ) ] "}" ]

filterProperty    = ( ( [ typeName "/" ] propertyName ) / allProperties) [ OWS filterOptions ]

allProperties       =  star [ "/" typeName ]  ; all properties, optionally of a given type

filterOptions        = "{" OWS [ filterOperations OWS ] "}"

filterOperations     =  "none" ; not filterable
                     / "eq" ; eq
                     / "comp" ; eq, gt, ge, lt, le
                     / "stringComp" ; eq, gt, ge, lt, le, startswith, endswith, contains
                     / "string" ; eq, startswith, endswith, contains

orderByCapability = "orderby" [ OWS orderByProperties ]

orderByProperties = "{" OWS [ orderByProperty *( "," OWS orderByProperty OWS ) ] "}"

orderByProperty = allProperties / propertyName [ OWS orderByDirection ]

orderByDirection ="{" [ OWS ascOrDesc [ "," OWS ascOrDesc OWS ] ] "}"

ascOrDesc = "asc" / "desc"

noOptions = OWS "{" OWS "}"

```

### Core Syntax Elements

```ABNF

qualifiedName       = identifier *( "." identifier )

identifier          = identInitial *identSubsequent

identInitial        = ALPHA / "_" ; Note: actually all Unicode letters

identSubsequent     = identInitial / DIGIT

separator           = OWS "," OWS / RWS

star                = "*"

number              = integer [ "." 1*DIGIT ] [ "e" integer ]

integer             = [ "+" / "-" ] ( %x30 / %x31-39 *DIGIT )

precision           = integer

scale               = integer

maxLength           = integer

DOC-COMMENT         = "##" *( %x0-9 / %xB-C / %xE-10FFFF)

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
