const assert = require("chai").assert;

const csdl = require("odata-csdl");
const fs = require("fs");

const { parse } = require("../lib/parser");

describe("Parse correct RSDL", () => {
  it("Empty file", () => {
    assert.deepStrictEqual(parse(""), {
      $Version: "4.0",
      Model: {},
    });
  });

  it("Empty type", () => {
    assert.deepStrictEqual(parse("type foo { }"), {
      $Version: "4.0",
      Model: { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
  });

  it("Two types", () => {
    assert.deepStrictEqual(parse("type foo {}\ntype bar { baz: String }"), {
      $Version: "4.0",
      Model: {
        foo: { $Kind: "ComplexType", $OpenType: true },
        bar: { $Kind: "ComplexType", $OpenType: true, baz: {} },
      },
    });
  });

  it("Two properties, one key", () => {
    assert.deepStrictEqual(
      parse("type foo { key key : String baz: Integer? }"),
      {
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
      }
    );
  });

  it("All primitive types, two keys", () => {
    assert.deepStrictEqual(
      parse(`type foo { 
               bar: [String] 
               baz: [Integer?]
               key qux: Boolean
               key dat: Date
               dbl: Double
               dec: Decimal
               tsp: Datetime
               tim: TimeOfDay
               dur: Duration
               geo: Edm.GeographyPoint
             }`),
      {
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
            tsp: { $Type: "Edm.DateTimeOffset" },
            tim: { $Type: "Edm.TimeOfDay" },
            dur: { $Type: "Edm.Duration" },
            geo: { $Type: "Edm.GeographyPoint" },
          },
        },
      }
    );
  });

  it("Service", () => {
    assert.deepStrictEqual(
      parse(`type foo {}
             type bar {}
             service {
               set: [foo]
               one: bar
             }`),
      {
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
      }
    );
  });

  it("Complex Property", () => {
    assert.deepStrictEqual(
      parse(`type foo { bar: baz}
             type baz {}
            `),
      {
        $Version: "4.0",
        Model: {
          foo: {
            $Kind: "ComplexType",
            $OpenType: true,
            bar: { $Type: "Model.baz" },
          },
          baz: { $Kind: "ComplexType", $OpenType: true },
        },
      }
    );
  });

  it("Navigation Properties", () => {
    assert.deepInclude(
      parse(`type foo { bar: baz}
             type baz { 
               key qux: String
               foo: foo
             }
             service {
               foo: foo
             }
            `).Model,
      {
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
      }
    );
  });

  it("Namespace", () => {
    assert.deepStrictEqual(parse("namespace here.we.go type foo { }"), {
      $Version: "4.0",
      "here.we.go": { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
  });

  it("Include", () => {
    assert.deepStrictEqual(
      parse(
        `include "foo-bar.rsdl" as foobar
         include "../baz" as hwga
        `,
        (filename) => {
          switch (filename) {
            case "foo-bar.rsdl":
              return `namespace foo.bar`;
            case "../baz":
              return `namespace dot.dot.baz`;
          }
        }
      ),
      {
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
      }
    );
  });

  it("Actions and Functions", () => {
    assert.deepStrictEqual(
      parse(`type foo { 
               function bar(): Boolean
               action baz( quux: Integer )
               action qux( quux: [String], quuz: foo? ): foo
             }
             `),
      {
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
      }
    );
  });

  it("Action and function imports", () => {
    assert.deepStrictEqual(
      parse(`service {
               function foo(): Boolean
               action bar( quux: Integer )
             }`),
      {
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
      }
    );
  });

  it("Enumeration types", () => {
    assert.deepStrictEqual(parse(`enum foo { bar baz qux }`), {
      $Version: "4.0",
      Model: {
        foo: { $Kind: "EnumType", bar: 0, baz: 1, qux: 2 },
      },
    });
  });

  it("Flag enumeration types", () => {
    assert.deepStrictEqual(
      parse(
        `@Core.Description: "colours" flags Colors { @Core.Description: "ruby" red green blue }`
      ),
      {
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
      }
    );
  });

  it("Comments", () => {
    assert.deepStrictEqual(
      parse(`type foo { 
               bar: String
               # action baz( quux: Integer )
               baz: String # ignore
             }
             `),
      {
        $Version: "4.0",
        Model: {
          foo: { $Kind: "ComplexType", $OpenType: true, bar: {}, baz: {} },
        },
      }
    );
  });
});

describe("Reference test cases", () => {
  //TODO: collect files from ../rapid-cli/rapid.rdm.transformation.tests/data
  const files = [
    { d: "abstract" },
    { d: "annotations" },
    { d: "annotations2", n: "model" },
    { d: "inheritance" },
    { d: "named-service", n: "service" },
    { d: "operations" },
    { d: "parameter-annotations", n: "model" },
    { d: "path-expressions" },
  ];
  files.forEach((f) => {
    it(f.d, function () {
      f.n = f.n || "sample";
      const input = fs.readFileSync(
        `../rapid-cli/rapid.rdm.transformation.tests/data/${f.d}/${f.n}.rsdl`,
        "utf8"
      );
      const expected = csdl.xml2json(
        fs.readFileSync(
          `../rapid-cli/rapid.rdm.transformation.tests/data/${f.d}/${f.n}.csdl.xml`
        )
      );

      assert.deepStrictEqual(parse(input), expected);
    });
  });
});

describe("Parse RSDL with errors", () => {
  it("Parser error", () => {
    assert.deepStrictEqual(parse("type foo"), {
      $$errors: [
        {
          message: "mismatched input '<EOF>' expecting {'{', 'extends'}",
          target: "1:9",
        },
      ],
      $Version: "4.0",
      Model: { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
  });

  it("Lexer error", () => {
    assert.deepStrictEqual(parse("type foo {};"), {
      $$errors: [
        {
          message: "token recognition error at: ';'",
          target: "1:12",
        },
      ],
      $Version: "4.0",
      Model: { foo: { $Kind: "ComplexType", $OpenType: true } },
    });
  });

  //TODO: error cases
  // - same type name twice
  // - operation with same name as type
  // - function without return type
});
