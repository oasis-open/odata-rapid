const assert = require("assert");
const colors = require("colors/safe");
const fs = require("fs");
const YAML = require("yaml");
const { apgLib } = require("apg-js");
const { parser: Parser, ast: AST, ids, utils, trace: Trace } = apgLib;
const Grammar = require("./grammar");

const parser = new Parser();
const grammar = new Grammar();

//TODO: parameterize
const config = YAML.parse(fs.readFileSync("./config.yaml", "utf8"));
const testCases = YAML.parse(fs.readFileSync("./rsdl-testcases.yaml", "utf8"));

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
function rulenameTokenCB(rulename) {
  return (state, chars, phraseIndex, phraseLength, data) => {
    if (state === ids.SEM_PRE) data.push(rulename);
    return ids.SEM_OK;
  };
}
function matchTokenCB(state, chars, phraseIndex, phraseLength, data) {
  if (state === ids.SEM_PRE)
    data.push(utils.charsToString(chars, phraseIndex, phraseLength));
  return ids.SEM_SKIP;
}
config.rulenameTokens.forEach(
  (ruleName) => (ast.callbacks[ruleName] = rulenameTokenCB(ruleName))
);
config.matchTokens.forEach(
  (ruleName) => (ast.callbacks[ruleName] = matchTokenCB)
);

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
      ? `all ${grammar.rules.length}`
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
