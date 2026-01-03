# **Privacy By Design & Data Governance Protocol**

**Objective:** Ensure strict compliance with GDPR, CCPA, and SOC2 by enforcing privacy standards at the code level.

---

## **1. Data Classification**
All data models and API fields MUST be classified into one of these levels.

| Level | Definition | Examples | Handling Rule |
| :--- | :--- | :--- | :--- |
| **L1: Public** | Freely accessible. | Blog Posts, Public Profiles. | Cacheable. |
| **L2: Internal** | Business logic, not sensitive. | IDs, Timestamps, Config. | Loggable (Info). |
| **L3: Confidential (PII)** | Identifies a user. | Email, Name, IP, Phone. | **NEVER LOG.** Encrypt at rest. |
| **L4: Restricted** | High risk / Financial. | Password Hash, SSN, Credit Card. | **NEVER LOG.** Strong Encryption. Access Audit required. |

---

## **2. The "No-Log" Mandate**
**Rule:** You MUST NOT log PII or Restricted data to `console.log`, file logs, or observability services (Datadog/Sentry).

### **Implementation Pattern**
Use a scrubber middleware/util.
```typescript
// GOOD
logger.info("User logged in", { userId: user.id });

// BAD (Block this in PRs)
logger.info("User logged in", { userObject: user }); // Dumps email/phone/address
```

---

## **3. Right to Erasure (GDPR)**
Every "User" entity MUST have a defined "Soft Delete" and "Hard Delete" strategy.

### **The Protocol**
1.  **Retention:** User requests deletion -> Account marked `deletedAt: <timestamp>`.
2.  **The Purge:** A cron job runs daily. If `deletedAt > 30 days`, execute Hard Delete.
3.  **Scope:** Hard Delete must cascade to **ALL** related tables (Orders, Logs, Analytics) or anonymize them.

---

## **4. UI/UX Consents**
*   **Cookies:** No tracking cookies before explicit consent (Banner).
*   **Forms:** "I agree to Terms" checkbox is mandatory for signup.
*   **Portability:** User must be able to "Download My Data" (JSON export).

---

## **5. Database Requirements**
*   **Encryption:** All L3/L4 columns must be encrypted at rest if possible, or the DB volume itself must be encrypted.
*   **Sanitization:** Developer dumps (staging/local) MUST use a seed script that replaces real emails with `user_{id}@example.com`.
