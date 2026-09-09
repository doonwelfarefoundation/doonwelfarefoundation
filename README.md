# Doon Welfare Foundation

A SEO-friendly website for the **Doon Welfare Foundation**, a non-profit based in
Barotiwala, Himachal Pradesh. Built with **Next.js 16 (App Router) + TypeScript**
and **Tailwind CSS v4**, using the foundation's brand colours (deep green
`#1F5F43` and gold `#E0912B`) with a gradient design.

## Features

- **Installable PWA** — web app manifest (`src/app/manifest.ts`), icons in
  `public/icons/`, and a service worker (`public/sw.js`, registered via
  `ServiceWorkerRegister`) giving offline caching and add-to-home-screen. Theme
  colours adapt to light/dark.
- **Fully responsive** — mobile-first Tailwind layout; the nav collapses to a
  hamburger menu below `lg`, grids reflow, and content is safe-area aware.
- **Multilingual** — English (default), Hindi (हिन्दी) and Punjabi (ਪੰਜਾਬੀ),
  switchable from the navbar. The choice is saved to `localStorage` and applied
  to `<html lang>`; English is server-rendered for crawlers.
- **Light & dark theme** — a navbar toggle switches themes; the choice is saved
  and, on first visit, follows the OS preference. An inline script applies the
  theme before paint so there is no flash.
- **Server-rendered & SEO-friendly** — every page is SSR/SSG with its own unique
  `<title>`, description and canonical URL. Rich metadata (Open Graph + large
  Twitter card), a **generated 1200×630 OG image** (`app/opengraph-image.tsx`),
  JSON-LD structured data (`NGO` org, `BlogPosting` on posts, `Event` on events),
  auto-generated `sitemap.xml` (all 17 URLs) and `robots.txt`, semantic headings,
  and optimised Google Fonts via `next/font`.
- **WhatsApp-integrated contact form** — the form composes the enquiry and opens
  a pre-filled WhatsApp chat to the foundation (with an email fallback).
- **Floating WhatsApp button** — always-available quick chat.
- **Embedded Google Map** on the contact section pointing to the office.
- Fully responsive with a mobile navigation menu.

## Positioning

A broad community-welfare foundation covering **people, environment and animals**.
Slogan: *“For people, for nature, for every living being.”*

Six focus areas:

1. 🎓 **Education Support** — fees, books, uniforms, scholarships
2. 💍 **Daughter & Marriage Support** — help with essential marriage expenses
3. 🌱 **Environment & Plantation** — plantation, cleanliness, water conservation
4. 💧 **Public Drinking Water** — clean drinking-water facilities in public places
5. 🐾 **Animal Welfare** — food, shelter, treatment and rescue for stray animals
6. ❤️ **General Welfare & Relief** — support in difficult times

## Pages (routes)

| Route | Page |
|-------|------|
| `/` | Home — hero, about, focus areas, campaigns preview, get-involved |
| `/about` | Mission, vision, stats, team |
| `/what-we-do` | All six focus areas |
| `/what-we-do/[cause]` | Detail page per cause (education, marriage, environment, water, animal, relief) |
| `/campaigns` | Fundraising drives with progress bars |
| `/events` | Upcoming & past events |
| `/gallery` | Photo grid (placeholder tiles until real photos are added) |
| `/blog` and `/blog/[slug]` | Blog list + individual posts |
| `/donate` | UPI + QR + bank-transfer details, WhatsApp receipt CTA |
| `/contact` | Contact details, map, WhatsApp form |

The nav, footer, WhatsApp button, language switcher and theme toggle are shared
across every page (in `src/app/layout.tsx`). Every page has its own SEO metadata
and canonical URL, and all routes are in `sitemap.xml`.

## ⚠️ Placeholder content to replace

Editable long-form content lives in **`src/content.ts`** (English). Replace these
with the foundation's real information:

- **`donation`** — bank account number, IFSC, bank name, and the real **UPI ID**
  (the donate-page QR is generated from it).
- **`team`** — founder/team names and roles.
- **`campaigns`**, **`events`**, **`posts`** — sample entries; edit or replace.
  Campaign cards use AI-generated images at `public/campaigns/<slug>.jpg`
  (prompts in `campaignImagePrompts`); replace with real photos using the same
  filename.
- **`gallery`** — uses **AI-generated placeholder photos** in `public/gallery/`
  (`gallery-1.jpg` … `gallery-8.jpg`). Swap these files for real photos of your
  work (same filenames). To regenerate an AI image, use the `galleryImageUrl(prompt, seed)`
  helper / the prompts in `src/content.ts`.

UI text (menus, headings, buttons) is translated in `src/i18n/translations.ts`.

## Contact details

- **Phone:** 9816186777 &nbsp;·&nbsp; `tel:+919816186777`
- **WhatsApp:** [wa.me/919816186777](https://wa.me/919816186777)
- **Email:** [doonwelfarefoundation@gmail.com](mailto:doonwelfarefoundation@gmail.com)
- **Instagram:** [@doonwelfarefoundation](https://www.instagram.com/doonwelfarefoundation) &nbsp;·&nbsp; **Facebook:** [profile](https://www.facebook.com/share/18jo7nGME7/)
- **Address:** House Number 192, Village Johranpur, PO Barotiwala,
  Barotiwala, Himachal Pradesh — 174103
- **Landmark:** IJ Industries

_These values are defined once in `src/data.ts` (`org`) and flow to the header,
contact section, footer, WhatsApp links and SEO metadata — edit them there._

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
```

## Deploying to Vercel

This is a standard Next.js App Router app — Vercel auto-detects it, no config file
needed.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **New Project → Import** the repo. Framework preset: **Next.js**
   (auto-detected). Build command `next build` and output are detected
   automatically — leave the defaults.
3. Add one **Environment Variable** (Project → Settings → Environment Variables):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | your production URL, e.g. `https://doonwelfarefoundation.org` (no trailing slash) |

   This drives the canonical URL, Open Graph tags, `sitemap.xml` and `robots.txt`.
   If omitted, it falls back to the default in `src/data.ts`. See `.env.example`.
4. **Deploy.** After adding a custom domain, update `NEXT_PUBLIC_SITE_URL` to match
   and redeploy so the SEO URLs are correct.

Node version is pinned to **24** — via `engines.node` (`24.x`) in `package.json`,
plus `.nvmrc` and `.node-version` for local tooling. Next 16 supports Node ≥ 20.9,
so this project targets and is verified on **Node 24**. Set the same version in
Vercel → Project → Settings → Node.js Version if you prefer to pin it there too.

## Project structure

```
src/
  app/
    layout.tsx         # root layout: fonts, SEO metadata, JSON-LD, providers,
                       # no-flash theme/lang script
    page.tsx           # page composition
    globals.css        # Tailwind + brand tokens + light/dark semantic tokens
    sitemap.ts         # generates /sitemap.xml
    robots.ts          # generates /robots.txt
  components/          # Navbar (+ language switcher & theme toggle), Hero, About,
                       # Focus, GetInvolved, Contact, Footer, FloatingWhatsApp, Icon
  i18n/
    translations.ts    # en / hi / pa dictionaries (all UI copy)
    LanguageProvider.tsx
  theme/
    ThemeProvider.tsx  # light/dark state, persistence
  data.ts             # non-translatable org details, focus/stat keys
public/
  logo.svg            # foundation logo (also used as favicon)
```

## Editing content

- **UI copy in all three languages:** `src/i18n/translations.ts`
- **Contact details, WhatsApp number, address, site URL:** `src/data.ts`
- **SEO title/description/keywords:** `src/app/layout.tsx`
- **Light/dark colours:** the semantic tokens in `src/app/globals.css`
  (`--color-surface`, `--color-card`, `--color-ink`, …; the `.dark { … }` block
  overrides them for dark mode)

### Adding a language

Add the locale to `langOrder` / `langNames` and a matching dictionary in
`src/i18n/translations.ts` (TypeScript enforces the same shape as English), then
extend the `isLang` check in `LanguageProvider.tsx` and the no-flash script in
`layout.tsx`.

> Before going live, set `org.siteUrl` in `src/data.ts` to the real domain so the
> sitemap, canonical URL and Open Graph tags use it.

## Notes

- Running the latest **Next.js 16** with **React 19**; `npm audit` reports
  **0 vulnerabilities**. Builds use Turbopack (the Next 16 default).
