# A Place to Re — Rotating Words Widget

Professional, copy-paste integration instructions for your client

Overview
This small, self-contained widget shows the heading "A Place to Re" followed by a rotating word (swipe-up transition). It is built to be embedded into any section of a site (including hero areas) and scoped to avoid conflicts with the host site's CSS and JavaScript.

What you get
- `index.html` — an example page for local testing.
- `style.css` — widget styles scoped under `.aptr-rotator` to avoid collisions.
- `script.js` — simple, dependency-free rotation logic that initializes one instance per container.

Quick install (3 steps for non-developers)
1. Copy the three files (`style.css`, `script.js`, and `index.html` as an example) to a folder on your site, for example: `/assets/widgets/aptr/`.
2. Open the page where you want the widget and add these two lines (paste into the `<head>` or appropriate template):

```html
<link rel="stylesheet" href="/assets/widgets/aptr/style.css">
<script src="/assets/widgets/aptr/script.js" defer></script>
```

3. Paste the widget HTML where you want it to appear (example below). No other edits are required.

Ready-to-use example (copy this):
```html
<div class="aptr-rotator" data-delay="1500" data-transition="1500">
  <div class="wrapper rotator-wrapper">
    <h1 class="rotator">A Place to Re<span class="rotator__viewport" aria-live="polite" aria-atomic="true">
      <span class="rotator__list">
        <span class="rotator__word">plenish</span>
        <span class="rotator__word">new</span>
        <span class="rotator__word">lax</span>
        <span class="rotator__word">flect</span>
        <span class="rotator__word">calibrate</span>
        <span class="rotator__word">turn to Yourself</span>
      </span>
    </span></h1>
  </div>
</div>
```

Timing configuration (no-code)
You can set timings per widget using HTML attributes on the `.aptr-rotator` element. This is the recommended approach for non-developers.

- `data-delay` — how long each word remains fully visible, in milliseconds. Default: `1500`.
- `data-transition` — swipe animation duration, in milliseconds. Default: `1500`.

Example:
```html
<div class="aptr-rotator" data-delay="2000" data-transition="1200"> ... </div>
```

Styling and simple customization
- Change accent color (animated word):
```css
.aptr-rotator{ --aptr-accent: #0e6ffc; }
```
- Change font size:
```css
.aptr-rotator .rotator{ font-size: 3rem; }
```
- If you need the widget to use a different font, set `--aptr-font` on the container or include the font link in your page.

Accessibility and fallbacks
- Non-JS fallback: the example includes a `<noscript>` fallback so visitors without JavaScript see a meaningful static line.
- Screen readers: the changing word is in `aria-live="polite"` and `aria-atomic="true"` for sensible announcements. If the animation is purely decorative, add `aria-hidden="true"` to `.rotator__viewport`.
- Reduced motion: the widget respects `prefers-reduced-motion` and disables the swipe animation.

Integration tips for hero sections
- Place the widget anywhere inside your hero container (for example `.hero .aptr-rotator`). The widget does not force full-page height and will adapt to the hero layout.
- The widget background is transparent by default so it layers cleanly over images or gradients.

Troubleshooting (quick)
- No text visible: check that `style.css` is loaded and `script.js` is loaded with `defer` or placed before `</body>`.
- Animation not running: ensure JavaScript is enabled and there are no console errors in the browser developer tools.
- Spacing/visual issues: host styles can affect fonts and line-height; you can override via the container CSS variables or the `.aptr-rotator .rotator{}` rules.

Delivery options we can provide
- Create a ZIP package with the files and a ready-to-send handoff folder.
- Add a visible Pause/Play control (accessible, keyboard-friendly) so end users can stop the rotation.
- Make the timing configurable via `data-delay` and `data-transition` (already implemented).

Support
If you want us to produce the ZIP bundle or add Pause/Play control, reply with which option. We can also provide a one-line snippet for the client's CMS (Squarespace, WordPress theme, etc.) if you tell us which platform.

----

Thank you — tell me which extra you want and I'll implement it and include updated instructions in the package.
