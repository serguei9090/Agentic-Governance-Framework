# **Senior Python Testing Architecture: TDD, BDD, and Integration**

**Stack:** Python, Pytest, Pytest-BDD, Playwright (Python)

## **1. Executive Summary & Philosophy**

We leverage **Behavior Driven Development (BDD)** as our design specification and **Test Driven Development (TDD)** as our implementation mechanism.

### **The Testing Pyramid Strategy**

1.  **Unit/Service BDD (Fastest):** Uses `pytest` + `pytest-bdd`. Tests backend logic (Data parsing, State).
2.  **E2E (Reflex UI):** Uses `playwright` (Python). Tests the full Reflex UI flow in a real browser.

## **2. Configuration & Setup**

### **A. Installation**
```bash
pip install pytest pytest-bdd pytest-cov playwright
playwright install
```

### **B. pyproject.toml (Config)**
```toml
[tool.pytest.ini_options]
addopts = "--cov=. --cov-report=term-missing"
testpaths = ["tests"]
```

## **3. The Workflow**

### **Phase 1: The Contract (BDD)**
Write `.feature` files in `tests/features/`.

```gherkin
Feature: Inventory Management
  Scenario: Add a new host
    Given the inventory is empty
    When I add a host "web-01"
    Then the inventory should contain 1 host
```

### **Phase 2: The Glue (TDD Step Definitions)**
Write `_test.py` files in `tests/` mapping steps to code.

### **Phase 3: The Implementation**
Develop the Class/Function to pass the test.

## **4. Integration / E2E Testing (Playwright)**

```python
from playwright.sync_api import Page, expect

def test_homepage_has_title(page: Page):
    page.goto("http://localhost:3000")
    expect(page).to_have_title("Reflex App")
```
