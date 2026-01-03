# **Agent Setup Project**

**The "Brain" of the Enterprise Architecture.**
This folder contains the source of truth for all rules, contexts, and protocols that govern the AI Agent.

---

## **The 10 Pillars of Governance**

Your Agent is trained to strictly follow these directives. They are organized into `context/rules/`:

### **1. Core Architecture**
*   **UI/Design:** `AtomicDesignFramework.md` (Design Tokens, Primitives, Features).
*   **State Management:** `StateManagement.md` (Server State vs Client State).
*   **Relations:** `ProDoc.md` (The Living Dependency Graph).

### **2. Operational Excellence**
*   **Testing:** `TestingArchitecture.md` (BDD/TDD, Vitest, Playwright).
*   **Security:** `SecurityFramework.md` (Shift-Left DevSecOps).
*   **Code Quality:** `CodeQualityFramework.md` (Lefthook, SonarQube, Linting).
*   **Error Handling:** `ErrorHandlingDirective.md` (RFC 7807 Standard).

### **3. Global & Scale**
*   **Internationalization:** `i18nProtocol.md` (Day-1 Tokenization).
*   **Performance:** `PerformanceBudget.md` (LCP < 2.5s Gates).
*   **Orchestration:** `CiCdFramework.md` (Local vs Cloud Master Switch).

---

## **4. Agentic Workflows**

This system includes a suite of **9 Operational Workflows** (Release, Security, Hotfix, etc.) stored in `context/workflows/`. These are automatically copied to `.agent/workflows/` during project setup.

### **How to Use Workflows (2 Methods)**

You have full control over how your team (Humans and Agents) triggers these workflows.

#### **Method A: Implicit Hooks (Automated)**
Use `lefthook` to bind workflows to Git Events.
*   *Example:* `pre-push` runs `npm run test` (which triggers `test-coverage-report.md`).

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
