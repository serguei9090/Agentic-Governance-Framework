# Performance Standards

## Core Web Vitals targets
-   **LCP (Largest Contentful Paint):** < 2.5s
-   **FID (First Input Delay):** < 100ms
-   **CLS (Cumulative Layout Shift):** < 0.1

## Optimization Techniques
-   **Code Splitting:** Lazy load routes and heavy components.
-   **Memoization:** Use `React.memo`, `useMemo`, `useCallback` appropriately to prevent unnecessary re-renders.
-   **Images:** Use WebP/AVIF formats and responsive sizing.

## Bundle Size
-   **Budget:** Initial Load JS < 200KB (gzipped).
