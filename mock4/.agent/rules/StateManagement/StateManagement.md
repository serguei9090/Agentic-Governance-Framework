# **State Management Architecture**

**Objective:** Prevent "State Bloat" by strictly separating Server State from Client State.

---

## **1. The Golden Rule**
**Rule:** If data comes from an API, it is **Server State**. If data is UI-only (modal open, form input), it is **Client State**.

| Type | Library | Purpose | Persistence |
| :--- | :--- | :--- | :--- |
| **Server State** | `TanStack Query` (React Query) | caching, deduping, background updates. | In-Memory + Cache. |
| **Global Client State** | `Zustand` (Default) / `Redux` | User preferences, complex multi-step forms. | Session/Local Storage. |
| **Local State** | `useState / useReducer` | Input fields, toggles, simple interactions. | Component Lifecycle. |
| **URL State** | `React Router` | Search params, filters, pagination. | URL Bar. |

---

## **2. Server State Patterns**
*   **Keys:** Use Factory Pattern for Query Keys. `const userKeys = { all: ['users'], details: () => [...userKeys.all, 'detail'] }`
*   **Mutations:** Always invalidate queries after mutation. `onSuccess: () => queryClient.invalidateQueries(key)`

## **3. Client State Patterns**
*   **Default:** Use **Zustand** for lightweight, atomic stores (`useAuthStore`).
*   **Enterprise:** Use **Redux Toolkit** IF the user explicitly requests it or for legacy codebases. It provides strict unidirectional flow but adds boilerplate.
*   **Pattern:** Store logic (actions) must be testable independent of React.

## **4. URL State (The "Hidden" Store)**
*   **Pagination:** `?page=2` MUST be in the URL, not in Zustand.
*   **Filters:** `?status=active` MUST be in the URL.
*   **Why?** Users share links. If state is in memory, the link is broken.
