# Internationalization (I18N) Standard (Python v2)

## 1. Core Principles (Invariants)
*   **Separation:** Text UI strings must NOT be hardcoded in Python logic.
*   **Key-Based:** Use semantic keys (`"welcome_message"`) not English text as keys.
*   **Locale Detection:** Automatically detect user locale from browser headers.

## 2. Workflow (Translation Cycle)
1.  **Extract:** Wrap strings in `_("key")` or use a Translation Dict.
2.  **Translate:** Populate `locales/es/messages.json` or `.po` files.
3.  **Load:** App loads correct strings based on Session State.

## 3. Toolchain (Reflex Native)
*   **Mechanism:** Python Dictionary lookup or `gettext`.
*   **State:** Store `locale` in `rx.State`.

## 4. Forbidden Patterns (Strict)
1.  **Hardcoding:** `rx.text("Hello World!")`. Use `rx.text(State.strings["hello"])`.
2.  **Concatenation:** `"Hello " + name`. Use formatted strings `_("hello_format").format(name=name)`.

## 5. Golden Example (Dict Pattern)
```python
# state/i18n.py
class I18nState(rx.State):
    locale: str = "en"
    
    translations: dict = {
        "en": {"welcome": "Welcome, {name}!"},
        "es": {"welcome": "¡Bienvenido, {name}!"}
    }

    @rx.var
    def t(self, key: str, **kwargs) -> str:
        template = self.translations.get(self.locale, {}).get(key, key)
        return template.format(**kwargs)

# UI
rx.text(I18nState.t("welcome", name="Alice"))
```
