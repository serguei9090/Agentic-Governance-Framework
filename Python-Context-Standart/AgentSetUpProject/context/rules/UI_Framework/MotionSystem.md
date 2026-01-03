# **Python Motion System**

**Objective:** Standardize animations using Python-defined tokens passed to the UI renderer.

## **1. The Motion Tokens**

Define these in your global config/theme file (`config.py`, `theme.py`, or `styles.py`).

| Token | Duration | Intent |
| :--- | :--- | :--- |
| **`TRANSITION_INSTANT`** | `100ms` | Micro-interactions (Hover, Click). |
| **`TRANSITION_FAST`** | `200ms` | Tooltips, dropdowns, small fades. |
| **`TRANSITION_DELIBERATE`** | `400ms` | Modals, drawers, page transitions. |

## **2. Implementation Guidelines**

### **A. Global Transition Config**
Store animation strings in a central dictionary or constant module.

```python
# theme.py
ANIMATIONS = {
    "instant": "all 100ms ease-out",
    "fast": "all 200ms ease-out",
    "deliberate": "all 400ms ease-in-out",
}
```

### **B. Component Usage**
Pass these tokens to the framework's styling engine.

```python
# Example (Generic)
def animated_box():
    return Box(
        transition=ANIMATIONS["fast"],
        _hover={"transform": "scale(1.05)"}
    )
```

## **3. Accessibility**
*   Check for `prefers-reduced-motion`.
*   If the framework allows, disable all animations when this flag is detected.
