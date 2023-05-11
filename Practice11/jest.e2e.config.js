module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: './*.e2e.test.js$',  // Update the regex to match e2e tests
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
