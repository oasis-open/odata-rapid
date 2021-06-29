const fs = require("fs");
const YAML = require("yaml");
const colors = require("colors/safe");
const { apgLib } = require("apg-js");
const { parser: Parser, ast: AST, ids, utils, trace: Trace } = apgLib;
const Grammar = require("./grammar");
const assert = require("assert");

const parser = new Parser();
const grammar = new Grammar();

// set a call back for every rule to measure rule coverage
function touchedCB(result, chars, phraseIndex, data) {
  if (result.state === ids.MATCH) data.rulesTouched[result.ruleIndex] = true;
}
const rulesTouched = [];
rulesTouched.length = grammar.rules.length;
grammar.rules.forEach((rule) => {
  parser.callbacks[rule.lower] = touchedCB;
});

// const trace = new Trace();
// parser.trace = trace;
// /* trace all rules and operators */
// trace.filter.rules["<ALL>"] = true;
// trace.filter.operators["<ALL>"] = true;

const ast = new AST();
parser.ast = ast;
// define callbacks, see https://github.com/ldthomas/apg-js2-examples/blob/61a36fd963ba544c0630a533c053f60d18d878d2/ast/setup.js#L29-L74
function rulenameCB(rulename) {
  return (state, chars, phraseIndex, phraseLength, data) => {
    if (state === ids.SEM_PRE) data.push(rulename);
    return ids.SEM_OK;
  };
}
function noopCB(state, chars, phraseIndex, phraseLength, data) {
  return ids.SEM_OK;
}
function skipCB(state, chars, phraseIndex, phraseLength, data) {
  if (state === ids.SEM_PRE)
    data.push(utils.charsToString(chars, phraseIndex, phraseLength));
  return ids.SEM_SKIP;
}
//TODO: move these arrays to a config file
["entitySet", "service", "singleton", "typeDefinition"].forEach(
  (ruleName) => (ast.callbacks[ruleName] = rulenameCB(ruleName))
);
[
  "builtInType",
  "edmType",
  "identifier",
  "operationKind",
  "qualifiedName",
  "typeReference",
].forEach((ruleName) => (ast.callbacks[ruleName] = skipCB));
// ["typeReference"].forEach(
//   (ruleName) => (parser.ast.callbacks[ruleName] = noopCB)
// );

function parse(inputString, failAt, expect) {
  inputCharacterCodes = utils.stringToChars(inputString);

  const result = parser.parse(grammar, 0, inputCharacterCodes, {
    rulesTouched,
  });

  if (result.success && failAt == null) {
    console.log(`${colors.green("OK:")} ${inputString}`);

    if (expect) {
      const data = [];
      ast.translate(data);
      try {
        assert.deepStrictEqual(data, expect);
      } catch (e) {
        console.log(
          e.message.replace(
            /^Expected values to be strictly deep-equal/,
            colors.red("Unexpected tokens")
          )
        );
        return false;
      }
    }
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
  if (parse(tc.source, tc.failAt, tc.tokens)) successes++;
}

if (successes === testCases.length) {
  let touched = 0;
  const untouched = [];
  for (const [i, t] of rulesTouched.entries()) {
    if (t) ++touched;
    else untouched.push(grammar.rules[i].name);
  }
  const touchedText =
    touched == grammar.rules.length
      ? `all`
      : `${touched} of ${grammar.rules.length}`;

  console.log(
    colors.green(
      `\nSuccess: all ${testCases.length} test cases passed, touched ${touchedText} rules`
    )
  );

  if (touched < grammar.rules.length) {
    console.log(
      colors.yellow(`\nUntouched rules:\n - ${untouched.join("\n - ")}`)
    );
  }
} else {
  const failed = testCases.length - successes;
  console.log(
    colors.red(`\nFailed: ${failed} test case${failed == 1 ? "" : "s"} failed`)
  );
}
