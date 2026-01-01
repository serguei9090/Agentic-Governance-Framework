# Relations & Dependencies

## System Architecture

```mermaid
sequenceDiagram
    participant Web as React App (apps/web)
    participant API as FastAPI (apps/api)
    participant Drain as Drain3 Miner
    participant Vector as ChromaDB

    Web->>API: POST /ingest
    API->>Drain: Mine Template
    API->>Web: JSON Logs

    Web->>API: POST /chat (RAG=True)
    API->>Vector: Query Context
    Vector->>API: Context Docs
    API->>API: LLM Inference
    API->>Web: AI Response
```

## Boundaries
1.  **Web:** Pure Consumer. No business logic regarding log parsing.
2.  **API:** The Brain. Owns Parsing, Mining, and AI.
3.  **Shared:** `packages/shared` defines the Interface (JSON contracts) between Web and API.
