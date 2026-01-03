# **Relations Map (Dependency Graph)**

**Purpose:** Defines the logical relationships between Features (UI/UX) and Services (Core Logic).
**Integration:** This file is the "Truth Source" for `DiagramFramework.md`.

## **Feature <-> Service Mapping**

| Feature (UI) | Dependent Services (Core) | Data Entities |
| :--- | :--- | :--- |
| **Example:** UserProfile | AuthService, UserService | `User`, `Session` |
| **Example:** Checkout | PaymentService, InventoryService | `Order`, `Transaction` |

## **Service Dependency Matrix**

*   **AuthService** depends on: `Database`
*   **PaymentService** depends on: `StripeSDK`, `Database`

> **Note:** Agents MUST update this file when creating new components to ensure the architectural diagram remains accurate.
