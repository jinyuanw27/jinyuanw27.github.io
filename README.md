# Personal Website

A minimal personal site with a retro XP-style boot intro: a boot screen with a flip phone,
and a startup sound that plays when the visitor clicks to enter.

## Files

- `index.html` — homepage with the boot screen (settings in `CONFIG` at the bottom)
- `failures.html` — Failure Résumé page
- `misc.html` — Misc page (cat photo gallery)
- `style.css` — shared styles for all pages
- `dokia.css` — the flip phone shown on the boot screen
- `photo.jpg` — your photo (add it next to `index.html`; initials show until it exists)
- `misc/` — cat photos for the Misc page (`cat-1.jpg`, `cat-2.jpg`, …)

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Credits

- Flip phone (DOKIA) layout by daniel — https://layouts.spacehey.com/layout?id=82799
- Boot sound idea from the Windows XP layout by Cory — https://layouts.spacehey.com/layout?id=1169
