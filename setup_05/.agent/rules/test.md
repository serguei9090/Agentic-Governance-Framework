# Quality Assurance (The Testing Mandate)

**Purpose:** The Testing & Linting Mandate.

## Unit Tests
*   **Tool:** Jest (Frontend/Core), Pytest (Backend).
*   **Requirement:** Every component/function MUST have a corresponding test file.
*   **Pattern:** `Component.test.tsx` or `test_module.py`.

## Linting & Checks
*   **Pre-commit:** Run `npm run lint` and `npm run type-check`.
*   **backend:** Run `flake8` or `ruff`.

## Coverage
*   **Threshold:** Minimum **80%** branch coverage is mandatory.
*   **Reports:** Generate in `./reports/coverage/`.
