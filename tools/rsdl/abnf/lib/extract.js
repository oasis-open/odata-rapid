#!/usr/bin/env node
"use strict";

const fs = require("fs");

const rsdlDoc = "../../../docs/rsdl/rapid-rsdl-abnf.md";
const abnfFile = "./rsdl.abnf";

const markdown = fs.readFileSync(rsdlDoc, "utf8").split(/\r?\n/);

const abnf = [
  ";----------------------------",
  "; ABNF for RSDL",
  ";----------------------------",
];
let inCodeBlock = false;

for (const line of markdown) {
  if (line.startsWith("###"))
    abnf.push(
      "",
      "",
      ";----------------------------",
      `; ${line.substring(3)}`,
      ";----------------------------",
      ""
    );
  if (line.startsWith("```")) {
    inCodeBlock = !inCodeBlock;
    continue;
  }
  if (inCodeBlock) abnf.push(line);
}

abnf.push("");

fs.writeFileSync(abnfFile, abnf.join("\r\n"));
