# **Master Software Engineering Protocol (Python)**

Project Type: Python Web App (Reflex/FastAPI)
Architecture: Modular Monolith
Methodology: TDD & CI/CD with Local Docker

### **Variable Definitions**
*   **`[PKG_MANAGER]`**: Generic placeholder. Replace with user selection: `pip`, `uv`, or `poetry`.
*   **`[EXECUTE_CMD]`**: Generic placeholder. Replace with: `python -m`, `uv run`, or `poetry run`.

### **Pre-Flight Protocol (Safety Interlock)**
**STOP!** Before executing any scaffolding instructions below, you **MUST** confirm the "Brain" is active:
1.  **Check Context:** Does `.agent/` exist?
2.  **Check Persona:** Does `AGENTS.MD` exist in the root?
3.  **Check Knowledge:** Is `ProDoc/documentation/product.md` populated with requirements?
    *   **IF NO:** Do NOT proceed. Go back and run `agentContext.md` hydration.
    *   **IF YES:** Proceed to Part 1.

## **PART 1: The Standards (Categorized Ruleset)**

### **1. Architectural Standards**

*   **Structure:**
    *   `app_name/`: Main application package (Snake Case).
    *   `app_name/pages/`: UI Pages (Reflex).
    *   `app_name/state/`: Business Logic & State.
    *   `app_name/components/`: Reusable UI Components.
    *   `app_name/models/`: Database Models (SQLModel).
*   **Rule:** "Logic lives in State; UI lives in Components."

### **2. Code Quality & Hygiene**

*   **Linting:** `Ruff` is the single source of truth. It replaces Flake8, Isort, and Pylint.
*   **Formatting:** `Black` (via Ruff format) or `Black` directly.
*   **Type Hinting:** `MyPy` strict mode enabled. All function signatures must have type hints.
*   **Clean Code:**
    *   **PEP 8:** Adherence is mandatory.
    *   **Docstrings:** Google Style Docstrings for modules and functions.

### **3. Testing Strategy**

*   **Unit Tests:** `Pytest`.
*   **E2E Tests:** `Playwright` (via Reflex integration).
*   **Coverage:** Minimum **80%**.

### **4. Backend & Security**

*   **Validation:** All inputs must be validated (Pydantic).
*   **Secrets:** No hardcoded keys. Use `.env` file and `python-dotenv`.
*   **Architecture:** State-Service-Model pattern.
*   **Security:**
    *   Sanitize all HTML outputs.
    *   Use parameterized queries (SQLModel/SQLAlchemy).

### **5. SDLC & CI/CD (Local Docker)**

*   **Environment:** The entire build and test process runs inside a Docker container to ensure consistency.
*   **Pipeline Stages:**
    1. Lint & Static Analysis (Ruff/MyPy).
    2. Unit Tests (Pytest).
    3. Build (Reflex Export/Build).
    4. E2E Tests.

## **PART 2: Agent Implementation Directives**

*Instructions for the AI Agent to generate specific infrastructure files based on the standards above.*

### **Directive 1: Scaffold pyproject.toml (The Config Hub)**

Task: Create the centralized config.
Requirements:
*   **Create File:** `pyproject.toml`
*   **Content (Minimal Example):**
    ```toml
    [build-system]
    requires = ["flit_core >=3.2,<4"]
    build-backend = "flit_core.buildapi"

    [project]
    name = "reflex_app"
    version = "0.1.0"
    description = "A Reflex Web Application"
    dependencies = [
        "reflex>=0.6.0",
        "sqlmodel",
        "python-dotenv"
    ]

    [tool.ruff]
    line-length = 88
    select = ["E", "F", "I", "UP"] # Pycodestyle, Pyflakes, Isort, Pyupgrade
    
    [tool.mypy]
    python_version = "3.11"
    warn_return_any = true
    warn_unused_configs = true
    ignore_missing_imports = true
    ```

### **Directive 2: Generate requirements.txt**

Task: Define dependencies.
Requirements:
*   **Create File:** `requirements.txt`
*   **Content:**
    ```text
    reflex>=0.6.0
    pytest
    pytest-cov
    ruff
    mypy
    python-dotenv
    pre-commit
    ```

### **Directive 3: Generate docker-compose.ci.yml (Local CI/CD)**

Task: Create a containerized pipeline environment.
Requirements:
*   **Service ci-runner:** Uses a Python image.
*   **Volumes:** Mount the local repo to the container.
*   **Command:** A script that runs the full workflow (Lint -> Test).
*   **Output File:** `docker-compose.ci.yml`

### **Directive 4: Scaffold Pre-Commit**

Task: Configure git hooks.
Requirements:
*   **Create File:** `.pre-commit-config.yaml`
*   **Content:**
    ```yaml
    repos:
      - repo: https://github.com/astral-sh/ruff-pre-commit
        rev: v0.1.6
        hooks:
          - id: ruff
            args: [--fix, --exit-non-zero-on-fix]
          - id: ruff-format
      - repo: https://github.com/pre-commit/mirrors-mypy
        rev: v1.7.1
        hooks:
          - id: mypy
            args: [--ignore-missing-imports]
            additional_dependencies: [pydantic]
    ```

## **PART 3: The Master Workflow File**

### **Workflow Definition: pipeline.workflow.yaml**

name: "Local CI/CD Pipeline"
description: "Enforces Master Protocol standards before code commit."

variables:
  REPORTS_DIR: "./artifacts/reports"
  COVERAGE_DIR: "./artifacts/coverage"

stages:
  - name: "Sanity Check"
    steps:
      - command: "[EXECUTE_CMD] ruff check ."
        description: "Checks code style."
      - command: "[EXECUTE_CMD] mypy ."
        description: "Verifies Type Hints."

  - name: "Logic Verification (TDD)"
    steps:
      - command: "[EXECUTE_CMD] pytest --cov=. --cov-report=html:${COVERAGE_DIR}"
        description: "Runs Unit tests. Fails if coverage < 80%."

  - name: "Containerized Execution"
    instruction: "Run the following command to execute all above steps in isolation:"
    command: "docker-compose -f docker-compose.ci.yml up --abort-on-container-exit"

## **PART 4: Initialization Protocol**

*Run these commands to bring the "Body" (Project) and "Brain" (Context) to life.*

### **Phase 1: System Prep**
1.  **Version Control:**
    *   `git init`
    *   `touch .gitignore` (Population: `venv`, `__pycache__`, `.env`, `.DS_Store`, `dist`, `.pytest_cache`, `.mypy_cache`, `assets`, `.web`).
2.  **Environment:**
    *   `python -m venv venv`
    *   `source venv/bin/activate` (or `venv\Scripts\activate` on Windows).
    *   `touch .env`.
3.  **Planning Infrastructure:**
    *   `mkdir -p .agent/plans/active`
    *   `mkdir -p .agent/plans/archive`
    *   `touch .agent/plans/fastPlan.md`
    *   `touch .agent/plans/plan_history_log.md`

### **Phase 2: Dependency Injection**
1.  **Install:** `pip install -r requirements.txt`
2.  **Reflex Init:** `reflex init` (Only if not already scaffolded).

### **Phase 3: QA Setup**
1.  **Pre-Commit:**
    *   `pre-commit install`
2.  **Validation:**
    *   Run `ruff check .` to verify linting.
    *   Run `pytest` to verify test runner.

### **Phase 4: Scripts**
*   Recommended `Makefile` or `Justfile` aliases:
    *   `dev`: `reflex run`
    *   `test`: `pytest --cov=app`
    *   `lint`: `ruff check . && mypy .`
