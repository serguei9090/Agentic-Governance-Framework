/**
 * Jest Configuration for Monorepo
 */
module.exports = {
    projects: [
        '<rootDir>/apps/web',
        '<rootDir>/packages/shared',
        '<rootDir>/packages/ui',
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    // Note: apps/api (Python) uses Pytest, not Jest.
};
