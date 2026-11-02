import type { Metadata } from "next";
import Link from "next/link";
import ServiceFinder from "../components/ServiceFinder";
import JsonLd from "../components/JsonLd";
import PixelIcon from "../components/PixelIcon";
import { BOOK_URL, SERVICES, SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Reddit Marketing Services for Startups and B2B",
  description:
    "Six Reddit marketing services: Reddit SEO and AEO, branded posting, keyword monitoring, lead generation, community management and Reddit Ads.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Reddit marketing services",
        itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.serviceName, url: `${SITE.url}/${s.slug}` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
        ],
      },
    ],
  };
  return (
    <>
      <section className="svc-hero dotted">
        <div className="wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <nav className="crumbs rise" aria-label="Breadcrumb"><Link href="/">home</Link><span>/</span><span>services</span></nav>
          <h1 className="rise" style={{ maxWidth: 820 }}>reddit marketing services</h1>
          <p className="lede rise rise-2" style={{ maxWidth: 600 }}>
            Six ways we get your brand into the Reddit threads buyers read, Google ranks and AI answers cite. Most teams start with the Reddit SEO and AEO audit, then add the parts they need.
          </p>
        </div>
      </section>
      <section className="sec-tight">
        <div className="wrap">
          <ServiceFinder items={SERVICES} full />
          <p className="small" style={{ textAlign: "center", marginTop: 18 }}>
            built for <Link className="link" href="/reddit-marketing-for-saas">saas and b2b companies</Link> and <Link className="link" href="/reddit-marketing-for-startups">startups and founders</Link>. see <Link className="link" href="/#plans">plans</Link>.
          </p>
        </div>
      </section>
      <section className="sec dotted" aria-labelledby="cta-h">
        <div className="wrap cta-band">
          <span className="pill"><PixelIcon name="bulb" size={16} /> not sure where to start?</span>
          <h2 id="cta-h" className="display h-sec">we will tell you on a call</h2>
          <p className="lede muted">30 minutes. We pull up your category&apos;s threads and suggest the one service that would move things first.</p>
          <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
        </div>
      </section>
      <JsonLd data={schema} />
    </>
  );
}
