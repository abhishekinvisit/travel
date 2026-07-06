# Invisit Platform

## Overview
Invisit (invisit.in) is a travel agency website being migrated from a legacy PHP stack to a modern monorepo platform. The migration preserves the existing design pixel-perfectly and all Google-indexed `.php` URLs exactly as-is.

## How to Run

**Development server (Next.js):**
```
cd apps/website && npm run dev
```
Runs on port 5000. The workflow "Start application" is configured for this.

**Access the pilot page:**
- http://localhost:5000/bali-tour-packages.php  ← browser URL stays `.php`
- http://localhost:5000/bali-tour-packages       ← same page, internal path

## Architecture

```
invisit-platform/
├── apps/website/      # Next.js 14 (App Router, TypeScript, Tailwind CSS)
├── backend/           # NestJS REST API (scaffold — not yet running)
├── database/          # Prisma schema + PostgreSQL
├── shared/            # Shared TypeScript types
├── admin/             # Future admin dashboard (placeholder)
└── docs/              # Architecture docs, migration roadmap
```

## Key Design Decisions

### .php URL Preservation
`apps/website/next.config.mjs` uses `rewrites()` to map `.php` browser URLs to clean Next.js internal routes.  
**Do NOT use middleware for this** — Next.js skips file-extension paths before middleware runs.  
Rewrites are explicit (only migrated routes listed) — do not add a global `/:path*.php` catch-all.

### CSS / Design Preservation
Existing site CSS files (`style.css`, `slick-theme.css`, `fonts.css`) are loaded verbatim via `<link>` tags in `layout.tsx`. Tailwind `preflight` is disabled to avoid conflicts. This ensures pixel-perfect visual fidelity without rewriting any CSS.

### Static Assets
`apps/website/public/images` → symlink to `/images`  
`apps/website/public/stylesheet` → symlink to `/stylesheet`  
`apps/website/public/javascripts` → symlink to `/javascripts`

## Migration Status

| Route | Status |
|-------|--------|
| `/bali-tour-packages.php` | ✅ Migrated (pilot) |
| All other `.php` routes | 🔒 Waiting for pilot approval |

## User Preferences
- Preserve ALL `.php` URLs exactly — never redirect, never rename
- Only migrate Bali as pilot; stop and wait for approval before migrating other destinations
- Pixel-perfect visual match to the original PHP site
