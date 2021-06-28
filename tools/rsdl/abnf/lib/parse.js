const fs = require("fs");
const YAML = require("yaml");
const colors = require("colors/safe");
const { apgLib } = require("apg-js");
const { parser: Parser, ast: AST, utils, trace: Trace } = apgLib;
const Grammar = require("./grammar");

const parser = new Parser();
const grammar = new Grammar();

// const trace = new Trace();
// parser.trace = trace;
// /* trace all rules and operators */
// trace.filter.rules["<ALL>"] = true;
// trace.filter.operators["<ALL>"] = true;

// const ast = new AST();
// parser.ast = ast;
// define callbacks, see https://github.com/ldthomas/apg-js2-examples/blob/61a36fd963ba544c0630a533c053f60d18d878d2/ast/setup.js#L29-L74

function parse(inputString, failAt) {
  inputCharacterCodes = utils.stringToChars(inputString);

  const result = parser.parse(grammar, 0, inputCharacterCodes);

  if (result.success && failAt == null) {
    console.log(`${colors.green("OK:")} ${inputString}`);

    //TODO: check parse result
    // const foo = {};
    // ast.translate(foo);
    // console.dir(foo);
    return true;
  }

  if (!result.success && result.maxMatched == failAt) {
    console.log(
      `${colors.green("OK:")} ${inputString} ${colors.green(
        `fails at ${failAt}`
      )}`
    );
    return true;
  }

  //TODO: rerun parser with trace on?
  //   const t = trace.toHtml();
  //   fs.writeFileSync("trace.html", t);
  //   const t2 = trace.toTree(false);
  //   fs.writeFileSync("trace.json", JSON.stringify(t2, null, 2));
  const instead =
    Number.isInteger(failAt) && result.maxMatched != failAt
      ? ` instead of ${failAt}`
      : "";
  console.log(
    `${colors.red(
      `KO, fails at ${result.maxMatched}${instead}:`
    )} ${inputString.substr(0, result.maxMatched)}${colors.red(
      inputString.substr(result.maxMatched, 1)
    )}${inputString.substr(result.maxMatched + 1)}`
  );
  return false;
}

//TODO: parameterize
const testCases = YAML.parse(fs.readFileSync("./rsdl-testcases.yaml", "utf8"));

let successes = 0;
for (const tc of testCases) {
  if (parse(tc.input, tc.failAt)) successes++;
}

if (successes === testCases.length) {
  console.log(
    colors.green(`\nSuccess: all ${testCases.length} test cases passed`)
  );
} else {
  const failed = testCases.length - successes;
  console.log(
    colors.red(`\nFailed: ${failed} test case${failed == 1 ? "" : "s"} failed`)
  );
}
