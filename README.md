# haxlr.io

Game-designer hub, built with HTML/CSS/JavaScript and deployed on Vercel.

- Class A / Warrior: portfolio and CV (80.lv)
- Class B / Mage: playable games
- Class C / Rogue: Punimalz shop
- 3LEMENTS: game in development and demo registration
- 4XUS: the beginning of a new era
- Services: 33 €, 133 €, 1 333 € and custom budgets

## Preview

Run `npx serve .`, then visit the local URL. For the services page on a simple static server, use `/services.html`; Vercel serves it at `/services` with `cleanUrls`.

## Contact requests

The form prepares a mailto email to `4xustudio@gmail.com`. Visitors must send it from their email application. No request is stored server-side. Set `CONTACT_EMAIL` in `services.js` and update the fallback link in `services.html` to change the recipient.

## Deployment

Commits to `main` automatically deploy to the existing Vercel project.

## Structure

- `index.html`: intro, character selection, projects and services entry
- `styles.css`: shared visual identity and responsive styles
- `services.html`: pricing and request form
- `services.css`: pricing page layout
- `services.js`: FR/EN, package selection and email preparation
- `vercel.json`: headers and clean URLs
