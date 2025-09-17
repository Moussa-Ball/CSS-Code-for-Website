# A Place to Re — Rotating Words Widget

Hi — I built a small rotating-words widget you can drop into any page (hero, header, landing page). Below are the copy‑paste steps and simple options so your client can install it without touching JavaScript.

What this package contains
- `index.html` — example page (local testing).
- `style.css` — scoped styles under `.aptr-rotator` so it won't collide with host styles.
- `script.js` — lightweight, dependency-free script that initializes one widget per `.aptr-rotator` container.

Easy install (for non-developers)
1. Upload `style.css` and `script.js` to your site (e.g. `/assets/widgets/aptr/`).
2. Add these two lines to your page template (paste into `<head>`):

```html
<link rel="stylesheet" href="/assets/widgets/aptr/style.css">
<script src="/assets/widgets/aptr/script.js" defer></script>
```

3. Paste the widget HTML where you want it to appear — that's it.

Ready-to-use example (copy/paste)
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

Timing (no-code)
You can control the timing per widget using HTML attributes on the `.aptr-rotator` element. This is the recommended approach for non-developers.

- `data-delay` — how long each word stays fully visible (milliseconds). Default: `1500`.
- `data-transition` — swipe transition duration (milliseconds). Default: `1500`.

Example:
```html
<div class="aptr-rotator" data-delay="2000" data-transition="1200"> ... </div>
```

Styling quick tweaks
- Change the accent color (the rotating word):
```css
.aptr-rotator{ --aptr-accent: #0e6ffc; }
```
- Increase font size:
```css
.aptr-rotator .rotator{ font-size: 3rem; }
```

Accessibility and fallbacks
- I included a `<noscript>` fallback in the example so non-JS users see meaningful content.
- Screen readers: the rotating word uses `aria-live="polite"` and `aria-atomic="true"` for proper announcements. If the rotation is purely decorative, add `aria-hidden="true"` to `.rotator__viewport`.
- Reduced motion: the widget respects `prefers-reduced-motion` and disables animations when requested.

Hero integration tips
- Drop the widget inside your hero container. It won't force the page height and will adapt to your layout.
- It's transparent by default so it layers well on images and gradients.

Troubleshooting quick checklist
- Nothing visible? Confirm `style.css` is loaded and `script.js` is loaded with `defer`.
- Animation not running? Check the browser console for JavaScript errors and confirm JS is enabled.
- Visual spacing issues? Host CSS can affect fonts and spacing — override via the container variables or `.aptr-rotator .rotator{}`.

Extras I can add (tell me which)
- Create a ZIP package with the files ready to send to the client.
- Add an accessible Pause/Play control so users can stop/start the rotation.
- Make a `data-start` attribute to control the reveal delay per widget.

If you'd like, I can add the Pause/Play button and package everything into a ZIP for delivery. Tell me which option you want and I'll do it and update the README with the final instructions.
