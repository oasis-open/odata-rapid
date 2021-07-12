#!/usr/bin/env node
"use strict";

const { dir } = require("console");
const fs = require("fs");
const path = require("path");

const rsdlDoc = "../../../docs/rsdl/rapid-pro-rsdl-abnf.md";
const abnfFile = "./rsdl.abnf";

const markdown = fs.readFileSync(rsdlDoc, "utf8").split("\n");

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
      `; ${line.substr(3)}`,
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
