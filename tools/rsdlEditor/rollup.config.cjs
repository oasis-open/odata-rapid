const {nodeResolve} = require("@rollup/plugin-node-resolve");
const typescript = require('@rollup/plugin-typescript');

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "umd",
    name: "rsdlEditor"
  },
  plugins: [typescript(), nodeResolve()]
}

module.exports = config;