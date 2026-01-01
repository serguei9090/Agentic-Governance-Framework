# Database & Persistence Rules

## 1. Vector Database (ChromaDB)
-   **Local Mode:** Persisted to `./chroma_storage`.
-   **Usage:** Stores log templates and AI context embeddings.
-   **Interface:** `apps/api` communicates with ChromaDB via LangChain or direct client.

## 2. File Persistence (Drain3)
-   **State File:** `drain3_state.bin`.
-   **Rule:** Must be loaded on startup and saved periodically/on-exit to maintain cluster memory.

## 3. General
-   **No SQL DB:** MVP uses local persistence. Do not introduce PostgreSQL/MySQL unless specified.
