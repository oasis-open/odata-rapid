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

function parse(inputString) {
  inputCharacterCodes = utils.stringToChars(inputString);

  const result = parser.parse(grammar, 0, inputCharacterCodes);

  if (result.success) {
    console.log(`OK: ${inputString}`);
  } else {
    //   const t = trace.toHtml();
    //   fs.writeFileSync("trace.html", t);
    //   const t2 = trace.toTree(false);
    //   fs.writeFileSync("trace.json", JSON.stringify(t2, null, 2));
    console.error(`KO: ${inputString}`);
    console.error(`    ${" ".repeat(result.maxMatched)}^`);
  }

  // const foo = {};
  // ast.translate(foo);
  // console.dir(foo);
}

const testCases = [
  "service{foo:bar}",
  "servicex{foo:bar}",
  "service x { foo : bar }",
];

for (const tc of testCases) parse(tc);
