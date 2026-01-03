# **ProDoc: The Living Knowledge Engine**

**Objective:** AI Agents lack long-term memory. This framework enforces a "Living Knowledge Graph" that allows Agents to understand the system without reading every file.

## **1. The Directory Structure**

The Agent MUST maintain the following structure in the project root:

```text
/ProDoc
  ├── /diagrams
  │    └── diagrams.md       (Mermaid.js Visuals)
  ├── /documentation
  │    └── use_cases.md      (Business Logic & Intent)
  └── /relations
       └── relations.md      (The Dependency Graph)
```

## **2. The "Staleness Protocol" (CRITICAL)**

**Rule:** Documentation is useless if it is lies.
**Agent Action:** Before starting any complex task, verify the "Freshness" of `relations.md`.

1.  **Check Timestamp:** Compare `relations.md` modification time vs the latest `git log`.
2.  **Trigger:** If > 50 files have changed since the last update, or if the user explicitly asks for a "Deep Refactor", you **MUST** regenerate the `relations.md` file FIRST.
3.  **Command:** `Refactor: Update Context Graph` (Internal thought process).

## **3. Implementation Details**

### **A. Relations Map (`relations.md`)**
This is a text-based Graph Database.

*   **Format:**
    ```markdown
    ## [Component Name]
    - **Type**: (Feature | Service | UI | DB)
    - **Depends On**: [List of Components it calls]
    - **Used By**: [List of Components that call it]
    - **Risk Level**: (High | Low)
    ```

### **B. Visuals (`diagrams.md`)**
*   **Tool:** Mermaid.js ONLY.
*   **Requirement:** Every major "Service" must have a corresponding `sequenceDiagram` showing its data flow.

### **C. Intent (`use_cases.md`)**
*   **Format:** User Stories.
*   **Example:** "As a Admin, I want to ban users so that the platform remains safe."
*   **Purpose:** The Agent reads this to understand *why* a function exists, preventing "Logic Drift" during refactoring.
