# **Agent Setup Project (Python)**

**The "Brain" of the Enterprise Architecture.**
This folder contains the source of truth for all rules, contexts, and protocols that govern the AI Agent.

---

## **The 10 Pillars of Governance**

Your Agent is trained to strictly follow these directives. They are organized into `context/rules/`:
> **Note:** Files in `.agent/rules` are **Standards** (static quality/design requirements) while `.agent/workflows` are **Protocols** (step-by-step procedures).

### **1. Core Architecture**
*   **Structure:** `Architecture/AppStructureStandard.md` (Reflex/FastAPI Layout).
*   **State Management:** `StateManagementStandard.md` (Reflex Logic).
*   **Relations:** `ProDocStandard.md` (The Living Dependency Graph).

### **2. Operational Excellence**
*   **Testing:** `TestingStandard.md` (Pytest, Playwright).
*   **Security:** `SecurityStandard.md` (Shift-Left DevSecOps).
*   **Code Quality:** `CodeQualityStandard.md` (Lefthook, Ruff, MyPy).
*   **Error Handling:** `ErrorStandard.md` (RFC 7807 Standard).

### **3. Global & Scale**
*   **Internationalization:** `i18nStandard.md`.
*   **Performance:** `PerformanceStandard.md`.
*   **Orchestration:** `CiCdStandard.md`.
*   **Compliance:** `PrivacyByDesignStandard.md`.

---

## **4. Agentic Workflows**

This system includes a suite of **9 Operational Workflows** (Release, Security, Hotfix, etc.) stored in `context/workflows/`. These are automatically copied to `.agent/workflows/` during project setup.

### **How to Use Workflows (2 Methods)**

You have full control over how your team (Humans and Agents) triggers these workflows.

#### **Method A: Implicit Hooks (Automated)**
Use `lefthook` to bind workflows to Git Events.
*   *Example:* `pre-push` runs `make test` (which triggers `test-coverage-report.md`).

#### **Method B: Explicit Rule Reference (On-Demand)**
If you prefer explicit control, you can update any Rule file (e.g., `test.md`) to reference a specific workflow. This tells the Agent **exactly** which procedure to follow.

**Example: Adding to `.agent/rules/test.md`:**
```markdown
## Release Validation Procedure
When the user asks to "Validate Release", you **MUST** execute the exact steps defined in:
`[Release Protocol](file:///.agent/workflows/release-prepare.md)`

DO NOT hallucinate new steps. Follow the workflow file line-by-line.
```

By referencing the file path `.../.agent/workflows/X.md`, you essentially "Import" that capability into the Rule.

---

## **How It Works**

### **The "Injection" Process**
The file `agentContext.md` acts as the **Installer**.
1.  It reads all the markdown files in `context/rules/`.
2.  It copies all workflows from `context/workflows/`.
3.  The Agent effectively "Installs" its own operating system instructions into `.agent/`.

### **ProDoc & Self-Maintenance**
This framework includes a **"Staleness Protocol"**. If the codebase changes significantly, the Agent is mandated to regenerate its own `relations.md` (Context Map) before writing new code. This solves the "Context Window" limitation.
