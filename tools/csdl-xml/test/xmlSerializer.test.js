const assert = require("chai").assert;
const csdl = require("odata-csdl");
const fs = require("fs");
const { serializeToXml } = require("../lib/xmlSerializer");

function stripWhitespace(inputString) {
  return inputString.replace(/\s/g, "");
}

describe("Parse correct JSON CSDL", () => {
  it("Empty Object", () => {
    const xml = serializeToXml({});
    assert.equal(
      stripWhitespace(xml),
      '<edmx:Edmxxmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"Version="4.0"><edmx:DataService/></edmx:Edmx>'
    );
  });

  it("Empty model", () => {
    assert.contains(
      serializeToXml({
        $Version: "4.0",
        Model: {},
      }),
      '<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">'
    );
  });

  it("Default Complex Type", () => {
    assert.contains(
      serializeToXml({
        $Version: "4.0",
        Model: {
          foo: {
            $Kind: "ComplexType",
            $OpenType: true,
          },
        },
      }),
      '<ComplexType Name="foo" OpenType="true"/>'
    );
  });

  it("Two types", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: { $Kind: "ComplexType", $OpenType: true },
        bar: { $Kind: "ComplexType", $OpenType: true, baz: {} },
      },
    });
    assert.contains(xml, '<ComplexType Name="foo" OpenType="true"/>');
    assert.contains(xml, '<ComplexType Name="bar" OpenType="true">');
    assert.contains(
      xml,
      '<Property Name="baz" Type="Edm.String" Nullable="false"/>'
    );
  });

  it("Two properties, one key", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: {
          $Kind: "EntityType",
          $OpenType: true,
          $Key: ["key"],
          key: {},
          baz: { $Type: "Edm.Int32", $Nullable: true },
        },
      },
    });
    assert.contains(xml, '<EntityType Name="foo" OpenType="true">');
    assert.contains(xml, "<Key>");
    assert.contains(xml, '<PropertyRef Name="key"/>');
    assert.contains(
      xml,
      '<Property Name="key" Type="Edm.String" Nullable="false"/>'
    );
    assert.contains(xml, '<Property Name="baz" Type="Edm.Int32"/>');
  });

  it("All primitive types, two keys", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: {
          $Kind: "EntityType",
          $OpenType: true,
          $Key: ["qux", "dat"],
          bar: { $Collection: true },
          baz: { $Collection: true, $Nullable: true, $Type: "Edm.Int32" },
          qux: { $Type: "Edm.Boolean" },
          dat: { $Type: "Edm.Date" },
          dbl: { $Type: "Edm.Double" },
          dec: { $Type: "Edm.Decimal" },
          d42: { $Type: "Edm.Decimal", $Precision: 4, $Scale: 2 },
          s42: { $MaxLength: 42 },
          s4a: { $Collection: true, $MaxLength: 4, $Nullable: true },
          tsp: { $Type: "Edm.DateTimeOffset", $Precision: 0 },
          tim: { $Type: "Edm.TimeOfDay" },
          dur: { $Type: "Edm.Duration" },
          geo: { $Type: "Edm.GeographyPoint" },
        },
      },
    });
    assert.contains(xml, '<PropertyRef Name="qux"/>');
    assert.contains(xml, '<PropertyRef Name="dat"/>');
    assert.contains(
      xml,
      '<Property Name="bar" Type="Collection(Edm.String)" Nullable="false"/>'
    );
    assert.contains(xml, '<Property Name="baz" Type="Collection(Edm.Int32)"/>');
    assert.contains(
      xml,
      '<Property Name="qux" Type="Edm.Boolean" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="dat" Type="Edm.Date" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="dbl" Type="Edm.Double" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="dec" Type="Edm.Decimal" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="d42" Type="Edm.Decimal" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="s42" Type="Edm.String" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="s4a" Type="Collection(Edm.String)"/>'
    );
    assert.contains(
      xml,
      '<Property Name="tsp" Type="Edm.DateTimeOffset" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="tim" Type="Edm.TimeOfDay" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="dur" Type="Edm.Duration" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="geo" Type="Edm.GeographyPoint" Nullable="false"/>'
    );
  });

  it("Service", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      $EntityContainer: "Model.Service",
      Model: {
        foo: { $Kind: "EntityType", $OpenType: true },
        bar: { $Kind: "EntityType", $OpenType: true },
        Service: {
          $Kind: "EntityContainer",
          set: { $Type: "Model.foo", $Collection: true },
          one: { $Type: "Model.bar" },
        },
      },
    });
    assert.contains(xml, '<EntityType Name="foo" OpenType="true"/>');
    assert.contains(xml, '<EntityType Name="bar" OpenType="true"/>');
    assert.contains(xml, '<EntityContainer Name="Service">');
    assert.contains(xml, '<EntitySet Name="set" EntityType="Model.foo"/>');
    assert.contains(xml, '<Singleton Name="one" Type="Model.bar"/>');
  });

  it("Complex Property", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: {
          $Kind: "ComplexType",
          $OpenType: true,
          bar: { $Type: "Model.baz" },
        },
        baz: { $Kind: "ComplexType", $OpenType: true },
      },
    });
    assert.contains(xml, '<ComplexType Name="foo" OpenType="true">');
    assert.contains(
      xml,
      '<Property Name="bar" Type="Model.baz" Nullable="false"/'
    );
    assert.contains(xml, '<ComplexType Name="baz" OpenType="true"/>');
  });

  it("Navigation Properties", () => {
    const xml = serializeToXml({
      foo: {
        $Kind: "EntityType",
        $OpenType: true,
        bar: {
          $Kind: "NavigationProperty",
          $Type: "Model.baz",
          $ContainsTarget: true,
        },
      },
      baz: {
        $Kind: "EntityType",
        $OpenType: true,
        $Key: ["qux"],
        qux: {},
        foo: {
          $Kind: "NavigationProperty",
          $Type: "Model.foo",
        },
      },
    });
    assert.contains(xml, '<EntityType Name="foo" OpenType="true">');
    assert.contains(
      xml,
      '<NavigationProperty Name="bar" Type="Model.baz" Nullable="false" ContainsTarget="true"/>'
    );
    assert.contains(xml, '<EntityType Name="baz" OpenType="true">');
    assert.contains(xml, '<PropertyRef Name="qux"/>');
    assert.contains(
      xml,
      '<Property Name="qux" Type="Edm.String" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<NavigationProperty Name="foo" Type="Model.foo" Nullable="false"/>'
    );
    assert.contains(xml, '<EntityContainer Name="Service">');
    assert.contains(xml, '<Singleton Name="foo" Type="Model.foo"/>');
  });

  it("Namespace", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      "here.we.go": { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
    assert.contains(
      xml,
      '<Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="here.we.go">'
    );
    assert.contains(xml, '<ComplexType Name="foo" OpenType="true"/>');
  });

  it("Include", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      $Reference: {
        "foo-bar.rsdl": {
          $Include: [{ $Namespace: "foo.bar", $Alias: "foobar" }],
        },
        "../baz": {
          $Include: [{ $Namespace: "dot.dot.baz", $Alias: "hwga" }],
        },
      },
      Model: {},
    });
    assert.contains(xml, '<edmx:Reference Uri="foo-bar.rsdl">');
    assert.contains(xml, '<edmx:Include Namespace="Model" Alias="foobar"/>');
    assert.contains(xml, '<edmx:Reference Uri="../baz">');
    assert.contains(xml, '<edmx:Include Namespace="Model" Alias="hwga"/>');
    assert.contains(
      xml,
      '<Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Model"/>'
    );
  });

  it("Actions and Functions", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: { $Kind: "ComplexType", $OpenType: true },
        bar: [
          {
            $Kind: "Function",
            $IsBound: true,
            $IsComposable: true,
            $Parameter: [{ $Name: "this", $Type: "Model.foo" }],
            $ReturnType: { $Type: "Edm.Boolean" },
          },
        ],
        baz: [
          {
            $Kind: "Action",
            $IsBound: true,
            $Parameter: [
              { $Name: "this", $Type: "Model.foo" },
              { $Name: "quux", $Type: "Edm.Int32" },
            ],
          },
        ],
        qux: [
          {
            $Kind: "Action",
            $IsBound: true,
            $Parameter: [
              { $Name: "this", $Type: "Model.foo" },
              { $Name: "quux", $Collection: true },
              { $Name: "quuz", $Type: "Model.foo", $Nullable: true },
            ],
            $ReturnType: { $Type: "Model.foo" },
          },
        ],
      },
    });
    assert.contains(xml, '<ComplexType Name="foo" OpenType="true"/>');
    assert.contains(
      xml,
      '<Function Name="bar" IsBound="true" IsComposable="true">'
    );
    assert.contains(
      xml,
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    assert.contains(xml, '<ReturnType Type="Edm.Boolean" Nullable="false"/>');
    assert.contains(xml, '<Action Name="baz" IsBound="true">');
    assert.contains(
      xml,
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Parameter Name="quux" Type="Edm.Int32" Nullable="false"/>'
    );
    assert.contains(xml, '<Action Name="qux" IsBound="true">');
    assert.contains(
      xml,
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Parameter Name="quux" Type="Collection(Edm.String)" Nullable="false"/>'
    );
    assert.contains(xml, '<Parameter Name="quuz" Type="Model.foo"/>');
    assert.contains(xml, '<ReturnType Type="Model.foo" Nullable="false"/>');
  });

  it("Action and function imports", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      $EntityContainer: "Model.Service",
      Model: {
        foo: [
          {
            $Kind: "Function",
            $IsComposable: true,
            $ReturnType: { $Type: "Edm.Boolean" },
          },
        ],
        bar: [
          {
            $Kind: "Action",
            $Parameter: [{ $Name: "quux", $Type: "Edm.Int32" }],
          },
        ],
        Service: {
          $Kind: "EntityContainer",
          foo: { $Function: "Model.foo" },
          bar: { $Action: "Model.bar" },
        },
      },
    });
    assert.contains(xml, '<EntityContainer Name="Service">');
    assert.contains(xml, '<FunctionImport Name="foo" Function="Model.foo"/>');
    assert.contains(xml, '<ActionImport Name="bar"/>');
    assert.contains(xml, '<Function Name="foo" IsComposable="true">');
    assert.contains(xml, '<ReturnType Type="Edm.Boolean" Nullable="false"/>');
    assert.contains(xml, '<Action Name="bar">');
    assert.contains(
      xml,
      '<Parameter Name="quux" Type="Edm.Int32" Nullable="false"/>'
    );
  });

  it("Enumeration types", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: { $Kind: "EnumType", bar: 0, baz: 1, qux: 2 },
      },
    });
    assert.contains(xml, "<EnumType>");
    assert.contains(xml, '<Member Name="bar" Value="0"/>');
    assert.contains(xml, '<Member Name="baz" Value="1"/>');
    assert.contains(xml, '<Member Name="qux" Value="2"/>');
  });

  it("Flag enumeration types", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        Colors: {
          "@Org.OData.Core.V1.Description": "colours",
          $Kind: "EnumType",
          $IsFlags: true,
          red: 1,
          "red@Org.OData.Core.V1.Description": "ruby",
          green: 2,
          blue: 4,
        },
      },
    });
    assert.contains(
      xml,
      '<Annotation Term="Org.OData.Core.V1.Description" String="colours"/>'
    );
    assert.contains(
      stripWhitespace(xml),
      '<MemberName="red"Value="1"><AnnotationTerm="Org.OData.Core.V1.Description"String="ruby"/></Member>'
    );
  });

  it("Annotation values", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: {
          $Kind: "ComplexType",
          $OpenType: true,
          bar: {
            $Type: "Edm.Double",
            "@Org.OData.Validation.V1.Maximum": 1000,
            "@Org.OData.Validation.V1.Minimum": 0.01,
            "@a.b": { c: true, d: [], "@e.f": {}, g: { $Path: "h" } },
          },
        },
      },
    });
    assert.contains(
      stripWhitespace(xml),
      '<ComplexTypeName="foo"OpenType="true"><PropertyName="bar"Type="Edm.Double"Nullable="false"><AnnotationTerm="Org.OData.Validation.V1.Maximum"Decimal="1000"/><AnnotationTerm="Org.OData.Validation.V1.Minimum"Decimal="0.01"/>'
    );
    // todo: validate @a.b annotation when support for other types of annotations
  });

  it("Type definitions", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        Amount: {
          "@Org.OData.Core.V1.Description#foo": "Monetary Amount",
          $Kind: "TypeDefinition",
          $Type: "Edm.Decimal",
          $Precision: 23,
          $Scale: 5,
        },
        Currency: {
          "@Org.OData.Core.V1.Description": "ISO or custom currency",
          $Kind: "TypeDefinition",
          $MaxLength: 5,
        },
        Money: {
          $Kind: "ComplexType",
          $OpenType: true,
          amount: { $Type: "Model.Amount" },
          currency: { $Type: "Model.Currency" },
        },
      },
    });
    assert.contains(
      xml,
      '<TypeDefinition Name="Amount" UnderlyingType="Edm.Decimal" Nullable="false" Precision="5"/>'
    );
    assert.contains(
      xml,
      '<TypeDefinition Name="Currency" Nullable="false" MaxLength="5"/>'
    );
    assert.contains(
      xml,
      '<Property Name="amount" Type="Model.Amount" Nullable="false"/>'
    );
    assert.contains(
      xml,
      '<Property Name="currency" Type="Model.Currency" Nullable="false"/>'
    );
  });
});

//TODO: reference test cases (see rsdl-js)
//TODO: error cases/malformed JSON CSDL
