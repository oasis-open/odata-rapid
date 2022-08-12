const expect = require("chai").expect;
const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");

describe("csdl-xml CLI", () => {
  it("Help", async () => {
    const result = await cmd(["-h"]);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Usage: csdl2xml");
  });

  it("Translate one file specified with full path", async () => {
    const outfile = `${__dirname}/resources/jetsons-enhanced.csdl.xml`;
    const basefile = `${__dirname}/resources/jetsons-enhanced.csdl.base.xml`;
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(
      ["-p", `${__dirname}/resources/jetsons-enhanced.csdl.json`],
      `${__dirname}/..`
    );
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal(
      `${__dirname}/resources/jetsons-enhanced.csdl.xml\n`
    );
    expect(fs.existsSync(outfile)).to.equal(true);
    const basexml = fs.readFileSync(basefile, "utf-8");
    const xml = fs.readFileSync(outfile, "utf-8");
    expect(xml).to.equal(basexml);
  });

  it("Translate file (specified with relative path) with includes", async () => {
    const outfile = `${__dirname}/resources/main.csdl.xml`;
    const basefile = `${__dirname}/resources/main.csdl.base.xml`;
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(["-p", "resources/main.csdl.json"], __dirname);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("resources/main.csdl.xml\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const basexml = fs.readFileSync(basefile, "utf-8");
    const xml = fs.readFileSync(outfile, "utf-8");
    expect(xml).to.equal(basexml);
  });
});

describe("csdl-xml CLI - error cases", () => {
  it("Invalid option", async () => {
    const result = await cmd(["-x"]);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Usage: csdl2xml");
  });

  it("Non-existing file", async () => {
    const result = await cmd(["no-such.csdl.json"]);
    expect(result.code).to.equal(0);
    expect(result.stderr).to.contain(
      "Source file not found: no-such.csdl.json"
    );
  });

  it("File with syntax errors", async () => {
    const result = await cmd(["-p", "resources/kaputt.csdl.json"], __dirname);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Unexpected Schema Element");
  });
});

function cmd(args, cwd) {
  return new Promise((resolve) => {
    exec(
      `node ${path.resolve(`${__dirname}/../lib/cli`)} ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      }
    );
  });
}
