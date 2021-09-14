module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatter: ['/node_modules', '/next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
