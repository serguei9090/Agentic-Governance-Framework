# React Context Rules Comparison Report

**Date:** 2026-01-07
**Objective:** Analyze all rule files within `Context/rules`, scoring them (1-10) on their suitability for AI Agent execution. Compare `v1` vs `v2` versions where applicable.

## 1. Executive Summary

A total of **22 rule files** were analyzed across 12 categories.
*   **Adoption Strategy:** The new `v2/v3` (High-Density System Prompt) format is consistently superior for Agentic workflows.
*   **Legacy Quality:** `SecurityStandard.md` and `CodeQualityStandard.md` (Directive formats) are already high quality.
*   **Gap Analysis:** The "Textbook" format (v1) dominates Architecture and ProDoc rules.

---

## 2. Comprehensive Rule Analysis

### 2.1 UI Rules (The "Gold Standard" Sector)
| File | Score | Notes |
| :--- | :---: | :--- |
| `AtomicDesignStandard.md` | 6/10 | Simple, but ambiguous. |
| `AtomicDesignStandardv2.md` | 9/10 | Excellent reference/textbook. |
| **`AtomicDesignStandardv3.md`** | **10/10** | **Perfect System Prompt.** High density, strict constraints. |
| `UIInfrastructureStandards.md` | **10/10** | **Perfect.** Follows the v3/v2 density pattern natively. |
| `MotionSystemStandard.md` | 7/10 | Good principles, but lacks strict implementation constraints. |

### 2.2 Testing Rules
| File | Score | Notes |
| :--- | :---: | :--- |
| `TestingStandard.md` | 8/10 | Great tutorial/philosophical guide. |
| **`TestingStandardv2.md`** | **10/10** | **Strict Invariants.** Explicitly bans common flaky patterns. |
| `MasterAgentOpsModeStandard.md`| 8/10 | Good process definition. |
| `ProtocolRetrofittingStandard.md`| 8/10 | Good process for modifying existing code. |

### 2.3 State Management Rules
| File | Score | Notes |
| :--- | :---: | :--- |
| `StateManagementStandard.md` | 7/10 | Good overview (Golden Rule). |
| **`StateManagementStandardv2.md`**| **10/10** | **Enforceable.** Explicitly forbids `useEffect` state sync. |

### 2.4 Security & Code Quality (Directive Style)
| File | Score | Notes |
| :--- | :---: | :--- |
| **`SecurityStandard.md`** | **10/10** | **Excellent.** "AGENT DIRECTIVE" format. No v2 needed. |
| **`CodeQualityStandard.md`** | **10/10** | **Excellent.** "AGENT DIRECTIVE" format. Explicit toolchain laws. |

### 2.5 Architecture & Infrastructure (v1 Textbook Style)
| File | Score | Notes |
| :--- | :---: | :--- |
| `ApiStandards.md` | 8/10 | Good, but could be tighter (e.g., Zod schema as invariant). |
| `DatabaseStandard.md` | 8/10 | Solid, but could strictly forbid `migrate dev` in prod. |
| `DiagramStandard.md` | 9/10 | Includes a "Master System Prompt" section (Best Practice). |
| `PerformanceStandard.md` | 9/10 | Includes explicit numeric thresholds (LCP < 2.5s). |
| `PrivacyByDesignStandard.md`| 9/10 | Clear "No-Log" mandate. |

### 2.6 CI/CD & Error Handling
| File | Score | Notes |
| :--- | :---: | :--- |
| `CiCdStandard.md` | 7/10 | Philosophically sound, but verbose. |
| `CICDToolsStandard.md` | 9/10 | "Manifest" style (Checklist). Very Agent-friendly. |
| `ErrorStandard.md` | 8/10 | Good decision tree, but heavy on text. |

### 2.7 Documentation (ProDoc)
| File | Score | Notes |
| :--- | :---: | :--- |
| `ProDocStandard.md` | 9/10 | Defines the "Living Knowledge Graph" well. |
| `RelationsStandard.md` | 10/10 | Template-based. Can be copied directly. |
| `i18nStandard.md` | 8/10 | "Golden Rule" is clear. |

---

## 3. Comparison of V1 vs V2 Pairs

### State Management
*   **V1:** Explains *why* (Tutorial).
*   **V2:** Dictates *where* (Config/Linter).
*   **Winner:** **V2** for Agent context.

### Testing
*   **V1:** Explains "Pyramid" philosophy.
*   **V2:** Mandates "Network MUST be mocked".
*   **Winner:** **V2** prevents flake.

### Atomic Design
*   **V1:** Low detail.
*   **V2:** High detail Reference.
*   **V3:** High density Rulebook.
*   **Winner:** **V3**.

---

## 4. Final Recommendations

1.  **Directives > Textbooks:** Files like `SecurityStandard` and `CodeQualityStandard` work well because they use "AGENT DIRECTIVE" language (`CodeQualityStandard.md` Line 1).
2.  **System Prompts:** `DiagramStandard.md` includes a specific "SYSTEM INSTRUCTION" block. This is a pattern to replicate.
3.  **Adoption:** Continue creating `v2` files for Architecture components (`ApiStandards`, `DatabaseStandard`) to move them from "Textbook" to "Rulebook".
