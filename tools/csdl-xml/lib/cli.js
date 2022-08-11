#!/usr/bin/env node
"use strict";

//TODO: glob for source file patterns

const { serializeToXml } = require("./xmlSerializer");
const minimist = require("minimist");
const fs = require("fs");

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
  console.log(`Usage: csdl2xml <options> <source files>
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

  try {
    const csdl = fs.readFileSync(source, "utf-8");
    const json = JSON.parse(csdl);
    const target = source.substring(0, source.lastIndexOf(".")) + ".xml";
    console.log(target);

    const xml = serializeToXml(json);

    fs.writeFileSync(target, xml);
  } catch (e) {
    console.error(e);
    return;
  }
}
