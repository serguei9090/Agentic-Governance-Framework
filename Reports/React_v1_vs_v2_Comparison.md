# React Standard Comparison: v1 vs v2

**Date:** 2026-01-07
**Objective:** High-level analysis of the architectural and tooling evolution from the Legacy Standard (v1) to the Enterprise Standard (v2).

## 1. Executive Summary
**v2 is a complete architectural overhaul**, shifting from a "Project Boilerplate" to an "Agentic Governance Operating System".

*   **v1 (Legacy):** Focused on getting a React app running (CRA/Vite style). Rigid, `npm`-centric, and relied on older, slower tools (ESLint/Jest).
*   **v2 (Enterprise):** Focused on **Scalability, Performance, and Agent Determinism**. It is Package Manager Agnostic, uses Rust-based tooling (Biome), and enforces strict architectural boundaries (Style Dictionary, Atomic Design).

## 2. Toolchain Evolution

| Category | v1 (Legacy) | v2 (Enterprise) | Benefit |
| :--- | :--- | :--- | :--- |
| **Linting/Format** | ESLint + Prettier | **Biome** | 30x Faster, Unified Tool chain. |
| **Unit Testing** | Jest | **Vitest** | Native Vite integration, faster execution. |
| **Orchestration** | Husky (Basic) | **Lefthook** | Parallel execution, Go-based speed. |
| **Package Manager** | `npm` (Hardcoded) | **Agnostic** (`[PKG_MANAGER]`) | Supports `bun`, `pnpm`, and `npm`. |
| **Design Tokens** | Manual TS Objects | **Style Dictionary** | Multi-platform (CSS/iOS/Android) build system. |

## 3. Architectural Shifts

### 3.1 The "Holy Trinity" of Governance
v2 introduces a strict file format for all Rules and Workflows to minimize Agent hallucination:
1.  **Constraints:** What is forbidden (Invariants).
2.  **Workflow:** Linear, numbered steps.
3.  **Golden Example:** Zero-shot learning template.

*v1 lacked this structure, leading to inconsistent Agent behavior.*

### 3.2 Atomic Design & Style Dictionary
*   **v1:** Suggested Atomic Design but allowed manual style definitions.
*   **v2:** Mandates **Style Dictionary** as the Single Source of Truth (`src/**/*.json`). UI Components cannot define raw values; they must consume generated tokens.

### 3.3 Operations (AgentOps)
*   **v1:** Implicit workflows (assumed knowledge).
*   **v2:** Explicit, file-based workflows (`workflows/hotfix-protocol.md`, `workflows/rollback-protocol.md`). Each operation is a "Protocol" that the Agent can read and execute deterministically.

## 4. Performance & Safety
*   **Safety:** v2 introduces **"Safety Interlocks"** in workflows (e.g., Schema Migration requiring Backup first).
*   **Speed:** Switching to Biome and Vitest significantly reduces CI times.
*   **Portability:** The Agnostic Refactor allows teams to switch from `npm` to `bun` without rewriting a single rule file.

## 5. Migration Status
The `React-Context-Standardv2` directory is fully upgraded.
*   ✅ **Clean:** No Legacy `npm` references.
*   ✅ **Modern:** All tooling updated.
*   ✅ **Enterprise:** Style Dictionary and Lefthook configured.
