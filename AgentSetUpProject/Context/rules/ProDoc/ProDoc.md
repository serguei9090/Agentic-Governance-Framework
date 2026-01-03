# **ProDoc: The Living Knowledge Engine**

**Objective:** AI Agents lack long-term memory. This framework enforces a "Living Knowledge Graph" that allows Agents to understand the system without reading every file.

## **1. The Directory Structure**

The Agent MUST maintain the following structure in the project root:

```text
/ProDoc
  ├── tech-stack.md          (The Official Toolbelt)
  ├── /diagrams
  │    └── diagrams.md       (Mermaid.js Visuals)
  ├── /documentation
  │    ├── product.md        (Vision & Features)
  │    ├── product-guidelines.md (Design & Interaction)
  │    └── use_cases.md      (Business Logic & Intent)
  └── /relations
       ├── relations.md      (The Dependency Graph)
       └── database_schema.md (Live DB Structure - Optional)
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

### **B. Tech Stack (`tech-stack.md`)**
*   **Purpose:** The Single Source of Truth for allowed libraries.
*   **Format:**
    ```markdown
    # Technology Stack
    ## Core
    - **Language:** TypeScript 5.x (Decision: User Mandate)
    - **State:** Zustand (Decision: Framework Default)
    ```
*   **Rule:** Agents MUST NOT install new packages without adding them here first.

### **C. Visuals (`diagrams.md`)**
*   **Tool:** Mermaid.js ONLY.
*   **Requirement:** Every major "Service" must have a corresponding `sequenceDiagram` showing its data flow.

### **D. Database Schema (`database_schema.md`)**
*   **Condition:** Only if a Database exists.
*   **Content:**
    *   **ER Diagram:** Mermaid `erDiagram`.
    *   **Spec:** Table definitions, Column types, Indexes (copied from `schema.prisma` or SQL).
    *   **Purpose:** Allow Agent to write SQL/Queries without guessing table names.

## **4. The Product Trinity (Documentation)**
The `/documentation` folder MUST contain these three files, generated from the User's Project Brief.

### **A. `product.md` (The Vision)**
*   **Content:** Target Audience, Value Props, MVP Feature List.
*   **Rule:** This is the scope boundary. If a feature isn't here, ask before building.

### **B. `product-guidelines.md` (The Vibe)**
*   **Content:** Visual Identity (Material/Apple), Motion principles, Accessibility goals.
*   **References:** Must point to `.agent/rules/` for hard technical details (Colors/Fonts).

### **C. `use_cases.md` (The Intent)**
*   **Format:** User Stories.
*   **Example:** "As a Admin, I want to ban users so that the platform remains safe."
*   **Purpose:** The Agent reads this to understand *why* a function exists, preventing "Logic Drift" during refactoring.
