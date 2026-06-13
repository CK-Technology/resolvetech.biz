# Content & Integrations

A map of the site's pages, components, static assets, contact details, and external services.

## Pages

File-based routing — each file in `src/pages/` maps to a route.

| File | Route | Purpose |
|------|-------|---------|
| `index.astro` | `/` | Homepage: hero, services grid, compliance highlight, trust bar, partners |
| `about.astro` | `/about` | Founder background, veteran-owned story, values, location |
| `contact.astro` | `/contact` | Contact form + contact info sidebar |
| `privacy.astro` | `/privacy` | Privacy policy |
| `help.astro` | `/help` | Client support portal (served at help.resolvetech.biz) |
| `services/index.astro` | `/services` | Services overview + industries served |
| `services/managed-it.astro` | `/services/managed-it` | inCheck managed IT program |
| `services/cybersecurity.astro` | `/services/cybersecurity` | Endpoint, firewall, email security, training |
| `services/cloud-services.astro` | `/services/cloud-services` | Microsoft 365, Azure, Intune, migrations |
| `services/backup-recovery.astro` | `/services/backup-recovery` | Veeam, disaster recovery, ransomware recovery |
| `services/compliance.astro` | `/services/compliance` | CMMC 2.0, NIST CSF, NIST 800-171, Zero Trust |

## Components

Reusable `.astro` components in `src/components/`.

| Component | Key props | Purpose |
|-----------|-----------|---------|
| `Header.astro` | — | Sticky nav with logo, links, "Book Meeting" CTA, Alpine.js mobile menu |
| `Footer.astro` | — | Brand block, contact info, quick/service links, veteran badge, copyright |
| `Hero.astro` | `title`, `subtitle?`, `showCTA?`, `showVeteranBadge?`, `size?` | Gradient page hero with optional CTAs and veteran badge |
| `ServiceCard.astro` | `title`, `description`, `href`, `icon` | Clickable service card with icon and "Learn more" link |
| `FeatureGrid.astro` | `features[]`, `columns?` (2/3/4) | Responsive grid of icon + title + description blocks |
| `CTASection.astro` | `title?`, `description?`, `variant?` (light/dark) | Call-to-action band with Book Meeting + call buttons |
| `ContactForm.astro` | `formspreeId?` (default `xdawqlqg`) | Formspree contact form (name, email, phone, company, service, message) |
| `icons.ts` | — | Inline SVG icon definitions (monitor, shield, cloud, server, etc.) |

`layouts/BaseLayout.astro` is the shared HTML shell: `<head>` meta tags, Inter font links,
favicons, the Alpine.js script, and the `Header`/`Footer`.

## Static Assets (`public/`)

Served as-is from the site root.

| Path | Purpose |
|------|---------|
| `logo.jpg` | Main logo (header) |
| `logo-white.png` | White logo variant (footer) |
| `logo-footer.png` | Footer logo variant |
| `logo-banner.jpg` | Large banner logo (homepage / README) |
| `veteran-badge.jpg` | U.S. Veteran-Owned badge |
| `brian-wheeler.jpg` | Founder headshot (about page) |
| `portsmouth-harbor.jpg`, `nubble-light.jpg` | Local Seacoast imagery |
| `cmmc-defense.png`, `nist-framework.png` | Compliance page visuals |
| `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` | Favicons / touch icon |
| `partners/` | Chamber and veteran-owned badges |
| `contact-info.pdf` | Downloadable contact sheet (linked from the help portal) |

## Contact Information

These values appear across multiple files. Update **all** references together so they stay in
sync (Header, Footer, Hero/CTA buttons, contact page, privacy page, help page).

| Field | Value |
|-------|-------|
| Company | Resolve Technology LLC |
| Phone | (603) 742-1118 |
| Email | support@resolvetech.biz |
| Address | One New Hampshire Ave, Suite 125, Portsmouth, NH 03801 |
| Hours | Monday–Friday, 9am–5pm |
| Status | U.S. Veteran-Owned Business |

## External Services

| Service | Purpose | Notes |
|---------|---------|-------|
| [Formspree](https://formspree.io) | Contact form backend (`POST` to form `xdawqlqg`) | Handles delivery + spam filtering; no backend required |
| Google Fonts | Inter typeface | Preconnected and loaded in `BaseLayout` |
| [Alpine.js](https://alpinejs.dev) CDN | Mobile nav toggle | Loaded with `defer`; the only client-side JS |

No analytics or third-party tracking scripts are loaded — the only data leaving the site is
contact-form submissions to Formspree.

## Memberships Referenced

- Portsmouth Chamber of Commerce
- Greater Portsmouth Chamber
- Merrimack Valley Chamber of Commerce

Badge images for these live in `public/partners/`.
