# **Project Specification: LogVibe Analyzer**

Version: 1.1.0  
Type: Hybrid Desktop/Web Application (Monorepo)

## **1\. The North Star (Executive Summary)**

**LogVibe Analyzer** is a hybrid log intelligence tool designed to solve "log fatigue" and minimize LLM token costs.

It strictly separates concerns:

1. **Frontend (React):** Handles high-performance rendering of massive log files (100k+ lines) using virtualization.  
2. **Backend (Python):** Handles heavy computation, specifically the **Drain3** algorithm for log clustering and **RAG (Retrieval-Augmented Generation)** for context-aware AI analysis.

**Core Value Proposition:** Users can view logs in a familiar list format, but the backend "mines" these logs into templates. The user can interact with an AI Assistant using a **"Context Switch"**:

* **Switch OFF:** Cheap, zero-shot analysis of a single line.  
* **Switch ON:** Expensive, RAG-powered analysis that retrieves historical context and indexes new findings into a Vector DB.

## **2\. Tech Stack & Constraints**

### **Monorepo Structure (Turborepo)**

* /apps/web: React Frontend  
* /apps/api: Python Backend  
* /packages/shared: Shared types/configs

### **Frontend (User Interface)**

* **Framework:** React (Vite)  
* **Language:** TypeScript  
* **Styling:** TailwindCSS  
* **Log Component:** react-log-viewer (or react-virtuoso custom implementation for control).  
* **State Management:** Zustand (preferred for simple global state).

### **Backend (Logic & Intelligence)**

* **Framework:** FastAPI (Python 3.10+)  
* **Log Mining:** drain3 (Clustering).  
* **Vector Database:** ChromaDB (Local persistence) or FAISS.  
* **LLM Orchestration:** LangChain.  
* **AI Provider:** OpenAI (gpt-4o-mini for chat, text-embedding-3-small for RAG).

## **3\. Architecture & Data Flow**

### **3.1 System Context (Mermaid)**

sequenceDiagram  
    autonumber  
    participant User  
    participant ReactUI as React Frontend  
    participant PyAPI as FastAPI Backend  
    participant Drain as Drain3 Miner  
    participant VectorDB as ChromaDB (RAG)

    Note over User, ReactUI: Phase 1: Ingestion  
    User-\>\>ReactUI: Uploads access.log  
    ReactUI-\>\>PyAPI: POST /ingest (File Stream)  
    PyAPI-\>\>PyAPI: Regex Parse (Timestamp/Severity)  
    PyAPI-\>\>Drain: Mine Templates from Message  
    Drain--\>\>PyAPI: Returns { ClusterID, Template }  
    PyAPI--\>\>ReactUI: Returns Structured Log JSON

    Note over User, ReactUI: Phase 2: Analysis & AI  
    User-\>\>ReactUI: Selects specific log line  
    User-\>\>ReactUI: Toggles "Use Knowledge Base" (Switch \= ON)  
    ReactUI-\>\>PyAPI: POST /chat { log\_line, use\_rag: true }  
      
    rect rgb(20, 20, 20\)  
        Note right of PyAPI: Backend Logic  
        PyAPI-\>\>Drain: Identify Template ID  
        PyAPI-\>\>VectorDB: Query similar past templates  
        VectorDB--\>\>PyAPI: Return relevant context  
        PyAPI-\>\>PyAPI: Construct Prompt (Log \+ Context)  
    end  
      
    PyAPI--\>\>ReactUI: Return AI Response  
    User-\>\>ReactUI: Rates answer "Helpful" / "Save to DB"  
    ReactUI-\>\>PyAPI: POST /feedback  
    PyAPI-\>\>VectorDB: Embed & Save Template for future

## **4\. Core Feature Specifications**

### **Feature A: The "Drain" Pipeline (Backend)**

* **Parsing:** Use a generic Regex to extract Timestamp and Level (INFO/ERROR) before passing the remaining "Message" content to Drain3.  
  * *Fallback:* If regex fails, treat whole line as message.  
* **Drain3 Config:** Use default drain3.ini settings. Persist the Drain state to disk (drain3\_state.bin) so clusters are remembered across restarts.  
* **Output:** A "Cluster" object containing the invariant template\_mined string.

### **Feature B: The "Vibe" Log Viewer (Frontend)**

* **Visuals:** Dark mode terminal aesthetic.  
* **Virtualization:** Must render only visible rows using react-virtuoso or similar.  
* **Filtering:** Users can filter by Cluster ID (e.g., "Show me all logs that match this specific error pattern," effectively filtering 10,000 logs down to the 1 relevant pattern).

### **Feature C: The Token Economizer (AI Logic)**

* **The Switch:** A UI Toggle \[ \] Add to Context.  
* **Logic (Switch OFF):**  
  * Prompt: "Explain this log line: {raw\_log}"  
  * Cost: \~50 tokens.  
* **Logic (Switch ON):**  
  * Step 1: Convert {raw\_log} to {template}.  
  * Step 2: Embed {template} using OpenAI Embeddings.  
  * Step 3: Retrieve nearest neighbors from ChromaDB.  
  * Prompt: "Context: {retrieved\_docs}. Target: {raw\_log}. Explain based on history."  
  * Cost: \~500-1000 tokens.

## **5\. API Interface (Data Models)**

The Frontend expects these exact shapes from the Python Backend.

### **Log Entry Model**

interface LogEntry {  
  id: string;             // UUID  
  timestamp: string;      // ISO 8601 or raw string  
  severity: "INFO" | "WARN" | "ERROR" | "DEBUG";  
  cluster\_id: number;     // From Drain3  
  template: string;       // "Connection refused from \<IP\>"  
  raw\_content: string;    // "Connection refused from 192.168.1.1"  
}

### **Analysis Request**

interface AnalysisPayload {  
  log\_entry\_id: string;  
  user\_query: string;     // "What does this mean?"  
  use\_rag\_memory: boolean; // The Cost/Quality Switch  
}

### **Analysis Response**

interface AnalysisResponse {  
  markdown\_answer: string;  
  used\_context\_docs: string\[\]; // Debug: Show user what similar logs were found  
  token\_usage: number;  
}

## **6\. Environment & Configuration**

The project requires a .env file in /apps/api.

\# apps/api/.env  
OPENAI\_API\_KEY="sk-..."  
CHROMA\_DB\_PATH="./chroma\_storage"  
DRAIN\_STATE\_FILE="./drain\_state.bin"

## **7\. Development Workflow**

1. **Start Backend:** cd apps/api && pip install \-r requirements.txt && uvicorn main:app \--reload  
2. **Start Frontend:** cd apps/web && npm install && npm run dev  
3. **Database:** ChromaDB runs locally; no Docker required for MVP.



