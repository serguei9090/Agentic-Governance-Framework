# **Python Atomic Design Framework (Reflex Edition)**

**Philosophy:** Component-Based Composition for Pure Python UIs (Reflex).
**Goal:** Create reusable, testable, and maintainable UI libraries instead of monolithic scripts.

## **1. Architecture Layers**

We follow a strict Atomic Design hierarchy. The Agent must map these concepts to the specific framework in use.

| Layer | Concept | Python Implementation (Reflex) |
| :--- | :--- | :--- |
| **Atoms** | Basic Primitives (Button, Input). | `def button(text, variant="solid", **props) -> rx.Component` |
| **Molecules** | Functional Groups (Form Field). | `def field(label, input_component) -> rx.Component` |
| **Organisms** | Complete Sections (Navbar). | `def navbar(user_state) -> rx.Component` |
| **Templates** | Generic Layouts. | `def private_layout(content) -> rx.Component` |
| **Pages** | Route Handlers & State Owners. | `@rx.page(route='/dashboard') def dashboard() -> rx.Component` |

## **2. File Structure Standards**

Structure your `app_name/components` directory to match the hierarchy:

```text
app_name/
├── components/
│   ├── atoms/
│   │   ├── __init__.py
│   │   ├── button.py
│   │   └── typography.py
│   ├── molecules/
│   │   ├── __init__.py
│   │   └── search_bar.py
│   └── organisms/
│       ├── __init__.py
│       └── navbar.py
├── pages/
│   ├── __init__.py
│   └── dashboard.py
└── state/
    ├── __init__.py
    └── base.py
```

## **3. Implementation Standards**

### **A. Separation of Concerns (State vs. UI)**
*   **UI Components (Atoms/Molecules/Organisms)** MUST be "Pure Functions".
    *   They accept `props` (arguments) or `State` references.
    *   They **NEVER** define `async def` logic inside the UI function body.
*   **Business Logic** MUST reside in dedicated `rx.State` classes in `state/`.

### **B. Styling Strategy**
*   **Tokens:** Use a centralized `styles/colors.py` or `theme.py`.
*   **Forbidden:** Do not hardcode Hex codes in components (e.g., `color="#ff0000"`). Use `Theme.error` instead.
*   **Overrides:** All components SHOULD accept `**props` or `style: dict` to allow parent overrides.

### **C. Component Signature Standard**
Every component function should look like this:

```python
import reflex as rx
from ..styles import Theme

def primary_button(label: str, on_click: callable, **props) -> rx.Component:
    """
    Atom: A standardized primary button.
    """
    return rx.button(
        label,
        on_click=on_click,
        bg=Theme.primary,
        color="white",
        padding="1rem",
        _hover={"bg": Theme.primary_hover},
        **props # Allow override
    )
```

## **4. Forbidden Patterns (Strict)**

1.  **Logic Leak:** Defining `rx.State` sub-classes *inside* a component file (unless it's a strictly local ComponentState).
    *   *Bad:* Defining `class LoginState(rx.State)` inside `login_form.py`.
    *   *Good:* Defining it in `state/auth.py` and importing it.
2.  **Style Drift:** Using inline strings `"15px"` instead of `Theme.spacing.md`.
3.  **Wildcard Imports:** `from reflex import *` is strictly forbidden. Explicit imports only.
4.  **Layout Pollution:** Atoms defining external `margin`. Use the parent Molecule to position the Atom.

## **5. Golden Example (The Ideal Molecule)**

```python
# app/components/molecules/search_input.py
import reflex as rx
from ..atoms.button import primary_button

def search_input(
    placeholder: str, 
    value: str, 
    on_change: callable, 
    on_submit: callable
) -> rx.Component:
    
    return rx.hstack(
        rx.input(
            placeholder=placeholder,
            value=value,
            on_change=on_change,
            border="1px solid #EAEAEA",
        ),
        primary_button("Search", on_click=on_submit),
        spacing="4",
    )
```