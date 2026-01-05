# **Enterprise Database Standards**

**Objective:** Ensure reliability, performance, and data integrity in the Persistence Layer.

---

## **1. Connection Management**
*   **Pooling:** NEVER open a new connection per request. Use a singleton Connection Pool.
*   **Timeouts:** All queries must have a strict timeout (e.g., 5000ms).
*   **Environment:** use `DATABASE_URL` from `.env`. NEVER hardcode credentials.

## **2. ORM Standards (Prisma/TypeORM)**
*   **Naming:** Tables are `PascalCase` (Model) or `snake_case` (DB) depending on the DB engine standard. Consistency is key.
*   **N+1 Problem:** ALWAYS use `include` (Prisma) or `JOIN` (SQL) instead of iterating queries in a loop.
*   **Validations:** DB constraints (`NOT NULL`, `UNIQUE`) are the last line of defense. Use them.

## **3. Migration Protocol**
*   **Production:** NEVER use `migrate dev` in Prod. Use `migrate deploy`.
*   **Version Control:** `schema.prisma` and migration folders MUST be committed.
*   **Destructive Changes:** Dropping columns/tables requires a manual backup verification (See `schema-migration` workflow).

## **4. Indexing Strategy**
*   **Foreign Keys:** ALways index Foreign Keys.
*   **Search:** Index fields used in `WHERE` clauses.
*   **Unique:** `email`, `username`, `uuid` must have unique indexes.

## **5. Documentation (ProDoc Integration)**
*   **Mandate:** You MUST maintain `ProDoc/relations/database_schema.md`.
*   **Content:** This file must contain the Mermaid JS ER Diagram + Table List.
*   **Trigger:** Update this file whenever `schema.prisma` changes.
