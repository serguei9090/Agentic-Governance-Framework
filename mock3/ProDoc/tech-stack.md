# Technology Stack: LogVibe Analyzer

## **1. Core Infrastructure**
*   **Monorepo Manager:** Turborepo (implied by directory structure) / npm workspaces.
*   **Containerization:** Docker (Local Development).

## **2. Frontend (apps/web)**
*   **Framework:** React 18+
*   **Build Tool:** Vite
*   **Language:** TypeScript 5.x
*   **Styling:** TailwindCSS 3.x
*   **Animation:** Framer Motion (for "Vibe" effects)
*   **State Management:** Zustand (Global State)
*   **Data Grid:** `react-virtuoso` (High-performance log rendering)
*   **API Client:** Axios or Fetch

## **3. Backend (apps/api)**
*   **Framework:** FastAPI (Python 3.10+)
*   **Server:** Uvicorn
*   **Log Processing:** Drain3 (Log Clustering & Templating)
*   **Vector Database:** ChromaDB (Local Persisted)
*   **AI Orchestration:** LangChain (RAG Flows)
*   **LLM Provider:** OpenAI API (`gpt-4o-mini`, `text-embedding-3-small`)

## **4. Quality Assurance**
*   **Unit Testing:** Vitest (Frontend), Pytest (Backend)
*   **E2E Testing:** Playwright
*   **Linting:** ESLint, Prettier, Ruff (Python)
