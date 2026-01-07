# Testing Standards (Global)

## 1. Core Principles (Invariants)
*   **Behavior Over Implementation:** Test *what* it does (User flows), not *how* it does it (Internal state).
*   **The "Pyramid":**
    1.  **Unit (Speed):** `Vitest`. Test pure logic, utils, and isolated components. Mock all network/IO.
    2.  **Integration/E2E (Reality):** `Playwright`. Test full user flows in real browser context.
*   **Zero Flake:** Tests must be deterministic. If a test is flaky, fix it immediately or delete it.

## 2. Workflow Invariants (Strict TDD)
*   **Red-Green-Refactor:** Agent MUST write the Test (Red) BEFORE writing logic (Green).
*   **BDD First:** If a `.feature` file exists, generate `*.steps.tsx` BEFORE `*.tsx`.

## 3. File Standards
*   Unit Tests: `src/**/__tests__/*.test.tsx` or `src/**/*.test.tsx`.
*   E2E Tests: `tests/e2e/*.spec.ts`.
*   Setup: `src/setupTests.ts` (Global mocks, MSW server).

## 4. Mocking Rules (Strict)
*   **Network:** ALWAYS mock network requests in Unit tests using `MSW` (Mock Service Worker). NEVER hit real APIs in `Vitest`.
*   **Hooks:** DO NOT mock custom hooks unless they interact with native modules or external side-effects (e.g. `useWindowSize`, `useAuth`).
*   **Date:** Freeze time with `vi.setSystemTime` for date-dependent logic.

## 5. Forbidden Patterns (Strict)
1.  **Implementation Testing:** `expect(component.state().foo).toBe('bar')`. (Use `screen.getByText` or `userEvent`).
2.  **Snapshot Abuse:** No massive full-page snapshots. They are brittle and ignored during review.
3.  **Sleeps:** `await new Promise(r => setTimeout(r, 1000))`. USE `waitFor` or `findBy`.
4.  **Conditionals:** No `if` statements inside tests. Tests must be linear flows.

## 6. Golden Example (The Ideal Unit Test)
```tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('submits valid credentials', async () => {
    // 1. Setup (Mock Network immediately)
    const mockSubmit = vi.fn();
    const user = userEvent.setup();

    render(<LoginForm onSubmit={mockSubmit} />);

    // 2. Interaction (Imitate User)
    await user.type(screen.getByPlaceholderText(/email/i), 'user@test.com');
    await user.type(screen.getByLabelText(/password/i), '123456');
    await user.click(screen.getByRole('button', { name: /login/i }));

    // 3. Assertion (Check Output, not State)
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({ email: 'user@test.com', password: '123456' });
    });
  });
});
```
