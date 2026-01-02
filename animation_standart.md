# Animation Standard

Use this standard for UI micro-motion in the app when animation is requested.

Goals
- Subtle, fast feedback for interactive elements.
- Never block content or interrupt primary flows.
- Consistent timing and easing across desktop and mobile.
- Use shared motion tokens from `packages/ui/src/tokens/index.ts` when implementing.

General Rules
- Keep animation durations between 120ms and 220ms.
- Prefer easing: ease-out for entrances, ease-in for exits.
- Use scale and opacity for micro-motion; avoid large movement.
- Do not animate layout-critical sizes unless required.
- Keep motion optional when user motion settings are reduced.

Dropdowns and Menus
- Open: fade in + small translate up to down (4-8px).
- Close: fade out + reverse translate.
- Duration: 140-180ms.
- Example: opacity 0 -> 1, y -6 -> 0.

Buttons and Cards
- Hover: scale 1.01 and slightly stronger shadow.
- Press: scale 0.98.
- Transition: spring (stiffness ~300-340, damping ~20-26) or 160ms ease-out.
- Avoid glow or heavy blur.

List Rows and Toggles
- Hover: subtle background tint change only.
- Press: brief scale 0.99 or no scale; keep text stable.
- Duration: 120-160ms.

Page Sections
- If needed, stagger children by 40-70ms with short fades.
- Avoid large slide-in effects unless explicitly requested.

Preferred Defaults (Desktop, Framer Motion)
- Dropdown: initial { opacity: 0, y: -6 }, animate { opacity: 1, y: 0 }, exit { opacity: 0, y: -6 }
- Resume Card: whileHover { scale: 1.01, boxShadow: stronger }, whileTap { scale: 0.98 }
- Transition: { duration: 0.16, ease: 'easeOut' } for dropdowns.
- Token mapping: `theme.motion.duration`, `theme.motion.easing`, `theme.motion.scale`, `theme.motion.offset`, `theme.motion.spring`.

Preferred Defaults (Mobile, React Native)
- Use Animated or Reanimated for micro feedback when requested.
- Keep scale changes <= 2%.
- Keep opacity changes <= 20%.
- Use motion values from `tokens.motion` where possible; convert to ms as needed.

Accessibility
- Respect reduced motion settings; provide a no-motion path.
- Ensure focus/hover states are visible without animation.
