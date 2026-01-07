# Code Quality Framework (v2)

## 1. Core Principles (Invariants)
*   **Zero Bugs:** Reliability Rating MUST be A.
*   **Zero Debt:** Technical Debt Ratio < 5%.
*   **Formatting:** Prettier is non-negotiable. Code without it is "Dirty".
*   **Local Enforcement:** Hooks (Lefthook) must catch errors BEFORE they reach CI.

## 2. Workflow (The Quality Gate)
1.  **Pre-Commit:**
    *   `prettier --check` (Format).
    *   `eslint` (Logic).
    *   `gitleaks` (Secrets).
2.  **Pre-Push:**
    *   `npm test` (Unit Integrity).
3.  **CI Analysis:**
    *   SonarQube Scan (Deep Analysis).
4.  **Merge Check:**
    *   If Quality Gate fails -> PR Blocked.

## 3. Toolchain (Strict)
*   **Orchestrator:** `Lefthook` (Fast, parallel, Go-based).
*   **Linter:** `ESLint` + `eslint-plugin-sonarjs`.
*   **Formatter:** `Prettier`.
*   **Commit Msg:** `Commitlint` (Conventional Commits).

## 4. Forbidden Patterns (Strict)
1.  **Bypassing Hooks:** `git commit --no-verify`. **BANNED.**
2.  **Complex Functions:** Cyclomatic Complexity > 15. Refactor immediately.
3.  **Console Logs:** Committing `console.log` to production code.
4.  **Ignored Tests:** Using `.skip` on failing tests instead of fixing them.

## 5. Golden Example (Lefthook Configuration)
```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    # 1. Secret Scan (Blocker)
    secrets:
      run: gitleaks protect --staged
    
    # 2. Format Scan (Fast)
    format:
      glob: "*.{js,ts,tsx,md,json}"
      run: npx prettier --check {staged_files}
    
    # 3. Logic Scan
    lint:
      glob: "*.{js,ts,tsx}"
      run: npx eslint {staged_files}

commit-msg:
  commands:
    # 4. Message Standard (feat: ...)
    commitlint:
      run: npx commitlint --edit {1}
```
