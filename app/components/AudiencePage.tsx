import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Window, { type Tint } from "./Window";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import ServiceFinder from "./ServiceFinder";
import PixelIcon from "./PixelIcon";
import { BOOK_URL, SITE, serviceBySlug, type Audience } from "../lib/site";

export function audienceMetadata(a: Audience): Metadata {
  return {
    title: { absolute: `${a.title} | SuperMeta` },
    description: a.description,
    alternates: { canonical: `/${a.slug}` },
    openGraph: { title: a.title, description: a.description, url: `/${a.slug}` },
  };
}

const TINTS: Tint[] = ["blue", "green", "peach", "teal", "yellow", "red"];

// Shared layout for "reddit marketing for X" pages: hero, plays, subreddits, services, FAQ.
export default function AudiencePage({ a, media }: { a: Audience; media: ReactNode }) {
  const services = a.services.map(serviceBySlug).filter((s) => s !== undefined);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/${a.slug}`,
        url: `${SITE.url}/${a.slug}`,
        name: a.title,
        description: a.description,
        isPartOf: { "@id": `${SITE.url}/#site` },
        about: { "@id": `${SITE.url}/#org` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: a.title, item: `${SITE.url}/${a.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <section className="svc-hero dotted">
        <div className="wrap svc-hero-grid">
          <div className="rise">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">home</Link><span>/</span><span>{a.name}</span>
            </nav>
            <div style={{ marginTop: 22 }}><span className="pill">{a.eyebrow}</span></div>
            <h1>{a.h1}</h1>
            <p className="lede">{a.intro}</p>
            <div className="hero-ctas" style={{ marginTop: 26 }}>
              <div>
                <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
                <div className="btn-note">30 minutes. no pitch deck.</div>
              </div>
              <div>
                <Link href="/reddit-seo" className="btn btn-secondary">start with the audit</Link>
                <div className="btn-note">reddit seo and aeo</div>
              </div>
            </div>
          </div>
          <div className="svc-media rise rise-2">
            <Window title={a.file} tag="sample" caption={a.file}>{media}</Window>
            <div className="float" style={{ left: -30, bottom: -18 }}><PixelIcon name="banana" size={56} motion="wiggle" /></div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="plays-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="fire" size={16} /> what works</span>
            <h2 id="plays-h" className="display h-sec">the plays we run</h2>
          </div>
          <div className="grid-cards">
            {a.plays.map((p, i) => (
              <Window key={p.t} title={`${String(i + 1).padStart(2, "0")}.txt`} tint={TINTS[i % TINTS.length]}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Window>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tight" aria-labelledby="subs-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="popcorn" size={16} /> where they hang out</span>
            <h2 id="subs-h" className="display h-sec">subreddits we often start with</h2>
            <p className="lede muted">Examples only. The right list depends on your buyer, and every one has its own rules.</p>
          </div>
          <Window title="subreddits.txt" tint="dark" className="term" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="term-body" style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
              {a.subreddits.map((r) => <span key={r} className="k">{r}</span>)}
              <span className="c" style={{ flexBasis: "100%" }}># the audit maps yours, with self-promo rules for each one.</span>
            </div>
          </Window>
        </div>
      </section>

      <section className="sec-tight" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 28 }}>
            <span className="pill"><PixelIcon name="diamond" size={16} /> services</span>
            <h2 id="svc-h" className="display h-sec">where to start</h2>
          </div>
          <ServiceFinder items={services} />
          <p className="small" style={{ textAlign: "center", marginTop: 18 }}>
            <Link className="link" href="/services">see all reddit marketing services</Link>
          </p>
        </div>
      </section>

      <Faq items={a.faqs} pill="ama" title={`reddit marketing ${a.name} faq`} />

      <section className="sec dotted" aria-labelledby="cta-h">
        <div className="wrap cta-band">
          <span className="pill"><PixelIcon name="upvote" size={16} /> take my upvote</span>
          <h2 id="cta-h" className="display h-sec">see where you stand on reddit</h2>
          <p className="lede muted">A free 30-minute call. We show you the threads in your category and who gets recommended today.</p>
          <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
        </div>
      </section>
      <JsonLd data={schema} />
    </>
  );
}
