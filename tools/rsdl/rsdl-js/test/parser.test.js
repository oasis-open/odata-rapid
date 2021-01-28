const assert = require("chai").assert;

const { parse } = require("../lib/parser");

describe("Parse correct RSDL", () => {
  it("Empty file", () => {
    assert.deepStrictEqual(parse(""), {
      $Version: "4.01",
      Model: {},
    });
  });

  it("Empty type", () => {
    assert.deepStrictEqual(parse("type foo { }"), {
      $Version: "4.01",
      Model: { foo: { $Kind: "ComplexType" } },
    });
  });

  it("Two types", () => {
    assert.deepStrictEqual(parse("type foo {}\ntype bar { baz: String }"), {
      $Version: "4.01",
      Model: {
        foo: { $Kind: "ComplexType" },
        bar: { $Kind: "ComplexType", baz: {} },
      },
    });
  });

  it("Two properties, one key", () => {
    assert.deepStrictEqual(
      parse("type foo { key bar: String baz: Integer? }"),
      {
        $Version: "4.01",
        Model: {
          foo: {
            $Kind: "EntityType",
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
        $Version: "4.01",
        Model: {
          foo: {
            $Kind: "EntityType",
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
        $Version: "4.01",
        $EntityContainer: "Model.Service",
        Model: {
          foo: { $Kind: "EntityType" },
          bar: { $Kind: "EntityType" },
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
        $Version: "4.01",
        Model: {
          foo: { $Kind: "ComplexType", bar: { $Type: "Model.baz" } },
          baz: { $Kind: "ComplexType" },
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
          bar: {
            $Kind: "NavigationProperty",
            $Type: "Model.baz",
            $ContainsTarget: true,
          },
        },
        baz: {
          $Kind: "EntityType",
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
      $Version: "4.01",
      "here.we.go": { foo: { $Kind: "ComplexType" } },
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
        $Version: "4.01",
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
               bar(): Boolean
               action baz( quux: Integer )
               action qux( quux: [String], quuz: foo? ): foo
             }
             `),
      {
        $Version: "4.01",
        Model: {
          foo: { $Kind: "ComplexType" },
          bar: [
            {
              $Kind: "Function",
              $IsBound: true,
              $Parameter: [{ $Name: "it", $Type: "Model.foo" }],
              $ReturnType: { $Type: "Edm.Boolean" },
            },
          ],
          baz: [
            {
              $Kind: "Action",
              $IsBound: true,
              $Parameter: [
                { $Name: "it", $Type: "Model.foo" },
                { $Name: "quux", $Type: "Edm.Int32" },
              ],
            },
          ],
          qux: [
            {
              $Kind: "Action",
              $IsBound: true,
              $Parameter: [
                { $Name: "it", $Type: "Model.foo" },
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
        $Version: "4.01",
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
      $Version: "4.01",
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
        $Version: "4.01",
        Model: {
          foo: { $Kind: "ComplexType", bar: {}, baz: {} },
        },
      }
    );
  });
});

describe("Parse RSDL with errors", () => {
  it.skip("Incomplete type", () => {
    //TODO: find out how to complain here
    // - https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
    assert.deepStrictEqual(parse("type foo"), {
      $Version: "4.01",
      Model: { foo: { $Kind: "ComplexType" } },
    });
  });

  //TODO: error cases
  // - same type name twice
  // - operation with same name as type
  // - function without return type
});
