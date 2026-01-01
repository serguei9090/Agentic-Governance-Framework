# API Documentation Standards

## Framework: FastAPI
FastAPI handles OpenAPI generation automatically.

## Requirements
1.  **Pydantic Models:** All Request/Response bodies must be defined as Pydantic models in `apps/api/models.py` or shared in `packages/shared`.
2.  **Docstrings:** Every endpoint must have a docstring explaining params and response.
3.  **Tags:** Organize endpoints by feature (e.g., `["Ingest"]`, `["Analysis"]`).

## Spec Location
-   **Local:** `http://localhost:8000/docs`
-   **File:** `openapi.json` (auto-generated)
