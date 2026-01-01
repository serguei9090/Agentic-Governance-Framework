# Database Schema

**Purpose:** Live markdown representation of the DB schema.

## Vector Store (ChromaDB)
*   **Collection:** `log_templates`
    *   `id`: UUID
    *   `embedding`: Vector[1536]
    *   `metadata`: { template_text, cluster_id, last_seen }

## Relational (Future)
*   *TBD*
