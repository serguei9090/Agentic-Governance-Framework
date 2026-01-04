This is a new project setup.
**Enterprise Status:** ✅ Ready (Level 5) Includes Full Operational Workflows.

1. **Agent Context Initialization (The Brain):**
    *   **1.1 Injection:** Execute the **Bulk Injection** commands defined in @[AgentSetUpProject/agentContext.md] **PART 1**.
    *   **1.2 Hydration:** Execute the **Customization & Hydration** protocols defined in @[AgentSetUpProject/agentContext.md] **PART 2**.
        *(Includes: `AGENTS.MD` creation, `ProDoc/` generation, and Rule Pruning).*
2. Use @[AgentSetUpProject/agentProject_setup.md] to scaffold the codebase (directories, config, button component).
3. Use user project requirements @[LogVibeAnalyzerProject.md] to generate proper project files.
4. **Agent Instruction:** With the Context (Step 1) now active, strictly adhere to the technical stack defined in Step 2. Verify that `ProDoc/documentation/product.md` is NOT empty.

## Project Structure Reference
```
Root/
├── startAgentProjectSetUp.md       (Entry Point)
├── LogVibeAnalyzerProject.md       (Project Requirements)
└── AgentSetUpProject/              (Agent Core)
    ├── agentProject_setup.md       (Scaffolding Directives)
    ├── agentContext.md             (Context Rules & Workflows)
    └── Context/
        ├── rules/                  (Static Directives)
        └── workflows/              (Actionable Procedures)
```
See `AgentSetUpProject/README.md` for usage details and "Agentic Workflow" integration.
