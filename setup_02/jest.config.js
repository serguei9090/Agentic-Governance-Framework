/**
 * Jest Configuration
 * Unit Test Runner Configuration
 */
module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/packages/core/src/$1',
        '^@ui/(.*)$': '<rootDir>/packages/ui/src/$1',
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
};
