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

## **Phase 2: Execution (Scaffolding)**

3.  **Execute the Directives:**
    *   Follow the instructions in `agentContext.md` under **"Execution Instructions for Agent"**.
    *   Generate the `.agent/` folder structure.
    *   Create the `AGENTS.MD` persona file.
    *   Create all Rule files (`.agent/rules/**/*.md`).

4.  **Verify Compliance:**
    *   Ensure `CodeQualityFramework.md` matches the Python/Ruff/MyPy standard.
    *   Ensure `TestingArchitecture.md` matches the Pytest/Playwright standard.

---

## **Phase 3: Handover**

5.  **Notify User:**
    *   "Project Context Initialized."
    *   "Standard: Python (Reflex/Ansible)"
    *   "Ready for development."
