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
    *   **Step 2 (Hydration):** Execute the **Customization & Hydration** protocols in `agentContext.md` **PART 2**.
        *   **MANDATORY CHECKPOINT:** You **MUST** verify that:
            *   `AGENTS.MD` exists and has "Framework Binding".
            *   `ProDoc/documentation/product.md` is **NOT EMPTY**.
        *   **FAILURE PROTOCOL:** If missing/empty, **STOP** and retry Hydration.

4.  **Configuration Checklist (Optional):**
    *   [x] **Deploy Planning Protocol:** (Default: Checked) If checked, ensure `.agent/workflows/PlanningProtocol.md` is active and referenced in `AGENTS.MD`.

5.  **Execute Body Scaffolding:**
    *   **Step 3 (Body):** Follow instructions in `agentProject_setup.md` to scaffold the project structure and initialize the environment.
    *   **Step 4 (Diagram):** Generate `ProDoc/system_context.md` (Markdown + Mermaid).

6.  **Final Verification Protocol (The Double-Check):**
    *   **Action:** Generate a `setup_checklist.md` file at the **PROJECT ROOT**.
    *   **Content:** This file **MUST** explicitly list every critical asset requested in this setup.
    *   **Execution:** You **MUST** go through this list and mark items as `[x]` ONLY after verifying they exist and are not empty.
    *   **Completion:** Do not consider the setup "Complete" until this file is generated and fully checked.



---

## **Phase 3: Handover**

7.  **Notify User:**
    *   "Project Context Initialized & Hydrated."
    *   "Standard: Python (Reflex/Ansible)"
    *   "Ready for development."
