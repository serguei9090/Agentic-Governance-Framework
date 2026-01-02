# AI Agent Project Initializer

## Overview
This repository contains a robust framework designed to guide AI Agents (like libraries of LLMs) in scaffolding enterprise-grade software projects. It imposes strict "Master Software Engineering Protocols" including **Atomic Design**, **Test-Driven Development (TDD)**, and **RFC 7807 Error Handling**.

The goal is to move beyond simple code generation to full **Context Injection**, where the AI understands the architectural rules before writing a single line of code.

## Key Features
*   **Protocol-First Approach**: Defines strict rules for UI components, testing, and security.
*   **Context Generation**: Generates a `.agent/` folder that serves as the "brain" for future AI development sessions.
*   **Monorepo Ready**: Scaffolds Turborepo-style structures (Apps + Packages).
*   **Standardized Error Handling**: Pre-defined Python and React error interceptors.

## How to Use

### 1. Define Your Project
Create a markdown file describing your project requirements (see `LogVibeAnalyzerProject.md` as a template).

### 2. Configure the Agent
Open `startAgentProjectSetUp.md` and update Step 3 to point to your new project file:

```markdown
3. Use @[MyNewProject.md] to generate proper project files.
```

### 3. Execute with AI
Provide the `startAgentProjectSetUp.md` file to your AI Assistant and ask it to:
> "Execute the project setup sequence."

The AI will:
1.  Read the `AgentSetUpProject/` directives.
2.  Scaffold the physical directory structure.
3.  Generate the `.agent/` context rules for future use.

## Repository Structure

```
/
├── startAgentProjectSetUp.md       # ENTRY POINT: The master script for the AI.
├── LogVibeAnalyzerProject.md       # Example project requirement specification.
├── AgentSetUpProject/              # THE CORE: Directives and Rules.
│   ├── agentProject_setup.md       # Physical scaffolding rules.
│   ├── agentContext.md             # .agent folder generation rules.
│   └── Context/                    # Deep-dive technical directives (e.g., Error Handling).
│
└── [setup_XX]                      # Generated project outputs (Artifacts).
```

## Contributing
To improve the protocols:
1.  Edit `AgentSetUpProject/agentProject_setup.md` to change the default stack.
2.  Edit `AgentSetUpProject/Context/` to refine specific engineering standards.
