# Project Summary

The goal of this project is to create a single, language-agnostic AI agent framework based on the existing `Python-Context-Standardv2` and `React-Context-Standardv2` projects. The resulting framework should provide context, rules, skills, and workflows tailored for an AI coding agent to effectively participate in the software development lifecycle.

The framework resides in a new base directory: `Universal-Context-Standard/`. Files requiring modification to become language-agnostic will be copied to `Universal-Context-Standard/` while their originals will be backed up in a `Backup/` directory, maintaining their original folder structure.

## Proposed Movements & Modifications

1.  **Base Directory:** Created `Universal-Context-Standard/AgentSetUpProject/Context/`.
2.  **Rules (`rules/`):**
    *   Many rules were identical or very similar and copied from the React v2 as a base.
    *   `Architecture/ApiStandards.md`, `Architecture/DatabaseStandard.md`, and other specific rules will have tool names abstracted to placeholders like `[LINTER]`, `[TEST_RUNNER]`, `[ORM]`, `[PKG_MANAGER]`.
3.  **Workflows (`workflows/`):**
    *   Merged all workflows from both. Included `issue-writter.md` and `skill-writer.md` from the React standard.
4.  **Core Configuration (`agentContext.md` & `agentProjectSetup.md`):**
    *   `agentContext.md`: Combined roles. Changed specific tooling to be language-agnostic placeholders. The setup script or prompt defines the specific tools based on the project language.
    *   `agentProjectSetup.md`: Ensure it doesn't hardcode React or Python paths, using `[PKG_MANAGER]` and standard directory structures.
5.  **Root Files (Framework Root):**
    *   Created a new `README.md` for the universal framework.
    *   Created a `TODO.md` file.
    *   Created a `project-review.md` (full project review md file).
    *   Created an `AGENTS.md` file designed to be placed in the target project's root.

## Backups
Any file we modified to make it universal has its original version backed up in `Backup/Python-Context-Standardv2/...` or `Backup/React-Context-Standardv2/...`.
