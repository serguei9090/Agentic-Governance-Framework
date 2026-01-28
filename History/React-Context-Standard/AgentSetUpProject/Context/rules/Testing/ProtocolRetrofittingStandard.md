# **Protocol: Retrofitting BDD/TDD into Legacy React Code**

**Objective:** Add test coverage to an existing codebase without breaking current functionality.

## **Phase 1: Infrastructure Setup (Execute First)**

*Instructions for the Agent:*

1. Analyze package.json to check for existing test runners.  
2. Install the "Modern Stack" if missing:  
   npm install \-D vitest @testing-library/react @testing-library/jest-dom jsdom vitest-cucumber playwright

3. Create vitest.config.ts configured for React/JSDOM.  
4. Create the directory structure tests/features, tests/steps, and tests/e2e.

## **Phase 2: The "Lock-In" Workflow (Repeat for each feature)**

*Instructions for the Agent:*

Target Identification:  
Identify the "Critical Path" components first (e.g., Login, Checkout, Data Dashboard). Do not start with utility components.  
**Step 1: Reverse-Engineer Requirements (Generate Gherkin)**

* **Action:** Read the source code for target component (e.g., src/components/PaymentForm.tsx).  
* **Task:** Create a .feature file that describes *exactly* what the code currently does.  
* **Constraint:** Do not improve or change the logic yet. Only document current behavior (even if it seems weird).  
  * *Example:* "Given the user enters an invalid card, Then the error message appears immediately."

**Step 2: Component Hardening (Add Test Attributes)**

* **Action:** If the component relies on obscure CSS classes for selection, add data-testid attributes to the source code to make testing robust.  
  * *Change:* \<button className="btn-primary-lrg"\> \-\> \<button data-testid="submit-payment" className="btn-primary-lrg"\>

**Step 3: Implement Glue Code (Vitest-Cucumber)**

* **Action:** Write the step definitions using React Testing Library.  
* **Constraint:** Use screen.getByTestId or screen.getByRole to interact with the elements.

**Step 4: Verification**

* **Action:** Run the test.  
* **Goal:** The test MUST pass immediately. If it fails, either the test is wrong, or you discovered a bug.  
  * *If Bug:* Mark it as @bug in the feature file and make the test pass based on the *current buggy behavior* (we fix bugs later; right now we are documenting reality).

## **Phase 3: Integration Safety Net (Playwright)**

Instructions for the Agent:  
Since the project is in late development, Unit tests might miss context.

1. Create one E2E test file per major user journey.  
2. Focus on "Happy Paths" (the ideal user journey) to ensure the build doesn't crash.

## **Example Prompt to copy/paste to your Agent:**

"I need to backfill tests for src/components/UserProfile.tsx.

1. Analyze the component code.  
2. Write a UserProfile.feature file describing its current behavior.  
3. Add data-testid attributes to the component where necessary for easy selection.  
4. Write the UserProfile.steps.tsx using Vitest and React Testing Library.  
5. Ensure the test passes with the current code."