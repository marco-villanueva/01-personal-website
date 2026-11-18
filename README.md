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

The Astro `base` option uses `PUBLIC_SITE_BASE`. Build with `PUBLIC_SITE_BASE=/me` to move the whole portfolio under `/me/`. Navigation, hreflang, canonical links and project routes use the shared `localPath()` helper. Update routing, redirects, favicon handling and sitemap/robots when the umbrella project takes over `/`.

## Cloudflare

The project is entirely static. The output folder is `build/` **temporarily**, to match the existing Cloudflare Pages project without altering the old production configuration. Git-connected preview branches can deploy independently from `master`; build command is `npm run build`, output directory `build`, Node 22+.

For a completely new deployment on Cloudflare Workers Static Assets, the output can be changed to `dist/`. No runtime adapter is required for a purely static Astro build.

Existing production is intentionally untouched until the draft PR is approved.

## Before publication

- Confirm that the contact email and professional profiles remain preferred; they were checked against the previously public website.
- Confirm case-study descriptions with relevant employers and clients.
- Add authorized real screenshots under `public/projects/` and wire them into the project data.
- Replace downloadable résumé with a current version if included.
- Run `npm run check && npm run build`; review desktop/mobile and accessibility.
