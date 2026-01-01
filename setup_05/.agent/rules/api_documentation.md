# API Documentation

**Purpose:** Standardized API contracts.

## Standard
*   **Spec:** OpenAPI / Swagger 3.0.
*   **Location:** `/docs` (FastAPI auto-generated).

## Requirements
*   All endpoints must have:
    1.  Summary & Description.
    2.  Request Body Schema (Pydantic).
    3.  Response Schema (Pydantic).
    4.  Error Responses (400, 401, 500).
