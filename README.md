<p align="center">
  <img src="public/reso-logo.jpg" alt="Resolve Technology" width="300">
</p>

<p align="center">
  <strong>Managed IT, Cybersecurity & Compliance for the Seacoast</strong><br>
  <em>U.S. Veteran-Owned Business — Portsmouth, New Hampshire</em>
</p>

<p align="center">
  <a href="https://resolvetech.biz"><img src="https://img.shields.io/badge/Live-resolvetech.biz-1B75BC?style=for-the-badge" alt="Live Site"></a>
  <img src="https://img.shields.io/badge/Astro-4.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Alpine.js-8BC0D0?style=for-the-badge&logo=alpinedotjs&logoColor=black" alt="Alpine.js">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm">
  <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="NGINX">
</p>

---

## Overview

Primary website for **Resolve Technology LLC** — an IT consulting and managed services (MSP)
firm based in Portsmouth, NH, serving the Seacoast and greater New England. Services span
managed IT, cybersecurity, cloud, backup/recovery, and compliance. The site emphasizes the
company's veteran-owned status and compliance expertise (CMMC 2.0, NIST CSF, NIST 800-171)
for defense contractors and regulated industries.

Built with [Astro](https://astro.build) for a zero-JS-by-default static output that loads
instantly and deploys as plain files behind NGINX. A lightweight Alpine.js layer powers the
mobile navigation.

**Live Sites:**
- Main: https://resolvetech.biz
- Help Portal: https://help.resolvetech.biz

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Astro 4.x](https://astro.build) — static site generator, zero JS by default |
| **Styling** | [Tailwind CSS 3.x](https://tailwindcss.com) via `@astrojs/tailwind` |
| **Interactivity** | [Alpine.js 3.x](https://alpinejs.dev) — mobile nav toggle |
| **Language** | [TypeScript 5.x](https://www.typescriptlang.org) (Astro strict config) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| **Icons** | Inline SVGs (`src/components/icons.ts`) |
| **Contact Form** | [Formspree](https://formspree.io) (ID: `xdawqlqg`) |
| **Package Manager** | pnpm |
| **Web Server** | NGINX (static files behind HTTPS) |

**Output:** Pure static HTML/CSS/JS — no server-side runtime required.

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Setup

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

Opens at `http://localhost:4322` (port 4322 avoids conflicts with other local Astro sites).

### Production Build

```bash
pnpm build      # Static output goes to dist/
pnpm preview    # Preview the production build locally
```

## Project Structure

```
resolvetech.biz/
├── src/
│   ├── components/
│   │   ├── Header.astro         # Sticky nav with Alpine.js mobile menu
│   │   ├── Footer.astro         # Contact info, links, veteran badge
│   │   ├── Hero.astro           # Page heroes with CTAs + veteran badge
│   │   ├── ServiceCard.astro    # Service grid cards
│   │   ├── FeatureGrid.astro    # Icon + text feature grid
│   │   ├── CTASection.astro     # Call-to-action blocks (light/dark)
│   │   ├── ContactForm.astro    # Formspree contact form
│   │   └── icons.ts             # Inline SVG icon definitions
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML shell, meta tags, fonts, header/footer
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # Founder story, values, location
│   │   ├── contact.astro        # Contact form + info
│   │   ├── privacy.astro        # Privacy policy
│   │   ├── help.astro           # Client support portal (subdomain)
│   │   └── services/
│   │       ├── index.astro          # Services overview
│   │       ├── managed-it.astro     # inCheck managed IT program
│   │       ├── cybersecurity.astro  # Security services
│   │       ├── cloud-services.astro # Microsoft 365 & Azure
│   │       ├── backup-recovery.astro# Veeam & disaster recovery
│   │       └── compliance.astro     # CMMC 2.0 / NIST (key differentiator)
│   └── styles/
│       └── global.css           # Tailwind directives + component classes
├── public/                      # Deployed static assets (logos, images, favicons, PDF)
│   └── partners/                # Chamber & veteran-owned badges
├── deploy/
│   ├── resolvetech.conf         # Production NGINX configuration
│   └── staging.resolvetech.conf # Staging NGINX configuration
├── docs/                        # Project documentation (see docs/README.md)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, services grid, compliance highlight, trust bar, partners |
| `/about` | About | Founder background, veteran-owned story, values, location |
| `/services` | Services | Overview grid + industries served |
| `/services/managed-it` | Managed IT | inCheck proactive support program |
| `/services/cybersecurity` | Cybersecurity | Endpoint, firewall, email security, training |
| `/services/cloud-services` | Cloud Services | Microsoft 365, Azure, Intune, migrations |
| `/services/backup-recovery` | Backup & Recovery | Veeam, disaster recovery, ransomware recovery |
| `/services/compliance` | Compliance | CMMC 2.0, NIST CSF, NIST 800-171, Zero Trust |
| `/contact` | Contact | Formspree form + contact info |
| `/privacy` | Privacy Policy | Legal page |
| `/help` | Help Portal | Client support (served at help.resolvetech.biz) |

## Design System

### Brand Colors

```css
--resolve-blue: #1B75BC;       /* Primary — logo blue, headings */
--resolve-teal: #0D9DBF;       /* Accent — hover states, checkmarks */
--resolve-gray: #6D6E71;       /* Secondary text */
--resolve-dark: #58595B;       /* Body text */
--resolve-bg: #FFFFFF;         /* Main background */
--resolve-bg-soft: #F8FAFC;    /* Alternate (gray) sections */
--resolve-bg-alt: #EFF6FF;     /* Alternate (blue) sections */
--resolve-text: #1F2937;       /* Primary text */
--resolve-text-muted: #6B7280; /* Secondary text */
--resolve-border: #D1D5DB;     /* Borders, dividers */
```

Colors are defined as Tailwind theme extensions in `tailwind.config.mjs` (e.g. `text-resolve-blue`, `bg-resolve-bg-soft`).

### Component Classes (`src/styles/global.css`)

| Class | Description |
|-------|-------------|
| `.btn-primary` | Blue button, teal hover |
| `.btn-secondary` | White button with blue border |
| `.btn-accent` | Teal button, blue hover |
| `.section` | Standard section padding |
| `.section-alt` | Section with soft gray background |
| `.section-blue` | Section with light blue background |
| `.container-narrow` | Max-width container (6xl) |
| `.card` | White card with shadow and hover lift |

See [docs/design-system.md](docs/design-system.md) for the full reference.

## Deployment

The site is served by NGINX on an Azure VM. Builds are archived and pushed over a private
Tailscale network via `rclone` (SSH/SFTP, key-based auth) — SSH is never exposed publicly.

```bash
# Build and archive
pnpm build
tar -czf resolvetech.tar.gz -C dist .

# Copy to the VM over Tailscale, then extract into the web root
rclone copy resolvetech.tar.gz azurevm:/tmp/
ssh azurevm 'sudo rm -rf /var/www/resolvetech/* && sudo tar -xzf /tmp/resolvetech.tar.gz -C /var/www/resolvetech/'
```

| Item | Value |
|------|-------|
| Host | Azure VM (NGINX static hosting) |
| Web root | `/var/www/resolvetech/` |
| Transport | Tailscale + key-based SSH (no public SSH/ingress beyond HTTPS) |
| TLS | acme.sh + Let's Encrypt, DNS-01 via Azure DNS |
| Backups | Restic → S3-compatible bucket (Azure Blob) |

The same web root serves both the main site and the `help.resolvetech.biz` portal via an
NGINX rewrite. See [docs/deployment.md](docs/deployment.md) for the full pipeline, network
posture, certificate automation, and backup details.

## Documentation

Full project documentation lives in [`docs/`](docs/README.md):

- [Architecture & Decisions](docs/architecture.md) — tech stack rationale, trade-offs
- [Development](docs/development.md) — local setup, conventions, adding pages
- [Deployment](docs/deployment.md) — build, rclone-over-Tailscale pipeline, NGINX, TLS, backups
- [Security](docs/security.md) — trust planes, network posture, CrowdSec nginx bouncer
- [Design System](docs/design-system.md) — colors, typography, components
- [Content & Integrations](docs/content.md) — page map, contact info, external services

## Contact Information

| Field | Value |
|-------|-------|
| **Company** | Resolve Technology LLC |
| **Phone** | (603) 742-1118 |
| **Email** | support@resolvetech.biz |
| **Address** | One New Hampshire Ave, Suite 125, Portsmouth, NH 03801 |
| **Status** | U.S. Veteran-Owned Business |

## License

Proprietary — all rights reserved. © 2026 Resolve Technology LLC.
All logos, content, and designs are owned by Resolve Technology LLC.
Designed and developed by Christopher Kelley ([CK Technology LLC](https://cktechx.com)).
See [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with <a href="https://astro.build">Astro</a> + <a href="https://tailwindcss.com">Tailwind CSS</a> by
  <a href="https://github.com/GhostKellz">Christopher Kelley</a>
</p>
