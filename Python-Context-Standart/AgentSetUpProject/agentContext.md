# **Agent Context Generation Master Protocol (Python/Reflex)**

**Reference Base:** `ReflexAnsibleProject.md`
**Goal:** Generate a comprehensive `.agent` system context folder for a Python/Reflex environment.

---

## **PART 1: The Context Injection Directives**

INSTRUCTION: You are to create the following directory structure and file contents in the project root.

### **Target Directory Structure**
```
AGENTS.MD
.agent/
├── workflows/
└── rules/
    ├── UI_Framework/
    │   ├── ReflexDesignSystem.md
    │   └── MotionSystem.md
    ├── TestsFramework/
    │   └── TestingArchitecture.md
    ├── CodeQualityFramework/
    │   └── CodeQualityFramework.md
    ├── ErrorFramework/
    │   └── ErrorHandlingDirective.md
    ├── SecurityFramework/
    │   └── SecurityFramework.md
    ├── Performance/
    │   └── PerformanceBudget.md
    ├── StateManagement/
    │   └── StateManagement.md
    ├── Internationalization/
    │   └── i18nProtocol.md
    ├── Data_Governance/
    │   └── PrivacyByDesign.md
    ├── CICD/
    │   ├── CiCdFramework.md
    │   └── CICDTools.md
    ├── ProDoc/
    │   ├── ProDoc.md
    │   └── relations.md
    └── Architecture/
        ├── DiagramStandards.md
        ├── DatabaseConfig.md
        └── ApiStandards.md
```

---

## **PART 2: File Content Specifications**

### **1. `AGENTS.MD` (The Persona)** (Project Root)
*   **Purpose:** Defines the "Identity" of the AI Agent working on this project.
*   **Required Content:**
    *   Role: Senior Python Full-Stack Architect (Reflex Specialist).
    *   Mission: Maintain strict adherence to PEP 8, Type Hinting (MyPy), and Reflex patterns.
    *   **Tech Stack Resolution Protocol (Priority Order):**
        1.  **User Definition:** IF the Project Requirements File specifies a tool, that choice is **LAW**.
        2.  **Framework Default:** Use Reflex (Frontend), FastAPI (Backend logic), SQLAlchemy (ORM).
        3.  **Agent Discretion:** Only if neither defined, choose the robust standard.
    *   **Tooling Authority:** The final resolved stack MUST be documented in `.agent/ProDoc/tech-stack.md`.
    *   Directives: Always check `.agent/rules/` before writing code.

### **2. `.agent/rules/UI_Framework/ReflexDesignSystem.md`**
*   **Purpose:** Enforce Reflex Component Patterns.
*   **Required Content:**
    *   **Core:** Use `reflex.components` mapped to Atomic Design principles (Atoms = Basic Primitives, Molecules = Composed Components).
    *   **Styling:** Use standard Reflex props (never raw CSS unless authorized).
    *   **Responsiveness:** Mobile-first approach using Reflex responsive props.

### **3. `.agent/rules/Architecture/DiagramStandards.md`**
*   **Purpose:** Instructions for generating diagrams.
*   **Required Content:**
    *   Standard: Mermaid.js.

### **4. `.agent/rules/ProDoc/relations.md`**
*   **Purpose:** Dependency Map.
*   **Required Content:**
    *   Map between "Pages" (Reflex) and "State" (Python Classes).

### **5. `.agent/rules/CodeQualityFramework/CodeQualityFramework.md`**
*   **Purpose:** Coding Standards (Python Edition).
*   **Required Content:**
    *   **Source:** Copy `context/rules/CodeQualityFramework/CodeQualityFramework.md`.
    *   **Key Tools:** Ruff (Linting), MyPy (Strict Typing), Black (Formatting).

### **6. `.agent/rules/TestsFramework/TestingArchitecture.md`**
*   **Purpose:** QA Mandate.
*   **Required Content:**
    *   **Source:** Copy `context/rules/TestsFramework/TestingArchitecture.md`.
    *   **Frameworks:** Pytest (Unit/Integration), Playwright (E2E for Reflex).

### **7. `.agent/rules/ErrorFramework/ErrorHandlingDirective.md`**
*   **Purpose:** Resilience.
*   **Required Content:**
    *   **Source:** Copy `context/rules/ErrorFramework/ErrorHandlingDirective.md`.
    *   **Python Specifics:** Use `try/except` blocks with specific exceptions. Log errors using `loguru` or standard `logging`.

### **8. `.agent/rules/SecurityFramework/SecurityFramework.md`**
*   **Purpose:** Defense.
*   **Required Content:**
    *   **Source:** Copy `context/rules/SecurityFramework/SecurityFramework.md`.
    *   **Ansible Specifics:** Never commit secrets/keys. Use `ansible-vault` or env vars.

### **9. `.agent/rules/Architecture/DatabaseBestPractices.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Architecture/DatabaseBestPractices.md`.
    *   **ORM:** SQLAlchemy (via `rx.Model`).

### **10. Enterprise Ready Extensions**

#### **`.agent/rules/Performance/PerformanceBudget.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Performance/PerformanceBudget.md`.

#### **`.agent/rules/StateManagement/StateManagement.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/StateManagement/StateManagement.md`.
    *   **Reflex Specific:** State must be immutable where possible. Use Computed Vars for derived data.

#### **`.agent/rules/Internationalization/i18nProtocol.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Internationalization/i18nProtocol.md`.

#### **`.agent/rules/Architecture/ApiStandards.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Architecture/ApiStandards.md`.

### **11. `.agent/rules/ProDoc/ProDoc.md`**
*   **Purpose:** Knowledge Engine.
*   **Required Content:**
    *   **Source:** Copy `context/rules/ProDoc/ProDoc.md` to `.agent/rules/ProDoc/ProDoc.md`.

### **12. `.agent/rules/CICD/CiCdFramework.md`**
*   **Purpose:** DevOps.
*   **Required Content:**
    *   **Source:** Copy `context/rules/CICD/CiCdFramework.md`.

### **13. `.agent/rules/Data_Governance/PrivacyByDesign.md`**
*   **Purpose:** Compliance.
*   **Required Content:**
    *   **Source:** Copy `context/rules/Data_Governance/PrivacyByDesign.md`.

### **14. Agentic Workflows**
*   **Goal:** Standardized operational procedures for the Agent.
*   **Directives:**
    *   **Source:** Copy all files from `context/workflows/*.md` to `.agent/workflows/`.
