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

Run parser on test input - tests the semantic correctness of our grammar to some extent

```sh
npm run parse-testcases
```

Run all of the above

```sh
npm run test
```

## TODO

- [ ] Decide how to continue

Options

- [ ] keep ABNF as is, without whitespace definition as a "logical" grammar
- [ ] make it a full grammar by sprinkling it with RWS (required whitespace) and OWS (optional whitespace), and accept decreased readability
- [ ] Generate AST-like representation from input text to further test semantic correctness of grammar, which could be
  - "pretty-printed" input - easy to read and write
  - some tbd JSON or YAML representation - easy to compare
  - CSDL JSON or XML, in which case we have built another RSDL parser
