# Agent Project Setup - Usage Guide

This folder (`AgentSetUpProject`) contains the core directives and context files needed for an AI Agent to scaffold a new software project according to the "Master Software Engineering Protocol".

## Directory Structure
```
Root/
├── startAgentProjectSetUp.md   <-- START HERE (Entry Point)
├── [YourProjectName].md        <-- Your Project Requirements (e.g., LogVibeAnalyzerProject.md)
└── AgentSetUpProject/          <-- Core Agent Files
    ├── README.md               <-- This file
    ├── agentProject_setup.md   <-- Scaffolding rules (Monorepo, Tech Stack)
    ├── agentContext.md         <-- Context generation rules (.agent folder)
    └── Context/                <-- Specialized Directives
        └── ErrorHandlingDirective.md
```

## How to Use

1.  **Define Your Project**: Create a project requirement file in the root (e.g., `MyNewApp.md` or use `LogVibeAnalyzerProject.md` as a template).
2.  **Update Entry Point**: Edit `startAgentProjectSetUp.md` in the root logic:
    *   Update Step 3 to point to your new project file: `Use @[MyNewApp.md]...`
3.  **Run the Agent**: Point your AI Agent to `startAgentProjectSetUp.md` and ask it to "Execute the setup".

## Modifying the Protocol

*   **Tech Stack**: Edit `AgentSetUpProject/agentProject_setup.md` to change frameworks (e.g., switch React to Vue, Python to Node).
*   **Rules & Context**: Edit `AgentSetUpProject/agentContext.md` to change what goes into the `.agent/` folder.
*   **Error Handling**: Edit `AgentSetUpProject/Context/ErrorHandlingDirective.md` to update the global error handling standards.
