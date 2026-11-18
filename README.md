# Marco Villanueva | Editorial Portfolio

An Astro 7 static portfolio with editorial art direction, native CSS, accessible navigation, bilingual routes and case studies.

## Quick start

Requires Node.js 22.12+.

```sh
npm install
npm run dev
npm run check
npm run build
```

## Content

Project information is defined in `src/data/projects.ts`. The website includes English and Spanish pages. Use only verified, publicly shareable information and images. The current visual covers are editorial compositions created with CSS, **not real product screenshots**.

## Routes

- `/` and `/es/`
- `/work/` and `/es/work/`
- `/work/[slug]/` and `/es/work/[slug]/`
- `/about/` and `/es/about/`

## Future /me migration

The Astro `base` option uses `PUBLIC_SITE_BASE`. Build with `PUBLIC_SITE_BASE=/me` to move the whole portfolio under `/me/`. Navigation, hreflang, canonical links and project routes use the shared `localPath()` helper. Update routing, redirects and sitemap when the umbrella project takes over `/`.

## Cloudflare

The project is entirely static: deploy `dist/` to the existing Cloudflare Pages project if desired (build command `npm run build`, build output `dist`, Node 22+). For a new deployment, Cloudflare Workers Static Assets is also suitable; no runtime adapter is required for a static Astro build. Existing production is intentionally untouched until review.

## Before publication

- Verify contact email and professional profiles.
- Confirm case-study descriptions with relevant employers and clients.
- Add authorized real screenshots under `public/projects/` and wire them into the project data.
- Replace downloadable résumé with a current version if included.
- Run `npm run check && npm run build`; review desktop/mobile and accessibility.
