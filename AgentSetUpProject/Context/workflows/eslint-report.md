---
name: eslint-report
description: Run ESLint (npm run lint) for this repository and write a concise lint summary to reports/code_lint_report.md plus a detailed report to reports/code_lint_detailed_report.md. Use when asked to execute linting, check lint status, or produce or refresh a lint report.
---

# ESLint Report

## Overview

Run repo linting and capture results in `reports/code_lint_report.md` plus a detailed report in `reports/code_lint_detailed_report.md`.

## Workflow

### 1) Confirm execution intent
- If the user explicitly says not to run lint now, do not execute commands; explain the intended steps only.
- Otherwise, proceed with execution.

### 2) Run lint
- From the repo root, run `npm run lint`.
- Capture pass/fail summary and any notable warnings or failures.
- If lint runs per workspace (e.g., via Turbo), note each package/workspace result.

### 3) Write reports
- Write a concise summary to `reports/code_lint_report.md`.
- Write a detailed report to `reports/code_lint_detailed_report.md`.
- Keep both reports ASCII-only.
- Summary report must include:
  - Command run
  - Lint results by package/workspace
  - Notable warnings or failures
- Detailed report must include:
  - Command run
  - Lint results by package/workspace
  - Full warning/error list
  - A "Fixes Needed" section at the end, with one entry per warning/error:
    - File path
    - Rule name
    - Short description of the change needed

Use these templates:

```md
# Code Lint Report

Command run:
- `npm run lint`

Lint results:
- <package/workspace>: <summary>

Notes:
- <warnings/failures or "None">
```

```md
# Code Lint Detailed Report

Command run:
- `npm run lint`

Lint results:
- <package/workspace>: <summary>

Findings:
- <file>:<line>:<col> <rule> <message>

Fixes Needed:
- <file>: <rule> - <what to change>
```
