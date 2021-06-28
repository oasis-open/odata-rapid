const fs = require("fs");
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
    console.log(`OK: ${inputString}`);

    //TODO: check parse result
    // const foo = {};
    // ast.translate(foo);
    // console.dir(foo);
    return true;
  }

  if (!result.success && result.maxMatched == failAt) {
    console.log(`OK: ${inputString} fails at ${failAt}`);
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
  console.error(`KO: ${inputString} fails at ${result.maxMatched}${instead}`);
  console.error(`    ${" ".repeat(result.maxMatched)}^`);
  return false;
}

//TODO: parameterize
const testCaseData = fs.readFileSync("./rsdl-testcases.jsonc", "utf8");
const noComment = new RegExp("//(.*)", "g");
const testCases = JSON.parse(testCaseData.replace(noComment, ""));

let successes = 0;
for (const tc of testCases) {
  if (parse(tc.input, tc.failAt)) successes++;
}

if (successes === testCases.length) {
  console.log(`\nSuccess: all ${testCases.length} test cases passed`);
} else {
  const failed = testCases.length - successes;
  console.log(`\nFailed: ${failed} test case${failed == 1 ? "" : "s"} failed`);
}
