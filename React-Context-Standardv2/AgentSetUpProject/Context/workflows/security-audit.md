---
name: security-audit
description: Run security scans (npm audit) and generate a risk report. Use when asked to check security or vulnerabilities.
---

# Security Audit Protocol

## Overview
Identify and classify vulnerabilities in dependencies and code.

## Workflow

### 1) Dependency Scan
- Run `npm audit --json`.
- Parse the output.
- **Critical/High** vulnerabilities: **FAIL** the workflow.
- **Moderate/Low**: Warn only.

### 2) Static Analysis (SAST)
- If `trivy` or `snyk` is installed, run them.
- If not, rely on `npm audit`.

## Report Template (`reports/security_risk_assessment.md`)

```md
# Security Risk Assessment

**Date:** YYYY-MM-DD
**Overall Risk:** LOW / HIGH

## Vulnerabilities Found
| Package | Severity | Fix Available |
| :--- | :--- | :--- |
| axios | High | Yes (v1.6.0) |

## Action Plan
- [ ] Run `npm audit fix`
- [ ] Manual upgrade required for: [Package Name]
```
