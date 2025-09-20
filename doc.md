# How to add the "A Place to Re" widget to your Squarespace site

This document explains, step-by-step and with copy-paste snippets, how your client can install the widget on Squarespace. Follow each step exactly; I prepared two safe options and troubleshooting tips.

Option A — Recommended (host files externally; most reliable)

1) Host `style.css` and `script.js` files on a CDN or reliable hosting service, and reference them via their URLs.

2) In Squarespace admin go to **Settings → Advanced → Code Injection**.

3) In the **Header** box paste this (replace the URL with the one I provide):

```html
<link rel="stylesheet" href="https://YOUR_HOST/style.css">
```

4) In the **Footer** box paste this:

```html
<script src="https://YOUR_HOST/script.js" defer></script>
```

5) Edit the page where you want the widget (landing page/hero). Add a **Code** block and paste only the widget HTML:

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

6) Save the page and preview. The widget should appear and rotate.

Notes for Option A
- This is the safest approach — Squarespace will not alter your JS or CSS.
- If you want I can host the files and give you the exact lines to paste.

Option B — Single-file paste (use only if you cannot host files)

1) In Squarespace admin, go to **Settings → Advanced → Code Injection**.

2) In the **Footer** paste a single combined snippet containing `<style>...</style>`, the HTML, and `<script>...</script>`. Example structure:

```html
<style>
/* paste the aptr CSS here */
</style>

<!-- widget HTML here -->

<script>
/* paste the full script.js contents here */
</script>
```

3) Save and test. If Squarespace strips `<script>` tags in your plan, you must use Option A.

Common problems and fixes

- Syntax error when pasting JS: This usually happens because the platform expects HTML not raw JS. Use Option A and include JS via an external hosted file.
- Mixed-content / blocked resources: ensure hosted files are served over HTTPS.
- Font or layout jump: include the Google Fonts link in the Header or let the widget wait briefly for fonts. I built a short wait in the script to minimize jitter.

If you'd like me to handle this for you
- I can host the files and return the exact snippets to paste into Code Injection and the Code Block. Tell me your Squarespace site URL and I'll prepare the hosted URLs.
- Or I can produce a single combined snippet (Option B) ready to paste; I prefer Option A but will provide either.

Next step — choose one
- Reply `Host files for me` and I'll upload the files and give you the copy-paste snippets.
- Reply `Give me the combined snippet` and I'll paste the full `<style> + HTML + <script>` block you can paste into Footer.

