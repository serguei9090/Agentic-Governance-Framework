# CI/CD Infrastructure Manifest (Python v2)

## 1. Core Principles (Invariants)
*   **Minimal Surface Area:** Only install tools that are strictly required.
*   **Agent Instructions:** The Agent MUST read this file to determine the project's operational complexity.
*   **One Runner:** Do not mix CI providers. Standardize on **GitHub Actions**.
*   **Container First:** All CI jobs must run inside the project's Docker container.

## 2. Workflow (Configuration)
1.  **Select Level:**
    *   **Level 0 (None):** Local usage only.
    *   **Level 1 (CI Only):** Linting (Ruff/MyPy) + Testing (Pytest).
    *   **Level 2 (Full CD):** Build (Reflex Export) + Deploy (Docker/Cloud).
2.  **Select Cloud:** AWS, DigitalOcean, or Railway?
3.  **Generate Config:** Agent scaffolds `.github/workflows` based on selection.

## 3. Infrastructure Checklist
(Check `[x]` to activate)

### 3.1 The Master Switch
- [ ] **Level 0: NONE**
- [ ] **Level 1: CI ONLY** (Lint/Test)
- [ ] **Level 2: FULL CI/CD** (Build/Deploy)

### 3.2 Orchestration
- [ ] **GitHub Actions**
- [ ] **GitLab CI**
- [ ] **Bitbucket Pipelines**

### 3.3 Deployment Target
- [ ] **Docker Hub / GHCR** (Container Registry)
- [ ] **AWS EC2 / Lambda**
- [ ] **Railway / Render** (PaaS)

## 4. Forbidden Patterns (Strict)
1.  **Vendor Lock-in Logic:** Writing build logic inside `.yaml` files. Put it in `scripts/build_and_push.sh` so it's portable.
2.  **Secret Commits:** Checking `[x]` on "AWS Keys" without configuring Repository Secrets.

## 5. Golden Example (Standard Python Config)
```markdown
# CI/CD Selection
- [ ] Level 0
- [x] Level 1 (CI Only)
- [ ] Level 2

# Runner
- [x] GitHub Actions
```
*Resulting Actions:* Agent creates `.github/workflows/ci.yml` running `ruff check`, `mypy`, and `pytest`.
