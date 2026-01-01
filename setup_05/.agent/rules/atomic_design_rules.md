# Atomic Design Rules

**Purpose:** Enforce the 3-Tier Atomic Architecture defined in `agentproject_setup.md`.

## Tier 1: Design Tokens (The "X Files")
*   **Location:** `packages/ui/src/tokens`
*   **Rule:** NEVER hardcode hex values, spacing pixels, or font sizes. Always import from tokens.
*   **Example:** `color: COLORS.primary` NOT `color: '#3B82F6'`.

## Tier 2: Primitive Components
*   **Location:** `packages/ui/src/components`
*   **Rule:** Components must be pure, stateless (mostly), and have **ZERO external margins**.
*   **Structure:** `components/Button/Button.tsx` + `components/Button/Button.native.tsx`.

## Tier 3: Feature/Page Layouts
*   **Location:** `apps/web/src/pages` or `features/`
*   **Rule:** This is where business logic and layout (margins/positioning) live.
*   **Responsibility:** Data fetching, state management, and assembling primitives.
