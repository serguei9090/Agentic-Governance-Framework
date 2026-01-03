# **Relations Map (LogVibe Analyzer)**

**Purpose:** Defines the logical relationships between Features (React UI) and Services (FastAPI/Python).
**Integration:** This file is the "Truth Source" for `DiagramFramework.md`.

## **Feature <-> Service Mapping**

| Feature (UI) | Dependent Services (Core) | Data Entities |
| :--- | :--- | :--- |
| **LogIngest** | `IngestService`, `DrainMiner` | `LogFile`, `LogEntry` |
| **LogViewer** | `QueryService` | `LogStream` |
| **ContextSwitch** | `RAGService` | `VectorEmbedding` |
| **ChatAssistant** | `LLMService`, `FeedbackService` | `ChatMessage`, `Prompt` |

## **Service Dependency Matrix**

*   **IngestService** depends on: `DrainMiner` (for clustering), `Database`
*   **RAGService** depends on: `ChromaDB` (Vector Store), `OpenAI`
*   **LLMService** depends on: `OpenAI`, `RAGService`

> **Note:** Agents MUST update this file when creating new components to ensure the architectural diagram remains accurate.
