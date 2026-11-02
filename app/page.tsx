import type { Metadata } from "next";
import Window, { type Tint } from "./components/Window";
import JourneyWindow from "./components/JourneyWindow";
import Faq from "./components/Faq";
import ServiceFinder from "./components/ServiceFinder";
import { AiAnswer, MonitorFeed, RedditThread, RulesCheck, Serp } from "./components/Mocks";
import { Upvote } from "./components/Icons";
import { BOOK_URL, HOME_FAQS, PLANS, RECEIPTS, SERVICES } from "./lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Reddit Marketing Agency for Startups and SaaS | SuperMeta" },
  description:
    "SuperMeta is a Reddit marketing agency for startups and B2B SaaS. Get into the threads Google ranks and ChatGPT cites, from your own disclosed account.",
  alternates: { canonical: "/" },
};

const WAVE = [6, 10, 6, 14, 18, 12, 20, 14, 8, 12, 6, 4];

function Wave() {
  return (
    <div className="wave" aria-hidden="true">
      {WAVE.map((h, i) => (
        <i key={i} style={{ height: h, opacity: 0.25 + (i % 5) * 0.15 }} />
      ))}
    </div>
  );
}

const FEATURES = [
  {
    file: "page-one.png",
    title: "rank in the threads google shows",
    body: "We map the Reddit threads that sit on page one for your buyer keywords, then earn your place in them. A good answer in the right thread can outrank your own homepage.",
    href: "/reddit-seo",
    more: "how reddit seo works",
    media: <Serp />,
  },
  {
    file: "todays-threads.txt",
    title: "be the first helpful reply",
    body: "We watch your brand, your competitors and every \"what's the best tool for\" post in your category. You get the threads worth answering while they are still young.",
    href: "/reddit-monitoring",
    more: "how monitoring works",
    media: <MonitorFeed />,
    bubble: "supermet",
  },
  {
    file: "ai-answer.png",
    title: "show up when buyers ask ai",
    body: "ChatGPT, Perplexity and Google's AI answers lean on Reddit. We track which threads they cite for your category and make sure your brand is in the conversation.",
    href: "/reddit-seo",
    more: "see the aeo side",
    media: <AiAnswer />,
  },
];

const FAN_LEFT = ["#efc3ff", "#e7a8ff", "#e08cff", "#d870f5", "#ef6fd0", "#f46fb4", "#ff78a0"];
const FAN_RIGHT = ["#c7f0a0", "#b2e68a", "#9edc74", "#cfe07a", "#e3dd7a", "#efd88a", "#f3d79c"];

export default function Home() {
  return (
    <>
      {/* ── HERO: a desktop full of reddit ── */}
      <section className="hero dotted">
        <div className="float bob" style={{ left: "2.5%", top: 70, width: 232, rotate: "-2deg" }}>
          <Window title="r-saas-thread.png" caption="r-saas-thread.png">
            <RedditThread title="Is Reddit marketing worth it for B2B? Every brand post I see gets roasted" votes={312} comments={146} sub="r/marketing" />
          </Window>
        </div>
        <div className="float float-low bob-2" style={{ left: "3%", top: 470, width: 200, rotate: "1.5deg" }}>
          <Window title="rules-check.txt" caption="rules-check.txt"><RulesCheck /></Window>
        </div>
        <div className="float bob-2" style={{ right: "2.5%", top: 60, width: 250, rotate: "2deg" }}>
          <Window title="ai-answer.png" caption="ai-answer.png"><AiAnswer question="best feedback tool for a small saas?" /></Window>
        </div>
        <div className="float float-low bob" style={{ right: "3%", top: 500, width: 200, rotate: "-1.5deg" }}>
          <Window title="karma.txt" caption="karma.txt">
            <div className="rd mono" style={{ fontSize: 12 }}>
              <div>account: u/acme_team</div>
              <div>flair: acme staff</div>
              <div>history: helpful first</div>
              <div style={{ color: "#1d9a45" }}>status: trusted ^_^</div>
            </div>
          </Window>
        </div>

        <div className="float" style={{ left: "24%", top: 46 }}>
          <div className="sticker-hello"><b>HELLO</b><small>my name is</small><span>supermeta</span></div>
        </div>
        <div className="float float-hide-md" style={{ right: "21%", top: 300, rotate: "12deg" }}>
          <div className="sticker-hello" data-red=""><b>HELLO</b><small>my name is</small><span>u/you</span></div>
        </div>
        <div className="float" style={{ left: "21%", top: 300 }}><span className="sticker-vote"><Upvote size={26} color="#fff" /></span></div>
        <div className="float float-hide-md" style={{ right: "24%", top: 120 }}><span className="sticker-stamp">no spam</span></div>
        <div className="float" style={{ left: "14%", top: 330 }}><span className="icon-folder" style={{ display: "block" }} /></div>
        <div className="float" style={{ right: "19%", top: 420 }}><span className="icon-folder" style={{ display: "block" }} /></div>

        <span className="kao" style={{ left: "27%", top: 210 }}>^ ω ^</span>
        <span className="kao" style={{ right: "26%", top: 60 }}>{"¯\\_(ツ)_/¯"}</span>
        <span className="kao" style={{ left: "27%", top: 430 }}>(¬_¬)</span>
        <span className="kao" style={{ right: "29%", top: 420 }}>{"{ ^-^ }"}</span>

        <div className="wrap hero-center">
          <h1 className="hero-h1 rise">
            <span className="wordmark">supermeta</span>
            <span className="tagline">the reddit marketing agency for startups and b2b saas</span>
          </h1>
          <p className="hero-sub rise rise-2">
            buyers ask reddit. google ranks the thread. ai repeats it. we get your brand into those threads, the honest way. reddit marketing for the ai search era.
          </p>
          <div className="hero-ctas rise rise-3">
            <div>
              <a href={BOOK_URL} className="btn btn-blue">book a free call</a>
              <div className="btn-note">30 minutes. we show you the threads.</div>
            </div>
            <div>
              <a href="#services" className="btn btn-gray">see the services</a>
              <div className="btn-note">6 services. reddit only.</div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="hero-stage rise rise-3">
            <JourneyWindow />
          </div>
        </div>
      </section>

      {/* ── THREE PLAYS ── */}
      <section className="sec" id="features" aria-labelledby="features-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">what we do</span>
            <h2 id="features-h" className="display h-sec">three plays. one channel.</h2>
            <p className="lede muted">Buyers search Google, read Reddit, then ask AI. We work all three places your category gets decided.</p>
          </div>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`feat-row${i % 2 ? " flip" : ""}`}>
              <div className="feat-media">
                <Window title={f.file} tag="sample">{f.media}</Window>
              </div>
              <div className="feat-copy">
                {f.bubble ? (
                  <div className="bubble-row"><span className="bubble">{f.bubble}</span></div>
                ) : (
                  <Wave />
                )}
                <h3 className="h-feat">{f.title}</h3>
                <p className="small">{f.body}</p>
                <Link href={f.href} className="feat-more">{f.more} →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES (Finder) ── */}
      <section className="sec-tight" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">services</span>
            <h2 id="services-h" className="display h-sec">reddit marketing services</h2>
            <p className="lede muted">Start with the strategy, add the parts you need. Every service runs on your brand&apos;s own, clearly labeled presence.</p>
          </div>
          <ServiceFinder items={SERVICES} full />
          <p className="small" style={{ textAlign: "center", marginTop: 18 }}>
            built for <Link className="link" href="/reddit-marketing-for-saas">saas and b2b companies</Link> and <Link className="link" href="/reddit-marketing-for-startups">startups and founders</Link>.
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sec" aria-labelledby="ba-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">before and after</span>
            <h2 id="ba-h" className="display h-sec">stop letting competitors own the reddit answer</h2>
          </div>
          <div className="ba">
            <Window title="without-supermeta.txt" tint="red" className="ba-bad">
              <ol>
                <li>A buyer asks Reddit which tool to pick.</li>
                <li>Your competitor gets mentioned. You do not.</li>
                <li>Google ranks that thread on page one.</li>
                <li>AI assistants read it and repeat the shortlist.</li>
                <li>You find out when a lost deal says &quot;saw it on Reddit&quot;.</li>
              </ol>
            </Window>
            <Window title="with-supermeta.txt" tint="green" className="ba-good">
              <ol>
                <li>We find the threads <b>already shaping</b> your category.</li>
                <li>We show where your brand <b>honestly belongs</b>.</li>
                <li>We write replies that <b>help first</b> and mention you second.</li>
                <li>You approve. We post from your <b>labeled brand account</b>.</li>
                <li>You become part of the answer buyers see, <b>and you can track it</b>.</li>
              </ol>
            </Window>
          </div>
        </div>
      </section>

      {/* ── THE THESIS (notes) ── */}
      <section className="sec" aria-labelledby="notes-h">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 24 }}>
            <span className="pill">the thesis</span>
            <h2 id="notes-h" className="sr-only">Why SuperMeta does Reddit only</h2>
          </div>
          <div className="notes-stage">
            <div className="folder-fan left" aria-hidden="true">
              {FAN_LEFT.map((c, i) => <i key={c} style={{ background: c, marginLeft: i * 14 }} />)}
            </div>
            <Window title="notes" className="notes">
              <div className="notes-body">
                <p>Most agencies treat Reddit like an ad channel. Post a link, hope, get removed.</p>
                <p>We think that is backwards. Reddit is where buyers compare notes before they ever talk to sales, and it is one of the sources Google and AI assistants lean on hardest.</p>
                <p><span className="hl">If you are not in the thread, you are not in the answer.</span></p>
                <p>So we do one thing: Reddit. We learn each subreddit&apos;s rules, show up as a clearly labeled brand, help first, and measure what matters: the threads you are in, where they rank, and who cites them.</p>
                <p className="notes-caret">No bought accounts. No upvote games. No fake reviews. Slower than spam, and the only version that lasts.</p>
                <div className="notes-sign">
                  <span className="who"><i>s</i><span>the supermeta team<br /><span className="tiny">lead strategist: 95,000+ karma, earned the slow way</span></span></span>
                  <span className="sig">supermeta</span>
                </div>
              </div>
            </Window>
            <div className="folder-fan right" aria-hidden="true">
              {FAN_RIGHT.map((c, i) => <i key={c} style={{ background: c, marginRight: i * 14 }} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── RECEIPTS ── */}
      <section className="sec" aria-labelledby="receipts-h">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 32 }}>
            <span className="pill">the receipts</span>
          </div>
          <div className="marquee" style={{ marginBottom: 40, position: "relative" }}>
            <span className="ghost" aria-hidden="true">ask reddit first</span>
            <h2 id="receipts-h" className="display" style={{ fontSize: "inherit" }}>buyers ask reddit first</h2>
            <span className="ghost" aria-hidden="true">buyers ask</span>
          </div>
          <div className="wall">
            {RECEIPTS.map((r, i) => (
              <Window key={r.num} tint={r.tint as Tint} closeX style={{ ["--tilt" as string]: `${[-1, 0.6, -0.4, 0.8, -0.8, 0.4][i]}deg` }}>
                <div className="wall-card">
                  <div className="wall-who">
                    <span><b>{r.who}</b><small>{r.handle}</small></span>
                    <span className="wall-follow" aria-hidden="true">+</span>
                  </div>
                  <div className="wall-num">{r.num}</div>
                  <p className="wall-text">{r.text}</p>
                  <div className="wall-src">source: <a href={r.href} target="_blank" rel="noopener noreferrer">{r.src}</a></div>
                </div>
              </Window>
            ))}
            <div className="float float-hide-md" style={{ right: -40, top: -70 }}><span className="sticker-oval">no spam!</span></div>
          </div>
          <div className="wall-bar">
            130.3 million daily uniques on Reddit. Some of them are shopping for what you sell. <a className="link" href={BOOK_URL} style={{ textDecoration: "underline" }}>let&apos;s find them</a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sec" id="how" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill">how it works</span>
            <h2 id="how-h" className="display h-sec">your first 90 days</h2>
            <p className="lede muted">Early signals in weeks. Trust in a month or two. Pipeline in a few months. Reddit compounds, it does not spike.</p>
          </div>
          <Window title="first-90-days.sh" tint="dark" className="term" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="term-body">
              <div className="c"># the usual path. we adjust it to your category.</div>
              {[
                ["week 1", "audit", "Kickoff call and onboarding form. We pull the threads, rankings, AI answers and competitors for your buyer queries."],
                ["week 2", "playbook", "Subreddit map, rules, thread targets, narratives, keywords and timing. Your brand account gets set up and labeled."],
                ["weeks 3-6", "go live", "Posts and comments you approve, daily keyword monitoring and the first qualified leads."],
                ["weeks 6-12", "compound", "Threads you are in start ranking and getting cited. We double down on what works and drop what does not."],
                ["every week", "report", "Permalinks, rankings, AI citations, share of voice and leads. Drafts and removed comments do not count."],
              ].map(([when, what, body]) => (
                <div className="term-step" key={when}>
                  <span className="k">{when}</span>
                  <span><b>{what}</b> <span className="c">·</span> {body}</span>
                </div>
              ))}
              <div className="y" style={{ marginTop: 10 }}>$ no guarantees on rankings or citations. full receipts on the work.</div>
            </div>
          </Window>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="sec" id="plans" aria-labelledby="plans-h">
        <div className="wrap">
          <div className="sky">
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="pill">plans</span>
              <h2 id="plans-h" className="display h-sec">start where you are</h2>
              <p className="lede">three ways in. billed monthly. scoped on a free call.</p>
            </div>
            <div className="plans">
              {PLANS.map((p) => (
                <Window key={p.name} title={p.name} tint={p.popular ? "sky" : undefined} className="plan" style={{ position: "relative" }}>
                  {p.popular ? <span className="pill plan-pop">popular</span> : null}
                  <div className="plan-head">
                    <h3 className="plan-name">{p.name}</h3>
                    <p className="plan-line">{p.line}</p>
                    <span className="tiny">{p.best}</span>
                  </div>
                  <div className="plan-mid">
                    <span className="plan-big">{p.big}</span>
                    <span className="tiny">{p.unit}</span>
                    <a href={BOOK_URL} className={`btn btn-sm ${p.popular ? "btn-blue" : "btn-gray"}`} style={{ marginTop: 10 }}>{p.cta}</a>
                  </div>
                  <ul className="plan-list">
                    {p.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </Window>
              ))}
            </div>
            <p className="plan-foot">subreddit setup is a one-time fee. reddit ads management can be added to any plan; ad budget is separate.</p>
            <Window title="add-ons" tint="dark" className="term terminal-cta">
              <div className="term-body">
                <p><b>{"< add-ons >"}</b>more keywords. more posts and comments. more leads. more subreddits. more ad campaigns. tell us what you need and we will scope it.</p>
                <a href={BOOK_URL} className="btn btn-gray btn-sm mono">ask us</a>
              </div>
            </Window>
          </div>
        </div>
      </section>

      <Faq items={HOME_FAQS} lede="what to know about reddit marketing, bans, ai answers and getting started." />

      {/* ── CTA ── */}
      <section className="sec dotted" aria-labelledby="cta-h">
        <div className="wrap cta-band">
          <span className="pill">ready when you are</span>
          <h2 id="cta-h" className="display h-sec">be the answer buyers find on reddit</h2>
          <p className="lede muted">A free 30-minute call. We pull up the threads in your category and show you who gets recommended today.</p>
          <div className="hero-ctas" style={{ marginTop: 6 }}>
            <a href={BOOK_URL} className="btn btn-blue">book a free call</a>
            <Link href="/reddit-seo" className="btn btn-gray">start with the audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
