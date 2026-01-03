# **Enterprise Motion System**

**Objective:** Treat "Animation" as a strict Design Token. Kill ad-hoc `duration={200}` coding styles.

## **1. The Core Philosophy**
*   **Intent-Based:** We do not define "how fast" (ms), we define "what it means" (Instant, Deliberate).
*   **Reduced Motion:** All tokens MUST respect `prefers-reduced-motion: reduce`.
*   **Consistency:** A "Modal" must feel the same across the entire platform.

## **2. The Motion Tokens (Tier 1.5)**

| Token | Duration | Cubic Easing | Intent / Use Case |
| :--- | :--- | :--- | :--- |
| **`--motion-instant`** | **100ms** | `ease-out` | Micro-interactions (Hover, Color Change, Active states). |
| **`--motion-fast`** | **200ms** | `ease-out` | Auxiliary UI (Tooltips, Dropdown menus, Toasts). |
| **`--motion-deliberate`** | **400ms** | `ease-in-out` | Navigation (Page transitions, Modal Open, Drawer Slide). |
| **`--motion-narrative`** | **700ms+** | `spring` | DataViz, Success screens, "Delight" moments. |

## **3. Implementation Standards**

### **A. CSS Variables (Global)**
```css
:root {
  --motion-instant: 100ms ease-out;
  --motion-fast: 200ms ease-out;
  --motion-deliberate: 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-instant: 0ms !important;
    /* ...all tokens become 0ms */
  }
}
```

### **B. Framer Motion (React)**
If using React, create a central `packages/ui/src/tokens/motion.ts`:

```typescript
export const motionTokens = {
  // Usage: <motion.div variants={motionTokens.fadeIn} ... />
  fadeIn: { 
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } }, // matches --motion-fast
    exit: { opacity: 0 }
  },
  modalEntry: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.4 } } // matches --motion-deliberate
  }
}
```

## **4. Usage Rules**
1.  **NEVER** hardcode durations (e.g., `duration: 0.3`). Always map to a Token.
2.  **NEVER** block the user. Animations must be non-blocking.
3.  **ALWAYS** test `prefers-reduced-motion`.
