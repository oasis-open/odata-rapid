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
    const outfile = "examples/jetsons.csdl.xml";
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(["-p", "examples/jetsons.csdl.json"], ".");
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("examples/jetsons.csdl.xml\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const xml = fs.readFileSync(outfile, "utf-8");
    expect(xml).to.contain({
      Version: "4.0",
      $EntityContainer: "Model.Service",
    });
    expect(csdl.Model.Service).to.deep.equal({
      $Kind: "EntityContainer",
      competitors: {
        $Collection: true,
        $Type: "Model.company",
      },
      company: { $Type: "Model.company" },
    });
  });

  it("Translate file with includes", async () => {
    const outfile = "test/resources/main.csdl.json";
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(["resources/main.rsdl"], "test");
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("resources/main.csdl.json\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const csdl = JSON.parse(fs.readFileSync(outfile, "utf-8"));
    expect(csdl).to.deep.equal({
      $Version: "4.0",
      $Reference: {
        "foo-bar.rsdl": {
          $Include: [{ $Namespace: "foo.bar", $Alias: "foobar" }],
        },
        "other/baz.rsdl": {
          $Include: [{ $Namespace: "dot.dot.baz", $Alias: "hwga" }],
        },
      },
      Model: {},
    });
  });
});

describe("CLI - error cases", () => {
  it("Invalid option", async () => {
    const result = await cmd(["-x"]);
    expect(result.code).to.equal(0);
    expect(result.stdout).to.contain("Usage: rsdl2csdl");
  });

  it("Non-existing file", async () => {
    const result = await cmd(["no-such.rsdl"]);
    expect(result.code).to.equal(0);
    expect(result.stderr).to.contain("Source file not found: no-such.rsdl");
  });

  it("File with syntax errors", async () => {
    const outfile = "examples/kaputt.csdl.json";
    if (fs.existsSync(outfile)) fs.unlinkSync(outfile);
    const result = await cmd(["-p", "examples/kaputt.rsdl"], ".");
    expect(result.code).to.equal(0);
    expect(result.stdout).to.equal("\nexamples/kaputt.csdl.json\n");
    expect(fs.existsSync(outfile)).to.equal(true);
    const csdl = JSON.parse(fs.readFileSync(outfile, "utf-8"));
    expect(csdl).to.deep.equal({
      $Version: "4.0",
      Model: { kaputt: { $Kind: "ComplexType", $OpenType: true } },
    });
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
