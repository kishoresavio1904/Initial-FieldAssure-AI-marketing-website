# FieldAssure AI — Marketing Website (PRD)

## Original Problem Statement
Build a separate, static, public marketing/lead-generation website for FieldAssure AI — an
India-first construction operational proof platform that connects contractor readiness,
worker eligibility, site evidence, approval workflows, audit trails, handover readiness,
and billing readiness. This is a standalone project, entirely separate from the existing
FieldAssure product app repo (kishoresavio1904/SiteProof-AI), which must NOT be touched.
Intended future repo name: `fieldassure-website`.

W1 scope only: Full Home page, shared Header/Footer, static Request Demo form with
success message (no backend), and placeholder pages for Product, Use Cases, Pricing,
Request Demo, About/Contact.

Strict restrictions: no auth, no login/signup, no dashboards, no database, no payments,
no CMS, no product workflows, no fake customers/logos/testimonials/certifications, no
compliance-guarantee claims, no "AI replaces safety teams" claims, no heavy animations.

## Target Audience
Construction company owners, Project Directors, COOs, HSE Heads, QA/QC Heads, Project
Managers, Compliance teams, Finance Controllers, Contractor Management teams (India-first).

## User Choices Captured
- Visual style: icon/illustration only, NO photos or stock images
- Logo: text wordmark "FieldAssure AI" + ShieldCheck icon mark
- Architecture: frontend-only static React site (no backend needed, per scope)
- Accent color: muted amber/orange (amber-600) on light bg with navy/slate-900 text
- Typography: Manrope (headings) + IBM Plex Sans (body) — chosen by design agent
- Motion: subtle only (framer-motion fade-up/stagger on scroll), no kinetic/heavy motion

## Architecture
- React (CRA + craco) frontend only, React Router for client-side routing.
- No backend/database used for this site (backend service in the pod is untouched/idle).
- Shared `Layout.jsx` (Header + Footer + Outlet) wraps all routes.
- Home page composed of 9 section components under `src/components/home/`.
- Shared `PlaceholderPage.jsx` shell reused by Product/UseCases/Pricing/AboutContact.
- Dedicated `/request-demo` route renders the full functional demo form (not a bare
  placeholder) since it's the primary conversion CTA target across the site.
- Icons: `@phosphor-icons/react` (added dependency). Motion: `framer-motion` (pre-installed).
- All interactive elements have `data-testid` attributes (see `src/constants/testIds/`).

## What's Been Implemented (as of Feb 2026)
- Shared sticky Header: logo, desktop nav (Home/Product/Use Cases/Pricing), amber
  "Request Demo" CTA, and mobile hamburger menu (Sheet) with all 5 nav links + CTA.
- Shared Footer: brand blurb, link columns, disclaimer copy, copyright.
- Home page sections: Hero (dual CTA), Problem (7 questions), Product Explanation,
  How It Works (5 steps), Role-based Value (7 cards, bento layout), Modules grid
  (8 cards), Pricing preview (Starter/Project/Enterprise, no fixed prices, "Project"
  highlighted), Request Demo form (client-side only, success message on submit), FAQ
  (5 accordion items via shadcn Accordion).
- Placeholder pages: `/product`, `/use-cases`, `/pricing`, `/about` — title + short
  paragraph + primary (Request Demo) / secondary (Back to Home) CTA.
- `/request-demo` — dedicated functional demo form page.
- Fonts wired via Google Fonts (Manrope + IBM Plex Sans), light zinc-50/white theme,
  amber-600 accent, no photos anywhere (Phosphor icons only).
- Tested end-to-end by testing_agent_v3: 100% pass, zero bugs found (iteration_1.json).

## Prioritized Backlog / Next Steps (P1/P2 — deferred from W1)
- P1: Expand Product, Use Cases, Pricing, About/Contact into full detailed pages
  (currently intentional W1 placeholders).
- P1: Wire Request Demo form to a real lead-capture backend/email (e.g., Resend) once
  the team is ready to collect real leads — currently intentionally static per scope.
- P2: Add basic SEO metadata (Open Graph tags, sitemap.xml, robots.txt) once ready to
  go live publicly.
- P2: Extract this project into its own standalone repo `fieldassure-website` (separate
  from the SiteProof-AI product repo) when ready to deploy independently.
- P2: Add a simple analytics/lead-notification hook when a real backend is introduced.

## Notes
- No database, no auth, no payments were built — by explicit design (W1 static site only).
- No fake customer logos/testimonials/certifications were added.
- No compliance-guarantee or "fully automated approvals" claims were added anywhere in copy.
