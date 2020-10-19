# RAPID Features

## Model

| OData Feature | RAPID Equivalent |
|--|--|
| Schema Namespaces| one per file via `namespace ...`|
| Schema Alias | :x:, ??? allow referencing locally defined types without qualifier |
| Include Namespace w/ alias | `include "..." as ...` |
| Include Annotation | :x: |
| Entity Types | `type ...` |
| Complex Types | `type ...` |
| Key-less entity types for singletons and to-one containment | `type ...`, no field annotated as `@key` |
| Inheritance | ??? `type Foo: Bar {...}` |
| Abstract Structured Types | ??? `@abstract type ...` |
| Open Structured Types | ??? implicitly always open |
| Media Entity Types | :x:, use `Edm.Stream` |
| Default values for properties (and parameters?) | ??? |
| Referential Constraints | :x:, no, are always hidden |
| Partner Navigation ("backlink") | :x:, too fancy |
| OnDelete | :x:, too fancy |
| Enumeration Types | `enum ...` |
| Flags Enum Type | :x:, too fancy |
| Enum Member Value | :x:, implicitly assigned |
| Primitive Types (Binary, Decimal, Duration, Geo*, Guid, Integer variants, Stream, TimeOfDay, Abstract Types) | via qualified name `Edm.Xxx` |
| more "built-in" shortcuts for primitive types? | ??? |
| Primitive Type Facets | ??? `Decimal(precision,scale)`, `DateTime(precision)`, `String(maxlength)`, `Integer(bytelength)` |
| Unicode facet for strings | :x:, always Unicode |
| SRID facet for Geo* | :x:, too fancy |
| Type Definitions | ??? `scalar Foo: String(42)` |
| Function Overloads by non-binding parameters | ??? allow multiple function members with different signatures |
| Unbound Actions/Functions without "Import" | :x:, only useful for query (`$filter`) expressions, too fancy |
| Composable Function | :x:, too fancy |
| Entity Set Path | :x:, too fancy |
| Extending an Entity Container | :x:, too fancy  |
| Navigation Property Bindings | only implicit |
| Terms and Annotations | ??? :x:, too fancy, 34 pages == 1/3 of the CSDL spec |

## Query

| (OData) Feature | RAPID Equivalent |
|--|--|
| $metadata | yes, only CSDL JSON or RSDL |
| key-as-segment | yes |
| paren-keys | :x: (can be added atop the profile) |
| alternate keys | :x:, requires paren-keys |
| `/$count` | :x:, too fancy, use `$count=true` |
| `/$value` | :x:, too fancy |
| `$levels`, `$expand=*`, `$select=*` | :x:, be explicit |
| `$apply` | :x:, too fancy |
| `$compute` | :x:, too fancy |
| `$filter` | only subset, see ??? |
| `$search` | only subset (no parens, OR, NOT, only implicit AND) |
| `$orderby` | only subset (no expressions, no computed fields) |
| `$top`, `$skip`, `$count` | yes |
| Requesting Related Entities | yes, path syntax |
| Requesting Entity References | :x:, too fancy |
| Resolving an Entity-Id | :x:, too fancy |
| (bound) functions | only implicit parameter aliases, only literal parameter values, no expressions |
| Delta Responses | :x:, too fancy |
| `/$crossjoin` | :x:, too fancy |
| `/$all` | :x:, too fancy |
| [Filter capabilities](https://github.com/oasis-open/odata-rapid/issues/30) | ??? |
| [Query Fragments and Persisted Queries](https://github.com/oasis-open/odata-rapid/issues/145) | ??? |

## Modification

| OData Feature | RAPID Equivalent |
|--|--|
| Basic POST(create), PATCH, DELETE | yes |
| PUT | :x:, only PATCH |
| Deep Insert | yes |
| Deep Update/Upsert | only with full replace, no `@delta` |
| PATCH to entity set | with simplified tombstones (`@removed` plus key properties) |
| Batch | only JSON Batch |
| `/$filter(...)`, `/$each` | :x:, too fancy |
| (bound) actions | yes |
| Asynchronous Requests | :x:, too fancy |
