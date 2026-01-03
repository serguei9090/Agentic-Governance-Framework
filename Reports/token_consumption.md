# Token Consumption Analysis

**Estimation Logic:** `1 Word ≈ 1.3 Tokens`.
**Date:** 2026-01-02

## **1. Initialization Cost (One-Time Setup)**
*   **Action:** When you run `startAgentProjectSetUp.md` to scaffold a *new* project.
*   **What is read:** The Agent reads **EVERYTHING** in `AgentSetUpProject/` to understand how to build the repo.
*   **Total Source Text:** ~15,000 words.
*   **System Instructions:** ~2,000 words.
*   **Total Initialization Cost:** **~22,000 Tokens**.
*   **Cost (approx):**
    *   GPT-4o / Claude 3.5 Sonnet: ~$0.10 - $0.30 (one-time).
    *   Gemini 1.5 Pro: Free tier or negligible.

---

## **2. Daily Operational Cost (Context Injection)**
*   **Action:** When you are coding a specific feature (e.g., "Fix the Login Page").
*   **Optimization:** You do **NOT** feed the entire framework every time. The `agentContext.md` generated structure allows for **"Surgical Context"**.

### **Scenario A: "Surgical" Feature Work (Recommended)**
*   **You load:**
    1.  `AGENTS.MD` (Persona): ~200 tokens
    2.  `atomic_design_rules.md` (UI Rules): ~800 tokens
    3.  `relations.md` (Map): ~1,500 tokens
    4.  *Target File (Login.tsx)*: ~1,000 tokens
*   **Total Input:** **~3,500 Tokens** per prompt.
*   **Cost:** Negligible.

### **Scenario B: "Full Context" Refactor (Heavy)**
*   **You load:** The entire `.agent/rules/` folder to ensure massive compliance.
*   **Total Input:** **~12,000 - 15,000 Tokens**.
*   **Reasoning:**
    *   `CodeQuality` + `Security` + `Test` + `State` frameworks are text-heavy.
*   **Advice:** Only do this when starting a massive Epic or Architecture Refactor.

## **3. Breakdown by Framework (Approximate)**

| Framework Component | Words | Est. Tokens | Frequency |
| :--- | :--- | :--- | :--- |
| **Agent Persona (`AGENTS.MD`)** | 150 | **~200** | **ALWAYS** |
| **Relations Map (`relations.md`)** | 1,000+ | **~1,300** | **ALWAYS** (High ROI) |
| **UI Rules (Atomic Design)** | 800 | **~1,000** | UI Tasks Only |
| **Test Rules (Vitest/TDD)** | 1,200 | **~1,600** | Testing Tasks Only |
| **Security Framework** | 2,000 | **~2,600** | Security Audit Only |
| **Code Quality** | 1,500 | **~2,000** | Linting/Refactoring Only |
| **CI/CD Manifest** | 400 | **~500** | DevOps Tasks Only |

## **Conclusion**
*   **Setup:** Expect a **~22k token** spike once per project.
*   **Daily Work:** Expect **~3k - 5k tokens** per prompt if you use the "Surgical" method (Persona + Map + Specific Rule).
*   **Efficiency:** The `ProDoc/relations.md` file saves you tokens by preventing the need to read 50 source code files to understand dependencies.

---

## **4. Recommendations & Optimization Strategy**

### **A. Leverage Prompt Caching (DeepSeek / Gemini / Claude)**
*   **Strategy:** The `.agent/rules/` folder is static (it doesn't change often).
*   **Action:** If your AI provider supports "Context Caching", cache the entire `.agent/` folder.
*   **Benefit:** Reduces the ~3,500 daily overhead to near zero (~100 tokens), making interactions 90% cheaper and faster.

### **B. Task Batching**
*   **Bad:** One prompt for "fix button", new chat for "fix header". (Repeats context initialization cost).
*   **Good:** "Fix the button AND the header in this session."
*   **Rule:** Keep the "Chat Session" open as long as you are working on the same module (e.g., Auth Module).

### **C. Model Tiering**
*   **Level 0/1 Tasks (Linting, minor UI):** Use "Flash" or "Haiku" class models. They handle the ~3.5k context easily and are 10x cheaper.
*   **Level 2 Tasks (Refactoring, Architecture):** Use "Pro" or "Sonnet" class models.
*   **Planning/Setup:** Use "Reasoning" or "Opus" class models for the initial 22k Setup.

### **D. The "Staleness" Balance**
*   **Don't** update `relations.md` after every single file change.
*   **Do** update it only when you add a *new* file or change a *function signature*.
*   **Savings:** Prevents unnecessary "Read-the-whole-repo" operations.
