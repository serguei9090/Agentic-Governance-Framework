# Project Review: Universal Context Standard

## Objective
To consolidate language-specific AI agent contexts (Python, React) into a single, unified, language-agnostic standard. This standard provides the fundamental "physics" for AI agents operating in any software environment.

## Design
The framework separates universal concepts (like Git workflows, Architectural invariant patterns, Testing philosophies) from specific tool implementations. Where specific tools are needed, we use placeholders:
- `[PKG_MANAGER]`: npm, yarn, pip, cargo, etc.
- `[LINTER]`: Biome, Ruff, ESLint, Clippy, etc.
- `[TEST_RUNNER]`: Vitest, Pytest, Jest, etc.
- `[ORM]`: Prisma, SQLAlchemy, etc.
- `[EXECUTE_CMD]`: npx, uv, etc.

## Components
- **`rules/`**: Directories detailing standards for Architecture, CI/CD, Code Quality, UI, etc.
- **`workflows/`**: Step-by-step guides for the AI to perform complex actions (releases, hotfixes).
- **`agentContext.md`**: The master initialization prompt that commands the AI to establish the workspace.

## Outcome
A portable `.agent` folder structure that can be generated into any new or existing repository, immediately giving an AI agent the boundaries and workflows necessary to act as a senior developer.
