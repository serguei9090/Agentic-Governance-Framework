/**
 * Directive 3: Generate jest.config.js (Unit Testing)
 * Unit Test Runner Configuration
 */
module.exports = {
    // Enable coverage collection
    collectCoverage: true,

    // Set coverage threshold to 80% global
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // Map module aliases
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/packages/core/src/$1',
        '^@ui/(.*)$': '<rootDir>/packages/ui/src/$1',
    },

    // Test environment
    testEnvironment: 'jsdom',

    // Transform settings (assuming TS use)
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },

    // Match files ending in .test.ts/tsx or .spec.ts/tsx
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
};
