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
    const completions = manager.getCompletions("", 0);
    expect(completions).to.eql(["competitors", "company"]);
  });

  it("completions for prefix", () => {
    const manager = new AutoCompleteManager(jetsons);
    const completions = manager.getCompletions("com", 3);
    expect(completions).to.eql(["competitors", "company"]);
  });

  it("completions for singleton", () => {
    const manager = new AutoCompleteManager(jetsons);
    const completions = manager.getCompletions("company?", 8);
    expect(completions).to.eql([
      "$filter", //TODO: should not be suggested
      "$select",
      "$expand",
      "$top", //TODO: should not be suggested
      "$skip", //TODO: should not be suggested
    ]);
  });

  it("completions for entity set", () => {
    const manager = new AutoCompleteManager(jetsons);
    const completions = manager.getCompletions("competitors?", 11);
    expect(completions).to.eql([
      "$filter",
      "$select",
      "$expand",
      "$top",
      "$skip",
      //TODO: $orderby should also be suggested
    ]);
  });

  it("completions for entity set after updateSchema", () => {
    const manager = new AutoCompleteManager(null);
    manager.updateSchema(jetsons);
    const completions = manager.getCompletions("competitors?", 11);
    expect(completions).to.eql([
      "$filter",
      "$select",
      "$expand",
      "$top",
      "$skip",
    ]);
  });

  it("completions for query option", () => {
    const manager = new AutoCompleteManager(jetsons);
    const completions = manager.getCompletions("competitors?$select", 19);
    expect(completions).to.eql(["="]);
  });

  it("completions for $select=", () => {
    const manager = new AutoCompleteManager(jetsons);
    const completions = manager.getCompletions("competitors?$select=", 20);
    expect(completions).to.eql([
      "stockSymbol",
      "name",
      "incorporated",
      "employees",
    ]);
  });

  //TOOD: other query options
});
