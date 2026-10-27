# haxlr.io

Game-designer hub, built with HTML/CSS/JavaScript and deployed on Vercel.

- Class A / Warrior: portfolio and CV (80.lv)
- Class B / Mage: playable games
- Class C / Rogue: Punimalz shop
- 3LEMENTS: game in development and demo registration
- 4XUS: the beginning of a new era
- Services: AI assessment €1,490, AI automation from €2,400, custom AI assistant from €6,900 (excl. VAT), add-ons and custom budgets from €600
- Social channels: Twitch, YouTube, Instagram, TikTok and LinkedIn, with platform logos and portraits
- Share the social section directly at `https://www.haxlr.io/#reseaux`

## Preview

Run `npx serve .`, then visit the local URL. For the services page on a simple static server, use `/services.html`; Vercel serves it at `/services` with `cleanUrls`.

## Contact requests

The form prepares a mailto email to `axelguedj@hotmail.fr`. Visitors must send it from their email application. No request is stored server-side. Set `CONTACT_EMAIL` in `services.js` and update the fallback link in `services.html` to change the recipient.

## Deployment

Commits to `main` automatically deploy to the existing Vercel project.

## Structure

- `index.html`: intro, character selection, projects and services entry
- `styles.css`: shared visual identity and responsive styles
- `services.html`: pricing and request form
- `services.css`: pricing page layout
- `services.js`: FR/EN, package selection and email preparation
- `vercel.json`: headers and clean URLs

## Social portraits

The five portraits are served locally and lazy-loaded. Image sources, authors and licenses are available in the expandable credits beneath the cards. Cropping and monochrome treatment use CSS; original downloaded image files are retained. Brand SVGs use Simple Icons (CC0) and the LinkedIn mark. Portraits identify the public figures requested for each platform; the links lead to Axel’s own accounts.

## Business contact

The home page presents Axel Guedj’s business-card details and four areas of expertise. Phone links use `tel:+33695403919`; contact and service requests use `axelguedj@hotmail.fr`. Both pages include French and English copy. Share the contact panel at `https://www.haxlr.io/#contact`.

## CV

The current CV is served at `https://www.haxlr.io/cv.pdf` (file `cv.pdf` at the root) and linked from the contact panel. To update it, replace `cv.pdf` with the new version under the same name: the link used in applications stays valid.
