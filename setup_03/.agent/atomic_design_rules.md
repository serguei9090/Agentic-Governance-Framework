# Atomic Design Rules (Hybrid Monorepo)

## Architecture Map
-   **Tier 1 & 2 (UI Library):** `packages/ui`
-   **Tier 3 (Web App):** `apps/web`

## Rules
1.  **Strict Consumption:** `apps/web` MUST consume components from `packages/ui`.
    -   *Correct:* `import { Button } from '@logvibe/ui'`
    -   *Incorrect:* Redefining a Button in `apps/web/src/components`.
2.  **Zero Margins:** Components in `packages/ui` must not have external margins. `apps/web` handles layout.
3.  **Styling:** TailwindCSS is used in `apps/web` for layout, but `packages/ui` defines the core tokens and primitive styles.
