---
id: rsdl-semantics
title: RAPID SDL Semantics
---

# RAPID Pro schema definition language

> DRAFT
Initial Draft. July 2020

The semantic of RSDL (RAPID Pro schema definition language) can be described by mapping
syntactical constructs described in [rapid-pro-rsdl-abnf](./rapid-pro-rsdl-abnf.md) to equivalent [CSDL](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html) constructs.

Please refer to [rapid-pro-rsdl-abnf](./rapid-pro-rsdl-abnf.md) for the syntactical constructs of RSDL.

## Model

A [model](./rapid-pro-rsdl-abnf.md#model) is mapped to a CSDL Schema named "rapid", that has an entity container named "default".

```JSON
{
    "$Version": "4.01",
    "$EntityContainer": "rapid.default",
    "rapid": {
        "default": {
            "$Kind": "EntityContainer"
        }
    }
}
```

```XML
<Schema Namespace="rapid" xmlns="http://docs.oasis-open.org/odata/ns/edm">
    <EntityContainer Name="default">
    </EntityContainer>
</Schema>
```

The model's
[typeDefinition](./rapid-pro-rsdl-abnf.md#type-definition),
[serviceDefinition](./rapid-pro-rsdl-abnf.md#service-definition), or
[enumDefinition](./rapid-pro-rsdl-abnf.md#enum-definition) are mapped to the respective constructs below and added to the schema (or container respectively)

## Type definitions

A [typeDefinition](./rapid-pro-rsdl-abnf.md#type-definition) is mapped to either a [entity type](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_EntityType) or a [complex type](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_ComplexType).

Type definitions with one or more properties marked with a @key annotation are mapped to an entity type.
And respectively Type definitions without @key properties are mapped to a complex type.

### Type definitions without @key properties

```
    type name
    {
        firstName : string
        lastName: string
    }
```

```JSON
    "name": {
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
    <ComplexType Name="name">
        <Property Name="firstName" Type="Edm.String" Nullable="false" />
        <Property Name="lastName" Type="Edm.String" Nullable="false" />
    </ComplexType>
```

### Type definitions with @key properties

```
    type employee
    {
        @key id: integer
        name : name
    }
```

```JSON
    "employee": {
      "$Kind": "EntityType",
      "$Key": [
        "id"
      ],
      "id": {
        "$Type": "Edm.Int32"
      },
      "name": {
        "$Type": "rapid.name"
      }
    }
```

```XML
    <EntityType Name="employee">
        <Key>
          <PropertyRef Name="id" />
        </Key>
        <Property Name="id" Type="Edm.Int32" Nullable="false" />
        <Property Name="name" Type="rapid.name" Nullable="false" />
    </EntityType>
```

### Properties

The properties of a type definition are mapped to either a Property or a NavigationProperty depending on the property's type.

In the following example lets assume, name is mapped to a complete type and employee is mapped to a entity type.

```
    type company
    {
        @key stockSymbol: string
        name: name
        employees: [employee]
    }
```

```JSON
    "company": {
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
      "ceo": {
        "$Kind": "NavigationProperty",
        "$Type": "rapid.employee"
      }
    }
```

```XML
    <EntityType Name="company">
        <Key>
          <PropertyRef Name="stockSymbol" />
        </Key>
        <Property Name="name" Type="Edm.String" Nullable="false" />
        <NavigationProperty Name="ceo" Type="rapid.employee" Nullable="false" />
    </EntityType>
```

#### Property types

The type of a property is one of:

- one of the primitive types defined in the 'typeName' syntax rule
- any of the primitive EDM type listed in [OData CSDL XML Representation](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#_Toc38530338)
- the types or enums defined in the model

Each of these named types can be marked

- optional via a question mark `?`
- multi-value via enclosing it in brackets `[` `]`

```
    type foo
    {
        test1: integer
        test2: integer?
        test3: [integer]
        test4: [integer?]
    }
```

```JSON
  "foo": {
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
        "$Nullable": true,
        "$Collection": true,
        "$Type": "Edm.Int32"
      }
    }
```

```XML
    <EntityType Name="foo">
        <Property Name="test1" Type="Edm.Int32" Nullable="false" />
        <Property Name="test2" Type="Edm.Int32" Nullable="true" />
        <Property Name="test3" Type="Collection(Edm.Int32)" Nullable="false"/>
        <Property Name="test4" Type="Collection(Edm.Int32)" Nullable="true"/>
    </EntityType>
```

### Functions

The syntactical production rule called "function" is mapped to a bound action or a bound function in CSDL.

- functions without annotation and the ones annotated with @function are mapped to CSDL [Function](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Function)
- functions with an "@action" annotation are mapped to a CSDL [Action](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Action)

The binding parameter of the function is inferred from the containing type production rule and named "this"

```
    type employee
    {
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
            "$Type": "rapid.employee"
          }
        ]
      }
    ]
```

```XML
    <Function Name="foo" IsBound="true" IsComposable="true">
        <Parameter Name="it" Type="rapid.employee" Nullable="false" />
    </Function>
```

#### Function return type

The return type of a function is mapped similar to a property type with the same semantic for `[` `]` and `?`.

```
    type employee
    {
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
            "$Type": "rapid.employee"
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
            "$Type": "rapid.employee"
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
        <Parameter Name="it" Type="rapid.employee" Nullable="false" />
        <ReturnType Type="Edm.Int32" Nullable="false" />
    </Function>

    <Function Name="bar" IsBound="true" IsComposable="true">
        <Parameter Name="it" Type="rapid.employee" Nullable="false" />
        <ReturnType Type="Collection(Edm.Int32)" Nullable="false" />
    </Function>
```

#### Functions parameters

Parameters are similar to properties in that they have a name and reference a type.

```
    type employee
    {
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
            "$Type": "rapid.employee"
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
        <Parameter Name="it" Type="rapid.employee" Nullable="false" />
        <Parameter Type="Edm.Int32" Nullable="false" />
        <Parameter Type="Collection(Edm.Int32)" Nullable="true" />
    </Function>
```

[TODO: decide on optional parameter, how they are different from nullable required parameters, and if that is a feature required now or too much for RAPID]

## Enum definitions

A [enumDefinition](./rapid-pro-rsdl-abnf.md#enumDefinition) is mapped to an CSDL EnumType. The enumeration members values are automatically assigned.

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

## Service definition

As mentioned above, every RAPID service model create a CSDL entity container named "default"
```
service {
}
```

```JSON
    
```

```XML
   <EntityContainer Name="default">
```

### multi-value service element

A service definition element of a multi-value type gets mapped to a CSDL entity set.

```
service
{
  employees: [employee]
}
```

```XML
  <EntitySet Name="employees" EntityType="rapid.employee" />
```

If the type is used as a type on a multi-value and as the type of a property of type definitions (i.e. a navigation property in CSDL), the appropriate navigation property bindings get created.
In below example, the `company` type has a `ceo` and an `employees` property of the same type `employee` (except one is single-value and the other multi-value). The binding in CSDL defines that objects of these properties are bound to the `employees` entity set.

RAPID does not allow to have multiple entity sets for the same type, so that the binding is always uniquely defined.

```
service
{
    competitors: [company]
}
```

```XML
  <EntitySet Name="competitors" EntityType="rapid.company">
    <NavigationPropertyBinding Path="ceo" Target="employees" />
    <NavigationPropertyBinding Path="employees" Target="employees" />
  </EntitySet>
```



### single-value service element

A service definition element of a single-value type gets mapped to a CSDL singleton.

```
service
{
  company: company
}
```

```XML
   <Singleton Name="company" Type="rapid.company" />
```

## Appendix

### References

- [Semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>)
- [OData CSDL XML Representation](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_ComplexType)
- [RAPID Pro repo](https://github.com/standardapi/odata-rapid-pro)
