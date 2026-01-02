# **State Management Architecture**

**Objective:** Prevent "Spaghetti Code" by strictly enforcing the separation of **Server State** (Data) and **Client State** (UI/Session).

## **1. The Two Pillars of State**

You must NEVER mix these two types of state.

| Type | Definition | Approved Tool | Sync Strategy |
| :--- | :--- | :--- | :--- |
| **Server State** | Data that persists remotely (DB, API). We do not "own" it; we borrow it. | **TanStack Query (React Query)** | Stale-While-Revalidate |
| **Client State** | Data valid only for the current session (Modal open/close, Theme, Form inputs). | **Zustand** (Global) or **React Context** (Scoped) | Local Memory / Storage |

## **2. Server State Rules (React Query)**

1.  **No `useEffect` for Data Fetching:**
    *   ❌ BAD: `useEffect(() => fetch('/api/user'), [])`
    *   ✅ GOOD: `useQuery({ queryKey: ['user'], queryFn: fetchUser })`
2.  **Centralized Keys:**
    *   All query keys must be defined in a `queryKeys.ts` factory to prevent duplicates.
3.  **Caching Strategy:**
    *   Default `staleTime` should be > 0 (e.g., 5 minutes) to prevent aggressive refetching.

## **3. Client State Rules (Zustand)**

1.  **Atomic Stores:**
    *   Do not create one giant `useAppStore`. Create feature-based stores: `useAuthStore`, `useCartStore`, `useUIStore`.
2.  **No Computed State in Store:**
    *   Keep the store minimal. Derive values inside the component or use selectors.
3.  **Persistence:**
    *   Use `persist` middleware only for non-sensitive user preferences (e.g., Dark Mode). NEVER store JWTs or PII in localStorage.

## **4. Anti-Patterns (Examples to Avoid)**

*   **Prop Drilling:** Passing data down > 2 levels. Use Context/Zustand instead.
*   **Redux Boilerplate:** Do not use Redux unless mandated by legacy constraints. It is too verbose for modern implementation speeds.
*   **Mirroring Server State:** Do not copy React Query data into a dedicated Zustand store. Use the query cache directly.
