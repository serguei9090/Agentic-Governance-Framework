# Error Management

## User Facing
-   **Never** display raw error codes or stack traces to the user.
-   Use generic, friendly messages: "Something went wrong. Please try again."
-   UI should fail gracefully (e.g., Skeleton loaders -> Error State component).

## Internal Logging
-   **Development:** `console.error` is acceptable.
-   **Production:** Use a structured logger (e.g., Winston, Pino) sent to an observability platform.
-   **Context:** Log the *Action*, *User ID* (hashed), and *Error Message*.

## Sanitization
-   **CRITICAL:** NEVER log:
    -   Passwords
    -   API Keys
    -   Credit Card Numbers
    -   PII (Email, Phone, Address)
