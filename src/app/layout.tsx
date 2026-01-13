import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "BrandingBeez | White-Label SEO, Design & AI for US & UK Agencies",
  description:
    "Boost your agency growth with white-label SEO, PPC & web development services. Scale without hiring in-house teams. Trusted by 25+ agencies worldwide.",
  metadataBase: new URL("https://brandingbeez.co.uk"),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
