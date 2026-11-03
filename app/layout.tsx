import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import VersionBar from "./components/VersionBar";
import { SERVICES, SITE } from "./lib/site";

// Fontshare fonts (Cabinet Grotesk, Satoshi, Array, Comico) load from Fontshare's API: the ITF Free Font
// License forbids redistributing the font files through public repositories, so they are not committed here.
// Families are mapped to CSS variables in globals.css.
// One request per family: the API answers multi-family requests with the first family plus its defaults.
const FONTSHARE = ["cabinet-grotesk@500,700,800", "satoshi@400,500,700", "array@400,600,700", "comico@400"].map(
  (f) => `https://api.fontshare.com/v2/css?f[]=${f}&display=swap`,
);

const jbmono = JetBrains_Mono({ variable: "--font-jbmono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Reddit Marketing Agency for Startups and SaaS | SuperMeta",
    template: "%s | SuperMeta",
  },
  description:
    "SuperMeta is a Reddit marketing agency for startups and B2B SaaS. Get into the threads Google ranks and ChatGPT cites, from your own disclosed account.",
  applicationName: "SuperMeta",
  openGraph: { type: "website", siteName: "SuperMeta", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: "SuperMeta",
      url: SITE.url,
      logo: `${SITE.url}/supermeta-logo.jpg`,
      email: SITE.email,
      description: "A Reddit-first marketing agency for startups and B2B SaaS.",
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: SITE.email },
      areaServed: ["United States", "United Kingdom", "Europe"],
      knowsAbout: ["Reddit marketing", "Reddit SEO", "Answer engine optimization", "Reddit community management", "Reddit Ads"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Reddit marketing services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.serviceName, url: `${SITE.url}/${s.slug}` },
        })),
      },
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#site`, url: SITE.url, name: "SuperMeta", publisher: { "@id": `${SITE.url}/#org` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jbmono.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {FONTSHARE.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      </head>
      <body>
        <VersionBar />
        <MenuBar />
        <main>{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
