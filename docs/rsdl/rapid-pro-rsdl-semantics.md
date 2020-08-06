# RAPID Pro schema definition language

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

```RSDL
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

```RSDL
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
    },
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

```RSDL
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

```RSDL
    type foo
    {
        test1: integer
        test3: integer?
        test1: [integer]
        test4: [integer?]
    }
```

```JSON
  "foo": {
      "$Kind": "EntityType",
      "test1": {
        "$Type": "Edm.Int32"
      },
      "test1": {
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
        <Property Name="test1" Type="Edm.Int32" Nullable="true" />
        <Property Name="test3" Type="Collection(Edm.Int32)" Nullable="false"/>
        <Property Name="test4" Type="Collection(Edm.Int32)" Nullable="true"/>
    </EntityType>
```

### Functions

The syntactical production rule called "function" is mapped to a bound action or a bound function in CSDL.

- functions without annotation and the ones annotated with @function are mapped to CSDL [Function](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Function)
- functions with an "@action" annotation are mapped to a CSDL [Action](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Action)

The binding parameter of the function is inferred from the containing type production rule and named "this"

```RSDL
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

```RSDL
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
        <ReturnType Type="Edm.Int32" Nullable="false" />
    </Function>
```

#### Functions parameters

Parameters are similar to properties in that they have a name and reference a type.

```RSDL
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

```RSDL
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

## Appendix

### References

- [Semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>)
- [OData CSDL XML Representation](http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_ComplexType)
- [RAPID Pro repo](https://github.com/standardapi/odata-rapid-pro)
