This is a new project setup.
**Enterprise Status:** ✅ Ready (Level 5) Includes Full Operational Workflows.

1. Use @[AgentSetUpProject/agentProject_setup.md] to scaffold the codebase (directories, config, button component).
2. Use @[AgentSetUpProject/agentContext.md] to generate the .agent/ folder, including all **Rules** and **Workflows**.
3. Use user project requirements @[LogVibeAnalyzerProject.md] to generate proper project files.
4. **Agent Instruction:** Ensure the rules generated in step 2 strictly adhere to the technical stack defined in step 1.

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
