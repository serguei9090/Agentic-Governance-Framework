# **Agent Context Generation Master Protocol**

**Reference Base:** `agentproject_setup.md`
**Goal:** Generate a comprehensive `.agent` system context folder that governs all future AI interactions and development standards for the project.

---

## **PART 1: The Context Injection Directives**

INSTRUCTION: You are to create the following directory structure and file contents in the project root.

### **Target Directory Structure**
```
AGENTS.MD
.agent/
└── rules/
    ├── code_styleguides/
    ├── atomic_design_rules.md
    ├── diagramuml.md
    ├── relations.md
    ├── standarts.md
    ├── test.md
    ├── errormanagement.md
    ├── security.md
    ├── database.md
    ├── database__schema.md
    ├── performance.md
    └── api_documentation.md
```

---

## **PART 2: File Content Specifications**

### **1. `AGENTS.MD` (The Persona)** (Project Root)
*   **Purpose:** Defines the "Identity" of the AI Agent working on this project.
*   **Required Content:**
    *   Role: Senior Full-Stack Architect & Engineer.
    *   Mission: Maintain strict adherence to Atomic Design, TDD, and Security protocols.
    *   Directives: Always check `.agent/rules/` before writing code.

### **2. `.agent/rules/atomic_design_rules.md` (Design System)**
*   **Purpose:** Enforce the 3-Tier Atomic Architecture defined in `agentproject_setup.md`.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/UI_Framework/AtomicDesignFramework.md` verbatim into this file.
    *   **Tier 1 (Tokens):** Rules for using `packages/ui/src/tokens`. NEVER hardcode hex values.
    *   **Tier 2 (Primitives):** Rules for `packages/ui/src/components`. Components must be pure, stateless (mostly), and have **ZERO external margins**.
    *   **Tier 3 (Features):** Rules for Feature/Page assembly. This is where business logic and layout (margins/positioning) live.

### **3. `.agent/rules/diagramuml.md` (Visual Architecture)**
*   **Purpose:** Instructions for generating diagrams.
*   **Required Content:**
    *   Standard: Mermaid.js.
    *   Types: Sequence Diagrams for API flows, Class Diagrams for Core Logic, Entity-Relationship (ER) for Database.

### **4. `.agent/rules/relations.md` (Dependency Map)**
*   **Purpose:** Documentation of high-level relationships.
*   **Required Content:**
    *   Map between "Features" (UI) and "Services" (Core).
    *   Define boundaries: UI never calls DB directly; UI -> Core Service -> API/DB.

### **5. `.agent/rules/standarts.md` (Coding Standards)**
*   **Purpose:** granular code style and hygiene.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/CodeQualityFramework/CodeQualityFramework.md` verbatim into this file.
    *   **Toolchain:** Enforce usage of **ESLint + SonarJS** (Logic), **Prettier** (Style), and **Lefthook** (Git Hooks).
    *   **Naming:** PascalCase for Components, camelCase for functions/vars.
    *   **Comments:** JSDoc for complex logic; clean code preferred over excessive comments.
    *   **File Structure:** Co-location of files (Component + Test + Story).

### **6. `.agent/rules/test.md` (Quality Assurance)**
*   **Purpose:** The Testing & Linting Mandate.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/TestsFramework/TestingArchitecture.md` verbatim into this file.
    *   **Modes:** Reference `context/rules/TestsFramework/MasterAgentOpsMode.md` for identifying "New Feature" vs "Retrofit" modes.
    *   **Unit Tests:** Every component/function MUST have a `.test.ts/tsx` file (Vitest).
    *   **Linting:** Run `npm run lint` and `npm run type-check` before any commit.
    *   **Reports:** All test reports must be generated in `./reports/` (e.g., `./reports/coverage/`, `./reports/junit.xml`).
    *   **Coverage:** Minimum 80% mandatory.

### **7. `.agent/rules/ErrorHandlingDirective.md` (Resilience)**
*   **Purpose:** Handling failures gracefully.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/ErrorFramework/ErrorHandlingDirective.md` verbatim into this file.
    *   **Directives:** Ensure strict adherence to RFC 7807, 4xx/5xx separation, and security sanitization as defined in the source directive.

### **8. `.agent/rules/security.md` (Defense)**
*   **Purpose:** OWASP Top 10 mitigation.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/SecurityFramework/SecurityFramework.md` verbatim into this file.
    *   **Input:** Validate EVERYTHING (Zod/Yup schemas).
    *   **Output:** Escape all HTML (prevent XSS).
    *   **Auth:** Directives on avoiding client-side secrets.

### **9. `.agent/rules/database.md` & `database__schema.md` (Data Layer)**
*   *Condition: Only generate if the project uses a Database.*
*   **`database.md`:** Connection pooling, ORM best practices (Prisma/TypeORM).
*   **`database__schema.md`:** A live markdown representation of the DB schema (Tables, Columns, Types, Relations).

### **10. Enterprise Ready Extensions**

#### **`.agent/rules/performance.md`**
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/Performance/PerformanceBudget.md` verbatim into this file.
    *   **Directives:** Block any PR that exceeds 2.5s LCP or 150KB Initial Bundle.
    *   **Tooling:** Enforce via Lighthouse CI.

#### **`.agent/rules/state_management.md`**
*   **Purpose:** Architecture for Data vs UI State.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/StateManagement/StateManagement.md` verbatim into this file.
    *   **Constraint:** Strictly separate Server State (React Query) from Client State (Zustand).

#### **`.agent/rules/i18n.md`**
*   **Purpose:** Global Scale Readiness.
*   **Required Content:**
    *   **Source:** You MUST copy the content of `context/rules/Internationalization/i18nProtocol.md` verbatim into this file.
    *   **Constraint:** No hardcoded strings. Use `i18next` keys in nested JSON format.

#### **`.agent/rules/api_documentation.md`**
*   **Required Content:**
    *   OpenAPI/Swagger 3.0 Standard.
    *   All backend endpoints must have a corresponding spec definition.

### **11. Knowledge & Knowledge Graph (ProDoc)**
*   **Goal:** Allow the Agent to understand the system without reading every file.
*   **Directives:**
    *   **Source 1:** `context/rules/ProDoc/ProDoc.md`
    *   **Source 2:** `context/rules/ProDoc/relations.md` (Dependency Graph)
    *   **Protocol:** "Staleness Check". Before writing complex code, you MUST check if `relations.md` is older than the last major commit. If so, REGENERATE it.

### **12. DevOps Orchestration (CI/CD)**
*   **Goal:** Deterministic Software Delivery.
*   **Directives:**
    *   **Source 1:** `context/rules/CICD/CiCdFramework.md`
    *   **Source 2:** `context/rules/CICD/CICDTools.md` (The Manifest)
    *   **Protocol:** "Master Switch". Check `CICDTools.md`. If "Level 0" is selected, do NOT generate any pipeline files. If "Level 1+", enforce the Matrix.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  If the project does **not** have a database, ensure `database*.md` files state "N/A" or are omitted.
3.  Generate the full `.agent` folder structure.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
