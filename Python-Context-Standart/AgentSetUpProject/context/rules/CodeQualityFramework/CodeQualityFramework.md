# **AGENT DIRECTIVE: CODE QUALITY FRAMEWORK (Python CQF-v1)**

TARGET AUDIENCE: AI Agents, DevOps Engineers, Senior Developers
OBJECTIVE: Enforce enterprise-grade code maintainability, type safety, and standardize output in Python projects.
CONSTRAINT: Use only Free & Open Source (FOSS) tools.

## **1. THE APPROVED TOOLCHAIN**

You are authorized to use only the following tools to enforce the Quality Standard.

| Layer | Tool | Configuration Strategy |
| :---- | :---- | :---- |
| **Linting & Logic** | **Ruff** | Ultra-fast replacement for Flake8, Isort, and Pylint. |
| **Formatting** | **Ruff (Formatter)** | Compatible with Black style. |
| **Type Checking** | **MyPy** | Strict static type checking. Non-negotiable. |
| **Git Hooks** | **Pre-commit** | Standard Python hook runner. |
| **Commit Standard** | **Commitizen** | Enforces "Conventional Commits". |
| **Quality Server** | **SonarQube** | Centralized dashboard. |

## **2. PROTOCOL A: THE LOCAL GUARDRAILS (Pre-Commit)**

**Directives:**

1. Code MUST be formatted and Linted before it enters the repository.
2. Developers MUST NOT be allowed to commit "dirty" code.

### **2.1 Configuration: .pre-commit-config.yaml**

Create `.pre-commit-config.yaml` in the root.

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.1.0
    hooks:
      - id: ruff
        args: [ --fix ]
      - id: ruff-format
  
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.5.0
    hooks:
      - id: mypy
        additional_dependencies: [types-all]
```

### **2.2 Configuration: pyproject.toml (The Source of Truth)**

All config MUST reside in `pyproject.toml`.

```toml
[tool.ruff]
line-length = 88
target-version = "py311"

[tool.ruff.lint]
select = ["E", "F", "B", "I", "N", "UP", "PL", "RUF"]
ignore = []

[tool.mypy]
strict = true
ignore_missing_imports = true
```

## **3. PROTOCOL B: THE CENTRAL AUTHORITY**

**Directives:**

1. All code MUST be scanned by a SonarQube Community instance.
2. The "Quality Gate" MUST be set to **Hard Fail**.

### **3.1 Infrastructure**

Use the existing `docker-compose.yml` pattern from the React standard (SonarQube is universal).

### **3.2 Configuration: sonar-project.properties**

```properties
sonar.projectKey=my-python-app
sonar.language=py
sonar.sources=reflex_ansible
sonar.tests=tests
sonar.python.coverage.reportPaths=coverage.xml
sonar.python.xunit.reportPath=report.xml
```

## **4. PROTOCOL C: METRICS & THRESHOLDS**

The Agent must enforce the following thresholds.

| Metric | Threshold | Reason |
| :---- | :---- | :---- |
| **Reliability Rating** | **A** | Zero bugs allowed. |
| **Type Safety** | **100% Strict** | No `Any` types without explicit suppression. |
| **Cyclomatic Complexity** | **< 15 per function** | Keep logic simple. |
| **Test Coverage** | **> 80%** | Critical paths must be verified. |

## **5. EXECUTION SUMMARY**

To implement this framework:

```bash
# 1. Install Toolchain
pip install ruff mypy pre-commit pytest pytest-cov

# 2. Initialize Hooks
pre-commit install

# 3. Verify
ruff check .
mypy .
```
