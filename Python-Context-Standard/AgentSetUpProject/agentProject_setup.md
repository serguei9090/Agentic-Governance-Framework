# **Master Software Engineering Protocol (Python)**

Project Type: Python Web App (Reflex/FastAPI)
Architecture: Modular Monolith
Methodology: TDD & CI/CD with Local Docker

## **PART 1: The Standards (Categorized Ruleset)**

### **1. Architectural Standards**
*   **Structure:**
    *   `app_name/`: Main application package (Snake Case).
    *   `app_name/pages/`: UI Pages (Reflex).
    *   `app_name/state/`: Business Logic & State.
    *   `app_name/components/`: Reusable UI Components.
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

### **4. Security**
*   **Secrets:** No hardcoded keys. Use `.env` file and `python-dotenv`.
*   **Dependencies:** Pin versions in `requirements.txt`.

### **5. SDLC & CI/CD**
*   **Environment:** Virtual Environment (`venv`) or Docker.
*   **Pipeline Stages:** Lint -> Type Check -> Test -> Build.

## **PART 2: Infrastructure Scaffolding Directives**

### **Directive 1: Scaffold pyproject.toml (The Config Hub)**
Task: Create the centralized config.
Requirements:
*   **Create File:** `pyproject.toml`
*   **Content:**
    ```toml
    [build-system]
    requires = ["flit_core >=3.2,<4"]
    build-backend = "flit_core.buildapi"

    [project]
    name = "reflex_app"
    version = "0.1.0"
    description = "A Reflex Web Application"

    [tool.ruff]
    line-length = 88
    select = ["E", "F", "I"] # Pycodestyle, Pyflakes, Isort
    ignore = []

    [tool.mypy]
    python_version = "3.11"
    warn_return_any = true
    warn_unused_configs = true
    ignore_missing_imports = true
    ```

### **Directive 2: Scaffold requirements.txt**
Task: Define dependencies.
Requirements:
*   **Create File:** `requirements.txt`
*   **Content:**
    ```text
    reflex>=0.4.0
    pytest
    pytest-cov
    ruff
    mypy
    python-dotenv
    lefthook
    ```

### **Directive 3: Scaffold Lefthook (Git Hooks)**
Task: Configure pre-commit hooks.
Requirements:
*   **Create File:** `lefthook.yml`
*   **Content:**
    ```yaml
    pre-commit:
      parallel: true
      commands:
        lint:
          glob: "*.py"
          run: ruff check --fix {staged_files} && ruff format {staged_files} && git add {staged_files}
        type-check:
          glob: "*.py"
          run: mypy {staged_files}
    ```

## **PART 3: Initialization Protocol**

*Run these commands to bring the "Body" (Project) and "Brain" (Context) to life.*

### **Phase 1: System Prep**
1.  **Version Control:**
    *   `git init`
    *   `touch .gitignore` (Population: `venv`, `__pycache__`, `.env`, `.DS_Store`, `dist`, `.pytest_cache`, `.mypy_cache`).
2.  **Environment:**
    *   `python -m venv venv`
    *   `source venv/bin/activate` (or `venv\Scripts\activate` on Windows).
    *   `touch .env`.

### **Phase 2: Dependency Injection**
1.  **Install:** `pip install -r requirements.txt`
2.  **Reflex Init:** `reflex init` (Only if not already scaffolded).

### **Phase 3: QA Setup (The Safety Net)**
1.  **Lefthook:**
    *   `lefthook install`
2.  **Validation:**
    *   Run `ruff check .` to verify linting.
    *   Run `pytest` to verify test runner.

### **Phase 4: Scripts**
*   Recommended `Makefile` or `Justfile` aliases:
    *   `dev`: `reflex run`
    *   `test`: `pytest --cov=app`
    *   `lint`: `ruff check . && mypy .`
