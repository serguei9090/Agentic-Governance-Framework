module.exports = {
    projects: [
        '<rootDir>/apps/web',
        '<rootDir>/packages/ui',
        '<rootDir>/packages/core',
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
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/packages/core/src/$1',
        '^@ui/(.*)$': '<rootDir>/packages/ui/src/$1',
    },
};
