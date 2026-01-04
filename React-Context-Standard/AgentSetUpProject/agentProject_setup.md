# **Master Software Engineering Protocol**

Project Type: React Monorepo (Mobile/Desktop/Core)  
Architecture: Atomic Design (3-Tier)  
Methodology: TDD & CI/CD with Local Docker

## **PART 1: The Standards (Categorized Ruleset)**

### **1\. Architectural Standards (Atomic Design)**

* **Goal:** Maximum code reuse and visual consistency between React Native (Mobile) and React Web/Desktop.  
* **Structure:**  
  * **Tier 1: Design Tokens (The "X Files"):** Single source of truth for variables. No logic. (Colors, Typography, Spacing, Z-Index, Shadows, Radii, Elevation). Tokens live in `packages/ui/src/tokens`.  
  * **Tier 2: Primitive Components:** Pure functional components. They accept props for content but **never** define external margins or positioning. They handle platform specifics via file naming (`Component.tsx` + `Component.native.tsx`). Primitives live in `packages/ui/src/components`.  
  * **Tier 3: Feature/Page Layouts:** The logic layer. Defines positioning (Flexbox/Grid), margins, and data injection.  
* **Rule:** "Components define the *Interior*; Pages define the *Exterior*."

### **2\. Code Quality & Hygiene**

* **Linting:** Strict ESLint configuration. No unused variables, mandatory import sorting, explicit return types.  
* **Formatting:** Prettier must be run on save.  
* **Clean Code:**  
  * **DRY (Don't Repeat Yourself):** Logic used in more than two places moves to packages/core.  
  * **Descriptive Naming:** getUserById instead of getData.  
  * **Small Functions:** Functions should ideally do one thing.
* **UI vs Logic:** UI components are presentational and should not own business logic. Shared logic lives in core/services and is passed into UI via props/hooks.

### **3\. Testing Strategy (The "Test-First" Mandate)**

* **Methodology (TDD):**  
  1. **RED:** Write a failing unit test that describes the desired behavior *before* creating the function.  
  2. **GREEN:** Write the minimum code necessary to pass the test.  
  3. **REFACTOR:** Clean up the code while keeping the test green.  
* **Unit Tests:** Jest or Vitest. Mock all external dependencies. Focus on logic in packages/core.  
* **E2E / User Tests:** Playwright. Tests user flows (Login \-\> Dashboard \-\> Logout) in a real browser environment.  
* **Code Coverage:** Minimum **80%** branch coverage required for passing the pipeline.

### **4\. Backend & Security**

* **Validation:** All inputs must be validated using a schema library (e.g., Zod) before processing.  
* **Authentication:** Stateless JWT or Session-based secure cookies.  
* **Architecture:** Controller-Service-Repository pattern to separate HTTP handling from Business Logic and Database Access.  
* **Security:**  
  * Sanitize all HTML outputs (XSS prevention).  
  * Use parameterized queries (SQL Injection prevention).  
  * Rate limiting on all public API endpoints.

### **5\. UI/UX Modern Best Practices**

* **Accessibility (a11y):** All interactive elements must have aria-labels and keyboard navigation support.  
* **Feedback:** Every user action (click, save, delete) requires immediate visual feedback (spinner, toast, or optimistic UI update).  
* **Mobile First:** Design layouts to be fluid. Avoid fixed pixel widths; use percentages or relative units (rem, flex).

### **6\. SDLC & CI/CD (Local Docker)**

* **Environment:** The entire build and test process runs inside a Docker container to ensure consistency (works on my machine \= works everywhere).  
* **Pipeline Stages:**  
  1. Lint & Static Analysis.  
  2. Unit Tests (Core Logic).  
  3. Build (Compilation check).  
  4. E2E Tests (Integration).  
  5. Report Generation.

## **PART 2: Agent Implementation Directives**

*Instructions for the AI Agent to generate specific infrastructure files based on the standards above.*

### **Directive 1: Generate tokens.ts (Tier 1\)**

Task: Create the Design Token definition file.  
Requirements:

* Export const objects for COLORS, SPACING, TYPOGRAPHY, and SHADOWS.  
* Use semantic naming (e.g., COLORS.primary, COLORS.status.error instead of COLORS.red).  
* **Output File:** packages/ui/src/tokens/index.ts

### **Directive 2: Generate button.component.tsx (Tier 2\)**

Task: Create the standardized Button component for Desktop/Web.  
Requirements:

* Import tokens from Directive 1\.  
* Accept props: variant (primary/secondary), size, label, onClick, isLoading.  
* **Strict Rule:** No margin in the root styles.  
* Use TypeScript interfaces.  
* **Output File:** packages/ui/src/components/Button/Button.tsx (and .native.tsx counterpart).

### **Directive 3: Generate jest.config.js (Unit Testing)**

Task: Configure the Unit Test Runner.  
Requirements:

* Enable coverage collection.  
* Set coverage threshold to 80% global.  
* Map module aliases (e.g., @core/\* \-\> packages/core/src/\*).  
* **Output File:** jest.config.js

### **Directive 4: Generate playwright.config.ts (E2E Testing)**

Task: Configure the User Testing Runner.  
Requirements:

* Target the web build output.  
* Configure for Chromium, Firefox, and Mobile Safari (Webkit).  
* Set up a local web server command to run the app before testing.  
* Save screenshots/video on failure to /reports/e2e.  
* **Output File:** playwright.config.ts

### **Directive 5: Generate docker-compose.ci.yml (Local CI/CD)**

Task: Create a containerized pipeline environment.  
Requirements:

* Service ci-runner: Uses a Node.js image.  
* Volumes: Mount the local repo to the container.  
* Command: A script that runs the full workflow (Lint \-\> Test \-\> Build).  
* **Output File:** docker-compose.ci.yml

## **PART 2.5: Infrastructure Scaffolding Directives**

*CRITICAL: You MUST generate these files to initialize the physical project structure. Do not assume they exist.*

### **Directive 6: Scaffold Monorepo Root**

Task: Create the root configuration.
Requirements:
*   **Create File:** `package.json`
*   **Content:**
    ```json
    {
      "name": "monorepo-root",
      "private": true,
      "workspaces": ["apps/*", "packages/*"],
      "scripts": {
        "build": "npm run build --workspaces",
        "test": "npm run test --workspaces"
      }
    }
    ```
*   **Create File:** `tsconfig.base.json` (Standard React+Node config).

### **Directive 7: Scaffold Web App (apps/web)**

Task: Create the React Frontend.
Requirements:
*   **Create File:** `apps/web/package.json` (Deps: react, react-dom, vite, @ui/tokens).
*   **Create File:** `apps/web/vite.config.ts` (Standard Vite setup).
*   **Create File:** `apps/web/index.html` (Entry point pointing to src/main.tsx).
*   **Create File:** `apps/web/src/main.tsx` (React Root).
*   **Create File:** `apps/web/src/App.tsx` (Hello World component).

### **Directive 9: Generate .eslintrc.cjs (Root Linting)**

Task: Create the Universal Lint Config.
Requirements:
*   **Create File:** `.eslintrc.cjs`
*   **Content:**
    *   Extend: `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:react-hooks/recommended`.
    *   Ignore Patterns: `dist`, `node_modules`, `coverage`.

### **Directive 10: Configure TurboRepo (The Build System)**

Task: Set up the optimized build pipeline.
Requirements:
*   **Create File:** `turbo.json`
*   **Content:**
    ```json
    {
      "$schema": "https://turbo.build/schema.json",
      "pipeline": {
        "build": {
          "dependsOn": ["^build"],
          "outputs": ["dist/**"]
        },
        "lint": {},
        "test": {},
        "dev": {
          "cache": false,
          "persistent": true
        }
      }
    }
    ```

## **PART 3: The Master Workflow File**

*This file references all rules and defines the execution order. Use this to orchestrate the SDLC.*

### **Workflow Definition: pipeline.workflow.yaml**

name: "Local CI/CD Pipeline"  
description: "Enforces Master Protocol standards before code commit."

variables:  
  REPORTS\_DIR: "./artifacts/reports"  
  COVERAGE\_DIR: "./artifacts/coverage"

stages:  
  \- name: "Sanity Check"  
    steps:  
      \- command: "npm run lint"  
        description: "Checks code style and import sorting (Standard 2)."  
      \- command: "npm run type-check"  
        description: "Verifies TypeScript integrity."

  \- name: "Logic Verification (TDD)"  
    steps:  
      \- command: "npm run test:unit \-- \--coverage"  
        description: "Runs Jest unit tests. Fails if coverage \< 80% (Standard 3)."  
        output: "${COVERAGE\_DIR}/lcov-report/index.html"

  \- name: "Build Verification"  
    steps:  
      \- command: "npm run build:core"  
      \- command: "npm run build:web"  
        description: "Ensures the app compiles for desktop/web."

  \- name: "User Simulation (E2E)"  
    steps:  
      \- command: "npm run test:e2e"  
        description: "Runs Playwright scenarios against the built web app."  
        output: "${REPORTS\_DIR}/playwright-report"

  \- name: "Containerized Execution"  
    instruction: "Run the following command to execute all above steps in isolation:"  
    command: "docker-compose \-f docker-compose.ci.yml up \--abort-on-container-exit"

### **Protocol Checklist for Developers**

1. \[ \] Did you write the test **before** the code?  
2. \[ \] Did you use Design Tokens instead of hardcoded hex values?  
3. \[ \] Does your component have zero external margins?  
4. \[ \] Did you run the Docker CI locally before pushing?

## **PART 4: Initialization Protocol**

*Run these commands to bring the "Body" (Project) and "Brain" (Context) to life.*

### **Phase 1: System Prep**
1.  **Version Control:**
    *   `git init`
    *   `touch .gitignore` (Population: `node_modules`, `.env`, `coverage`, `dist`, `__pycache__`, `.DS_Store`).
2.  **Environment:**
    *   `touch .env` (Add `VITE_API_URL=http://localhost:8000`).

### **Phase 2: Dependency Injection**
1.  **Frontend/Root:** `npm install`

### **Phase 3: QA & DX Setup (The Safety Net)**
1.  **Lefthook (Git Hooks):**
    *   Install: `npm install -D lefthook`
    *   Config: Create `lefthook.yml`. Map `pre-commit` to `npx lint-staged`.
2.  **Lint-Staged (Atomic Speed):**
    *   Install: `npm install -D lint-staged`
    *   Config: Create `.lintstagedrc`.
    *   *Rule:* 
        ```json
        {
          "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "npm test -- --bail --findRelatedTests"],
          "*.{json,md,yml,css,scss}": ["prettier --write"]
        }
        ```
        *   *Note on Testing:* The `--findRelatedTests` flag tells Jest to run **only** the unit tests related to the changed files. This is fast and ensures you don't break existing logic you touched. Full coverage checks are reserved for the CI pipeline.
3.  **Editor Config:**
    *   Generate `.vscode/settings.json` with `"editor.formatOnSave": true`.
    *   Generate `.vscode/extensions.json` recommending `dbaeumer.vscode-eslint` and `esbenp.prettier-vscode`.

### **Phase 4: Testing Infrastructure**
1.  **React Testing Library:**
    *   Install: `npm install -D @testing-library/react @testing-library/jest-dom jsdom`
    *   Setup: Create `apps/web/src/setupTests.ts` { import '@testing-library/jest-dom'; }
    *   Create a dummy test `apps/web/src/App.test.tsx` to confirm the runner passes.

### **Phase 5: Scripts & Orchestration (Monorepo Powers)**
1.  **Turbo Injection:**
    *   Add scripts to root `package.json`:
        *   `"dev": "turbo run dev"`
        *   `"build": "turbo run build"`
        *   `"lint": "turbo run lint"`
        *   `"test": "turbo run test"`
        *   `"clean": "rm -rf node_modules **/**/node_modules"`
