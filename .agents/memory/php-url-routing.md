---
name: Next.js .php URL routing
description: How to preserve .php URLs in Next.js App Router without redirecting — the correct mechanism and the pitfalls.
---

## Rule
Use `next.config.mjs` `rewrites()` to rewrite `.php` URLs to clean internal Next.js routes.
Do **not** use middleware for this — Next.js silently skips file-extension paths before middleware runs, even with broad matchers like `/:path*` or `/((?!_next).*)`.

## Why
Next.js has an internal check that treats paths with file extensions as potential static file requests and short-circuits them before middleware is evaluated. `next.config` rewrites run at the router level, before that check, so they reliably catch `.php` URLs.

## How to apply
```js
// next.config.mjs
async rewrites() {
  return [
    // Only list routes that have a matching page.tsx — do NOT use /:path*.php globally.
    { source: '/bali-tour-packages.php', destination: '/bali-tour-packages' },
    { source: '/bali-tour-packages/:slug.php', destination: '/bali-tour-packages/:slug' },
    // Add each destination here after its page is built and approved.
  ];
}
```

## Pilot scope rule
During the migration pilot, the rewrites list must be **explicit** — only routes with a matching Next.js page. A global `/:path*.php → /:path*` rewrite silently sends all unbuilt routes to a Next.js 404 instead of a meaningful error, making it hard to detect missing pages.

## Hydration note
jQuery/global.js injects `<link>` tags into `<head>` after React hydrates, causing a false hydration mismatch warning. Fix: add `suppressHydrationWarning` to both `<html>` and `<head>` in the root layout.
