# **Senior React Testing Architecture: TDD, BDD, and Integration**

**Stack:** React, Vitest, React Testing Library, Vitest-Cucumber, Playwright

## **1\. Executive Summary & Philosophy**

In this architecture, we do not view testing as a "phase" that happens after coding. We view it as the **design specification**.

* **BDD (Behavior Driven Development)** is our **Contract**. It describes *what* the system does in plain English using Gherkin (.feature files). This bridges the gap between Product/Business and Engineering.  
* **TDD (Test Driven Development)** is our **Implementation Tool**. We use the BDD specs to drive the actual code writing in short, iterative loops (Red \-\> Green \-\> Refactor).  
* **Integration/E2E** is our **Validation**. It ensures that the units we built using TDD actually work together in a real environment.

### **The Testing Pyramid Strategy**

1. **Unit/Component BDD (Fastest):** Uses vitest-cucumber. Runs in Node/JsDom. Tests logic and component rendering.  
2. **Integration/E2E (Slower, Most Realistic):** Uses Playwright. Runs in a real browser engine. Tests full user flows and routing.

## **2\. Directory Structure**

A clean structure is vital for scaling. We separate "Features" (specs) from "Steps" (glue code).

my-app/  
├── src/  
│   ├── components/  
│   │   ├── LoginForm.tsx  
│   │   └── LoginForm.test.tsx      // Standard Unit Tests (Optional if BDD covers it)  
├── tests/  
│   ├── features/                   // The Source of Truth (Gherkin)  
│   │   ├── login.feature  
│   │   └── checkout.feature  
│   ├── steps/                      // The Glue Code (Vitest-Cucumber)  
│   │   ├── login.steps.tsx  
│   │   └── checkout.steps.tsx  
│   └── e2e/                        // Playwright Tests  
│       └── login.spec.ts  
├── package.json  
└── vitest.config.ts

## **3\. Configuration & Setup**

### **A. Installation**

Install the necessary dev dependencies. Note that we need vitest-cucumber to bridge Gherkin and Vitest.

npm install \-D vitest @testing-library/react @testing-library/jest-dom jsdom vitest-cucumber playwright

### **B. vitest.config.ts**

Configure Vitest to handle the DOM environment and recognize your feature files.

// vitest.config.ts  
import { defineConfig } from 'vitest/config';  
import react from '@vitejs/plugin-react';

export default defineConfig({  
  plugins: \[react()\],  
  test: {  
    environment: 'jsdom',  
    globals: true,  
    setupFiles: './tests/setup.ts',  
    include: \['\*\*/\*.{test,spec,steps}.{js,jsx,ts,tsx}'\], // Include .steps files  
  },  
});

### **C. tests/setup.ts**

Ensure standard matchers (like toBeInTheDocument) are available.

// tests/setup.ts  
import '@testing-library/jest-dom';

## **4\. The Workflow: A Practical Example (Login Feature)**

We will build a Login feature using the **BDD → TDD** cycle.

### **Phase 1: The Contract (BDD)**

*Role: Product Owner / Architect*

Create the feature file. This defines success before a single line of code is written.

**File:** tests/features/login.feature

Feature: User Authentication

  Scenario: Successful Login  
    Given I am on the login component  
    When I enter "admin@test.com" into the email field  
    And I enter "password123" into the password field  
    And I click the Login button  
    Then the "Welcome Back" message should appear

### **Phase 2: The Glue (TDD Step Definitions)**

*Role: Senior Developer*

Now, write the test that *fails*. We map the English sentences to React Testing Library code.

**File:** tests/steps/login.steps.tsx

import { loadFeature, defineFeature } from 'vitest-cucumber';  
import { render, screen, fireEvent } from '@testing-library/react';  
import { expect, vi } from 'vitest';  
import LoginForm from '../../src/components/LoginForm'; // This component might not exist yet\!

const feature \= loadFeature('./tests/features/login.feature');

defineFeature(feature, (test) \=\> {  
  test('Successful Login', ({ given, when, then, and }) \=\> {  
      
    given('I am on the login component', () \=\> {  
      render(\<LoginForm /\>);  
    });

    when(/^I enter "(.\*)" into the email field$/, (email) \=\> {  
      const emailInput \= screen.getByPlaceholderText(/email/i);  
      fireEvent.change(emailInput, { target: { value: email } });  
    });

    and(/^I enter "(.\*)" into the password field$/, (password) \=\> {  
      const passwordInput \= screen.getByPlaceholderText(/password/i);  
      fireEvent.change(passwordInput, { target: { value: password } });  
    });

    and('I click the Login button', () \=\> {  
      const button \= screen.getByRole('button', { name: /login/i });  
      fireEvent.click(button);  
    });

    then(/^the "(.\*)" message should appear$/, async (message) \=\> {  
      // We use findBy because the success message might be async  
      const msg \= await screen.findByText(message);  
      expect(msg).toBeInTheDocument();  
    });  
  });  
});

**Crucial TDD Step:** Run npm test. It will **FAIL** because LoginForm doesn't exist or doesn't have these fields. This is "Red".

### **Phase 3: The Implementation (Make it Green)**

*Role: Developer*

Write the component to satisfy the BDD steps.

**File:** src/components/LoginForm.tsx

import { useState } from 'react';

export default function LoginForm() {  
  const \[status, setStatus\] \= useState('idle');

  const handleSubmit \= (e: React.FormEvent) \=\> {  
    e.preventDefault();  
    // Simulate API call  
    setTimeout(() \=\> setStatus('success'), 100);  
  };

  if (status \=== 'success') return \<div\>Welcome Back\</div\>;

  return (  
    \<form onSubmit={handleSubmit}\>  
      \<input type="email" placeholder="Enter Email" required /\>  
      \<input type="password" placeholder="Enter Password" required /\>  
      \<button type="submit"\>Login\</button\>  
    \</form\>  
  );  
}

**Crucial TDD Step:** Run npm test. It should now **PASS** ("Green"). You can now refactor the styling or logic safely.

## **5\. Integration / E2E Testing (Playwright)**

While Vitest tests the *component logic*, Playwright tests the *app in a browser*.

Why do we need this?  
Vitest mocks the DOM. It doesn't know if your CSS z-index is hiding the button, or if the routing broke. Playwright validates the real user experience.  
**File:** tests/e2e/login.spec.ts

import { test, expect } from '@playwright/test';

test('E2E: Full Login Flow', async ({ page }) \=\> {  
  // 1\. Go to real app URL (Make sure your local server is running)  
  await page.goto('http://localhost:5173/login');

  // 2\. Interaction  
  await page.getByPlaceholder('Enter Email').fill('admin@test.com');  
  await page.getByPlaceholder('Enter Password').fill('password123');  
  await page.getByRole('button', { name: /login/i }).click();

  // 3\. Assertion (Real browser behavior)  
  await expect(page.getByText('Welcome Back')).toBeVisible();  
});

## **6\. Senior Advice & Best Practices**

1. **Keep Gherkin High-Level:**  
   * *Bad:* When I click the div with id "btn-123"  
   * *Good:* When I submit the form  
   * *Reason:* Implementation details change; business behavior rarely does.  
2. **Mocking in Vitest:**  
   * When using vitest-cucumber, heavily mock your API calls using MSW (Mock Service Worker) or vi.spyOn. Do not hit real APIs in the BDD/Unit layer.  
   * Hit real (or staged) APIs in the Playwright layer.  
3. **Speed vs. Reality:**  
   * Run Vitest (BDD) on every file save. It should take milliseconds.  
   * Run Playwright (Integration) on pre-commit or CI/CD. It takes minutes.  
4. **Handling "Context":**  
   * In complex BDD scenarios, use a closure variable inside defineFeature to store state between steps (e.g., let responseError;).

## **7\. CI/CD Command Example**

In your package.json, setup your scripts to run these layers sequentially:

"scripts": {  
  "test:unit": "vitest run",  
  "test:e2e": "playwright test",  
  "test:all": "npm run test:unit && npm run test:e2e"  
}  
