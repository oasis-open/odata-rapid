# RSDL parser based on ANTLR grammar

## TODO

- [x] create grammar
- [x] create listener that produces CSDL
- [x] create CLI
- [ ] inheritance
- [ ] annotations
- [ ] use test files from ..\rapid-cli\rapid.rdm.transformation.tests\data
- [ ] create error listener for syntactically incorrect "files"
- [ ] log errors from CLI
- [ ] Option `-r` for recursive translation

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

## Development

Install

- Java
- VS Code
- [ANTLR4 grammar syntax support](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4&ssr=false#overview) (workspace recommendation)
