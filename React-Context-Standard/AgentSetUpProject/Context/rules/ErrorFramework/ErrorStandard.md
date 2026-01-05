Global Centralized Error Handling Directive (AI Protocol)

Usage: This document serves as the "System Directive" or "Context" for AI Agents generating code.
Goal: Ensure resilience, observability, and security across React, Python, and Mobile platforms.

1. The Core Directives (Non-Negotiable)

Global Capture: NEVER use try/catch for control flow inside business logic. Allow exceptions to bubble up to the Global Interface.

The "500" Rule: ONLY return HTTP 500 if the server crashed due to a bug. If the user sent bad data, return 4xx.

Sanitization: NEVER return a stack trace or raw database error (e.g., SQL syntax error) to the client.

Standardization: ALWAYS use RFC 7807 JSON format for error responses.

2. Status Code Decision Tree

AI Agents must use this logic to determine the correct HTTP status code:

Is the JSON invalid? -> 400 Bad Request

Is the user logged out? -> 401 Unauthorized

Is the user logged in but forbidden? -> 403 Forbidden

Is the resource missing? -> 404 Not Found

Does the item already exist (Duplicate)? -> 409 Conflict

Did input validation fail (e.g., wrong email format)? -> 422 Unprocessable Entity

Did the code crash (NullPointer/KeyError)? -> 500 Internal Server Error

Is the external API/DB down? -> 503 Service Unavailable

3. Data Structure Standard: RFC 7807

Frontend/Mobile expects this EXACT format. Do not deviate.

{
  "type": "[https://api.app.com/probs/duplicate-email](https://api.app.com/probs/duplicate-email)",
  "title": "Email already registered",
  "status": 409,
  "detail": "The email 'user@example.com' is already in use.",
  "instance": "/register",
  "traceId": "a1b2-c3d4",
  "errors": {                 // OPTIONAL: Only for Validation (422)
    "email": ["Invalid format"],
    "password": ["Too short"]
  }
}


4. Python Backend Implementation (Strict)

A. The Custom Exception Hierarchy

AI Agents should generate this class structure to manage control flow without crashing.

class AppError(Exception):
    """Base class for all application errors."""
    def __init__(self, message, status_code=500, payload=None):
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.payload = payload

class ValidationError(AppError):
    """User sent bad data (422)."""
    def __init__(self, field_errors):
        super().__init__("Validation Failed", status_code=422, payload=field_errors)

class ConflictError(AppError):
    """Resource already exists (409)."""
    def __init__(self, message="Resource already exists"):
        super().__init__(message, status_code=409)

class NotFoundError(AppError):
    """Resource missing (404)."""
    def __init__(self, message="Resource not found"):
        super().__init__(message, status_code=404)


B. The Global Interceptor (Middleware)

This code must be placed at the entry point of the app (app.py / main.py).

from flask import jsonify
import logging
import uuid

logger = logging.getLogger("api")

def global_error_handler(err):
    """
    The Single Source of Truth for all errors.
    """
    # 1. Generate Trace ID for tracking
    trace_id = str(uuid.uuid4())

    # 2. Determine if it's a Known Error (Operational) or Unknown (Bug)
    if isinstance(err, AppError):
        # Operational: The user did something wrong (4xx)
        # Log at INFO level (don't wake up devs)
        logger.info(f"Operational Error: {err.message} (Trace: {trace_id})")
        response = {
            "title": err.message,
            "status": err.status_code,
            "detail": err.payload or err.message,
            "traceId": trace_id
        }
        return jsonify(response), err.status_code

    # 3. Handle Unknown Bugs (5xx)
    # CRITICAL: Log full stack trace for devs
    logger.error(f"SYSTEM CRASH: {str(err)} (Trace: {trace_id})", exc_info=True)

    # 4. Security Sanitization: NEVER show raw error to user
    response = {
        "title": "Internal Server Error",
        "status": 500,
        "detail": "An unexpected error occurred. Please contact support.",
        "traceId": trace_id # User gives this ID to support
    }
    return jsonify(response), 500


5. React/Mobile Implementation (Strict)

A. API Interceptor (Axios)

Agents must generate this to decouple UI components from HTTP logic.

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : 0;
    
    // CASE 1: Validation Error (422) - Pass back to form
    if (status === 422) {
      return Promise.reject(error); // Form library (Formik/React Hook Form) handles this
    }

    // CASE 2: Auth Error (401) - Redirect to Login
    if (status === 401) {
      window.location.href = '/login';
      return Promise.reject(error);
    }

    // CASE 3: Server Crash (500) or Network Error - Show Toast
    const message = status === 500 
      ? "Server Error. Please try again later." 
      : "Network Error. Check your connection.";
      
    toast.error(message);
    
    // Log traceId if available
    if (error.response?.data?.traceId) {
      console.error(`Support Trace ID: ${error.response.data.traceId}`);
    }

    return Promise.reject(error);
  }
);


6. Specialized Contexts (Security & Config)

A. Standalone/Mobile Local Logging (Security)

For apps running on user devices (React Native, Python Desktop), logs are vulnerable.

Rule: NEVER console.log sensitive data (Passwords, Keys) in production.

Rule: If storing logs to disk, ENCRYPT them.

# Python Secure Local Logging Example
from cryptography.fernet import Fernet
import logging

class EncryptedFileHandler(logging.FileHandler):
    def __init__(self, filename, key):
        self.cipher = Fernet(key)
        super().__init__(filename)

    def emit(self, record):
        # Encrypt log line before writing to disk
        msg = self.format(record).encode('utf-8')
        encrypted_msg = self.cipher.encrypt(msg)
        with open(self.baseFilename, 'ab') as f:
            f.write(encrypted_msg + b'\n')


B. Configuration

Mobile: Use Firebase Remote Config to toggle logging levels per user.

Backend: Use Environment Variables (LOG_LEVEL=DEBUG) to change verbosity without redeploying code.

7. Summary Checklist for AI Generation

When generating code, the AI must verify:

[ ] Are 4xx and 5xx errors treated differently?

[ ] Is PII (Personally Identifiable Information) stripped from logs?

[ ] Is the JSON response compliant with RFC 7807?

[ ] Is there a traceId linking the frontend error to the backend log?

[ ] Are local logs encrypted or obfuscated?