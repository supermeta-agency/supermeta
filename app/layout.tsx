import type { Metadata } from "next";
import { Caveat, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import VersionBar from "./components/VersionBar";
import { SERVICES, SITE } from "./lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], weight: ["600"] });

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
      description: "A Reddit-only marketing agency for startups and B2B SaaS.",
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
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable} ${script.variable}`}>
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
