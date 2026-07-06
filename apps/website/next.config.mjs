/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  /**
   * MOST IMPORTANT: Preserve all existing .php URLs.
   *
   * Google has indexed URLs like /bali-tour-packages.php and they must stay
   * exactly as-is in the browser. Next.js `rewrites` run before routing
   * and before the filesystem check, so the browser URL stays as *.php
   * while Next.js internally serves the clean-path page component.
   *
   * PILOT PHASE: Only routes with a matching Next.js page are listed here.
   * Non-migrated routes are NOT listed — they will return 404 rather than
   * silently rewriting to a missing page. Add each route here only after
   * its page.tsx has been built and approved.
   *
   * Migration status:
   *   ✅ /bali-tour-packages.php
   *   🔒 All others — waiting for pilot approval before migrating
   */
  async rewrites() {
    return [
      // ── Bali destination (pilot) ──────────────────────────────────────
      {
        source: '/bali-tour-packages.php',
        destination: '/bali-tour-packages',
      },
      // Individual Bali package pages (nested .php paths under /bali-tour-packages/)
      {
        source: '/bali-tour-packages/:slug.php',
        destination: '/bali-tour-packages/:slug',
      },
    ];
  },
};

export default nextConfig;
