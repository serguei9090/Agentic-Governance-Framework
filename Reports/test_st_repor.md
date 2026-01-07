# Testing Standards Comparison Report

**Date:** 2026-01-07
**Subject:** `TestingStandard.md` (Normal) vs `TestingStandardv2.md` (Strict)
**Specific Focus:** TDD Methodology and Agent Suitability.

## 1. Executive Summary

You asked: **"Which one is better?"** and noted **"I dont see TDD in v2"**.

**Short Answer:**
*   **For Code Quality (Constraints):** **v2 is better.** It strictly prevents bad tests (e.g., "Forbidden Patterns").
*   **For Workflow (Methodology):** **Normal (v1) is better.** It explicitly teaches the TDD (Red -> Green -> Refactor) cycle which v2 completely omits.

**Recommendation:**
For an AI Agent, **v2 is the "Safety Guardrail"**, but it is **missing the "Process Map"**. The ideal solution is to add a brief "Workflow" section to v2, merging the best of both.

---

## 2. Detailed Comparison

### 2.1 TestingStandard.md (Normal / v1)
*   **Type:** **Tutorial / Guide** "The Textbook"
*   **Core Feature:** **The TDD Workflow.**
    *   It breaks down testing into "Phase 1: Contract (BDD)", "Phase 2: Glue (TDD)", "Phase 3: Implementation".
    *   It gives a comprehensive example (Login Feature).
*   **Agent Utility:** High for *planning* a feature. It tells the Agent *how* to work step-by-step.
*   **Weakness:** It is very verbose. An Agent might get lost in the "education" text vs the "strict rules".

### 2.2 TestingStandardv2.md (v2)
*   **Type:** **System Prompt / Rulebook** "The Law"
*   **Core Feature:** **Strict Invariants.**
    *   Explicitly forbids "Implementation Testing" and "Snapshot Abuse".
    *   Mandates "Mocking Rules" (e.g., Network Requests).
*   **Agent Utility:** High for *generating code*. It ensures the *output* is valid and robust.
*   **Weakness:** **It assumes the Agent knows the workflow.** It defines the *constraints* of the destination but not the *journey* (TDD) to get there.

---

## 3. Addressing the TDD Gap

The user is correct: **v2 is missing the TDD directive.**

If we use *only* v2, an Agent might write the implementation code *first* and then write tests after (classic "Code-First" approach), violating the TDD principle.

### Why was it removed?
In high-density prompts (v2), "Methods" (how to work) are often sacrificed for "Constraints" (what to output).

## 4. Final Verdict & Improvement

**v2 is the better *Standard* (because strict rules prevent tech debt), but it needs a TDD patch.**

**Recommended Fix:**
Update `TestingStandardv2.md` to include a Section 1.1 "Workflow Invariant":

```markdown
## 1.1 Workflow (Strict TDD)
*   **Red-Green-Refactor:** Agent MUST write the Test (Red) BEFORE writing logic (Green).
*   **BDD First:** If a `.feature` file exists, generate `*.steps.tsx` BEFORE `*.tsx`.
```

This creates a "v2.1" that is the best of both worlds.
