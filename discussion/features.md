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
| [Query Fragments and Persisted Queries](https://github.com/oasis-open/odata-rapid/issues/145) |  |
|  |  |
| [Filter capabilities](https://github.com/oasis-open/odata-rapid/issues/30) |  |
|  |  |
|  |  |
|  |  |
|  |  |

## Modification

| OData Feature | RAPID Equivalent |
|--|--|
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
