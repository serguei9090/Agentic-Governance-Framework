---
description: Prepare a Semantic Versioning release for Python
---

# Agentic Workflow: Release Preparation (Python)

1.  **Determine Version:**
    *   Analyze commits (Conventional Commits) to decide Major, Minor, or Patch.
    *   *Example:* `feat:` triggers Minor. `fix:` triggers Patch.

2.  **Bump Version:**
    *   **Poetry:** `poetry version [major|minor|patch]`
    *   **Setuptools:** Edit `setup.py` or `pyproject.toml`.

3.  **Generate Changelog:**
    *   `cz changelog` (using Commitizen).
    *   Prepend to `CHANGELOG.md`.

4.  **Create Release Artifact:**
    *   `poetry build` or `python -m build`.
    *   Verify `dist/` contains `.tar.gz` and `.whl`.

5.  **Commit & Tag:**
    *   `git commit -am "chore(release): bump version to X.Y.Z"`
    *   `git tag vX.Y.Z`
