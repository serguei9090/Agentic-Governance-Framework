# **Senior Python Testing Architecture: TDD, BDD, and Integration**

**Stack:** Python, Pytest, Pytest-BDD, Playwright (Python)

## **1. Executive Summary & Philosophy**

We leverage **Behavior Driven Development (BDD)** as our design specification and **Test Driven Development (TDD)** as our implementation mechanism.

### **The Testing Pyramid Strategy**

1.  **Unit/Service BDD (Fastest):** Uses `pytest` + `pytest-bdd`. Tests backend logic (Ansible runners, Data parsing).
2.  **E2E (Reflex UI):** Uses `playwright` (Python). Tests the full Reflex UI flow in a real browser.

## **2. Directory Structure**

```
reflex_ansible/
├── items/                  # App Logic
├── tests/
│   ├── features/           # Gherkin Files
│   │   ├── inventory.feature
│   │   └── jobs.feature
│   ├── step_defs/          # Step Definitions
│   │   ├── test_inventory_steps.py
│   │   └── conftest.py
│   └── e2e/                # Playwright Tests
│       └── test_ui_login.py
├── pyproject.toml
```

## **3. Configuration & Setup**

### **A. Installation**
```bash
pip install pytest pytest-bdd pytest-cov playwright
playwright install
```

### **B. pytest.ini**
```ini
[pytest]
addopts = --cov=reflex_ansible --cov-report=term-missing
testpaths = tests
bdd_features_base_dir = tests/features
```

## **4. The Workflow: A Practical Example**

### **Phase 1: The Contract (BDD)**

**File:** `tests/features/inventory.feature`

```gherkin
Feature: Inventory Management

  Scenario: Add a new host
    Given the inventory is empty
    When I add a host "web-01" with IP "192.168.1.10"
    Then the inventory should contain 1 host
    And the host "web-01" should exist
```

### **Phase 2: The Glue (TDD Step Definitions)**

**File:** `tests/step_defs/test_inventory_steps.py`

```python
from pytest_bdd import scenario, given, when, then, parsers
import pytest
from reflex_ansible.inventory import Inventory  # The unit to be built

@scenario('../features/inventory.feature', 'Add a new host')
def test_add_host():
    pass

@pytest.fixture
def inventory():
    return Inventory()

@given('the inventory is empty')
def check_empty(inventory):
    assert len(inventory.hosts) == 0

@when(parsers.parse('I add a host "{name}" with IP "{ip}"'))
def add_host(inventory, name, ip):
    inventory.add_host(name, ip)

@then(parsers.parse('the inventory should contain {count:d} host'))
def check_count(inventory, count):
    assert len(inventory.hosts) == count
```

### **Phase 3: The Implementation**

Develop the `Inventory` class to pass the test.

## **5. Integration / E2E Testing (Playwright)**

**File:** `tests/e2e/test_ui.py`

```python
from playwright.sync_api import Page, expect

def test_homepage_has_title(page: Page):
    page.goto("http://localhost:3000")
    expect(page).to_have_title("Reflex Ansible Manager")

def test_add_host_ui(page: Page):
    page.goto("http://localhost:3000/inventory")
    page.get_by_placeholder("Hostname").fill("web-prod")
    page.get_by_role("button", name="Add").click()
    expect(page.get_by_text("web-prod")).to_be_visible()
```
