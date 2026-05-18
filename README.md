# haxlr.io

A game-designer hub. Three paths, one universe.

- **WARRIOR** → portfolio & CV (80.lv)
- **MAGE** → playable games (round web app)
- **ROGUE** → merch shop (Punimalz)

## Stack

Pure HTML/CSS/JS. No framework, no build step. Hosted on Vercel.

## Local preview

```bash
npx serve .
```

Then open `http://localhost:3000`.

Or just open `index.html` in your browser.

## Deploy

Pushes to `main` auto-deploy to Vercel.

## Structure

```
.
├── index.html      # The whole site (intro + character select menu)
├── vercel.json     # Vercel config (headers, clean URLs)
├── package.json    # Project metadata
└── .gitignore
```
