export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  coverageProvider: 'v8',
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transform-stub',
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
}
