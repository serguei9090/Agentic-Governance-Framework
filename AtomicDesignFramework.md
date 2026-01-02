# **Atomic Design Rules**

  

These rules define how UI is structured to keep presentation consistent and separate from business logic.

  

## **1. Tier Model (3-Tier)**

  

1. **Tier 1: Design Tokens**

   - Single source of truth for colors, typography, spacing, borders, and shadows.

   - Stored in `packages/ui/src/tokens`.

   - No logic, no component code.

  

2. **Tier 2: Primitive Components**

   - Stateless/pure UI building blocks (Button, IconButton, Text, Card, Input, Badge).

   - Stored in `packages/ui/src/components`.

   - Must not define external margins or layout positioning.

   - Must use tokens from `packages/ui/src/tokens`.

   - Must provide hover/press feedback and accessibility metadata.

  

3. **Tier 3: Layouts / Pages**

   - Screens and pages live in `apps/mobile/src/screens` and `apps/desktop/src/pages`.

   - Responsible for layout, spacing, and data wiring.

   - Should not duplicate primitive styles (colors, typography, basic padding).

  

## **2. Cross-Platform UI Package**

  

- Shared UI lives in `packages/ui`.

- Use platform-specific files:

  - `Component.tsx` for desktop/web.

  - `Component.native.tsx` for React Native.

- Avoid platform conditionals inside a single component when a `.native.tsx` variant is clearer.

- Do not import React Native-only modules in `.tsx` or web-only modules in `.native.tsx`.

  

## **3. Theme and Tokens**

  

- Tokens must be imported from `@exam-prep/ui` (not from `@exam-prep/core`).

- No hard-coded hex colors or spacing in screens/pages unless explicitly approved.

- Tokens should be consumed primarily through primitives to reduce duplication.

  

## **4. Separation of Concerns**

  

- UI components are presentational and should not own business logic.

- Shared logic stays in `packages/core`; UI reads data via props and callbacks only.

- Persistence and storage access must remain in `packages/core` services.

  

## **5. Buttons (Initial Standard)**

  

- All new button usage must use `@exam-prep/ui` primitives once available.

- Back buttons must follow the standard icon-only design and sizes.

- All buttons require wired handlers and visible press/hover feedback.

  

## **6. Testing**

  

- New primitives must include unit tests in each app (mobile Jest, desktop Vitest).

- Tests should validate rendering, accessibility labels, and interaction states.