# Development

How to set up the project locally and work on it.

## Prerequisites

- **Node.js** 18 or newer
- **pnpm** — install with `npm install -g pnpm`

## Setup

```bash
pnpm install
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the dev server at `http://localhost:4322` with hot reload |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Serve the production build locally on port 4322 |
| `pnpm astro` | Run the Astro CLI directly (e.g. `pnpm astro check`) |

The dev/preview port is set to **4322** in `package.json` so it does not collide with other
local Astro sites that use the default `4321`.

## Project Layout

```
src/
├── components/   # Reusable .astro components + icons.ts
├── layouts/      # BaseLayout.astro (the HTML shell)
├── pages/        # One file per route (file-based routing)
└── styles/       # global.css (Tailwind + component classes)
public/           # Static assets copied as-is to the site root
deploy/           # NGINX configs
docs/             # This documentation
```

See [content.md](content.md) for the full page and component inventory.

## Conventions

### Path aliases

`tsconfig.json` defines aliases so imports stay readable:

```ts
import BaseLayout from '@layouts/BaseLayout.astro';
import Hero from '@components/Hero.astro';
```

| Alias | Resolves to |
|-------|-------------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |

### Styling

- Use Tailwind utility classes directly in markup.
- Use the brand color tokens (`text-resolve-blue`, `bg-resolve-bg-soft`, etc.) rather than
  raw hex values so the palette stays consistent. See [design-system.md](design-system.md).
- For repeated patterns (buttons, sections, cards) use the existing component classes from
  `src/styles/global.css` instead of re-creating long utility strings.

### Icons

Icons are inline SVG strings in `src/components/icons.ts`. To add one, export a new entry and
reference it from a component. SVGs use `currentColor` so they inherit text color.

## Common Tasks

### Add a new page

1. Create `src/pages/my-page.astro` (the filename becomes the route: `/my-page`).
2. Import and use `BaseLayout` for the shell, plus any components you need:

   ```astro
   ---
   import BaseLayout from '@layouts/BaseLayout.astro';
   import Hero from '@components/Hero.astro';
   ---
   <BaseLayout title="My Page" description="...">
     <Hero title="My Page" />
     <!-- content -->
   </BaseLayout>
   ```

3. Add a link to it in `Header.astro` and/or `Footer.astro` if it should be navigable.

### Add a new service page

Service pages live in `src/pages/services/`. Copy an existing one (e.g.
`cybersecurity.astro`) as a starting point, then add a `ServiceCard` for it on
`services/index.astro` and the homepage services grid.

### Update contact info

Contact details (phone, email, address) appear in several files. See the list in
[content.md](content.md#contact-information) so every reference stays in sync.

## Build Output

`pnpm build` produces a fully static `dist/` directory — HTML, CSS, and the small bit of
client JS for Alpine. There is no server-side runtime. See [deployment.md](deployment.md) for
shipping it.
