# **Agent Context Generation Master Protocol (Python/Reflex)**

**Reference Base:** `ReflexAnsibleProject.md`
**Goal:** Generate a comprehensive `.agent` system context folder for a Python/Reflex environment.

---

## **PART 1: The Context Injection Directives**

## **PART 1: The Context Injection Directives**

### **1. Bulk Injection (The "Clone" Protocol)**
Instead of creating files one by one, you MUST perform a bulk recursive copy of the standard context to ensure NO rules are missed.

**Command Execution:**
1.  **Rules:** `cp -r {SourcePath}/context/rules .agent/rules`
2.  **Workflows:** `cp -r {SourcePath}/context/workflows .agent/workflows`

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
    *   **Role:** Senior Python Full-Stack Architect (Reflex Specialist).
    *   **Mission:** Maintain strict adherence to PEP 8, Type Hinting (MyPy), and Reflex patterns.
    *   **Framework Binding:** You MUST explicitly reference the `.agent/rules` directory as the source of truth for all operational standards (Coding, Security, Testing). The agent acting on this file MUST understand it is an **Orchestrator** of these existing rules, not a creator of new ones.
    *   **Tech Stack Resolution:** Follow the priorities: User Definition > Framework Default > Agent Discretion.
    *   **Tooling Authority:** Create `ProDoc/tech-stack.md`. You MUST audit the Requirement File and output a categorized list (Frontend, Backend, Database, Cloud) of **ALL** mentioned technologies (e.g., if 'Ruff' is mentioned, list it).
    *   **Planning Protocol:** You MUST enforce the Two-Tier Planning Protocol. Before coding, determine complexity: If < 5 lines/1 file -> use `fastPlan.md`. Else -> Create `Plan_[Name]_[ID].md`. Refer to `.agent/workflows/PlanningProtocol.md`.

### **2. `ProDoc/` (Project Root)**
*   **Purpose:** Knowledge Engine.
*   **Instruction:**
    *   Generate the folder `ProDoc/` at the **PROJECT ROOT**.
    *   **Extraction Mandate:** You MUST parse the input Requirement File and **EXTRACT** the following sections into `ProDoc/documentation/product.md` verbatim:
        1. Executive Summary
        2. Feature List
        3. Data Flow
        4. User Personas
    *   **Guidelines:** Generate `ProDoc/documentation/product-guidelines.md`. Extract specific business rules, product vision, or non-functional requirements that should guide decision making.
    *   **Day 1 Diagram:** IMMEDIATELY after generating the context, you MUST generate a `ProDoc/system_context.md` file containing a Level 1 System Diagram (Mermaid) that visualizes the User -> Frontend -> Backend flow defined in the requirements. Use `DiagramStandard.md` rules.

### **3. Agentic Workflows**
*   **Goal:** Standardized operational procedures for the Agent.
*   **Directives:**
    *   **Source:** Copied via Bulk Protocol in Part 1.
    *   **Purpose:** Use these files to perform complex multi-step tasks.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  **Execute Part 1 (Bulk Injection).**
3.  **Execute Part 2 (Hydration).**
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
