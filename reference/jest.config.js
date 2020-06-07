module.exports = {
  verbose: true,
  projects: ["<rootDir>/*/jest.config.js"],
  collectCoverageFrom: [
    "<rootDir>/*/src/**/*.ts"
  ],
  moduleDirectories: ["node_modules"],
  preset: "ts-jest"
};
