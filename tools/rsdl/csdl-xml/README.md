# CSDL XML Serializer

CSDL has a native in-memory and serialized JSON representation. The CSDL XmlSerializer saves the in-memory JSON CSDL to XML.

## Installation

Clone or download this repository, go to the `csdl-xml` folder and type

```sh
npm install
```

To install globally type

```sh
npm install -g
```

## Usage

Assuming you installed the package globally and your JSON CSDL file is `MyModel.json`, then

```sh
csdl2xml myModel.json
```

will create `MyModel.xml` next to it.

Just type

```sh
csdl2xml -h
```

to get usage hints

```
Usage: csdl2xml <options> <source files>
Options:
 -h, --help              show this info
```

If you installed the script locally, start it via

```sh
node lib/cli.js ...
```

## Development Setup

Install

- Node.js
- VS Code
