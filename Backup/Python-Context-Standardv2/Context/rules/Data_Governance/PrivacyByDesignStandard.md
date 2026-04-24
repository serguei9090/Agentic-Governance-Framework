# Data Governance & Privacy Standard (Python v2)

## 1. Core Principles (Invariants)
*   **Schema First:** All data entering or exiting the system must pass through a `Pydantic` Model.
*   **Privacy by Default:** PII (Personally Identifiable Information) must be encrypted at rest if sensitive.
*   **Least Privilege:** Database users should only have permissions they strictly need.

## 2. Workflow (Data Lifecycle)
1.  **Input:** User data -> Pydantic Validation (`app/state/models.py`).
2.  **Process:** Business Logic checks permissions.
3.  **Storage:** SQLModel writes to SQLite/Postgres.
4.  **Output:** Pydantic Model (`response_model`) sanitizes return data (strips passwords).

## 3. Toolchain (Strict)
*   **Validation:** `Pydantic` (Standard).
*   **ORM:** `SQLModel` (Reflex Standard).

## 4. Forbidden Patterns (Strict)
1.  **Blind Dicts:** Passing raw `dict` objects around without schema validation.
2.  **Leakage:** Returning a complete User DB Object (with hashed_password) to the Frontend. Always use a `UserRead` model.
3.  **Logging PII:** Logging entire objects to stdout.

## 5. Golden Example (Model Segregation)
```python
from sqlmodel import SQLModel, Field

# 1. Base (Shared)
class UserBase(SQLModel):
    email: str
    full_name: str

# 2. Database (Internal, has secrets)
class User(UserBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    hashed_password: str

# 3. Read (Public, sanitized)
class UserRead(UserBase):
    id: int
```
