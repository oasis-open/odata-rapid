import { expect } from "chai";
import { readFileSync } from "fs";
import "mocha";

import { AutoCompleteManager } from "../src/autocomplete-manager";
import { ISchema } from "../src/json-model";

const jetsons: ISchema = JSON.parse(
  readFileSync(`${__dirname}/resources/jetsons.csdl.json`, "utf8")
);

describe("odataUri", () => {
  it("completions for empty input", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, { "": ["competitors", "company"] });
  });

  it("completions for prefix", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, { com: ["competitors", "company"] });
  });

  it("completions for prefix with slash - why needed?", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, { "/com": ["competitors", "company"] });
  });

  it("completions for singleton", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      "company?": [
        "$filter", //TODO: should not be suggested
        "$select",
        "$expand",
        "$top", //TODO: should not be suggested
        "$skip", //TODO: should not be suggested] });
      ],
      "company/": ["stockSymbol", "name", "incorporated", "employees"],
      "company/employees?": [
        "$filter",
        "$select",
        "$expand",
        "$top",
        "$skip",
        //TODO: $orderby should also be suggested
      ],
    });
  });

  it("completions for entity set", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      "competitors?": [
        "$filter",
        "$select",
        "$expand",
        "$top",
        "$skip",
        //TODO: $orderby should also be suggested
      ],
      "competitors/": [
        "$count",
        "(", //TODO: a paren after a slash is syntactically incorrect
      ],
      "competitors/foo": ["$count", "("], //TODO: this doesn't make sense
      "competitors/123": ["$count", "("], //TODO: this doesn't make sense
    });
  });

  it("completions for entity set after updateSchema", () => {
    const manager = new AutoCompleteManager(null);

    const errors = manager.getErrors("foo");
    expect(errors).to.be.empty;

    expectCompletions(manager, {
      "competitors?": [],
    });

    manager.updateSchema(jetsons);
    expectCompletions(manager, {
      "competitors?": [
        "$filter",
        "$select",
        "$expand",
        "$top",
        "$skip",
        //TODO: $orderby should also be suggested
      ],
    });
  });

  it("completions for $select", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      "competitors?$select": ["="],
      "competitors?$select=": [
        "stockSymbol",
        "name",
        "incorporated",
        "employees",
      ],
      "competitors?$select=stockSymbol": [
        "&",
        "stockSymbol",
        "name",
        "incorporated",
        "employees",
        ",",
      ],
    });
  });

  it("completions for $expand", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      "company?$expand": ["="],
      "company?$expand=": ["employees"],
      "company?$expand=employees": ["&", "employees", ","],
    });
  });

  it("completions for $filter", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      "company?$filter": ["="],
      "company?$filter=": [
        "stockSymbol",
        "name",
        "incorporated",
        "employees",
        "true",
        "false",
      ],
      "company?$filter=stocksymbol": [
        "eq",
        "ne",
        "gt",
        "ge",
        "lt",
        "le",
        "and",
        "or",
        "&",
      ],
      "company?$filter=stocksymbol eq": [
        "stockSymbol",
        "name",
        "incorporated",
        "employees",
        "true",
        "false",
      ],
      "company?$filter=stocksymbol eq 123": [
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
      "company?$filter=stocksymbol eq 'FOO'": [
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
      "company?$filter=(stocksymbol eq true": [], //TODO: would expect closing paren
    });
  });

  it("completions for $orderby", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
      // "company?$orderby": ["="],
      "company?$orderby=": [
        "stockSymbol",
        "stockSymbol desc",
        "name",
        "name desc",
        "incorporated",
        "incorporated desc",
        "employees", //TODO: that doesn't make much sense
        "employees desc", //TODO: that doesn't make much sense
      ],
      "company?$orderby=name": [
        "&",
        "stockSymbol",
        "stockSymbol desc",
        "name",
        "name desc",
        "incorporated",
        "incorporated desc",
        "employees", //TODO: that doesn't make much sense
        "employees desc", //TODO: that doesn't make much sense
        //TODO: would have expected "," here
      ],
    });
  });

  it("completions for $skip & $top", () => {
    const manager = new AutoCompleteManager(jetsons);
    // expectCompletions(manager, {

    // });
    expectCompletions(manager, {
      // "competitors?$skip": [???], //TODO: throws exception
      "competitors?$skip=": ["NUMBER"],
      "competitors?$skip=3": ["&"],
      // "competitors?$top": [???], //TODO: throws exception
      "competitors?$top=": ["NUMBER"],
      "competitors?$top=3": ["&"],
    });
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
  expected: IExpectation
) {
  for (const [input, completions] of Object.entries(expected)) {
    const actual = manager.getCompletions(input, input.length - 1);
    expect(actual).to.eql(completions, input);
  }
}
