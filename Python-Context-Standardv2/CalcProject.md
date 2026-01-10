# **Project Specification: Local Calc History**

Version: 1.0.0
Type: Python Web Application (Reflex)

## **1. Executive Summary**
**Local Calc History** is a simple yet architecturally robust calculator application. It performs basic arithmetic operations and persists the calculation history to a local SQLite database.

**Core Value:** Demonstrates the "Modular Monolith" architecture using Reflex, SQLModel, and Reactive State.

## **2. Tech Stack**
*   **Framework:** Reflex (Python-based UI & Logic)
*   **Database:** SQLite (Local)
*   **ORM:** SQLModel (Built-in to Reflex)
*   **Tooling:** Ruff, MyPy

## **3. Architecture**

### **3.1 Data Flow**
User Input -> Reflex State (Event Handler) -> Calculation Logic -> SQLModel (Persist) -> UI Update

### **3.2 Database Schema**
**Table:** `Calculation`
*   `id`: int (Primary Key)
*   `expression`: str (e.g., "2 + 2")
*   `result`: float (e.g., 4.0)
*   `timestamp`: datetime

## **4. Feature Specifications**

### **Feature A: The Calculator UI**
*   Standard grid layout for buttons (0-9, +, -, *, /, =).
*   Display screen showing current input.
*   "Clear" button to reset input.

### **Feature B: History Sidebar**
*   A sidebar (drawer) that lists the last 10 calculations.
*   Real-time updates: When a calculation is performed, the history updates immediately.

### **Feature C: Persistence**
*   On app startup, load previous history from `calc.db`.

## **5. API Interface (Reflex State)**

```python
class State(rx.State):
    current_expression: str = ""
    history: list[Calculation] = []

    def calculate(self):
        # 1. Eval expression (Safe eval)
        # 2. Save to DB
        # 3. Refresh History
        pass
```

## **6. Development Workflow**
1.  **Init:** `reflex init`
2.  **Run:** `reflex run`
3.  **Test:** `pytest`
