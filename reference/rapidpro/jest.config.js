/* eslint-disable */
const baseConfig = require("../jest.config");
const packageName = require("./package.json").name;

module.exports = {
  ...baseConfig,
  rootDir: '..',
  preset: 'ts-jest',
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "jsx",
    "tsx",
    "node"
  ],
  roots: [
    `<rootDir>/${packageName}`,
  ],
  collectCoverageFrom: [
    `<rootDir>/${packageName}/src/**/*`,
  ],
  testRegex: '(/tests/.*)\\.(tsx?)$',
  testURL: 'http://localhost/',
  moduleDirectories: [
      'node_modules',
  ],
  modulePaths: [
      `<rootDir>/${packageName}/src/`,
  ],
  projects: [`<rootDir>/${packageName}/jest.config.js`],
  name: packageName,
  displayName: packageName,
};
