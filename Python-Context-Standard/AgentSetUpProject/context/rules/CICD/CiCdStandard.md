# **CI/CD Orchestration Governance**

**Objective:** Ensure repeatable, deterministic, and secure software delivery.

## **1. The Core Philosophy**

1.  **Immutable Artifacts:** Once code is built (e.g., Docker Image, EXE, APK), it is **NEVER** modified. Configuration is injected at runtime.
2.  **Fail Fast:** The pipeline must fail at the earliest possible stage (Linting > Unit Test > Build > E2E > Deploy).
3.  **Infrastructure as Code (IaC):** No manual server setup. Everything is defined in code (`terraform`, `k8s manifests`, `docker-compose`).

## **2. The "Master Switch" Protocol**

Configuration is driven by the `CICDTools.md` manifest.

*   **Level 0 (None):** Local Development only. No pipeline files generated.
*   **Level 1 (CI Only):** Code Quality Gates.
    *   *Generates:* lint/test workflows.
    *   *Goal:* Prevent "It works on my machine" syndrome.
*   **Level 2 (Full CI/CD):** Automated Delivery.
    *   *Generates:* Build artifacts + Deployment scripts.
    *   *Goal:* Zero-touch deployment to Production.

## **3. Mandatory Gates (If Level >= 1)**

| Gate | Tool | Failure Policy |
| :--- | :--- | :--- |
| **Secrets** | `gitleaks` | BLOCK |
| **Linting** | `eslint` | BLOCK |
| **Unit Tests** | `vitest` | BLOCK |
| **Audit** | `npm audit` | BLOCK (Criticals) |
| **Format** | `prettier` | BLOCK |
