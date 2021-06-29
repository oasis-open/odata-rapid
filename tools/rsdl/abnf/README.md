# RSDL ABNF

Extract [`rsdl.abnf`](./rsdl.abnf) from the [RSDL documentation](../../../docs/rsdl/rapid-pro-rsdl-abnf.md), generate a parser with [JavaScript APG](https://github.com/ldthomas/apg-js), and run it on test input.

## Install

```sh
npm install
```

## Use

Extract [`rsdl.abnf`](./rsdl.abnf) from the [RSDL documentation](../../../docs/rsdl/rapid-pro-rsdl-abnf.md)

```sh
npm run extract
```

Run [JavaScript APG](https://github.com/ldthomas/apg-js) parser generator - tests syntactical correctness of [`rsdl.abnf`](./rsdl.abnf)

```sh
npm run generate-grammar
```

Run parser on [test cases](./rsdl-testcases.yaml) - tests the semantic correctness of [`rsdl.abnf`](./rsdl.abnf) (to some extent)

```sh
npm run parse-testcases
```

Run all of the above

```sh
npm run test
```

## Test case format

Test cases are defined in [`rsdl-testcases.yaml`](./rsdl-testcases.yaml). The file is an array of objects, each defining a test case.

A test case consists of

- `source` - the source text to parse, can be multi-line
- `tokens` (optional) - an array of tokens to be produced by the parser for a positive test case
- `failAt` (optional) - the position at which the parser should fail for a negative test case

Positive test cases fail if `source` cannot be parsed, or if the produced list of tokens differs from the provided `tokens`.

Negative test cases fail if `source` _can_ be parsed, or if it cannot be parsed and fails at a position other than `failAt`.

## TODO

- [x] measure rule coverage
- [ ] cover all rules
- [ ] ABNF: add `RWS` (required whitespace) where necessary, and `OWS` (optional whitespace) where desired
- [ ] tokens array: add all necessary keywords, identifiers, ...
