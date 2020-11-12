# RAPID Features

## Model

| OData Feature | RAPID Equivalent |
|--|--|
| Schema Namespaces| one per file via `namespace ...`|
| Schema Alias | :x:, locally defined types are referenced without qualifier |
| Include Namespace w/ alias | `include "..." as ...` |
| Include Annotation | :x: |
| Entity Types | `type ...` |
| Complex Types | `type ...` |
| Key-less entity types for singletons and to-one containment | `type ...`, no field annotated as `@key` |
| Inheritance | `type Foo: Bar {...}` or similar |
| Abstract Structured Types | `@abstract type ...` |
| Open Structured Types | implicitly always open, no directive needed |
| Media Entity Types | :x:, use `Edm.Stream` |
| Default values for properties (and parameters?) | :x: |
| Referential Constraints | :x:, are always hidden |
| Partner Navigation ("backlink") | :x:, too fancy |
| OnDelete | :x:, too fancy |
| Enumeration Types | `enum ...` |
| Flags Enum Type | `flags { yellow striped }`, position in definition assigns bit in internal representation |
| Enum Member Value | :x:, also no names for combined values |
| Primitive Types (Binary, Decimal, Duration, Geo*, Guid, Integer variants, Stream, TimeOfDay, Abstract Types) | via qualified name `Edm.Xxx` |
| more "built-in" shortcuts for primitive types? | not Guid, not abstract types, not Geo*, no integer variants |
| Primitive Type Facets | optional paren suffix: `Decimal(precision,scale)`, `String(maxlength)`, meaning of "no suffix" is up to the service |
| Unicode facet for strings | :x:, always Unicode |
| SRID facet for Geo* | :x:, too fancy, use defaults |
| Type Definitions | :x:, maybe later, e.g. `scalar Foo: String(42)` |
| Function Overloads by non-binding parameters | :x: |
| Unbound Actions/Functions without "Import" | :x:, only useful for query (`$filter`) expressions, too fancy |
| Composable Function | every function is composable |
| Entity Set Path | :x:, too fancy |
| Extending an Entity Container | :x:, too fancy |
| Navigation Property Bindings | only implicit, maybe RAPID can use CSDL for the multiple entity-sets per type cases or return `@context` in case of doubt |
| Terms | :x:, maybe later, for now just use annotations from existing vocabularies |
| Annotations | first figure out representation, then decide. Use `@Validation.AllowedValues` as the litmus test. Ralf's preference: JSON5-ish CSDL JSON representation `{ foo:"bar" baz:true }` |

## Query

| (OData) Feature | RAPID Equivalent |
|--|--|
| $metadata | yes, only CSDL JSON or RSDL |
| key-as-segment | yes |
| paren-keys | :x: (can be added atop the profile) |
| alternate keys | :x:, requires paren-keys |
| `/$count` | yes, don't describe it initially |
| `/$value` | :x:, we don't have media entities |
| `$levels`, `$expand=*`, `$select=*` | :x:, be explicit |
| `$apply` | :x:, too fancy |
| `$compute` | :x:, too fancy |
| `$filter` | only subset, see ??? |
| `$search` | :x:, maybe later a subset (no parens, OR, NOT, only implicit AND) |
| `$orderby` | only subset (no expressions, no computed fields) |
| `$top`, `$skip`, `$count` | yes |
| Requesting Related Entities | yes, path syntax |
| `/$ref` for requesting Entity References | :x:, too fancy |
| Resolving an Entity-Id | :x:, too fancy |
| (bound) functions | _initially_ only implicit parameter aliases `GET /func?param=42`, only literal parameter values, no expressions |
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
| Deep Update/Upsert | :x: |
| PATCH to entity set | :x:, maybe later with simplified tombstones (`@removed` plus key properties) |
| Batch | advanced feature, only JSON Batch |
| `/$filter(...)`, `/$each` | :x:, too fancy |
| (bound) actions | yes |
| Asynchronous Requests | :x:, too fancy |
