---
description: Onboard a new developer to the Python environment
---

# Agentic Workflow: Onboarding Setup (Python)

1.  **Prerequisites Check:**
    *   Ensure Python 3.11+ is installed (`python --version`).
    *   Ensure Git is installed.

2.  **Environment Setup:**
    *   **Option A (Poetry):**
        *   `poetry install`
        *   `poetry shell`
    *   **Option B (Venv):**
        *   `python -m venv .venv`
        *   `source .venv/bin/activate` (Linux) / `.venv\Scripts\activate` (Windows)
        *   `pip install -r requirements.txt`

3.  **Hooks Initialization:**
    *   `lefthook install` (Replacing pre-commit)
    *   Run `lefthook run pre-commit` to verify baseline.

4.  **Verify Build:**
    *   Run `pytest` to ensure logic is sound.
    *   Run `rx run` to verify UI start.

5.  **Documentation:**
    *   Open `README.md` and `AgentSetUpProject/agentContext.md` for review.
