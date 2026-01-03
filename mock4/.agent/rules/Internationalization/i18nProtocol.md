# **Internationalization (i18n) Protocol**

**Objective:** Ensure the application is "Global Ready" from Day 1. Hardcoded strings are treated as Technical Debt.

## **1. The Golden Rule**

> **"There are no strings in the codebase, only Keys."**

*   ❌ BAD: `<h1>Welcome back!</h1>`
*   ✅ GOOD: `<h1>{t('dashboard.welcome_back')}</h1>`

## **2. Approved Toolchain**

*   **Core:** `i18next` (The industry standard).
*   **React:** `react-i18next`.
*   **Extraction:** `i18next-parser` (Automated JSON generation).

## **3. Implementation Standards**

### **A. Key Structure (Nested)**
Use a logical, deeply nested structure to avoid collisions.
```json
// en.json
{
  "auth": {
    "login": {
      "title": "Sign In",
      "cta": "Submit"
    },
    "errors": {
      "invalid_email": "Please enter a valid email."
    }
  },
  "common": {
    "loading": "Loading...",
    "save": "Save"
  }
}
```

### **B. Component Pattern**
Directly use the `useTranslation` hook.

```tsx
import { useTranslation } from 'react-i18next';

export const LoginHeader = () => {
  const { t } = useTranslation();
  return <h2>{t('auth.login.title')}</h2>;
};
```

## **4. Operational Directives**

1.  **English is a Fallback:** The default language is `en-US`.
2.  **No Variables in Keys:** Never construct keys dynamically like `t('menu.' + id)`. This breaks static analysis extractors.
3.  **Plurals & Interpolation:** Use i18next's native features for plurals (`count`) and interpolation (`{{name}}`). Do not manually concatenated strings.
