# Invisit Platform — Architecture Overview

## Monorepo Structure

```
invisit-platform/
├── apps/
│   └── website/          # Next.js 14 (App Router, TypeScript, Tailwind CSS)
├── backend/              # NestJS REST API
├── database/             # Prisma schema & migrations
├── shared/               # Shared TypeScript types (across website + backend)
├── admin/                # Future: Admin dashboard (Next.js or separate app)
└── docs/                 # Architecture documentation
```

## Technology Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS |
| Backend  | NestJS, REST API                  |
| Database | PostgreSQL + Prisma ORM           |

## Critical Requirement: .php URL Preservation

All existing Google-indexed URLs **must continue working unchanged**.

`apps/website/middleware.ts` rewrites `.php` requests internally:
- Browser URL: `/bali-tour-packages.php` (preserved)
- Internal route: `/bali-tour-packages` (Next.js page component)

**Never redirect, never rename, never remove .php extensions.**

## Migration Strategy

| Step | Description                       | Status   |
|------|-----------------------------------|----------|
| 1    | Build new architecture            | ✅ Done  |
| 2    | Create PostgreSQL/Prisma schema   | ✅ Done  |
| 3    | Build reusable components         | ✅ Done  |
| 4    | Migrate Bali as pilot             | ✅ Done  |
| 5    | Verify & get approval             | ⏳ Pending |
| 6    | Migrate remaining destinations    | 🔒 Locked |

## Backend Modules

### Active (public website)
- `destinations` — Destination pages & metadata
- `packages` — Tour package listings
- `hotels` — Hotel data
- `activities` — Activity listings
- `blogs` — Blog posts
- `media` — Media/image management
- `seo` — SEO metadata management
- `users` — User accounts
- `forms` — Contact & enquiry form handling

### Placeholder (future)
- `crm` — Customer relationship management
- `quotation` — Quotation builder
- `booking` — Booking management
- `payments` — Payment processing
- `notifications` — Email/WhatsApp/SMS notifications

## SEO Preservation

Every migrated page preserves:
- Meta title, description, keywords
- Canonical tag
- Open Graph & Twitter Cards
- Schema markup (JSON-LD)
- Breadcrumb schema
- Heading hierarchy (H1 → H2 → H3)
- Internal links (unchanged .php hrefs)
- Image alt text
- robots.txt
- XML sitemap

## Database Design Principles

- All prices stored in **INR paise** (integer), displayed as formatted strings in UI
- `Json` fields used for variable-structure data (inclusions, itinerary, schema)
- Placeholder models (Booking, Payment, Quotation) are schema-ready but not wired up yet
- `status` / `isActive` fields on every content model for CMS-ready soft publishing
