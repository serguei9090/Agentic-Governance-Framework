---
description: Generate a Code Quality Report using Ruff and MyPy
---

# Agentic Workflow: Lint & Quality Report (Python)

1.  **Analyze Logic & Style (Ruff):**
    *   Command: `ruff check . --output-format=json > reports/lint_results.json`
    *   *Action:* If critical errors (E9, F), **HALT**.

2.  **Analyze Types (MyPy):**
    *   Command: `mypy . --cobertura-xml-report reports/type_coverage`
    *   *Action:* If type errors found in Strict mode, **HALT**.

3.  **Generate Summary:**
    *   Read `reports/lint_results.json`.
    *   Read `reports/type_coverage/cobertura.xml`.
    *   Create `reports/quality_summary.md` highlighting top 5 offenders.

4.  **Notify User:**
    *   "Lint Report Generated. X Issues Found. Y Type Errors."
