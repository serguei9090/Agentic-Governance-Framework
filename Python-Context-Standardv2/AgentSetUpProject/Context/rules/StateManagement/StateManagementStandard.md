# State Management Standards (Python/Reflex)

## 1. Core Principles (Invariants)
*   **Single Source of Truth:** `rx.State` is the ONLY place where business logic lives.
*   **UI Purity:** Components NEVER mutate variables directly. They event handlers in State.
*   **Database Sync:** State is the bridge between the UI and the Database.
*   **Computed Vars:** Use `@rx.var` for derived data. NEVER store redundant state.

## 2. Workflow (Decision Tree)
1.  **Is it a Database Model?** -> **SQLModel** (in `state/models`).
2.  **Is it UI State?** -> **BaseVar** (in `rx.State`).
3.  **Is it Derived?** -> **Computed Var** (`@rx.var`).
4.  **Is it a Session param?** -> **Client Side Storage** or **State Var**.

## 3. Directory & Naming
*   Path: `app/state/[domain].py`
*   Naming: `class [Domain]State(rx.State):`
*   Event Handlers: `def handle_[action](self):`

## 4. Forbidden Patterns (Strict)
1.  **Global Globals:** Defining `my_list = []` at the top of a module. THIS IS NOT THREAD SAFE. Always use `rx.State`.
2.  **Logic in UI:** `rx.button(on_click=lambda: do_complex_math())`. **STOP.** Call `State.do_math`.
3.  **Blocking the Main Thread:** Running heavy computation in a synchronous event handler. Use `async` or `background tasks`.

## 5. Golden Example (The Ideal State)
```python
import reflex as rx

class CounterState(rx.State):
    # 1. Base Var
    count: int = 0

    # 2. Computed Var
    @rx.var
    def double_count(self) -> int:
        return self.count * 2

    # 3. Event Handler
    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1
```
