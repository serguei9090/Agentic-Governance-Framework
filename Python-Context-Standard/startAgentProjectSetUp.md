# **Agent Protocol: Project Initialization (Python)**

**Trigger:** User says "Start Project Setup" or "Initialize Agent Context".

**Prerequisite:** The `AgentSetUpProject` folder must be present in the workspace root.

---

## **Phase 1: Knowledge Ingestion**

1.  **Read the Master Protocol:**
    *   Read `AgentSetUpProject/agentContext.md` immediately.
    *   This file is the specific instruction set for *this* technology stack.

2.  **Read the Project Requirements:**
    *   Ask the user: "Please provide the Project Specification or Requirements file (e.g., `ReflexAnsibleProject.md`)."
    *   If provided, ingest it to understand the "Business Logic".

---

## **Phase 2: Execution (Context Injection)**

3.  **Execute the Directives:**
    *   **Step 1 (Context):** Follow instructions in `agentContext.md` to generate the `.agent/` folder.
        *   **CRITICAL:** Use `cp -r` (recursive copy) to transfer ALL **Rules** and **Workflows** (`context/rules` -> `.agent/rules`).
    *   **Step 2 (Body):** Follow instructions in `agentProject_setup.md` to scaffold the project structure and initialize the environment.
    *   **Step 3 (Hydration):** Extract requirements into `ProDoc/documentation/product.md`.
    *   **Step 4 (Diagram):** Generate `ProDoc/system_context.md` (Markdown + Mermaid).

4.  **Verify Compliance:**
    *   **Structure:** Check that `.agent/workflows` exists and is populous.
    *   **Knowledge:** Check that `ProDoc/documentation/product.md` is NOT empty.
    *   **Visuals:** Check that `ProDoc/system_context.mmd` exists.

---

## **Phase 3: Handover**

5.  **Notify User:**
    *   "Project Context Initialized & Hydrated."
    *   "Standard: Python (Reflex/Ansible)"
    *   "Ready for development."
