import { expect } from "chai";
import { readFileSync } from "fs";
import "mocha";

import { ICompletions, AutoCompleteManager } from "../src/autocomplete-manager";
import { ISchema } from "../src/json-model";

const jetsons: ISchema = JSON.parse(
  readFileSync(`${__dirname}/resources/jetsons.csdl.json`, "utf8")
);

//TODO: also expect "from" for completions

describe("odataUri", () => {
  it("completions for empty input", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "", ["competitors", "company"]);
  });

  it("completions for prefix", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "com", ["competitors", "company"]);
  });

  it("completions for prefix with slash - why needed?", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "/com", ["competitors", "company"], 1);
  });

  it("completions for path", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "company", ["?", "/"], 7);
    expectCompletions(manager, "company/employees", ["?", "/"], 17);
  });

  it("completions for singleton", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "company?", ["$select", "$expand"], 8);
    expectCompletions(
      manager,
      "company/",
      ["stockSymbol", "name", "incorporated", "employees"],
      8
    );
    expectCompletions(
      manager,
      "company/employees?",
      ["$select", "$expand", "$filter", "$orderby", "$top", "$skip"],
      18
    );
  });

  it("completions for entity set", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(
      manager,
      "competitors?",
      ["$select", "$expand", "$filter", "$orderby", "$top", "$skip"],
      12
    );
    expectCompletions(
      manager,
      "competitors/",
      [
        "$count",
        "(", //TODO: a paren after a slash is syntactically incorrect
      ],
      12
    );
    expectCompletions(
      manager,
      "competitors/foo",
      ["$count", "("], //TODO: this doesn't make sense
      12
    );
    expectCompletions(
      manager,
      "competitors/123",
      ["$count", "("], //TODO: this doesn't make sense
      12
    );
  });

  it("completions for entity set after updateSchema", () => {
    const manager = new AutoCompleteManager(null);

    const errors = manager.getErrors("foo");
    expect(errors).to.be.empty;

    expectCompletions(manager, "competitors?", [], 12);

    manager.updateSchema(jetsons);
    expectCompletions(
      manager,
      "competitors?",
      ["$select", "$expand", "$filter", "$orderby", "$top", "$skip"],
      12
    );
  });

  it("completions for $select", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "competitors?$select", ["="], 19);
    expectCompletions(
      manager,
      "competitors?$select=",
      ["stockSymbol", "name", "incorporated"],
      20
    );
    expectCompletions(
      manager,
      "competitors?$select=stockSymbol",
      ["&", "stockSymbol", "name", "incorporated", ","], //TODO: should this just be "&" and ","?
      31
    );
    expectCompletions(
      manager,
      "competitors?$select=stockSymbol,",
      ["stockSymbol", "name", "incorporated"],
      32
    );
  });

  it("completions for $expand", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "company?$expand", ["="], 15);
    expectCompletions(manager, "company?$expand=", ["employees"], 16);
    expectCompletions(
      manager,
      "company?$expand=employees",
      ["&", "employees", ","],
      25
    );
  });

  it("completions for $filter", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "competitors?$filter", ["="], 19);
    expectCompletions(
      manager,
      "competitors?$filter=",
      ["stockSymbol", "name", "incorporated", "employees", "true", "false"],
      20
    );
    expectCompletions(
      manager,
      "competitors?$filter=stocksymbol",
      ["eq", "ne", "gt", "ge", "lt", "le", "and", "or", "&"],
      31
    );
    expectCompletions(
      manager,
      "competitors?$filter=stocksymbol eq",
      ["stockSymbol", "name", "incorporated", "employees", "true", "false"],
      34
    );
    expectCompletions(
      manager,
      "competitors?$filter=stocksymbol eq 123",
      [
        "eq", //TODO: makes no sense here
        "ne", //TODO: makes no sense here
        "gt", //TODO: makes no sense here
        "ge", //TODO: makes no sense here
        "lt", //TODO: makes no sense here
        "le", //TODO: makes no sense here
        "and",
        "or",
        "&",
      ],
      38
    );
    expectCompletions(
      manager,
      "competitors?$filter=stocksymbol eq 'FOO'",
      [
        "eq", //TODO: makes no sense here
        "ne", //TODO: makes no sense here
        "gt", //TODO: makes no sense here
        "ge", //TODO: makes no sense here
        "lt", //TODO: makes no sense here
        "le", //TODO: makes no sense here
        "and",
        "or",
        "&",
      ],
      40
    );
    expectCompletions(
      manager,
      "competitors?$filter=(stocksymbol eq true",
      [], //TODO: would expect closing paren
      40
    );
  });

  it("completions for $orderby", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(
      manager,
      // "competitors?$orderby": ["="],
      "competitors?$orderby=",
      [
        "stockSymbol",
        "stockSymbol desc",
        "name",
        "name desc",
        "incorporated",
        "incorporated desc",
      ],
      21
    );
    expectCompletions(
      manager,
      "competitors?$orderby=name",
      [
        "&",
        "stockSymbol",
        "stockSymbol desc",
        "name",
        "name desc",
        "incorporated",
        "incorporated desc",
        //TODO: would have expected "," here
      ],
      25
    );
  });

  it("completions for $skip & $top", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, "competitors?$skip", ["="], 17);
    expectCompletions(manager, "competitors?$skip=", ["NUMBER"], 18);
    expectCompletions(manager, "competitors?$skip=3", ["&"], 19);

    expectCompletions(manager, "competitors?$top", ["="], 16);
    expectCompletions(manager, "competitors?$top=", ["NUMBER"], 17);
    expectCompletions(manager, "competitors?$top=3", ["&"], 18);
  });

  it("errors for invalid input", () => {
    const manager = new AutoCompleteManager(jetsons);

    manager.getCompletions("company", 0);
    const noErrors = manager.getErrors("company");
    expect(noErrors).to.be.empty;

    const someErrors = manager.getErrors("nonsense");
    expect(someErrors).to.eql([
      {
        message:
          "'nonsense' is not a navigation source in the Service container",
        range: { start: 0, stop: 7 },
      },
    ]);

    const moreErrors = manager.getErrors("company?$select=nonsense");
    expect(moreErrors).to.eql([
      {
        message: "Property 'nonsense' does not exist on type 'Jetsons.Company'",
        range: { start: 16, stop: 23 },
      },
    ]);
  });
});

interface IExpectation {
  [input: string]: string[];
}

function expectCompletions(
  manager: AutoCompleteManager,
  input: string,
  suggestions: string[],
  from: number = 0
) {
  const actual = manager.getCompletions(input, input.length);
  expect(actual.suggestions).to.eql(suggestions, input);
  expect(actual.from).to.eql(from, input);
}
