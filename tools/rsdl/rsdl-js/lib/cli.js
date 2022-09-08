#!/usr/bin/env node
"use strict";

//TODO: glob for source file patterns

import { parse } from "./parser.js";
import minimist from "minimist";
import fs from "fs";
import path from "path";

var unknown = false;

var argv = minimist(process.argv.slice(2), {
  boolean: ["h", "help", "p", "pretty"],
  alias: {
    h: "help",
    p: "pretty",
  },
  default: {
    pretty: false,
  },
  unknown: (arg) => {
    if (arg.substring(0, 1) == "-") {
      console.error("Unknown option: " + arg);
      unknown = true;
      return false;
    }
  },
});

if (unknown || argv._.length == 0 || argv.h) {
  console.log(`Usage: rsdl2csdl <options> <source files>
Options:
 -h, --help              show this info
 -p, --pretty            pretty-print JSON result`);
} else {
  for (var i = 0; i < argv._.length; i++) {
    convert(argv._[i]);
  }
}

function convert(source) {
  if (!fs.existsSync(source)) {
    console.error("Source file not found: " + source);
    return;
  }

  const rsdl = fs.readFileSync(source, "utf-8");

  try {
    const json = parse(rsdl, includeReader(source));

    //TODO: adapt for errors in included files
    if (json.$$errors) {
      json.$$errors.map((error) =>
        console.error(`${source}:${error.target} ${error.message}`)
      );
      console.log();

      delete json.$$errors;
    }

    const target = source.substring(0, source.lastIndexOf(".")) + ".csdl.json";
    console.log(target);

    //TODO: use Prettier for more compact JSON?
    fs.writeFileSync(target, JSON.stringify(json, null, argv.pretty ? 2 : 0));
  } catch (e) {
    console.error(e);
    return;
  }
}

function includeReader(source) {
  const { dir } = path.parse(source);
  //TODO: add caching?
  return (filename) => {
    const include = path.resolve(dir, filename);
    return fs.readFileSync(include, "utf-8");
  };
}
