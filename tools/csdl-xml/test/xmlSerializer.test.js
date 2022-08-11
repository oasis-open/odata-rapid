const assert = require("chai").assert;
const expect = require("chai").expect;
const { serializeToXml } = require("../lib/xmlSerializer");

function stripWhitespace(inputString) {
  return inputString.replace(/\s/g, "");
}

describe("csdl-xml Parse correct JSON CSDL", () => {
  it("Empty Object", () => {
    const xml = serializeToXml({});
    assert.equal(
      stripWhitespace(xml),
      '<edmx:Edmxxmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"Version="4.0"><edmx:DataService/></edmx:Edmx>'
    );
  });

  it("Empty model", () => {
    expect(
      serializeToXml({
        $Version: "4.0",
        Model: {},
      })
    ).to.contain(
      '<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">'
    );
  });

  it("Default Complex Type", () => {
    expect(
      serializeToXml({
        $Version: "4.0",
        Model: {
          foo: {
            $Kind: "ComplexType",
            $OpenType: true,
          },
        },
      })
    ).to.contain('<ComplexType Name="foo" OpenType="true"/>');
  });

  it("Two types", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
        foo: { $Kind: "ComplexType", $OpenType: true },
        bar: { $Kind: "ComplexType", $OpenType: true, baz: {} },
      },
    });
    expect(xml).to.contain('<ComplexType Name="foo" OpenType="true"/>');
    expect(xml).to.contain('<ComplexType Name="bar" OpenType="true">');
    expect(xml).to.contain(
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
    expect(xml).to.contain('<EntityType Name="foo" OpenType="true">');
    expect(xml).to.contain("<Key>");
    expect(xml).to.contain('<PropertyRef Name="key"/>');
    expect(xml).to.contain(
      '<Property Name="key" Type="Edm.String" Nullable="false"/>'
    );
    expect(xml).to.contain('<Property Name="baz" Type="Edm.Int32"/>');
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
    expect(xml).to.contain('<PropertyRef Name="qux"/>');
    expect(xml).to.contain('<PropertyRef Name="dat"/>');
    expect(xml).to.contain(
      '<Property Name="bar" Type="Collection(Edm.String)" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="baz" Type="Collection(Edm.Int32)"/>'
    );
    expect(xml).to.contain(
      '<Property Name="qux" Type="Edm.Boolean" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="dat" Type="Edm.Date" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="dbl" Type="Edm.Double" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="dec" Type="Edm.Decimal" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="d42" Type="Edm.Decimal" Nullable="false" Precision="4" Scale="2"/>'
    );
    expect(xml).to.contain(
      '<Property Name="s42" Type="Edm.String" Nullable="false" MaxLength="42"/>'
    );
    expect(xml).to.contain(
      '<Property Name="s4a" Type="Collection(Edm.String)" MaxLength="4"/>'
    );
    expect(xml).to.contain(
      '<Property Name="tsp" Type="Edm.DateTimeOffset" Nullable="false" Precision="0"/>'
    );
    expect(xml).to.contain(
      '<Property Name="tim" Type="Edm.TimeOfDay" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="dur" Type="Edm.Duration" Nullable="false"/>'
    );
    expect(xml).to.contain(
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
    expect(xml).to.contain('<EntityType Name="foo" OpenType="true"/>');
    expect(xml).to.contain('<EntityType Name="bar" OpenType="true"/>');
    expect(xml).to.contain('<EntityContainer Name="Service">');
    expect(xml).to.contain('<EntitySet Name="set" EntityType="Model.foo"/>');
    expect(xml).to.contain('<Singleton Name="one" Type="Model.bar"/>');
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
    expect(xml).to.contain('<ComplexType Name="foo" OpenType="true">');
    expect(xml).to.contain(
      '<Property Name="bar" Type="Model.baz" Nullable="false"/'
    );
    expect(xml).to.contain('<ComplexType Name="baz" OpenType="true"/>');
  });

  it("Navigation Properties", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      Model: {
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
      },
    });
    expect(xml).to.contain('<EntityType Name="foo" OpenType="true">');
    expect(xml).to.contain(
      '<NavigationProperty Name="bar" Type="Model.baz" Nullable="false" ContainsTarget="true"/>'
    );
    expect(xml).to.contain('<EntityType Name="baz" OpenType="true">');
    expect(xml).to.contain('<PropertyRef Name="qux"/>');
    expect(xml).to.contain(
      '<Property Name="qux" Type="Edm.String" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<NavigationProperty Name="foo" Type="Model.foo" Nullable="false"/>'
    );
  });

  it("Namespace", () => {
    const xml = serializeToXml({
      $Version: "4.0",
      "here.we.go": { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
    expect(xml).to.contain(
      '<Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="here.we.go">'
    );
    expect(xml).to.contain('<ComplexType Name="foo" OpenType="true"/>');
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
    expect(xml).to.contain('<edmx:Reference Uri="foo-bar.rsdl">');
    expect(xml).to.contain(
      '<edmx:Include Namespace="foo.bar" Alias="foobar"/>'
    );
    expect(xml).to.contain('<edmx:Reference Uri="../baz">');
    expect(xml).to.contain(
      '<edmx:Include Namespace="dot.dot.baz" Alias="hwga"/>'
    );
    expect(xml).to.contain(
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
    expect(xml).to.contain('<ComplexType Name="foo" OpenType="true"/>');
    expect(xml).to.contain(
      '<Function Name="bar" IsBound="true" IsComposable="true">'
    );
    expect(xml).to.contain(
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    expect(xml).to.contain('<ReturnType Type="Edm.Boolean" Nullable="false"/>');
    expect(xml).to.contain('<Action Name="baz" IsBound="true">');
    expect(xml).to.contain(
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Parameter Name="quux" Type="Edm.Int32" Nullable="false"/>'
    );
    expect(xml).to.contain('<Action Name="qux" IsBound="true">');
    expect(xml).to.contain(
      '<Parameter Name="this" Type="Model.foo" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Parameter Name="quux" Type="Collection(Edm.String)" Nullable="false"/>'
    );
    expect(xml).to.contain('<Parameter Name="quuz" Type="Model.foo"/>');
    expect(xml).to.contain('<ReturnType Type="Model.foo" Nullable="false"/>');
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
    expect(xml).to.contain('<EntityContainer Name="Service">');
    expect(xml).to.contain('<FunctionImport Name="foo" Function="Model.foo"/>');
    expect(xml).to.contain('<ActionImport Name="bar" Action="Model.bar"/>');
    expect(xml).to.contain('<Function Name="foo" IsComposable="true">');
    expect(xml).to.contain('<ReturnType Type="Edm.Boolean" Nullable="false"/>');
    expect(xml).to.contain('<Action Name="bar">');
    expect(xml).to.contain(
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
    expect(xml).to.contain("<EnumType>");
    expect(xml).to.contain('<Member Name="bar" Value="0"/>');
    expect(xml).to.contain('<Member Name="baz" Value="1"/>');
    expect(xml).to.contain('<Member Name="qux" Value="2"/>');
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
    expect(xml).to.contain(
      '<Annotation Term="Org.OData.Core.V1.Description" String="colours"/>'
    );
    expect(stripWhitespace(xml)).to.contain(
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
    expect(stripWhitespace(xml)).to.contain(
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
    expect(xml).to.contain(
      '<TypeDefinition Name="Amount" UnderlyingType="Edm.Decimal" Nullable="false" Precision="23" Scale="5"/>'
    );
    expect(xml).to.contain(
      '<TypeDefinition Name="Currency" Nullable="false" MaxLength="5"/>'
    );
    expect(xml).to.contain(
      '<Property Name="amount" Type="Model.Amount" Nullable="false"/>'
    );
    expect(xml).to.contain(
      '<Property Name="currency" Type="Model.Currency" Nullable="false"/>'
    );
  });
});

//TODO: reference test cases (see rsdl-js)
//TODO: error cases/malformed JSON CSDL
