# RSDL-to-CSDL Compiler

RAPID Schema Definition Language (RSDL) is a language to define Web APIs.

RSDL is based on the [RAPID Profile](<https://en.wikipedia.org/wiki/Profile_(engineering)>) of the
[OData](https://en.wikipedia.org/wiki/Open_Data_Protocol) specification. RAPID provides an easy way
to envision, create, and consume a Web API that is compatible with the OData Standard and can evolve over time to support more advanced scenarios.

## Installation

Clone or download this repository, go to the `rsdl-js` folder and type

```sh
npm install
```

To install globally type

```sh
npm install -g
```

## Usage

Assuming you installed the package globally and your RSDL file is `MyModel.rsdl`, then

```sh
rsdl2csdl -p myModel.rsdl
```

will create `MyModel.json` next to it.

Just type

```sh
rsdl2csdl -h
```

to get usage hints

```
Usage: rsdl2csdl <options> <source files>
Options:
 -h, --help              show this info
 -p, --pretty            pretty-print JSON result
```

If you installed the script locally, start it via

```sh
node lib/cli.js ...
```

## Development Setup

Install

- Java
- Node.js
- VS Code
- [ANTLR4 grammar syntax support](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4&ssr=false#overview) (workspace recommendation)

## TOOD

- [ ] migrate to ANTLR 4.9.x and switch from CommonJS modules to ES modules
- [ ] adapt all dependents in this monorepo

## Done

- [x] create grammar
- [x] create listener that produces CSDL
- [x] create CLI
- [x] use test files from ../rapid-cli/rapid.rdm.transformation.tests/data
- [x] inheritance
- [x] annotations
- [x] flags enumerations
- [x] create error listener for syntactically incorrect "files"
- [x] log errors from CLI
- [x] type definitions
- [x] doc comments

## TODO

- [ ] Model validation
- [ ] Option `-a` for compiling all files in a folder?
- [ ] Option `-r` for recursive compilation?
- [ ] Update to ANTLR 4.9.x
