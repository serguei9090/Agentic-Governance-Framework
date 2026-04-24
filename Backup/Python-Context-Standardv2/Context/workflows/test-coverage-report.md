---
description: Generate a Test Coverage Report using Pytest
---

# Agentic Workflow: Test Coverage Report (Python)

1.  **Execute Tests:**
    *   Command: `pytest --cov=. --cov-report=xml:reports/coverage.xml --cov-report=html:reports/coverage_html`
    *   *Constraint:* Must run in a fresh environment (or ensure dependencies are up to date).

2.  **Analyze Thresholds:**
    *   Read `reports/coverage.xml`.
    *   Calculate Total Coverage %.
    *   *Rule:* If Coverage < 80%, **FAIL** workflow (unless exemption granted).

3.  **Identify Gaps:**
    *   Parse XML to find files with < 50% coverage.
    *   List these files in `reports/coverage_gaps.md`.

4.  **Notify User:**
    *   "Tests Passed: X/Y. Coverage: Z%. View report at reports/coverage_html/index.html."
