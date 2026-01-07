# Atomic Design + UI Package Standards (Global)

## 1. Scope

This document is the **authoritative UI architecture standard** for the monorepo.

Applies to:

* `packages/ui` (shared UI + tokens)
* `apps/desktop`, `apps/mobile`, and `apps/web` (pages/screens and data wiring)

Non-goals:

* Business logic architecture (belongs to `packages/core`)

---

## 2. Methodology: Atomic Design Levels (Required)

We use **Atomic Design (5 levels)** for UI composition, plus a separate **Tokens** layer.

### 2.0 Tokens (Design Tokens)

**Location:** `packages/ui/src/tokens`

**Rules:**

* **Only** token definitions and token types.
* No React components.
* No business logic.
* No imports from `packages/core`.
* No hard-coded styling in UI components outside tokens (colors/spacing/typography/radii/shadows/motion).

---

### 2.1 Atoms (`packages/ui/src/atoms`)

**Definition:** smallest functional UI building blocks.

**Rules:**

* May depend only on **Tokens** and UI-only utilities.
* Must be presentational (props in, UI out).
* Must **not** define external layout (no external margins).
* Must include interaction states and a11y metadata appropriate to platform.

**Examples:** `Button`, `Input`, `Icon`, `Text`, `Badge`, `Chip`, `Divider`, `Avatar`.

---

### 2.2 Molecules (`packages/ui/src/molecules`)

**Definition:** small compositions of atoms that serve one purpose.

**Rules:**

* Compose atoms (and UI-only helpers).
* Local layout allowed **only** to position internal parts.
* Must remain presentational (no business rules).

**Examples:** `Card`, `ListRow`, `Select`, `SearchInput`, `FormField`.

---

### 2.3 Organisms (`packages/ui/src/organisms`)

**Definition:** reusable UI sections composed of molecules/atoms.

**Rules:**

* May include richer composition and layout **within the organism boundary**.
* Must remain UI/presentation focused.
* No direct data fetching, persistence, or `packages/core` imports.
* Validation logic is allowed **only** if it is purely UI-level (e.g., required field messaging) and driven by props; domain/business validation belongs in `packages/core`.

**Examples:** `Header`, `Sidebar`, `LoginForm`, `CourseList`, `QuizQuestionCard`.

---

### 2.4 Templates (`packages/ui/src/templates`)

**Definition:** page-level layout skeletons that position organisms into structure.

**Rules:**

* Layout and structure only.
* No real data fetching.
* Accepts placeholder props/slots/children.
* Should not import `packages/core`.

**Examples:** `DashboardLayout`, `QuizLayout`, `AuthLayout`.

---

### 2.5 Pages (Apps only)

**Location:**

* `apps/desktop/src/pages`
* `apps/web/src/pages`
* `apps/mobile/src/screens` (mobile naming)

**Definition:** concrete instances of templates with real data/state.

**Rules:**

* Data fetching and state management happens here.
* May call `packages/core` services/hooks.
* Must not duplicate token definitions; use UI components.

**Examples:** `DashboardPage`, `QuizPage`, `SettingsPage`.

---

## 3. Canonical Folder Architecture (Required)

### `packages/ui/src`

```
packages/ui/src/
  index.ts
  tokens/
    index.ts
    colors.ts
    spacing.ts
    typography.ts
    radii.ts
    shadows.ts
    motion.ts
    zIndex.ts
    types.ts
  atoms/
    Button/
      Button.tsx
      Button.native.tsx
      Button.styles.ts
      Button.types.ts
      Button.test.tsx
      index.ts
    Text/
    Input/
    Icon/
    Badge/
  molecules/
    Card/
    ListRow/
    FormField/
    SearchInput/
    Select/
  organisms/
    Header/
    Sidebar/
    LoginForm/
    CourseList/
  templates/
    DashboardLayout/
    QuizLayout/
    AuthLayout/
  hooks/
    index.ts
    useTheme.ts
  utils/
    index.ts
    a11y.ts
    platform.ts
  theme/
    index.ts
    createTheme.ts
```

### Apps

* Desktop pages: `apps/desktop/src/pages/*`
* Web pages: `apps/web/src/pages/*`
* Mobile screens: `apps/mobile/src/screens/*`

---

## 4. Component File Standard (Required)

Each component folder MUST follow:

```
ComponentName/
  ComponentName.tsx
  ComponentName.native.tsx        (only when needed)
  ComponentName.styles.ts
  ComponentName.types.ts
  ComponentName.test.tsx
  index.ts
```

Rules:

* `*.types.ts` defines the public prop types.
* `*.styles.ts` contains style objects/functions using **tokens**.
* `index.ts` exports the public API for that component.

---

## 5. Cross-Platform Rules (Required)

* Use platform variants:

  * `Component.tsx` for desktop/web.
  * `Component.native.tsx` for React Native.
* Avoid runtime `Platform.OS` branching when a file split is clearer.
* Do not import RN-only modules in `.tsx` files.
* Do not import web-only modules in `.native.tsx` files.

---

## 6. Imports and Boundaries (Required)

### Boundary rules

* `packages/ui` MUST NOT import from `packages/core`.
* Business logic, persistence, and API access stay in `packages/core`.
* UI receives data via props and emits events via callbacks.

### Token usage

* No hard-coded hex colors.
* No ad-hoc spacing constants.
* Tokens are the single source of truth.

---

## 7. Public Exports (Single Index, Required)

Only the package root is allowed as a public import:

* ✅ `import { Button, Card, DashboardLayout, tokens } from '@exam-prep/ui'`
* ❌ deep imports into `src/*` are prohibited.

### Required export layout

* `packages/ui/src/index.ts` re-exports:

  * `tokens/*`
  * `atoms/*`
  * `molecules/*`
  * `organisms/*`
  * `templates/*`
  * `theme/*`
  * `hooks/*`

---

## 8. Testing (Required)

* New UI components MUST include unit tests.
* Minimum validation:

  * render
  * interaction states
  * a11y labels
  * platform variants (when present)

---

## 9. Classification Checklist (Required)

* **Atom:** single UI element, reusable, no composition needed.
* **Molecule:** small composition of atoms, single purpose.
* **Organism:** reusable section composed of molecules/atoms.
* **Template:** page skeleton/layout using organisms.
* **Page:** app-level screen with real data/state.

---

## 10. Platform Path Rules (Web/Desktop vs Native) (Required)

### 10.1 File resolution

* **Web/Desktop (React/Tauri):** uses `*.tsx` files.
* **React Native (mobile):** uses `*.native.tsx` files.

If both exist:

* `Component.native.tsx` is used by React Native.
* `Component.tsx` is used by web/desktop.

### 10.2 Example paths (authoritative)

**Atom location (both platforms):**

* `packages/ui/src/atoms/Button/Button.tsx` *(web/desktop)*
* `packages/ui/src/atoms/Button/Button.native.tsx` *(mobile)*

**Public import (all apps):**

* `import { Button } from '@exam-prep/ui'`

**Desktop page location:**

* `apps/desktop/src/pages/DashboardPage.tsx`

**Web page location:**

* `apps/web/src/pages/DashboardPage.tsx`

**Mobile screen location:**

* `apps/mobile/src/screens/DashboardScreen.tsx`

---

## 11. Forbidden Examples (Required)

These patterns are **strictly prohibited**.

### 11.1 UI importing business logic (`packages/core`)

```ts
// packages/ui/src/organisms/UserCard/UserCard.tsx
import { getUser } from '@exam-prep/core/userService'; // ❌ FORBIDDEN
```

### 11.2 Data fetching inside UI package

```ts
// packages/ui/src/organisms/CourseList/CourseList.tsx
useEffect(() => {
  fetch('/api/courses'); // ❌ FORBIDDEN
}, []);
```

### 11.3 Hard-coded styling (tokens bypass)

```ts
// packages/ui/src/atoms/Button/Button.styles.ts
export const root = {
  backgroundColor: '#ff0000', // ❌ FORBIDDEN
  padding: 12,               // ❌ FORBIDDEN
};
```

### 11.4 External layout in atoms (margins / positioning)

```ts
// packages/ui/src/atoms/Button/Button.styles.ts
export const root = {
  marginBottom: tokens.spacing.lg, // ❌ FORBIDDEN
};
```

### 11.5 Deep imports (bypassing public API)

```ts
import { Button } from '@exam-prep/ui/src/atoms/Button/Button'; // ❌ FORBIDDEN
```

### 11.6 Web-only modules imported in `.native.tsx`

```ts
// packages/ui/src/atoms/Icon/Icon.native.tsx
import { createPortal } from 'react-dom'; // ❌ FORBIDDEN
```

### 11.7 React Native-only modules imported in `.tsx`

```ts
// packages/ui/src/atoms/Button/Button.tsx
import { Pressable } from 'react-native'; // ❌ FORBIDDEN
```

### 11.8 Templates performing real data/state work

```ts
// packages/ui/src/templates/DashboardLayout/DashboardLayout.tsx
const [courses, setCourses] = useState([]);
useEffect(() => {
  loadCourses(); // ❌ FORBIDDEN
}, []);
```

### 11.9 Pages duplicating token system (style drift)

```ts
// apps/desktop/src/pages/DashboardPage.tsx
const danger = '#e11d48'; // ❌ FORBIDDEN
```
