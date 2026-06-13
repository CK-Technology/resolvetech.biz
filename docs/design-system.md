# Design System

The visual language of the site: colors, typography, and the reusable component classes.

Colors are defined as Tailwind theme extensions in `tailwind.config.mjs`. Base styles and
component classes live in `src/styles/global.css`.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `resolve-blue` | `#1B75BC` | Primary — logo blue, headings, primary buttons |
| `resolve-teal` | `#0D9DBF` | Accent — hover states, checkmarks, accent buttons |
| `resolve-gray` | `#6D6E71` | Secondary text |
| `resolve-dark` | `#58595B` | Body text |
| `resolve-bg` | `#FFFFFF` | Main background |
| `resolve-bg-soft` | `#F8FAFC` | Alternating gray section background |
| `resolve-bg-alt` | `#EFF6FF` | Alternating blue section background |
| `resolve-text` | `#1F2937` | Primary body text |
| `resolve-text-muted` | `#6B7280` | Muted / secondary text |
| `resolve-border` | `#D1D5DB` | Borders and dividers |

Use the tokens through Tailwind utilities — `text-resolve-blue`, `bg-resolve-bg-soft`,
`border-resolve-border`, etc. Avoid hard-coding hex values so the palette stays consistent.

## Typography

- **Font family:** [Inter](https://fonts.google.com/specimen/Inter) (weights 400/500/600/700),
  loaded from Google Fonts in `BaseLayout.astro`, with `system-ui, sans-serif` fallbacks.
- **Body:** `font-sans`, `text-resolve-text`, antialiased.
- **Headings** are bold and `text-resolve-blue` by default, with responsive sizing:

  | Element | Sizes |
  |---------|-------|
  | `h1` | `text-4xl` → `md:text-5xl` → `lg:text-6xl` |
  | `h2` | `text-3xl` → `md:text-4xl` |
  | `h3` | `text-xl` → `md:text-2xl` |

- `<html>` uses `scroll-behavior: smooth`; links transition colors over 200ms.

## Component Classes

Defined in `@layer components` in `src/styles/global.css`. Prefer these over re-typing long
utility strings for repeated patterns.

### Buttons

| Class | Description |
|-------|-------------|
| `.btn` | Base: inline-flex, centered, `px-6 py-3`, rounded, semibold, animated |
| `.btn-primary` | Blue background, white text → teal on hover |
| `.btn-secondary` | White background, blue text, 2px blue border → soft gray on hover |
| `.btn-accent` | Teal background, white text → blue on hover |

### Layout

| Class | Description |
|-------|-------------|
| `.section` | Vertical section padding (`py-16 md:py-24`) |
| `.section-alt` | `.section` + soft gray background (`resolve-bg-soft`) |
| `.section-blue` | `.section` + light blue background (`resolve-bg-alt`) |
| `.container-narrow` | Centered max-width container (`max-w-6xl`) with responsive padding |

Alternating `.section`, `.section-alt`, and `.section-blue` backgrounds give pages visual
rhythm between content blocks.

### Cards

| Class | Description |
|-------|-------------|
| `.card` | White, rounded-xl, padded, subtle shadow and border; on hover the shadow lifts and the border tints teal |

## Icons

Icons are inline SVG strings in `src/components/icons.ts`. They use `currentColor`, so they
inherit the surrounding text color (e.g. set `text-resolve-teal` on the parent to tint an
icon teal). Adding an icon means exporting a new SVG string and referencing it from a
component — no icon font or external library is involved.

## Imagery

Brand and content imagery lives in `public/`:

- Logos: `logo.jpg`, `logo-white.png`, `logo-footer.png`, `logo-banner.jpg`
- Veteran-owned badge: `veteran-badge.jpg`
- Favicons: `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`
- Partner / chamber badges: `public/partners/`

See [content.md](content.md) for the full asset inventory.
