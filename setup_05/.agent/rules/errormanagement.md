# Error Management

**Purpose:** Handling failures gracefully.

## User Facing
*   **UI:** Show friendly Toasts/Snackbars. Never show raw stack traces or "500 Server Error" text.
*   **Feedback:** Always provide a way to retry or contact support.

## Internal Logging
*   **Tool:** Structured Logging (JSON format).
*   **Console:** Use `console.error` in dev, but transport to log service in prod.
*   **Sanitization:** NEVER log passwords, API keys, or PII.
