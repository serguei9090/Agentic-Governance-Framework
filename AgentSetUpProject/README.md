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

## **How It Works**

### **The "Injection" Process**
The file `agentContext.md` acts as the **Installer**.
1.  It reads all the markdown files in `context/rules/`.
2.  It instructs the Agent to generate the lightweight `.agent/` folder in the target project.
3.  The Agent effectively "Installs" its own operating system instructions.

### **ProDoc & Self-Maintenance**
This framework includes a **"Staleness Protocol"**. If the codebase changes significantly, the Agent is mandated to regenerate its own `relations.md` (Context Map) before writing new code. This solves the "Context Window" limitation.
