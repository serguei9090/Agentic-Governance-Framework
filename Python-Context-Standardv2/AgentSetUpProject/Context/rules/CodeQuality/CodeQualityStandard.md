# **AGENT DIRECTIVE: CODE QUALITY FRAMEWORK (Python CQF-v2)**

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
| **Git Hooks** | **Lefthook** | Fast, parallel hook runner (replaces pre-commit). |

## **2. PROTOCOL A: THE LOCAL GUARDRAILS (Pre-Commit)**

**Directives:**

1. Code MUST be formatted and Linted before it enters the repository.
2. Developers MUST NOT be allowed to commit "dirty" code.

### **2.1 Configuration: lefthook.yml**

Create `lefthook.yml` in the root.

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

## **3. PROTOCOL B: METRICS & THRESHOLDS**

The Agent must enforce the following thresholds.

| Metric | Threshold | Reason |
| :---- | :---- | :---- |
| **Reliability Rating** | **A** | Zero bugs allowed. |
| **Type Safety** | **100% Strict** | No `Any` types without explicit suppression. |
| **Cyclomatic Complexity** | **< 15 per function** | Keep logic simple. |
| **Test Coverage** | **> 80%** | Critical paths must be verified. |

## **4. EXECUTION SUMMARY**

To implement this framework:

```bash
# 1. Install Toolchain
pip install ruff mypy lefthook pytest pytest-cov

# 2. Initialize Hooks
lefthook install

# 3. Verify
ruff check .
mypy .
```
