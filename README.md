# Code Aquarium

Marketing website for **Code Aquarium** — a digital studio building custom software, AI, and growth systems.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **TypeScript**. Server-components-first, image/font optimized, and fully SEO-instrumented (metadata, sitemap, robots).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script          | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the dev server            |
| `npm run build` | Production build                |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |

## Structure

```
src/
  app/                     App Router pages, layout, sitemap, robots, icon
    services/[slug]/       Dynamic service detail pages
    case-study/[slug]/     Dynamic case study detail pages
  components/
    brand/                 Logo
    layout/                Header, Footer
    home/                  Home page sections
    cards/                 ServiceCard, ProjectCard
    ui/                    Button, SliderRow, Reveal, PageHero
    contact/               ContactForm
    legal/                 Prose wrapper
  lib/                     Content + config (site, services, projects, testimonials)
```

## Editing content

All copy lives in `src/lib`:

- `site.ts` — brand name, contact details, nav, stats, social links
- `services.ts` — service offerings (drive `/services` + detail pages)
- `projects.ts` — case studies (drive `/portfolio` + detail pages)
- `testimonials.ts` — client testimonials

Add an item to the array and its detail page is generated automatically.

## Brand

Aquatic identity: deep-ocean navy (`#07182B`), ocean/teal primary (`#0E7490` / `#06B6D4`),
bright reef teal accent (`#14B8A6`). Tokens live in `tailwind.config.ts`.

## Contact form

`ContactForm.tsx` currently simulates submission on the client. Wire the `onSubmit`
handler to your API route or form provider (e.g. Formspree, Resend) when ready.
