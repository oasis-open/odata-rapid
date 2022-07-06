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
});
