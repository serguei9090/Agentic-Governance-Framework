# Coding Standards

## Naming Conventions
-   **Components:** `PascalCase` (e.g., `SubmitButton.tsx`)
-   **Functions:** `camelCase` (e.g., `getUserProfile()`)
-   **Variables:** `camelCase` (e.g., `isActive`)
-   **Constants:** `UPPER_SNAKE_CASE` (e.g., `MAX_RETRIES`)
-   **Interfaces/Types:** `PascalCase` (e.g., `UserInterface`)

## Comments & Documentation
-   **JSDoc:** Mandatory for all exported functions and interfaces.
-   **Inline:** Use sparingly. If you need to explain *what* the code does, refactor it. Explain *why* if complex.

## File Structure
-   **Co-location:** Keep related files together.
    ```
    /Button
      ├── Button.tsx
      ├── Button.test.tsx
      ├── Button.stories.tsx
      └── index.ts
    ```
