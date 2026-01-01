# Atomic Design Rules

This project follows a strict 3-Tier Atomic Architecture.

## Tier 1: Design Tokens
**Location:** `packages/ui/src/tokens`
**Rule:**
- ALL colors, spacing, typography, and shadows MUST come from these tokens.
- **NEVER** hardcode hex values or pixel values for spacing (except 1px borders).

## Tier 2: Primitive Components
**Location:** `packages/ui/src/components`
**Rule:**
- Components must be PURE and REUSABLE.
- **ZERO External Margins:** A component should never push itself away from others.
- **Platform Agnostic:** Logic should be shared; views are split (`.tsx` vs `.native.tsx`).

## Tier 3: Feature/Page Layouts
**Location:** `packages/core` (Logic) / `packages/ui/src/features` (Layouts)
**Rule:**
- This is where `margin` and `positioning` happen.
- Assemble Tier 2 components into usable interfaces.
- Business logic lives here or in services, NEVER in Tier 2 components.
