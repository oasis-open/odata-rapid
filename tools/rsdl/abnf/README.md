# RSDL ABNF

The file [`rsdl.abnf`](./rsdl.abnf) is generated from the [RSDL documentation](../../../docs/rsdl/rapid-pro-rsdl-abnf.md).

## Install

```sh
npm install
```

## Use

Extract ABNF grammar from documentation

```sh
npm run build
```

Run parser generator - tests syntactical correctness of grammar

```sh
npm run buitestld
```

## TODO

- [ ] Test ABNF via [JavaScript APG](https://github.com/ldthomas/apg-js)

  - [ ] Generate parser from ABNF
  - [ ] Run parser against test files - use [OData ABNF Test Tool](https://github.com/ldthomas/apg-js-examples/tree/main/src/odata) as inspiration
  - [ ] Extract test files from ../rapid-cli/rapid.rdm.transformation.tests/data
