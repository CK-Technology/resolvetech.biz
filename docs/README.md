# Resolve Technology — Documentation

Project documentation for the [resolvetech.biz](https://resolvetech.biz) website — a static
Astro site for Resolve Technology LLC.

This directory explains how the project is built, how to work on it, and how it ships to
production. For a high-level summary and quick start, see the [root README](../README.md).

## Contents

| Document | Description |
|----------|-------------|
| [architecture.md](architecture.md) | Tech stack rationale, key decisions, and trade-offs |
| [development.md](development.md) | Local setup, project conventions, adding pages/components |
| [deployment.md](deployment.md) | Build, transfer pipeline, NGINX config, TLS, backups |
| [security.md](security.md) | Trust planes, network posture, CrowdSec nginx bouncer |
| [design-system.md](design-system.md) | Brand colors, typography, component classes |
| [content.md](content.md) | Page map, components, contact info, external services |

## At a Glance

| | |
|---|---|
| **Owner** | Resolve Technology LLC |
| **Developer** | Christopher Kelley (CK Technology LLC) |
| **Type** | Static website for an IT consulting / MSP firm |
| **Framework** | Astro 4.x (zero JS by default) |
| **Styling** | Tailwind CSS 3.x |
| **Hosting** | Azure VM, NGINX static files behind HTTPS |
| **Deploy** | tar + rclone over SSH via Tailscale (no public SSH) |
| **TLS** | acme.sh + Let's Encrypt (Azure DNS DNS-01) |
| **Backups** | Restic → S3-compatible bucket (Azure Blob) |
| **Domains** | resolvetech.biz, www.resolvetech.biz, help.resolvetech.biz |

## Quick Links

- **Live site:** https://resolvetech.biz
- **Help portal:** https://help.resolvetech.biz
- **Source:** `src/` (pages, components, layouts, styles)
- **Deploy config:** `deploy/`
