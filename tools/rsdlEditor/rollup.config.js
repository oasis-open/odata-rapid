import {nodeResolve} from "@rollup/plugin-node-resolve"
import typescript from '@rollup/plugin-typescript';

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

export default config;