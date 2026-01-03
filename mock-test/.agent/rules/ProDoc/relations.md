# **Relations Map (Dependency Graph)**

**Purpose:** Defines the logical relationships between Features (UI/UX) and Services (Core Logic).
**Integration:** This file is the "Truth Source" for `DiagramFramework.md`.

## **Feature <-> Service Mapping**

| Feature (UI) | Dependent Services (Core) | Data Entities |
| :--- | :--- | :--- |
| **Authentication** | `AuthService` | `User`, `Session` |
| **ProductCatalog** | `ProductService`, `SearchService` | `Product`, `Category` |
| **Cart** | `CartService`, `InventoryService` | `CartItem` |
| **Checkout** | `PaymentService`, `OrderService` | `Order`, `Transaction` |

## **Service Dependency Matrix**

*   **AuthService** depends on: `Database`
*   **ProductService** depends on: `Database`, `RedisCache`
*   **PaymentService** depends on: `StripeSDK`, `Database`

> **Note:** Agents MUST update this file when creating new components to ensure the architectural diagram remains accurate.
