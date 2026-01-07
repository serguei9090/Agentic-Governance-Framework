This is a new project setup.
**Enterprise Status:** ✅ Ready (Level 5) Includes Full Operational Workflows.

1. **Agent Context Initialization (The Brain):**
    *   **1.1 Injection:** Execute the **Bulk Injection** commands defined in @[AgentSetUpProject/agentContext.md] **PART 1**.
    *   **1.2 Hydration (CRITICAL):** Execute the **Customization & Hydration** protocols defined in @[AgentSetUpProject/agentContext.md] **PART 2**.
        *   **MANDATORY CHECKPOINT:** You **MUST** verify that:
            *   `AGENTS.MD` exists and contains the "Framework Binding" section.
            *   `ProDoc/documentation/product.md` is **NOT EMPTY** and contains extracted requirements.
            *   `ProDoc/documentation/system_context.md` contains a Mermaid diagram.
        *   **FAILURE PROTOCOL:** If any of the above are missing or empty, **STOP**. Do not proceed to Step 2. Retry Hydration immediately.

2.  **Configuration Checklist (Optional):**
    *   [x] **Deploy Planning Protocol:** (Default: Checked) If checked, ensure `.agent/workflows/PlanningProtocol.md` is active and referenced in `AGENTS.MD`. 

3. Use @[AgentSetUpProject/agentProjectSetup.md] to scaffold the codebase (directories, config, button component).
17. Use user project requirements @[LogVibeAnalyzerProject.md] to generate proper project files.
5. **Final Verification Protocol (The Double-Check):**
    *   **Action:** Generate a `setup_checklist.md` file at the **PROJECT ROOT** (same level as `AGENTS.MD`).
    *   **Content:** This file **MUST** explicitly list every critical asset requested in this setup (e.g., `.agent/`, `AGENTS.MD`, `apps/`, `packages/`, `ProDoc/`, `ProDoc/documentation/product.md`).
    *   **Execution:** You **MUST** go through this list and mark items as `[x]` ONLY after verifying they exist and are not empty.
    *   **Completion:** Do not consider the setup "Complete" until this file is generated and fully checked.

6. **Agent Instruction:** With the Context (Step 1) now active, **STRICTLY ADHERE** to the technical stack defined in Step 3. Verify that `ProDoc/documentation/product.md` is NOT empty before writing a single line of code.

## Project Structure Reference
```
Root/
├── startAgentProjectSetUp.md       (Entry Point)
├── LogVibeAnalyzerProject.md       (Project Requirements)
└── AgentSetUpProject/              (Agent Core)
    ├── agentProjectSetup.md        (Scaffolding Directives)
    ├── agentContext.md             (Context Rules & Workflows)
    └── Context/
        ├── rules/                  (Static Directives)
        └── workflows/              (Actionable Procedures)
```
See `AgentSetUpProject/README.md` for usage details and "Agentic Workflow" integration.
