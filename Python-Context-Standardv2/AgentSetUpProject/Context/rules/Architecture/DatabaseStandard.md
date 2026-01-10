# **Enterprise Database Standards**

**Objective:** Ensure reliability, performance, and data integrity in the Persistence Layer.

---

## **1. Connection Management**
*   **Pooling:** NEVER open a new connection per request. Use a singleton Connection Pool.
*   **Timeouts:** All queries must have a strict timeout (e.g., 5000ms).
*   **Environment:** use `DATABASE_URL` from `.env`. NEVER hardcode credentials.

## **2. ORM Standards (SQLModel/SQLAlchemy)**
*   **Naming:** Tables are `snake_case`. Models are `PascalCase`.
*   **N+1 Problem:** ALWAYS use `joinedload` (SQLAlchemy) instead of iterating queries in a loop.
*   **Validations:** DB constraints (`NOT NULL`, `UNIQUE`) are the last line of defense. Use them.

## **3. Migration Protocol (Alembic)**
*   **Production:** NEVER use `alembic upgrade head` blindly in Prod without backup.
*   **Version Control:** `alembic/versions` MUST be committed.
*   **Destructive Changes:** Dropping columns/tables requires a manual backup verification.

## **4. Indexing Strategy**
*   **Foreign Keys:** ALways index Foreign Keys.
*   **Search:** Index fields used in `WHERE` clauses.
*   **Unique:** `email`, `username`, `uuid` must have unique indexes.

## **5. Documentation (ProDoc Integration)**
*   **Mandate:** You MUST maintain `ProDoc/documentation/relations.md` (or similar).
*   **Trigger:** Update this file whenever `models.py` changes.
