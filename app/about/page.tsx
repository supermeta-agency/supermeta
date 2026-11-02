import type { Metadata } from "next";
import Window from "../components/Window";
import JsonLd from "../components/JsonLd";
import { BOOK_URL, SITE } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "About SuperMeta: A Reddit-Only Marketing Agency" },
  description:
    "SuperMeta is a Reddit-only marketing agency for startups and B2B brands. Small senior team, honest disclosed participation, and the rules we never break.",
  alternates: { canonical: "/about" },
};

const RULES = [
  ["Follow every subreddit's rules.", "We read them before we post, and we skip communities where a brand does not belong."],
  ["Always say who is talking.", "Brand accounts are named as the brand. Any product mention comes with clear disclosure."],
  ["Help first, mention second.", "A reply has to be useful even if it never names your product."],
  ["No bought, rented or farmed accounts.", "You own your brand account and its history, start to finish."],
  ["No vote manipulation.", "No upvote services, no vote rings, no asking people to brigade a thread."],
  ["No fake reviews or sockpuppets.", "We never pose as customers or invent experiences."],
  ["No guarantees we cannot keep.", "Google and AI systems decide what they show. We promise the work and show you the receipts."],
];

const WHO = [
  ["startup founders", "Pre-seed to Series A teams in the US and Europe, often YC and similar programs, where the founder still does sales."],
  ["b2b saas and devtools", "Products where buyers ask peers for honest takes before they book a demo."],
  ["ai apps and fintech", "Fast-moving categories where Reddit threads and AI answers shape the shortlist."],
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE.url}/about`,
    name: "About SuperMeta",
    about: { "@id": `${SITE.url}/#org` },
  };
  return (
    <>
      <section className="svc-hero dotted">
        <div className="wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span className="pill rise">about</span>
          <h1 className="rise" style={{ maxWidth: 820 }}>a reddit-only marketing agency. that is the whole point.</h1>
          <p className="lede rise rise-2" style={{ maxWidth: 600 }}>
            We used to offer PR, SEO, quests and product builds. Now we do Reddit, and nothing else. Here is why, and the rules we work by.
          </p>
        </div>
      </section>

      <section className="sec-tight">
        <div className="prose">
          <h2>why reddit, why now</h2>
          <p>
            Buyers have stopped trusting vendor pages on their own. They search &quot;best X reddit&quot;, read what real users said, and then ask an AI assistant, which reads the same threads. Reddit sits upstream of all of it.
          </p>
          <p>
            That makes Reddit the highest-trust channel a brand can show up in, and the easiest one to get wrong. Post like an ad and you get removed. Show up like a useful person who happens to work on the product, and you can stay in a thread that ranks for years.
          </p>
          <h2>how we work</h2>
          <ul>
            <li><b>Small senior team.</b> No account managers passing notes. You work with the people doing the work.</li>
            <li><b>Your accounts, your history.</b> We post from your clearly labeled brand account, and you keep everything we build.</li>
            <li><b>Measured in threads, not vanity.</b> Permalinks, rankings, AI citations, share of voice and leads, reported every week.</li>
            <li><b>Billed monthly.</b> We would rather earn next month than lock you in.</li>
          </ul>
          <p>
            Our lead strategist&apos;s personal Reddit account has 95,000+ karma, earned the slow way: by being useful in public, one comment at a time. That is the same playbook we run for brands.
          </p>
        </div>
      </section>

      <section className="sec-tight" id="rules" aria-labelledby="rules-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">our rules</span>
            <h2 id="rules-h" className="display h-sec">the rules we never break</h2>
            <p className="lede muted">They make the work slower. They are also why it lasts.</p>
          </div>
          <Window title="house-rules.txt" tint="yellow" className="rules">
            <ol>
              {RULES.map(([t, d]) => <li key={t}><b>{t}</b> {d}</li>)}
            </ol>
          </Window>
        </div>
      </section>

      <section className="sec-tight" aria-labelledby="who-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">who we work with</span>
            <h2 id="who-h" className="display h-sec">built for founders</h2>
          </div>
          <div className="grid-cards">
            {WHO.map(([t, d], i) => (
              <Window key={t} title={`${t.split(" ")[0]}.txt`} tint={(["blue", "green", "peach"] as const)[i]}>
                <h3>{t}</h3>
                <p>{d}</p>
              </Window>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dotted" aria-labelledby="cta-h">
        <div className="wrap cta-band">
          <span className="pill">say hi</span>
          <h2 id="cta-h" className="display h-sec">let&apos;s look at your threads</h2>
          <p className="lede muted">
            Book a free 30-minute call or email <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <a href={BOOK_URL} className="btn btn-blue">book a free call</a>
        </div>
      </section>
      <JsonLd data={schema} />
    </>
  );
}
