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
      parse("type foo { key bar: String baz: Integer? }"),
      {
        $Version: "4.0",
        Model: {
          foo: {
            $Kind: "EntityType",
            $OpenType: true,
            $Key: ["bar"],
            bar: {},
            baz: { $Type: "Edm.Int32", $Nullable: true },
          },
        },
      }
    );
  });

  it("All property types, two keys", () => {
    assert.deepStrictEqual(
      parse(`type foo { 
               bar: [String] 
               baz: [Integer?]
               key qux: Boolean
               key dat: Date
               dbl: Double
               dec: Decimal
               tsp: Datetime
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
               foo(): Boolean
               action bar( quux: Integer )
             }`),
      {
        $Version: "4.0",
        $EntityContainer: "Model.Service",
        Model: {
          foo: [
            {
              $Kind: "Function",
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
    assert.deepStrictEqual(parse(`enum foo { bar baz }`), {
      $Version: "4.0",
      Model: {
        foo: { $Kind: "EnumType", bar: 1, baz: 2 },
      },
    });
  });

  it("Comments", () => {
    assert.deepStrictEqual(
      parse(`type foo { 
               bar: String
               // action baz( quux: Integer )
               /* action qux( quux: [String], quuz: foo? ): foo */
               baz: String
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
  //TODO: use test files from ../rapid-cli/rapid.rdm.transformation.tests/data
  const files = [
    // "abstract",
    // "annotations",
    // "inheritance",
    "operations",
  ];
  files.forEach((f) => {
    it(f, function () {
      const input = fs.readFileSync(
        `../rapid-cli/rapid.rdm.transformation.tests/data/${f}/sample.rsdl`,
        "utf8"
      );
      const expected = csdl.xml2json(
        fs.readFileSync(
          `../rapid-cli/rapid.rdm.transformation.tests/data/${f}/sample.csdl.xml`
        )
      );

      assert.deepStrictEqual(parse(input), expected);
    });
  });
});

describe("Parse RSDL with errors", () => {
  it.skip("Incomplete type", () => {
    //TODO: find out how to complain here
    // - https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
    assert.deepStrictEqual(parse("type foo"), {
      $Version: "4.0",
      Model: { foo: { $Kind: "ComplexType" } },
    });
  });

  //TODO: error cases
  // - same type name twice
  // - operation with same name as type
  // - function without return type
});
