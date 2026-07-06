/**
 * NOTE: .php URL rewriting is handled in next.config.mjs rewrites(),
 * NOT here. Middleware is kept as a placeholder for future use cases
 * (auth, i18n, A/B testing, etc.) that require request-time logic.
 *
 * Why next.config.mjs instead of middleware for .php rewrites:
 *   Next.js silently skips file-extension paths before middleware runs,
 *   even with broad matchers. next.config rewrites run at the router level
 *   before that extension check, so they reliably catch *.php URLs.
 */

export {};
