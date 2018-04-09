const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@vue/web-component-wrapper)'
  ],
  setupTestFrameworkScriptFile: '<rootDir>test/unit/jestSetup.js',
};
