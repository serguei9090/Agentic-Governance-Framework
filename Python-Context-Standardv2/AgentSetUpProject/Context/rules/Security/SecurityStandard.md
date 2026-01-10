# Security Framework (Python v2)

## 1. Core Principles (Invariants)
*   **Shift Left:** Security is not a final check. It happens on every commit.
*   **Zero Secrets:** No API Key, Password, or Token shall ever enter `git`.
*   **Input Validation:** Pydantic is the law. Validated data only.
*   **Defense in Depth:** SAST (Bandit), SCA (Safety), and Secrets (Gitleaks).

## 2. Workflow (The Security Shield)
1.  **Local (Hooks):** `gitleaks` checks staged files. If secret found, Commit Blocked.
2.  **Logic (SAST):** `bandit` scans for Python vulnerabilities (exec, eval, insecure http).
3.  **Deps (SCA):** `safety check` scans `requirements.txt`.
4.  **Linting:** `ruff` detects insecure patterns (e.g., specific `noqa` suppressions).

## 3. Toolchain (Strict)
*   **Secrets:** `gitleaks` (The Gatekeeper).
*   **Dependencies:** `safety` (The Auditor).
*   **Logic:** `bandit` (The Code Scanner).

## 4. Forbidden Patterns (Strict)
1.  **Hardcoded Secrets:** `KEY = "sk-123..."`. Use `os.getenv("KEY")` and `.env`.
2.  **Eval/Exec:** `eval(user_input)`. **NEVER.** Posing extreme RCE risk.
3.  **SQL Injection:** F-strings in SQL queries. Always use ORM methods or parameterized queries.
4.  **Debug Mode:** Running `debug=True` in Production.

## 5. Golden Example (Secure Config)
```python
import os
from dotenv import load_dotenv

load_dotenv()

# BAD
# API_KEY = "12345"

# GOOD
API_KEY = os.getenv("API_KEY")
if not API_KEY:
    raise RuntimeError("API_KEY must be set")
```
