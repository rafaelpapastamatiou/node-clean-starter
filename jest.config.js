module.exports = {
  roots: ["<rootDir>/tests"],
  //setupFiles: ["<rootDir>/tests/setup-tests.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "node",
  // preset: '@shelf/jest-mongodb',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleNameMapper: {
    "@tests/(.*)": "<rootDir>/tests/$1",
    "@application/(.*)": ["<rootDir>/src/application/$1"],
    "@infra/(.*)": ["<rootDir>/src/infra/$1"],
    "@domain/(.*)": ["<rootDir>/src/domain/$1"],
  },
};
