---
description: Perform a Security Audit using Python tools
---

# Agentic Workflow: Security Audit (Python)

1.  **Static Analysis (Bandit):**
    *   Command: `bandit -r . -f json -o reports/security_bandit.json`
    *   *Check:* Look for hardcoded passwords, SQL injection risks, and insecure imports.
    *   *Action:* If High Severity issues found, **HALT**.

2.  **Dependency Check (Safety):**
    *   Command: `safety check --full-report > reports/security_deps.txt`
    *   *Check:* Matches dependencies against known CVE databases.

3.  **Reflex Specifics:**
    *   Grepping for exposed secrets in `rx.State` (ensure no sensitive data is passed to client unless intended).

4.  **Report Generation:**
    *   Combine Bandit and Safety outputs into `reports/security_audit.md`.
    *   Prioritize remediation steps.
