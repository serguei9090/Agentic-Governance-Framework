1. *Create Directory Structure*
   - Create `Universal-Context-Standard` directory mirroring `AgentSetUpProject`.
   - Create `Backup` directory for keeping unmodified originals.

2. *Create Language Agnostic Root Files*
   - Create `Universal-Context-Standard/README.md` introducing the universal framework.
   - Create `Universal-Context-Standard/TODO.md` for tracking future tasks.
   - Create `Universal-Context-Standard/project-review.md` outlining the framework's purpose and contents.
   - Create `Universal-Context-Standard/AGENTS.md` to serve as a base instruction file for agents.

3. *Port and Generalize Rules and Workflows*
   - Copy files from `React-Context-Standardv2/AgentSetUpProject/Context` to `Universal-Context-Standard/AgentSetUpProject/Context`.
   - Identify language-specific files (like `agentContext.md`, `agentProjectSetup.md`, `ApiStandards.md`, `DatabaseStandard.md`) and copy their original versions to `Backup/React-Context-Standardv2/` and `Backup/Python-Context-Standardv2/`.
   - Modify these files in `Universal-Context-Standard` to replace hardcoded tools (like Pytest, Biome, Prisma, SQLAlchemy) with placeholders like `[TEST_RUNNER]`, `[LINTER]`, `[ORM]`, ensuring they are language-agnostic.

4. *Complete pre commit steps*
   - Complete pre commit steps to make sure proper testing, verifications, reviews and reflections are done.

5. *Submit the change*
