---
id: rsdl-semantics
title: RAPID SDL Semantics
---

# RAPID Pro Schema Definition Language

> DRAFT
> Initial Draft. July 2020

The semantic of RSDL (RAPID Pro Schema Definition Language) can be described by mapping
syntactical constructs described in [rapid-pro-rsdl-abnf](./rapid-pro-rsdl-abnf.md) to equivalent [CSDL](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html) constructs.

Please refer to [rapid-pro-rsdl-abnf](./rapid-pro-rsdl-abnf.md) for the syntactical constructs of RSDL.

## Model

A [model](./rapid-pro-rsdl-abnf.md#model) is mapped to a CSDL Schema named "Model", that has an entity container named "Service".

```JSON
{
  "$Version": "4.01",
  "$EntityContainer": "Model.Service",
  "Model": {
    "Service": {
      "$Kind": "EntityContainer"
    }
  }
}
```

```XML
<Schema Namespace="Model" xmlns="http://docs.oasis-open.org/odata/ns/edm">
  <EntityContainer Name="Service">
  </EntityContainer>
</Schema>
```

The model's
[service](./rapid-pro-rsdl-abnf.md#service),
[structured types](./rapid-pro-rsdl-abnf.md#structured-type), and
[enumeration types](./rapid-pro-rsdl-abnf.md#enumeration-type) are mapped to the respective constructs below and added to the schema (or container respectively)

## Structured Types

A [structured type](./rapid-pro-rsdl-abnf.md#structured-type) is mapped to either an [entity type](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_EntityType) or a [complex type](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_ComplexType).

A structured type with one or more properties marked with `@key` is mapped to an entity type.
And respectively a structured type without `@key` properties is mapped to a complex type.

### Structured Types without `@key` Properties

```
type Name {
  firstName : String
  lastName: String
}
```

```JSON
"Name": {
  "$Kind": "ComplexType",
  "firstName": {
    "$Type": "Edm.String"
  },
  "lastName": {
    "$Type": "Edm.String",
  }
}
```

```XML
<ComplexType Name="Name">
  <Property Name="firstName" Type="Edm.String" Nullable="false" />
  <Property Name="lastName" Type="Edm.String" Nullable="false" />
</ComplexType>
```

### Structured Types with `@key` Properties

```
type Employee {
  @key id: Integer
  name : Name
}
```

```JSON
"Employee": {
  "$Kind": "EntityType",
  "$Key": [
    "id"
  ],
  "id": {
    "$Type": "Edm.Int32"
  },
  "name": {
    "$Type": "Model.Name"
  }
}
```

```XML
<EntityType Name="Employee">
  <Key>
    <PropertyRef Name="id" />
  </Key>
  <Property Name="id" Type="Edm.Int32" Nullable="false" />
  <Property Name="name" Type="Model.Name" Nullable="false" />
</EntityType>
```

### Properties

The properties of a type definition are mapped to either a Property or a NavigationProperty depending on the property's type.

In the following example lets assume, name is mapped to a complete type and employee is mapped to a entity type.

```
type Company {
  @key stockSymbol: String
  name: Name
  employees: [Employee]
}
```

```JSON
"Company": {
  "$Kind": "EntityType",
  "$Key": [
    "stockSymbol"
  ],
  "stockSymbol": {
    "$Type": "Edm.String"
  },
  "name": {
    "$Type": "Edm.String"
  },
  "employees": {
    "$Kind": "NavigationProperty",
    "$Type": "Model.Employee",
    "$Collection": true
  }
}
```

```XML
<EntityType Name="Company">
  <Key>
    <PropertyRef Name="stockSymbol" />
  </Key>
  <Property Name="name" Type="Edm.String" Nullable="false" />
  <NavigationProperty Name="ceo" Type="Model.Employee" Nullable="false" />
</EntityType>
```

#### Property Types

The type of a property is one of:

- one of the built-in types defined in the [`builtInType`](./rapid-pro-rsdl-abnf.md/#structured-type) syntax rule
- any of the primitive EDM type listed in [OData CSDL XML Representation](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_PrimitiveTypes)
- the structured or enumeration types defined in the model

Each of these named types can be marked as

- optional via a question mark `?`
- multi-valued via enclosing it in brackets `[` `]`

```
type Foo {
  test1: Integer
  test2: Integer?
  test3: [Integer]
  test4: [Integer?]
}
```

```JSON
"Foo": {
  "$Kind": "EntityType",
  "test1": {
    "$Type": "Edm.Int32"
  },
  "test2": {
    "$Nullable": true,
    "$Type": "Edm.Int32"
  },
  "test3": {
    "$Collection": true,
    "$Type": "Edm.Int32"
  },
  "test4": {
    "$Collection": true,
    "$Nullable": true,
    "$Type": "Edm.Int32"
  }
}
```

```XML
<EntityType Name="Foo">
  <Property Name="test1" Type="Edm.Int32" Nullable="false" />
  <Property Name="test2" Type="Edm.Int32" Nullable="true" />
  <Property Name="test3" Type="Collection(Edm.Int32)" Nullable="false"/>
  <Property Name="test4" Type="Collection(Edm.Int32)" Nullable="true"/>
</EntityType>
```

### Functions and Actions

The syntactical production rule `operation` is mapped to a bound action or a bound function in CSDL.

- functions without annotation are mapped to CSDL [Function](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Function)
- functions with an `@action` annotation are mapped to a CSDL [Action](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Action)

The binding parameter of the function is inferred from the containing type production rule and named `it`

```
type Employee {
  @key id: integer
  foo()
}
```

```JSON
"foo": [
  {
    "$Kind": "Function",
    "$IsBound": true,
    "$IsComposable": true,
    "$Parameter": [
      {
        "$Name": "it",
        "$Type": "Model.Employee"
      }
    ]
  }
]
```

```XML
<Function Name="foo" IsBound="true" IsComposable="true">
  <Parameter Name="it" Type="Model.Employee" Nullable="false" />
</Function>
```

#### Function Return Type

The return type of a function is mapped similar to a property type with the same semantic for `[` `]` and `?`.

```
type Employee {
  @key id: integer
  foo() : integer
  bar() : [integer]
}
```

```JSON
"foo": [
  {
    "$Kind": "Function",
    "$IsBound": true,
    "$IsComposable": true,
    "$Parameter": [
      {
        "$Name": "it",
        "$Type": "Model.Employee"
      }
    ],
    "$ReturnType": {
      "$Type": "Edm.Int32"
    }
  }
],
"bar": [
  {
    "$Kind": "Function",
    "$IsBound": true,
    "$IsComposable": true,
    "$Parameter": [
      {
        "$Name": "it",
        "$Type": "Model.Employee"
      }
    ],
    "$ReturnType": {
      "$Collection": true,
      "$Type": "Edm.Int32"
    }
  }
]
```

```XML
<Function Name="foo" IsBound="true" IsComposable="true">
  <Parameter Name="it" Type="Model.Employee" Nullable="false" />
  <ReturnType Type="Edm.Int32" Nullable="false" />
</Function>

<Function Name="bar" IsBound="true" IsComposable="true">
  <Parameter Name="it" Type="Model.Employee" Nullable="false" />
  <ReturnType Type="Collection(Edm.Int32)" Nullable="false" />
</Function>
```

#### Functions Parameters

Parameters are similar to properties in that they have a name and reference a type.

```
type Employee {
  @key id: integer
  foo(a: integer, b: [integer?])
}
```

```JSON
"foo": [
  {
    "$Kind": "Function",
    "$IsBound": true,
    "$IsComposable": true,
    "$Parameter": [
      {
        "$Name": "it",
        "$Type": "Model.Employee"
      },
      {
        "$Name": "a",
        "$Type": "Edm.Int32"
      },
      {
        "$Name": "b",
        "$Collection": true,
        "$Type": "Edm.Int32",
        "$Nullable": true
      }
    ]
  }
]
```

```XML
<Function Name="foo" IsBound="true" IsComposable="true">
  <Parameter Name="it" Type="Model.Employee" Nullable="false" />
  <Parameter Type="Edm.Int32" Nullable="false" />
  <Parameter Type="Collection(Edm.Int32)" Nullable="true" />
</Function>
```

> TODO: decide on optional parameters, how they are different from nullable required parameters, and if that is a feature required now or too much for RAPID

## Enumeration Types

A [enumType](./rapid-pro-rsdl-abnf.md#enumeration-type) is mapped to an CSDL EnumType. The enumeration members values are automatically assigned.

```
enum employmentType { salaried hourly }
```

```JSON
"employmentType": {
  "$Kind": "EnumType",
  "salaried": 0,
  "hourly": 1
}
```

```XML
<EnumType Name="employmentType">
  <Member Name="salaried" Value="0" />
  <Member Name="hourly" Value="1" />
</EnumType>
```

## Service

As mentioned above, every RAPID service model creates a CSDL entity container named "Service"

```
service {
}
```

```JSON
"Service": {
  "$Kind": "EntityContainer"
}
```

```XML
   <EntityContainer Name="Service">
```

### Multi-Valued Service Member

A service member of a multi-valued type is mapped to a CSDL entity set.

```
service {
  employees: [Employee]
}
```

```XML
<EntitySet Name="employees" EntityType="Model.Employee" />
```

If the type is used as a type on a multi-value and as the type of a property of type definitions (i.e. a navigation property in CSDL), the appropriate navigation property bindings get created.
In below example, the `company` type has a `ceo` and an `employees` property of the same type `employee` (except one is single-value and the other multi-value). The binding in CSDL defines that objects of these properties are bound to the `employees` entity set.

RAPID does not allow to have multiple entity sets for the same type, so that the binding is always uniquely defined.

```
service {
  competitors: [Company]
}
```

```XML
<EntitySet Name="competitors" EntityType="Model.Company">
  <NavigationPropertyBinding Path="ceo" Target="employees" />
  <NavigationPropertyBinding Path="employees" Target="employees" />
</EntitySet>
```

### Single-valued Service Member

A service member of a single-value type gets mapped to a CSDL singleton.

```
service {
  company: Company
}
```

```XML
<Singleton Name="company" Type="Model.Company" />
```

## Appendix

### References

- [Semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>)
- [OData CSDL JSON Representation](http://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html)
- [OData CSDL XML Representation](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html)
