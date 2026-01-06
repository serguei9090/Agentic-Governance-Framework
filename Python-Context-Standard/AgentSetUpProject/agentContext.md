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

## **PART 2: Customization & Hydration (THE BRAIN)**
> **CRITICAL WARNING:** This section is the most common point of failure. You **MUST** ensure `AGENTS.MD` and `ProDoc/` are fully populated. **Planning over Planning** is forbidden here — **DO** the hydration.

### **1. `AGENTS.MD` (The Persona)** (Project Root)
*   **Purpose:** Defines the "Identity" of the AI Agent.
*   **Required Content:**
    *   **Role:** Senior Python Full-Stack Architect (Reflex Specialist).
    *   **Mission:** Maintain strict adherence to PEP 8, Type Hinting (MyPy), and Reflex patterns.
    *   **Framework Binding:** You MUST explicitly reference the `.agent/rules` directory as the source of truth for all operational standards (Coding, Security, Testing). The agent acting on this file MUST understand it is an **Orchestrator** of these existing rules, not a creator of new ones.
    *   **Tech Stack Resolution:** Follow the priorities: User Definition > Framework Default > Agent Discretion.
    *   **Tooling Authority:** Create `ProDoc/tech-stack.md`. You MUST audit the Requirement File.
        *   **IF** the project needs a component (e.g., Database) but user didn't specify one -> Select the **Top Enterprise Standard** (best fit).
        *   **IF** the project does **NOT** need a component (e.g., Landing Page = No DB) -> **OMIT IT**. Do not hallucinate dependencies using the "Best Fit" rule for unneeded components.
    *   **Planning Protocol:** You **SHOULD** reference `.agent/workflows/PlanningProtocol.md` for complex tasks, but this is OPTIONAL for initial setup unless specified.

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
    *   **Relations Map:** Generate `ProDoc/documentation/relations.md`.
        *   **Source:** Copy the table structure from `.agent/rules/ProDoc/RelationsStandard.md`.
        *   **Action:** Populate it with the initial Features -> State mapping based on your System Diagram.
    *   **Day 1 Diagram:** IMMEDIATELY after generating the context, you MUST generate a `ProDoc/system_context.md` file (Markdown) containing a Level 1 System Diagram (Mermaid block) that visualizes the User -> Frontend -> Backend flow defined in the requirements. Use `DiagramStandard.md` rules.
    *   **HYDRATION CHECK:**
        *   If `ProDoc/documentation/product.md` contains only "TODO" or is empty -> **FAIL**.
        *   If `ProDoc/documentation/product-guidelines.md` is MISSING -> **FAIL**.
        *   **Action:** Go back and retry hydration.

### **3. Agentic Workflows**
*   **Goal:** Standardized operational procedures for the Agent.
*   **Directives:**
    *   **Source:** Copied via Bulk Protocol in Part 1.
    *   **Purpose:** Use these files to perform complex multi-step tasks.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  **Execute Part 1 (Bulk Injection).**
3.  Perform Customization & Hydration (Part 2), including the creation of `AGENTS.MD`, `ProDoc/`, and Pruning of unused rules.
    *   **STOP:** Check if `AGENTS.MD` exists.
    *   **STOP:** Check if `ProDoc/documentation/product.md` has content.
    *   **STOP:** Check if `ProDoc/documentation/product-guidelines.md` exists.
    *   If any are missing, RESTART Step 3.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
