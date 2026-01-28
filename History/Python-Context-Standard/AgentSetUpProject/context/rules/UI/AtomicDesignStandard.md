# **Python Atomic Design Framework**

**Philosophy:** Component-Based Composition for Pure Python UIs (Reflex, Streamlit, Dash, Solara).
**Goal:** Create reusable, testable, and maintainable UI libraries instead of monolithic scripts.

## **1. Architecture Layers**

We follow a strict Atomic Design hierarchy. The Agent must map these concepts to the specific framework in use.

| Layer | Concept | Python Implementation Example |
| :--- | :--- | :--- |
| **Atoms** | Basic Primitives (Button, Input). | `def button(text, **style): ...` |
| **Molecules** | functional Groups (Form Field). | `def search_bar(state): ...` |
| **Organisms** | Complete Sections (Navbar). | `class Navbar(Component): ...` |
| **Templates** | Generic Layouts. | `def dashboard_layout(content): ...` |
| **Pages/Views** | Route Handlers. | `@route('/home') def home(): ...` |

## **2. Implementation Standards**

### **A. Separation of Concerns (State vs. UI)**
*   **UI Components (Atoms/Molecules)** should be "Pure Functions" or "Stateless Classes". They take data as arguments and return UI objects.
*   **Business Logic** should reside in dedicated State classes (e.g., `rx.State` in Reflex, `st.session_state` in Streamlit).

```python
# BAD: Mixing Logic and UI
def login_button():
    if check_database():  # Side Effect!
        return Button("Success")

# GOOD: Passing State Handler
def login_button(on_click):
    return Button("Login", on_click=on_click)
```

### **B. Styling Strategy**
*   **Do Not** hardcode hex codes in components.
*   **Do** use a centralized `theme.py` or configuration dict.
*   **Do** expose style arguments (`**kwargs` or `style` dicts) to allow override.

## **3. Responsive Design**
*   All Components must be built "Mobile First".
*   Use the framework's responsive props (e.g., `width=["100%", "50%"]`) instead of fixed pixels.
