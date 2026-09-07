# Doon Welfare Foundation

A SEO-friendly website for the **Doon Welfare Foundation**, a non-profit based in
Barotiwala, Himachal Pradesh. Built with **Next.js 16 (App Router) + TypeScript**
and **Tailwind CSS v4**, using the foundation's brand colours (deep green
`#1F5F43` and gold `#E0912B`) with a gradient design.

## Features

- **Multilingual** — English (default), Hindi (हिन्दी) and Punjabi (ਪੰਜਾਬੀ),
  switchable from the navbar. The choice is saved to `localStorage` and applied
  to `<html lang>`; English is server-rendered for crawlers.
- **Light & dark theme** — a navbar toggle switches themes; the choice is saved
  and, on first visit, follows the OS preference. An inline script applies the
  theme before paint so there is no flash.
- **Server-rendered & SEO-friendly** — rich metadata (Open Graph, Twitter cards,
  canonical URL, keywords), JSON-LD structured data (`NGO` schema),
  auto-generated `sitemap.xml` and `robots.txt`, semantic HTML, and optimised
  Google Fonts via `next/font`.
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

## Sections

Hero · About (mission, vision, stats) · What We Do (six focus areas) ·
Get Involved · Contact (details, map, WhatsApp form) · Footer.

## Contact details

- **Phone:** 9716186777 &nbsp;·&nbsp; `tel:+919716186777`
- **WhatsApp:** [wa.me/919716186777](https://wa.me/919716186777)
- **Email:** [doonwelfarefoundation@gmail.com](mailto:doonwelfarefoundation@gmail.com)
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

Node version is pinned to 22 via `.nvmrc` (Next 16 requires Node ≥ 20.9).

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
