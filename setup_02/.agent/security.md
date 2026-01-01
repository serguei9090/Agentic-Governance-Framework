# Security Protocols (OWASP)

## 1. Input Validation
-   Trust **NO ONE**.
-   Validate all user inputs using schemas (Zod/Yup) at the API boundary and UI forms.

## 2. Output Encoding
-   Prevent XSS (Cross-Site Scripting).
-   React handles this by default, but be careful with `dangerouslySetInnerHTML`.

## 3. Data Protection
-   **Storage:** Do not store sensitive data in LocalStorage. Use Secure Cookies (HttpOnly).
-   **Transport:** HTTPS only.

## 4. Dependencies
-   Regularly run `npm audit`.
-   Avoid abandoned packages.
