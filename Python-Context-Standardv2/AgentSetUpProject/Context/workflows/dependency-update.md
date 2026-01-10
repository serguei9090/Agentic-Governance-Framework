---
description: Check for outdated Python packages and update safely
---

# Agentic Workflow: Dependency Update (Python)

1.  **Check Status:**
    *   **Poetry:** `poetry show --outdated`
    *   **Pip:** `pip list --outdated`
    *   *Decision:* If Security Updates available, prioritize.

2.  **Create Branch:**
    *   `git checkout -b chore/deps-update-YYYY-MM-DD`

3.  **Update:**
    *   **Poetry:** `poetry update [package]`
    *   **Pip:** `pip install --upgrade [package]` && `pip freeze > requirements.txt`

4.  **Verify:**
    *   Run `pytest` (Unit Tests).
    *   Run `rx run` (Smoke Test Reflex UI).

5.  **Commit:**
    *   `git commit -am "chore(deps): update python dependencies"`
