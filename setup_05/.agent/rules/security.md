# Security Protocols

**Purpose:** OWASP Top 10 mitigation.

## Input Validation
*   **Rule:** Validate EVERYTHING. Trust nothing.
*   **Tools:** Zod (TypeScript), Pydantic (Python).

## XSS Prevention
*   **Rule:** Escape all HTML outputs. React does this by default, but be careful with `dangerouslySetInnerHTML`.

## Authentication
*   **Secrets:** Never store secrets in client-side code. Use `.env` variables and backend proxies.
