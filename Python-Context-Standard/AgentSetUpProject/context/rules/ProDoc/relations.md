# **Relations Map (Dependency Graph)**

**Purpose:** Defines the logical relationships between Features (Reflex UI) and State (Python Classes).
**Integration:** This file is the "Truth Source" for `DiagramFramework.md`.

## **Feature <-> State Mapping**

| Feature (Page) | Dependent State (Class) | Data Entities (SQLAlchemy) |
| :--- | :--- | :--- |
| **Example:** DashboardPage | DashboardState, UserState | `User`, `Stats` |
| **Example:** Login | AuthState | `Session` |

## **State Dependency Matrix**

*   **AuthState** depends on: `Database`
*   **DashboardState** depends on: `AuthState`, `Database`

> **Note:** Agents MUST update this file when creating new components to ensure the architectural diagram remains accurate.
