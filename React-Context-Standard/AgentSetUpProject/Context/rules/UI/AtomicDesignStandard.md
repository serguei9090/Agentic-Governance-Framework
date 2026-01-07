# UI Architecture Standards (Global)

## 1. Core Principles (Invariants)
* **Presentation Only:** `packages/ui` NEVER imports `packages/core`. No business logic, no API calls, no persistence. Data enters via props.
* **Token Truth:** Use `tokens` object only. No hard-coded hex/spacing.
* **Public API:** Deep imports prohibited (e.g., `import X from 'ui/atoms/X'`). Import only from root: `@{scope}/ui`.
* **Platform Split:**
    * Web/Desktop: `*.tsx` (No React Native imports).
    * Native: `*.native.tsx` (No `react-dom`/HTML imports).
    * Shared logic: Use `*.ts` or strict interface abstraction.

## 2. Atomic Hierarchy (packages/ui)
**2.0 Tokens** (`/tokens`): Definitions only. No components.
**2.1 Atoms** (`/atoms`): Smallest blocks (Button, Icon). No external margins. Props in/UI out.
**2.2 Molecules** (`/molecules`): Compositions of atoms (SearchInput). No business logic.
**2.3 Organisms** (`/organisms`): Complex sections (Header, LoginForm). Internal layout allowed. No data fetching.
**2.4 Templates** (`/templates`): Layout skeletons (DashboardLayout). Slots/children only.
**2.5 Pages** (`apps/*/pages`): **State Owners.** Data fetching, `core` hooks, and wiring happen here.

## 3. File Standards
Path: `packages/ui/src/[type]/[Name]/`
* `[Name].tsx` (Web implementation)
* `[Name].native.tsx` (Native implementation - Optional)
* `[Name].types.ts` (Prop interfaces - Required)
* `[Name].styles.ts` (Styles using Tokens - Required)
* `index.ts` (Public export - Required)

## 4. Forbidden Patterns (Strict)
1.  **Logic Leak:** `useEffect(() => fetch('/api'))` inside `packages/ui`.
2.  **Style Drift:** `backgroundColor: '#ff0000'` (Must use `tokens.colors.danger`).
3.  **Layout Pollution:** Atoms defining `margin` (Layout belongs to parent/Molecules).
4.  **Cross-Pollution:** Importing `react-native` in a `.tsx` file or `react-dom` in `.native.tsx`.