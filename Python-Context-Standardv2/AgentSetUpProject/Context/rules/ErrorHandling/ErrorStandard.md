# Global Error Handling Standard (Python v2)

## 1. Core Principles (Invariants)
*   **Global Capture:** NEVER use bare `try/catch` for control flow unless handling specific IO errors.
*   **Structured Errors:** All API errors must return a standard schema (Detail/Status).
*   **Sanitization:** NEVER return raw stack traces to the client in Production.
*   **Status Truth:** `500` = Server Bug. `4xx` = Client Mistake.

## 2. Workflow (Catch & Map)
1.  **Raise:** Logic detects issue -> Raise `AppError` (Custom Exception).
2.  **Bubble:** Exception goes up to the Main App.
3.  **Catch (Global):** `app.add_exception_handler` catches the exception.
4.  **Map:** 
    *   `AppError` -> Return operational status (`400`, `404`).
    *   `Exception` -> Log Stack Trace -> Return `500` Generic.

## 3. Directory & Naming
*   **Definition:** `app/state/errors.py` (Define Custom Exceptions).
*   **Middleware:** Defined in `rx.App` initialization.

## 4. Forbidden Patterns (Strict)
1.  **Swallowing:** `except Exception: pass`. **STOP.** Log it or re-raise.
2.  **Magic 200:** Returning `200` with `{"error": "Failed"}`. This breaks observability.
3.  **Leaky Logs:** Logging PII (Passwords) inside the exception log.

## 5. Golden Example (The AppError)
```python
# app/state/errors.py
class AppError(Exception):
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code

# app/reflex_app.py
def handle_app_error(request, exc: AppError):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message, "status": "error"}
    )

app = rx.App()
app.api.add_exception_handler(AppError, handle_app_error)
```
