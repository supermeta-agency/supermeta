import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Window, { type Tint } from "../components/Window";
import Faq from "../components/Faq";
import JsonLd from "../components/JsonLd";
import ServiceFinder from "../components/ServiceFinder";
import { AdCard, LeadFeed, MonitorFeed, RedditThread, RulesCheck, Serp, SubredditCard } from "../components/Mocks";
import PixelIcon from "../components/PixelIcon";
import { BOOK_URL, SERVICES, SITE, serviceBySlug, type MockKind } from "../lib/site";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} | SuperMeta` },
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `/${s.slug}` },
  };
}

function Mock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "serp":
      return <Serp />;
    case "thread":
      return (
        <RedditThread
          replies={[
            { user: "u/acme_team", flair: "acme staff", text: "Disclosure: I work at acme. What worked for us at your size: one tag per request, and a reply to everyone when it ships. Happy to share our tag list if useful.", votes: 88 },
          ]}
        />
      );
    case "feed":
      return <MonitorFeed />;
    case "leads":
      return <LeadFeed />;
    case "subreddit":
      return <SubredditCard />;
    case "ad":
      return <AdCard />;
  }
}

const TINTS: Tint[] = ["green", "blue", "red", "teal", "peach", "yellow"];

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();

  const related = s.related.map(serviceBySlug).filter((r) => r !== undefined);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.serviceName,
        serviceType: s.serviceName,
        description: s.description,
        url: `${SITE.url}/${s.slug}`,
        provider: { "@id": `${SITE.url}/#org` },
        areaServed: ["United States", "United Kingdom", "Europe"],
        audience: { "@type": "BusinessAudience", audienceType: "Startups and B2B companies" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
          { "@type": "ListItem", position: 3, name: s.serviceName, item: `${SITE.url}/${s.slug}` },
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
              <Link href="/">home</Link><span>/</span><Link href="/services">services</Link><span>/</span><span>{s.name}</span>
            </nav>
            <div style={{ marginTop: 22 }}><span className="pill"><PixelIcon name={s.icon} size={16} /> {s.eyebrow}</span></div>
            <h1>{s.h1}</h1>
            <p className="lede">{s.intro}</p>
            <div className="hero-ctas" style={{ marginTop: 26 }}>
              <div>
                <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
                <div className="btn-note">30 minutes. no pitch deck.</div>
              </div>
              <div>
                <a href="#included" className="btn btn-secondary">what&apos;s included</a>
                <div className="btn-note">billed monthly</div>
              </div>
            </div>
          </div>
          <div className="svc-media rise rise-2">
            <Window title={s.file} tag="sample" caption={s.file}><Mock kind={s.mock} /></Window>
            <div className="float" style={{ left: -30, bottom: -18 }}><PixelIcon name={s.icon} size={56} motion="bob" /></div>
            <span className="kao" style={{ right: 4, top: -30 }}>{"{ ^-^ }"}</span>
          </div>
        </div>
      </section>

      <section className="sec" id="included" aria-labelledby="inc-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="scroll" size={16} /> tl;dr: what&apos;s included</span>
            <h2 id="inc-h" className="display h-sec">what you get</h2>
          </div>
          <div className="grid-cards">
            {s.included.map((it, i) => (
              <Window key={it.t} title={`${String(i + 1).padStart(2, "0")}.txt`} tint={TINTS[i % TINTS.length]}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </Window>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tight" aria-labelledby="steps-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="crayon" size={16} /> eli5: how it works</span>
            <h2 id="steps-h" className="display h-sec">how we run it</h2>
          </div>
          <Window title={`${s.slug}.sh`} tint="dark" className="term" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="term-body">
              {s.steps.map((st, i) => (
                <div className="term-step" key={st.t}>
                  <span className="k">step {i + 1}</span>
                  <span><b>{st.t}</b> <span className="c">·</span> {st.d}</span>
                </div>
              ))}
            </div>
          </Window>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap split">
          <Window title="reports.txt" tint="blue">
            <div className="list-box">
              <h3>reports and deliverables</h3>
              <ul>{s.reports.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </Window>
          <Window title="good-fit.txt" tint="green">
            <div className="list-box">
              <h3>a good fit if you are</h3>
              <ul>{s.fit.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </Window>
          <Window title="rules-check.txt" tint="yellow">
            <RulesCheck />
          </Window>
          <Window title="our-rules.txt" tint="red">
            <div className="list-box">
              <h3>what we never do</h3>
              <ul>
                <li>buy, rent or farm accounts</li>
                <li>buy upvotes or coordinate votes</li>
                <li>post fake reviews or pose as customers</li>
                <li>hide that it is your brand talking</li>
              </ul>
              <Link href="/about#rules" className="feat-more">read our rules →</Link>
            </div>
          </Window>
        </div>
      </section>

      <Faq items={s.faqs} pill="ama" title={`${s.name} faq`} />

      <section className="sec-tight" aria-labelledby="rel-h">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 28 }}>
            <span className="pill"><PixelIcon name="heart" size={16} /> pairs well with</span>
            <h2 id="rel-h" className="sr-only">Related services</h2>
          </div>
          <ServiceFinder items={related} />
          <p className="small" style={{ textAlign: "center", marginTop: 18 }}>
            <Link className="link" href="/#plans">see how plans work</Link> · <Link className="link" href="/reddit-marketing-for-saas">reddit marketing for saas</Link> · <Link className="link" href="/reddit-marketing-for-startups">for startups</Link>
          </p>
        </div>
      </section>

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
