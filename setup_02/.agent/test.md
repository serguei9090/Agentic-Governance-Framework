# Testing & Quality Standards

## The Mandate
**"No Code Left Untested"**

## 1. Unit Testing
-   **Framework:** Jest / Vitest
-   **Requirement:** 
    -   Every Component must have a snapshot test + interaction test.
    -   Every Service function must have edge case coverage.
    -   **Coverage Threshold:** > 80%

## 2. Linting
-   **Tools:** ESLint, Prettier, TypeScript Compiler
-   **Rule:** Zero warnings allowed in CI.
-   **Command:** `npm run lint && npm run type-check`

## 3. Reporting
-   All test artifacts must be saved to `./artifacts/reports/`
-   **Coverage:** `./artifacts/coverage/`
-   **E2E:** `./artifacts/reports/playwright-report`
