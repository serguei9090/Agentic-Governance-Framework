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
├── workflows/
└── rules/
    ├── UI_Framework/
    │   ├── AtomicDesignFramework.md
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
    *   Role: Senior Full-Stack Architect & Engineer.
    *   Mission: Maintain strict adherence to Atomic Design, TDD, and Security protocols.
    *   Mission: Maintain strict adherence to Atomic Design, TDD, and Security protocols.
    *   **Tech Stack Resolution Protocol (Priority Order):**
        1.  **User Definition:** IF the Project Requirements File (referenced in Step 3 of `startAgentProjectSetUp`) specifies a tool, that choice is **LAW**.
        2.  **Framework Default:** IF the user is silent on a topic, you **MUST** use the Framework Default (e.g., "Zustand").
        3.  **Agent Discretion:** Only if neither defined, choose the robust standard.
    *   **Tooling Authority:** The final resolved stack MUST be documented in `.agent/ProDoc/tech-stack.md`. Once written, this file is the "Allowed Toolbelt".
    *   Directives: Always check `.agent/rules/` before writing code.

### **2. `.agent/rules/UI_Framework/AtomicDesignFramework.md`**
*   **Purpose:** Enforce the 3-Tier Atomic Architecture.
*   **Required Content:**
    *   **Source:** Copy `context/rules/UI_Framework/AtomicDesignFramework.md`.
    *   **Motion:** Copy `context/rules/UI_Framework/MotionSystem.md` to `.agent/rules/UI_Framework/MotionSystem.md`.

### **3. `.agent/rules/Architecture/DiagramFramework.md`**
*   **Purpose:** Agentic Visual Architecture Standard (AVAS) - Visual Pattern Recognition.
*   **Required Content:**
    *   **Source:** Copy `context/rules/Architecture/DiagramFramework.md`.
    *   Standard: Mermaid.js.
    *   Protocol: C4 Adaptation.
    *   Integration: MUST reference `ProDoc/relations.md` for node/service consistency.

### **4. `.agent/rules/ProDoc/relations.md`**
*   **Purpose:** Dependency Map.
*   **Required Content:**
    *   Map between "Features" (UI) and "Services" (Core).

### **5. `.agent/rules/CodeQualityFramework/CodeQualityFramework.md`**
*   **Purpose:** Coding Standards.
*   **Required Content:**
    *   **Source:** Copy `context/rules/CodeQualityFramework/CodeQualityFramework.md`.

### **6. `.agent/rules/TestsFramework/TestingArchitecture.md`**
*   **Purpose:** QA Mandate.
*   **Required Content:**
    *   **Source:** Copy `context/rules/TestsFramework/TestingArchitecture.md`.

### **7. `.agent/rules/ErrorFramework/ErrorHandlingDirective.md`**
*   **Purpose:** Resilience.
*   **Required Content:**
    *   **Source:** Copy `context/rules/ErrorFramework/ErrorHandlingDirective.md`.

### **8. `.agent/rules/SecurityFramework/SecurityFramework.md`**
*   **Purpose:** Defense.
*   **Required Content:**
    *   **Source:** Copy `context/rules/SecurityFramework/SecurityFramework.md`.

### **9. `.agent/rules/Architecture/DatabaseBestPractices.md`**
*   *Condition: Only if DB usage.*
*   **Required Content:**
    *   **Source:** Copy `context/rules/Architecture/DatabaseBestPractices.md`.
    *   **Schema:** The Agent MUST generate `ProDoc/relations/database_schema.md` (Live representation) if `schema.prisma` exists.

### **10. Enterprise Ready Extensions**

#### **`.agent/rules/Performance/PerformanceBudget.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Performance/PerformanceBudget.md`.

#### **`.agent/rules/StateManagement/StateManagement.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/StateManagement/StateManagement.md`.

#### **`.agent/rules/Internationalization/i18nProtocol.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Internationalization/i18nProtocol.md`.

#### **`.agent/rules/Architecture/ApiStandards.md`**
*   **Required Content:**
    *   **Source:** Copy `context/rules/Architecture/ApiStandards.md`.
    *   OpenAPI/Swagger 3.0 Standard.
    *   All backend endpoints must have a corresponding spec definition.

### **11. `.agent/rules/ProDoc/ProDoc.md`**
*   **Purpose:** Knowledge Engine.
*   **Required Content:**
    *   **Source:** Copy `context/rules/ProDoc/ProDoc.md` to `.agent/rules/ProDoc/ProDoc.md`.
    *   **Generation Mandate:** You MUST generate the folder `ProDoc/` at the **PROJECT ROOT** (NOT inside `.agent`).
    *   **Artifacts:** Inside `ProjectRoot/ProDoc/`, generate `documentation/product.md` and `tech-stack.md` based on User inputs.
    *   **Standard:** Use these files to drive all future decisions.

### **12. `.agent/rules/CICD/CiCdFramework.md`**
*   **Purpose:** DevOps.
*   **Required Content:**
    *   **Source:** Copy `context/rules/CICD/CiCdFramework.md` and `CICDTools.md`.

### **13. `.agent/rules/Data_Governance/PrivacyByDesign.md`**
*   **Purpose:** Compliance.
*   **Required Content:**
    *   **Source:** Copy `context/rules/Data_Governance/PrivacyByDesign.md`.

### **14. Agentic Workflows**
*   **Goal:** Standardized operational procedures for the Agent.
*   **Directives:**
    *   **Source:** Copy all files from `context/workflows/*.md` to `.agent/workflows/`.
    *   **Purpose:** These files define how to perform complex multi-step tasks (like "Generate Report") deterministically.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  If the project does **not** have a database, ensure `database*.md` files state "N/A" or are omitted.
3.  Generate the full `.agent` folder structure.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
