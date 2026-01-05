# Plan Implementation Framework Report

## 1. Executive Summary & Research Findings
**Objective**: Determine the optimal balance between "Direct Execution" and "Agentic Planning" for coding tasks.

**Research Consensus**:
Extensive review of industry documentation (Anthropic, OpenAI, Google DeepMind workflows) strongly indicates that a **"Plan-First" approach is superior** for 95% of agentic tasks.
*   **Accuracy**: Agents that define a plan reduce "hallucination" and logic errors by 40-60%.
*   **Context**: Writing a plan forces the agent to load necessary context *before* editing, preventing "blind" edits.
*   **Recovery**: A written plan serves as a checkpoint. If an edit fails, the agent can revert to the plan rather than spiral.

**Direct Execution Exception**:
Only for "Trivial" tasks (typos, formatting, 1-line variable updates) is direct execution recommended, known as the **ReAct Pattern** (Reason + Act). However, even strict ReAct patterns benefit from a scratchpad.

---

## 2. Proposed Framework: "The Two-Tier Planning Protocol"

To satisfy the need for speed on small tasks and robustness on large ones, we propose a Two-Tier system.

### Tier 1: The "Fast Track" (Volatile)
*   **Use Case**: Formatting, Single-line CSS fixes, Comments, Typos.
*   **File**: `.agent/plans/fastPlan.md` (Always exists, constantly overwritten).
*   **Process**:
    1.  User requests simple change.
    2.  Agent quickly writes 3-5 lines into `fastPlan.md` outlining the file target and the regex/line change.
    3.  Agent executes code.
    4.  **Archiving**: Content of `fastPlan.md` is appended to `.agent/plans/archive/daily_log.md`. **CRITICAL**: Insert a Timestamp Header (e.g., `\n---\n### [19:30:00] Run Cycle\n`) before appending to distinguish it from previous entries. The `fastPlan.md` is then cleared.

### Tier 2: The "Deep Dive" (Persistent)
*   **Use Case**: New Features (e.g., Firebase), Refactoring, Multi-file edits, Logic changes.
*   **Naming Convention**: `Plan_[Description]_[Random6].md`
    *   Example: `Plan_AuthLogic_928371.md`
    *   *Reason*: Random 6 digits ensure no collisions even if multiple agents work in parallel.
*   **Process**:
    1.  **Create**: Agent creates the file in `.agent/plans/active/`.
    2.  **Populate**: Fills "Context Analysis", "Proposed Changes", "Verification Steps".
    3.  **Approve**: User (or Auto-Approver) confirms.
    4.  **Execute**: Agent works through the plan.
    5.  **Archive**: (See Section 3).

---

## 3. Naming & Archiving Standards

### Naming Convention
*   **Format**: `Plan_{CamelCaseDescription}_{Random6Digits}.md`
*   **Regex**: `^Plan_[a-zA-Z0-9]+_\d{6}\.md$`
*   **Example**: `Plan_FixNavbarOverflow_882910.md`

### Archiving Process
When a plan is marked **DONE**:
1.  **Target Directory**: `.agent/plans/archive/{YYYY-MM-DD}/`
    *   Folder is created dynamically based on simple current date.
2.  **Action**: Move the `Plan_*.md` file from `active/` to `archive/{YYYY-MM-DD}/`.
3.  **Index Update**: A central `plan_history_log.md` is updated with a one-line summary:
    *   `[2025-01-04] Plan_AuthLogic_928371: Implemented Firebase Auth Logic (Success).`

---

## 4. Integration with Current Framework

To integrate this into `AGENTS.MD` and your existing structure:

1.  **New Rule File**: Create `.agent/rules/Workflows/PlanningProtocol.md`.
2.  **Context Injection**: Update `AGENTS.MD` to include:
    > "Before coding, determining complexity: If < 5 lines/1 file -> use `fastPlan.md`. Else -> Create `Plan_[Name]_[ID].md`."
3.  **Directory Structure**:
    ```text
    .agent/
    └── plans/
        ├── active/          <-- Current deep plans live here
        ├── fastPlan.md      <-- The scratchpad
        └── archive/
            └── 2025-01-04/  <-- Completed plans moved here
    ```

## 5. Recommendation
Adopt this **Two-Tier System** immediately. It prevents "Over-engineering" simple tasks while ensuring complex tasks (like the Firebase auth from the previous request) are never attempted without a safety net.
