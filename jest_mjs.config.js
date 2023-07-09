/** @type {import('jest').Config} */

const config = {
  testEnvironment: "node",
  testRegex: ".*_test\\.mjs$",
  transform: {
    "\\.mjs$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "json", "jsx", "node", "mjs"]
};

module.exports = config;
