# Nexar Shipping Solutions

Modern static marketing site for [Nexar Shipping Solutions](https://www.nexarsolutions.de/) — international freight forwarding from Wegberg, Germany.

Built with [Astro](https://astro.build/) (static output). Quote and contact forms submit client-side via [FormSubmit](https://formsubmit.co/) to `info@nexarsolution.de`.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build static site to `./dist/`              |
| `npm run preview` | Preview the production build locally        |

## Site map

- `/` — Home
- `/about` — About Nexar
- `/services/air-freight`
- `/services/sea-freight`
- `/services/road-freight`
- `/services/customs-clearance`
- `/services/car-shipping`
- `/quote` — Quote request form
- `/contact` — Contact details and form

## Notes

- First FormSubmit submission to a new email may require inbox confirmation.
- Brand assets live in `public/images/`; shared copy and contact data in `src/content/site.ts`.
