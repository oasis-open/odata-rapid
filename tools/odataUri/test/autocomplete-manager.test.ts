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
    });
  });

  it("completions for entity set after updateSchema", () => {
    const manager = new AutoCompleteManager(null);
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

  it("completions for query option", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, { "competitors?$select": ["="] });
  });

  it("completions for $select=", () => {
    const manager = new AutoCompleteManager(jetsons);
    expectCompletions(manager, {
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

  //TOOD: other query options

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
    const actual = manager.getCompletions(input, input.length);
    expect(actual).to.eql(completions);
  }
}
