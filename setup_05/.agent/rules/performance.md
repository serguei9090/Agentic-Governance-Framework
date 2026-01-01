# Performance Targets

**Purpose:** Ensure high-speed user experience.

## Core Web Vitals
*   **LCP (Largest Contentful Paint):** < 2.5s
*   **CLS (Cumulative Layout Shift):** < 0.1
*   **FID (First Input Delay):** < 100ms

## Optimization
*   **Rendering:** Use `useMemo` and `useCallback` to prevent unnecessary re-renders.
*   **Virtualization:** Use `react-virtuoso` for large lists (Logs).
