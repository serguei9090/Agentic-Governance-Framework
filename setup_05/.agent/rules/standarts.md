# Coding Standards

**Purpose:** Granular code style and hygiene.

## Naming Conventions
*   **Files/Classes:** PascalCase (e.g., `UserProfile.tsx`, `LogParser.py`).
*   **Functions/Variables:** camelCase (e.g., `fetchUserData`, `isLoggedIn`).
*   **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`).

## Code Hygiene
*   **Comments:** Use JSDoc/Docstrings for complex logic. Prefer self-documenting code.
*   **Structure:** Co-locate related files (Component + Test + Story).
*   **Imports:** Use absolute imports where possible (e.g., `@ui/tokens`).
