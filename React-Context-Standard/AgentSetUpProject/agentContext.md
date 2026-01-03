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
    *   **Tech Stack Resolution:** Follow the priorities: User Definition > Framework Default > Agent Discretion.
    *   **Tooling Authority:** Document resolved stack in `.agent/ProDoc/tech-stack.md`.

### **2. `ProDoc/` (Project Root)**
*   **Purpose:** Knowledge Engine.
*   **Instruction:**
    *   Generate the folder `ProDoc/` at the **PROJECT ROOT**.
    *   Generate `ProDoc/documentation/product.md` and populate it with the content from the Project Requirements file (e.g., `LogVibeAnalyzerProject.md`).
    *   Generate `ProDoc/tech-stack.md` with the resolved tools.

---

## **Execution Instructions for Agent**

1.  Read this file completely.
2.  If the project does **not** have a database, ensure `database*.md` files state "N/A" or are omitted.
3.  Generate the full `.agent` folder structure.
4.  Populate each file with professional, comprehensive technical writing suitable for Senior Engineers.
