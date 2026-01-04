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
*   `.agent/rules/Architecture/DiagramFramework.md`
*   `.agent/rules/ProDoc/relations.md`
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
    *   **Day 1 Diagram:** IMMEDIATELY after generating the context, you MUST generate a `ProDoc/documentation/system_context.md` file (Markdown) containing a Level 1 System Diagram (Mermaid block) that visualizes the User -> Frontend -> Backend flow defined in the requirements. Use `DiagramFramework.md` rules.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  If the project does **not** have a database, ensure `database*.md` files state "N/A" or are omitted.
3.  Generate the full `.agent` folder structure.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
