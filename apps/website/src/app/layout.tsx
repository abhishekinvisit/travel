import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://invisit.in'),
  title: {
    default: 'Invisit — Travel Packages for Domestic & International Destinations',
    template: '%s | invisit',
  },
  description: 'Book the best travel packages with invisit for domestic and international destinations.',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning on <head>: global.js / jQuery modify <head>
          after React hydrates (injecting CSS links), which causes a false
          hydration mismatch. The page renders correctly in both cases. */}
      <head suppressHydrationWarning>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="author" content="invisit" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

        {/* Bootstrap 5 CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        {/* Existing site stylesheets — loaded verbatim for pixel-perfect preservation */}
        <link href="/stylesheet/css/slick-theme.css" rel="stylesheet" />
        <link href="/stylesheet/fonts/fonts.css" rel="stylesheet" />
        <link href="/stylesheet/css/style.css" rel="stylesheet" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ6B6VFX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* jQuery — must be first, before slick and global.js.
            beforeInteractive loads it in the document <head> before hydration,
            which avoids the hydration mismatch caused by a synchronous <script>
            tag placed directly in JSX. */}
        <Script src="/javascripts/jquery.js" strategy="beforeInteractive" />

        {/* GTM — afterInteractive avoids SSR hydration mismatch */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NQ6B6VFX');
        `}</Script>

        {/* Slick carousel & global site JS */}
        <Script src="/javascripts/slick_carousel.js" strategy="afterInteractive" />
        <Script src="/javascripts/global.js" strategy="afterInteractive" />

        {/* Scroll-to-top button handler */}
        <Script id="scroll-top" strategy="afterInteractive">{`
          $(window).scroll(function() {
            $(this).scrollTop() > 800
              ? $("#scrollBottomtop").fadeIn(200)
              : $("#scrollBottomtop").fadeOut(800);
          });
          $("#scrollBottomtop").click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "2000", "swing");
          });
        `}</Script>
      </body>
    </html>
  );
}
