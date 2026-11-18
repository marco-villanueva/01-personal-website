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

Eight project entries are curated in `src/data/projects.ts`. The website includes English and Spanish pages. Use only verified, publicly shareable information and images. The public-facing entries use screenshots captured from the five sites explicitly supplied by the portfolio owner on November 18, 2026. Private projects retain editorial CSS artwork. Screenshots show current public websites, and may not reflect the work-period release. The CeriFi screenshot depicts its corporate homepage as brand context; the documented engineering work was on an educational authoring application.

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
- Confirm case-study descriptions with relevant employers and clients, especially the distinction between NBCUniversal work and its current public website.
- Confirm publication permissions for external brands' screenshots and replace or remove any asset as needed.
- Replace downloadable résumé with a current version if included.
- Run `npm run check && npm run build`; review desktop/mobile and accessibility.
