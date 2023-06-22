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
model                = OWS [ namespace RWS ] *include [ modelElement *( RWS modelElement ) ] OWS

namespace            = %s"namespace" RWS qualifiedName

include              = %s"include" RWS DQUOTE 1*CHAR DQUOTE RWS %s"as" RWS identifier RWS

modelElement         = ( structuredType / enumType / typeDefinition / service )
```

### Structured Type

```ABNF
structuredType       = annotations [ %s"abstract" RWS ] %s"type" RWS identifier [ %s"extends" RWS qualifiedName ] OWS "{" *( OWS structuredTypeMember ) OWS "}"

structuredTypeMember = property / operation ; property, action, or function

property             = structuralProperty / referenceProperty

structuralProperty   = primitiveProperty / collectionProperty

primitiveProperty    = propertyDefinition [ primitivePropertyCapabilities ]

collectionProperty   = propertyDefinition [ collectionPropertyCapabilities ]

referenceProperty    = singleRefProperty / nullableRefProperty /collectionRefProperty

singleRefProperty    = propertyDefinition [ singleReferenceCapabilities ]

nullableRefProperty  = propertyDefinition [ singleNullableReferenceCapabilities ]

collectionRefProperty = propertyDefinition [ collectionReferenceCapabilities ]

propertyDefinition  = annotations [propertyModifier RWS] identifier OWS ":" OWS typeReference

propertyModifier     = %s"key"

typeReference        = typeName [ "?" ] / "[" typeName [ "?" ] "]"

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
                       [ separator collectionRefCapabilities ]

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

entitySet            = identifier OWS ":" OWS "[" qualifiedName "]" [ collectionReferenceCapabilities ]

singleton            = identifier OWS ":" OWS qualifiedName [ singleReferenceCapabilities ]

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
primitivePropertyCapability = "filterable" [ filterOptions ] / "orderable" [ orderByOptions ]

primitivePropertyCapabilities = "{" [ primitivePropertyCapability *( separator primitivePropertyCapability )] "}"

collectionPropertyCapabilities = collectionCapabilities

singleReferenceCapability = ("READ" / "UPDATE" / "REPLACE") ["{" *refCapability "}"]

singleReferenceCapabilities = "{" [ singleReferenceCapability *( separator singleReferenceCapability )] "}"

singleNullableReferenceCapability = singleReferenceCapability / "DELETE" noOptions

singleNullableReferenceCapabilities = "{" [ singleNullableReferenceCapability *( separator singleNullableReferenceCapability )] "}"

collectionReferenceCapability =  "DELETE" OWS noOptions /
                                   "LIST" ["{" *(collectionRefCapability) "}"] /
                                   ("READ" / "CREATE" / "REPLACE" / "UPDATE") ["{" *(refCapability) "}"]

collectionReferenceCapabilities = "{" [ collectionReferenceCapability *( separator collectionReferenceCapability )] "}"

```

### Paths

```ABNF
paths = %s"paths" OWS ":" OWS "{" *( OWS path ) OWS "}"

path =   "/" entitySet [ "/" castSegment ] [ RWS collectionRefPathCapabilities ]
       / "/" singleton [ "/" castSegment] [ RWS singleRefPathCapabilities ]
       / "/" serviceMember *("/" interimSegment) "/" lastSegment
       / serviceOperationPath

interimSegment = singleValuedSegment / nullableValuedSegment / castSegment
              / singleRefSegment / nullableRefSegment / collectionRefSegment "/" keySegment

lastSegment = singleValuedSegment [ "/" castSegment ] [ RWS singlePathCapabilities ]
            / nullableValuedSegment [ "/" castSegment ] [ RWS nullablePathCapabilities ]
            / collectionValuedSegment [ "/" castSegment ] [ RWS collectionPathCapabilities ]
            / singleRefSegment [ "/" castSegment ] [ RWS singleRefPathCapabilities ]
            / nullableRefSegment [ "/" castSegment ] [ RWS singleNullableReferenceCapability ]
            / collectionRefSegment [ "/" castSegment ] [ RWS ( collectionRefPathCapabilities / "/" keySegment RWS nullableRefPathCapabilities )]

serviceOperationPath = "/" singleValuedOperation [ "/" castSegment ] [ RWS singlePathCapabilities]
                     / "/" nullableValuedOperation [ "/" castSegment ] [ RWS nullablePathCapabilities]
                     / "/" collectionValuedOperation [ "/" castSegment ] [ RWS collectionPathCapabilities]
                     / "/" singleRefValuedOperation [ "/" castSegment ] [ RWS singleRefPathCapabilities]
                     / "/" nullableRefValuedOperation [ "/" castSegment ] [ RWS nullableRefPathCapabilities]
                     / "/" collectionRefValuedOperation [ "/" castSegment ] [ RWS collectionRefPathCapabilities]

singleValuedSegment = identifier                   ; a single, non-nullable property
                    / singleValuedOperation

nullableValuedSegment = identifier                 ; a single, nullable property
                    / nullableValuedOperation

collectionValuedSegment = identifier               ; a collection-valued property
                    / collectionValuedOperation

singleRefSegment = identifier                      ; a single, non-nullable reference property
                    / singleRefValuedOperation

nullableRefSegment = identifier                    ; a single, nullable reference property
                    / nullableRefValuedOperation

collectionRefSegment = identifier                  ; a collection-valued reference property
                    / collectionRefValuedOperation

singleValuedOperation = identifier                 ; an operation that returns a single value

nullableValuedOperation = identifier               ; an operation that returns a single, nullable value

collectionValuedOperation = identifier             ; an operation that returns a collection value

singleRefValuedOperation = identifier              ; an operation that returns a single reference value

nullableRefValuedOperation = identifier            ; an operation that returns a nullable single reference value

collectionRefValuedOperation = identifier          ; an operation that returns a collection of reference values

castSegment = typeName

keySegment = "{" keyProperty "}"

keyProperty = identifier                               ; name of the key property

```

### Path Capabilities

```ABNF

singlePathCapability = ("GET" / "PUT" / "PATCH") [noOptions]

singlePathCapabilities = "{" [singlePathCapability *( separator singlePathCapability)] "}"

nullablePathCapability = singlePathCapability / "DELETE" noOptions

nullablePathCapabilities = "{" [ nullablePathCapability *( separator nullablePathCapability )] "}"

collectionPathCapability = "GET" [ collectionCapabilities ] / "POST" [noOptions]

collectionPathCapabilities = "{" [ collectionPathCapability *( separator collectionPathCapability )] "}"

singleRefPathCapability = ("GET" / "PATCH" / "PUT") [ refCapabilities]

singleRefPathCapabilities = "{" [singleRefPathCapability *( separator singleRefPathCapability )] "}"

nullableRefPathCapability = singleRefPathCapability / "DELETE" noOptions

nullableRefPathCapabilities = "{" [nullableRefPathCapability *( separator nullableRefPathCapability )] "}"

collectionRefPathCapability = "GET" [ collectionRefCapabilities ] / "POST" [ refCapabilities ]

collectionRefPathCapabilities = "{" [ collectionRefPathCapability *( separator collectionRefPathCapability )] "}"

```

### Capability Elements

```ABNF

collectionCapability = filterCapability / orderByCapability / "top" / "skip" / "count"

collectionCapabilities = "{" OWS [ collectionCapability *( separator collectionCapability ) OWS ] "}"

collectionRefCapability = collectionCapability / refCapability

collectionRefCapabilities = "{" OWS [ collectionRefCapability *( separator collectionRefCapability ) OWS ] "}"

refCapability       = "expand" [ "(" [ OWS expandProperty *( "," OWS expandProperty OWS ) ] ")" ]

refCapabilities     = "{" OWS [ refCapability OWS ] "}"

expandProperty      = STAR /
                      [castSegment] singleRefProperty [ refCapabilities ] /
                      [castSegment] collectionRefProperty [ collectionRefCapabilities ]

filterCapability    = "filter" [ "(" [ OWS filterProperty *( "," OWS filterProperty OWS ) ] ")" ]

filterProperty    = ( ( [ typeName "/" ] propertyName ) / allProperties) [ filterOptions ]

allProperties       =  "*" [ "/" typeName ]  ; all properties, optionally of a given type

filterOptions        = "{" OWS [ filterOperations OWS ] "}"

filterOperations     = "none" ; not filterable
                     / "eq" ; eq
                     / "comp" ; eq, gt, ge, lt, le
                     / "string" ; eq, startswith, endswith, contains
                     / "stringComp" ; eq, gt, ge, lt, le, startswith, endswith, contains

orderByCapability = "orderby" [ orderByOptions ]

orderByOptions = "(" [ OWS orderByProperty *( "," OWS orderByProperty OWS ) ] ")"

orderByProperty = allProperties / propertyName [ OWS "{" [ OWS ascOrDesc [ "," OWS ascOrDesc OWS ] ] "}" ]

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

STAR                = "*"

OWS                 = *WS
RWS                 = 1*WS
WS                  = %x8 / %xA / %xD / %x20 ; TAB, LF, CR, SPACE
```
