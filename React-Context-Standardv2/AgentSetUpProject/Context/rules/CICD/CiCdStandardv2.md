# CI/CD Orchestration Governance (v2)

## 1. Core Principles (Invariants)
*   **Immutable Artifacts:** Build once (Docker Image / Binary), deploy everywhere. Inject config at runtime (`ENV`). Never rebuild for Prod.
*   **Fail Fast:** Pipeline order MUST be: Lint -> Test -> Build -> Deploy. If Lint fails, do not run Tests.
*   **Infrastructure as Code (IaC):** No manual server setup. All infra defined in Terraform/Helm/Docker-Compose.

## 2. Workflow (The Pipeline Decision Tree)
1.  **Event:** Push to `main`? -> **Production Release**.
2.  **Event:** Pull Request? -> **CI Check (Lint + Test)**.
3.  **Step 1:** Run `gitleaks` & `eslint`. (Block on failure).
4.  **Step 2:** Run `vitest`. (Block on failure).
5.  **Step 3:** Build Container/Artifact.
6.  **Step 4:** Push to Registry (DockerHub/ECR).
7.  **Step 5:** Trigger Deployment (ArgoCD/Vercel).

## 3. Directory & Naming
*   **Workflows:** `.github/workflows/*.yml` or `.gitlab-ci.yml`.
*   **Scripts:** `scripts/ci/[name].sh`.
*   **Secrets:** NEVER commit secrets. Use Repository Secrets (`${{ secrets.API_KEY }}`).

## 4. Forbidden Patterns (Strict)
1.  **Works on My Machine:** Using shell commands that only work locally. Use `make` or `npm run` scripts inside Docker.
2.  **Skipping Tests:** `git push --no-verify` or disabling CI checks for "emergency fixes".
3.  **Hardcoded Config:** `const API_URL = "http://localhost:3000"`. Use `process.env.API_URL`.
4.  **Long Lived Branches:** Feature branches living > 2 days without merge.

## 5. Golden Example (The Ideal GitHub Workflow)
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request: ~

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      
      - name: Install
        run: npm ci
        
      - name: Lint & Format
        run: npm run lint
        
      - name: Type Check
        run: npx tsc --noEmit

  test:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - name: Unit Tests
        run: npm run test:coverage

  build:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker
        run: docker build -t my-app .
```
