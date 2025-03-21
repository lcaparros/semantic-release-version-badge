export default {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  globals: {
    jest: true
  },
  injectGlobals: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coveragePathIgnorePatterns: ['/node_modules/']
}
