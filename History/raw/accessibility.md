# **Accessibility (a11y) Framework**

**Status:** DRAFT / STANDALONE
**Objective:** Ensure full compliance with **WCAG 2.1 Level AA** standards.

## **1. The Core Directive**
> **"If it's not accessible, it's not done."**

Accessibility is not a "nice to have" feature; it is a fundamental requirement for legal compliance (ADA) and user inclusivity.

## **2. Approved Toolchain**

1.  **Linter:** `eslint-plugin-jsx-a11y`
    *   *Action:* Must be enabled in `eslint.config.js`.
    *   *Rule:* Block commits that contain a11y errors.
2.  **Automated Testing:** `axe-core` / `jest-axe`
    *   *Action:* Integrate into Unit Tests.
    *   *Rule:* Any component test failure regarding accessibility must break the build.
3.  **Manual Check:** Keyboard Navigation
    *   *Action:* You must be able to use the entire feature using ONLY the `Tab` and `Enter/Space` keys.

## **3. Implementation Rules**

### **A. Semantic HTML First**
Do not build custom interactive elements if a native one exists.
*   ❌ **Bad:** `<div onClick={submit}>Submit</div>` (Not focusable, no screen reader role)
*   ✅ **Good:** `<button onClick={submit}>Submit</button>`

### **B. Focus Management**
*   **Outline:** NEVER set `outline: none` without providing a visible alternative focus state.
*   **Skip Links:** All pages must have a "Skip to Main Content" link hidden at the top.

### **C. Visual Requirements**
*   **Contrast:** Text vs Background must have a ratio of at least **4.5:1**.
*   **Motion:** Respect the user's `prefers-reduced-motion` OS setting.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### **D. Forms & Inputs**
*   **Labels:** Every input MUST have an associated label.
*   **Placeholders:** Placeholders are NOT labels. They disappear when typing.
*   **Error Messages:** Must be programmatically associated with the input using `aria-describedby`.

## **4. The "Axe" CI Check**
(Future Implementation Guide)

When ready to integrate, run this in your CI pipeline:
```bash
npx axe-cli http://localhost:3000 --exit-code 1
```
