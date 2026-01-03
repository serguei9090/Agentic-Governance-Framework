# Product Specification: LogVibe Analyzer (Hydrated)

**Version:** 1.0.0
**Source:** Processed from `LogVibeAnalyzerProject.md`

## 1. Executive Summary
LogVibe Analyzer is a hybrid log intelligence tool designed to solve "log fatigue" and minimize LLM token costs. It strictly separates concerns between a React Frontend (High-performance rendering) and a Python Backend (Drain3 Clustering + RAG).

## 2. Feature List
*   **Ingestion:** Stream raw logs via regex parsing.
*   **Clustering (Drain3):** Mine templates from messages to group repetitive logs.
*   **Context Switch:** Toggle between cheap zero-shot analysis and expensive RAG-powered analysis.
*   **Vector Memory:** Retrieval-Augmented Generation using ChromaDB to recall past incidents.
*   **Virtualization:** Render 100k+ lines efficiently using `react-virtuoso`.

## 3. Data Flow
1.  **Ingest:** User -> ReactUI -> PyAPI -> Regex Parse -> Drain Miner.
2.  **Analysis:** User Query -> PyAPI -> VectorDB (Search) -> LLM -> ReactUI.
3.  **Feedback:** User Rating -> PyAPI -> VectorDB (Save Context).

## 4. User Persona
*   **Target User:** Developer / DevOps Engineer.
*   **Goal:** Minimize time spent reading raw logs; minimize token costs for AI analysis.
