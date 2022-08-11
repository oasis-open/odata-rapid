const expect = require("chai").expect;
const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");

describe("CLI", () => {
  it("Help", async () => {
    const result = await cmd(["-h"]);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Usage: csdl2xml");
  });

  it("Translate one file", async () => {
    const outfile = "test/resources/jetsons-enhanced.csdl.xml";
    const basefile = "test/resources/jetsons-enhanced.csdl.base.xml";
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(
      ["-p", "resources/jetsons-enhanced.csdl.json"],
      "test"
    );
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("resources/jetsons-enhanced.csdl.xml\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const basexml = fs.readFileSync(basefile, "utf-8");
    const xml = fs.readFileSync(outfile, "utf-8");
    expect(xml).to.equal(basexml);
  });

  it("Translate file with includes", async () => {
    const outfile = "test/resources/main.csdl.xml";
    const basefile = "test/resources/main.csdl.base.xml";
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(["-p", "resources/main.csdl.json"], "test");
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("resources/main.csdl.xml\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const basexml = fs.readFileSync(basefile, "utf-8");
    const xml = fs.readFileSync(outfile, "utf-8");
    expect(xml).to.equal(basexml);
  });
});

describe("CLI - error cases", () => {
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
    const result = await cmd(["-p", "resources/kaputt.csdl.json"], "test");
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Unexpected Schema Element");
  });
});

function cmd(args, cwd) {
  return new Promise((resolve) => {
    exec(
      `node ${path.resolve("./lib/cli")} ${args.join(" ")}`,
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
