# **Performance Budget & Hygiene**

**Objective:** Performance is a feature. Slow apps are buggy apps. We enforce hard thresholds to prevent regression.

## **1. The Budget (Hard Limits)**

Any Pull Request that causes metrics to exceed these thresholds must be **BLOCKED**.

| Metric | Target (Mobile) | Target (Desktop) | Rationale |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | `< 2.5s` | `< 1.2s` | User perceives load speed here. |
| **FID** (First Input Delay) | `< 100ms` | `< 50ms` | Interactivity responsiveness. |
| **CLS** (Cumulative Layout Shift) | `< 0.1` | `< 0.05` | Visual stability. |
| **JS Bundle Size** (Gzipped) | `< 150KB` (Initial) | `< 300KB` (Total) | Parse/Compile cost on low-end devices. |

## **2. Implementation Directives**

### **A. Code Splitting (Lazy Loading)**
*   **Rule:** Route-level code splitting is **MANDATORY**.
*   **Mechanism:** Use `React.lazy` and `Suspense` for all top-level Page components.

```tsx
// ✅ Correct
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
```

### **B. Asset Optimization**
*   **Images:** Must use `WebP` or `AVIF`. Must have explicit `width` and `height` to prevent CLS.
*   **Fonts:** Must use `font-display: swap` to prevent FOIT (Flash of Invisible Text).

### **C. Render Optimization**
*   **Memoization:** Proactively use `useMemo` for any computation > O(n) or complex object derivation.
*   **Lists:** ALL Lists > 50 items must be **Virtualized** (e.g., `react-window`).

## **3. CI/CD Enforcement (Lighthouse)**

We use **Lighthouse CI (LHCI)** to enforce these rules on every commit.

```yaml
# .lighthouserc.js example
module.exports = {
  ci: {
    assert: {
      assertions: {
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'categories:performance': ['error', { minScore: 0.9 }],
      },
    },
  },
};
```
