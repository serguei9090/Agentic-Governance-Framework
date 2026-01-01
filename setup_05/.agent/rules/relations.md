# Dependency Map

**Purpose:** Documentation of high-level relationships.

## Features vs Services
*   **UI Features:** Live in `apps/web`. They consume Core Services.
*   **Core Services:** Live in `apps/api` (Backend) or `packages/core` (Shared Logic).

## Boundaries
*   **Strict Rule:** UI Componets NEVER call the Database directly.
*   **Flow:** UI -> API Client -> API Endpoint -> Service Layer -> Database.
