import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "BrandingBeez | White-Label SEO, Design & AI for US & UK Agencies",
  description:
    "Boost your agency growth with white-label SEO, PPC & web development services. Scale without hiring in-house teams. Trusted by 25+ agencies worldwide.",
  metadataBase: new URL("https://brandingbeez.co.uk"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrandingBeez | White-Label SEO, Design & AI for US & UK Agencies",
    description:
      "Boost your agency growth with white-label SEO, PPC & web development services. Scale without hiring in-house teams. Trusted by 25+ agencies worldwide.",
    url: "https://brandingbeez.co.uk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandingBeez | White-Label SEO, Design & AI for US & UK Agencies",
    description:
      "White-label SEO, google ads, design, dev & AI services trusted by agencies in the US & UK. Scale your business with BrandingBeez's on-demand growth solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "xqlSp59sUF8tAYClepaa_ymf2QRwDXPBWbFryVEipMM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="//scripts.clarity.ms" />
        <link rel="dns-prefetch" href="//snap.licdn.com" />
        <link rel="dns-prefetch" href="//px.ads.linkedin.com" />
        <link rel="dns-prefetch" href="//static.hotjar.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//region1.google-analytics.com" />
        <link rel="dns-prefetch" href="//analytics.google.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <Script id="gtag-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
