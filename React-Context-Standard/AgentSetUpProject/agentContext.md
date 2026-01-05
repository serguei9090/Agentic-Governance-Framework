# **Agent Context Generation Master Protocol**

**Reference Base:** `agentproject_setup.md`
**Goal:** Generate a comprehensive `.agent` system context folder that governs all future AI interactions and development standards for the project.

---

## **PART 1: The Context Injection Directives**

### **1. Bulk Injection (The "Clone" Protocol)**
Instead of creating files one by one, you MUST perform a bulk recursive copy of the standard context to ensure NO rules are missed.

**Command Execution:**
1.  **Rules:** `cp -r {SourcePath}/Context/rules .agent/rules`
2.  **Workflows:** `cp -r {SourcePath}/Context/workflows .agent/workflows`

*Note: Replace `{SourcePath}` with the actual path to `AgentSetUpProject`.*

### **2. Validation Gate**
After copying, you MUST verify that the following critical files exist in the target `.agent` folder:
*   `.agent/rules/Architecture/DiagramStandard.md`
*   `.agent/rules/ProDoc/RelationsStandard.md`
*   `.agent/workflows/` (Directory matches source)

---

## **PART 2: Customization & Hydration**

### **1. `AGENTS.MD` (The Persona)** (Project Root)
*   **Purpose:** Defines the "Identity" of the AI Agent.
*   **Required Content:**
    *   **Role:** Senior Full-Stack Architect & Engineer.
    *   **Framework Binding:** You MUST explicitly reference the `.agent/rules` directory as the source of truth for all operational standards (Coding, Security, Testing). The agent acting on this file MUST understand it is an **Orchestrator** of these existing rules, not a creator of new ones.
    *   **Tech Stack Resolution:** Follow the priorities: User Definition > Framework Default > Agent Discretion.
    *   **Tooling Authority:** Create `ProDoc/tech-stack.md`. You MUST audit the Requirement File and output a categorized list (Frontend, Backend, Database, Cloud) of **ALL** mentioned technologies (e.g., if 'drain3' is mentioned, list it).
    *   **Planning Protocol:** You MUST enforce the Two-Tier Planning Protocol. Before coding, determine complexity: If < 5 lines/1 file -> use `fastPlan.md`. Else -> Create `Plan_[Name]_[ID].md`. Refer to `.agent/rules/Workflows/PlanningProtocol.md`.

### **2. `ProDoc/` (Project Root)**
*   **Purpose:** Knowledge Engine.
*   **Instruction:**
    *   Generate the folder `ProDoc/` at the **PROJECT ROOT**.
    *   **Extraction Mandate:** You MUST parse the input Requirement File and **EXTRACT** the following sections into `ProDoc/documentation/product.md` verbatim:
        1. Executive Summary
        2. Feature List
        3. Data Flow
        4. User Personas
    *   **Product Guidelines:** Generate `ProDoc/documentation/product-guidelines.md`. Extract any specific business rules, product vision, or non-functional requirements found in the input.
    *   **Day 1 Diagram:** IMMEDIATELY after generating the context, you MUST generate a `ProDoc/documentation/system_context.md` file (Markdown) containing a Level 1 System Diagram (Mermaid block) that visualizes the User -> Frontend -> Backend flow defined in the requirements. Use `DiagramStandard.md` rules.

---

### 3. Context Pruning (Rule Filtering)
*   **Database Audit:** Inspect the project requirements. If the project does **NOT** require a database:
    *   **DELETE** `.agent/rules/Architecture/DatabaseStandard.md` (or similar).
    *   Ensure no database-related workflows remain.
*   **Tech Stack Alignment:** Remove any other rule files that do not pertain to the selected tech stack (e.g., if Python is not used, remove Python specific rules if they were copied).

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  Generate the full `.agent` folder structure (Part 1).
3.  Perform Customization & Hydration (Part 2), including the creation of `AGENTS.MD`, `ProDoc/`, and Pruning of unused rules.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
