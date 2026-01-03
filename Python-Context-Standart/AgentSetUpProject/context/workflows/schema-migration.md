---
description: Manage Database Schema Migrations in Python
---

# Agentic Workflow: Schema Migration (Python)

1.  **Detect Changes:**
    *   **Reflex/SQLAlchemy:** Modify `rx.Model` classes.
    *   **Django:** Modify `models.py`.

2.  **Generate Migration:**
    *   **Alembic (Reflex):** `alembic revision --autogenerate -m "describe change"`
    *   **Django:** `python manage.py makemigrations`

3.  **Review SQL:**
    *   Inspect the generated script in `alembic/versions/` or `migrations/`.
    *   *Critical:* Ensure no destructive actions (DROP TABLE) unless intended.

4.  **Apply Migration (Dev):**
    *   **Alembic:** `alembic upgrade head`
    *   **Django:** `python manage.py migrate`

5.  **Verify:**
    *   Run integration tests that touch the DB.
