module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testRegex: './*.unit.test.js$',  // Updated to match only unit test files
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
