import type { Metadata } from "next";
import Link from "next/link";
import Window, { type Tint } from "./components/Window";
import Motion from "./components/Motion";
import Faq from "./components/Faq";
import ServiceFinder from "./components/ServiceFinder";
import PixelIcon, { Px, type PixelMotion } from "./components/PixelIcon";
import { AiAnswer, RedditThread } from "./components/Mocks";
import type { PixelIconName } from "./lib/pixel-icons";
import { BOOK_URL, HOME_FAQS, PLANS, RECEIPTS, SERVICES } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: "Reddit Marketing Agency for Startups and SaaS | SuperMeta" },
  description:
    "SuperMeta is a Reddit marketing agency for startups and B2B SaaS. Get into the threads Google ranks and ChatGPT cites, from your own disclosed account.",
  alternates: { canonical: "/" },
};

// Desktop icons scattered around the hero, each a bit of Reddit lingo.
const DESK: { icon: PixelIconName; label: string; motion: PixelMotion; pos: React.CSSProperties; cls?: string }[] = [
  { icon: "banana", label: "for-scale.png", motion: "wiggle", pos: { left: "21%", top: 92 } },
  { icon: "cake", label: "cake-day.ics", motion: "none", pos: { left: "21%", top: 300 } },
  { icon: "meme", label: "meme.jpg", motion: "none", pos: { left: "12%", top: 410 }, cls: "float-hide-md" },
  { icon: "fkey", label: "press-f.key", motion: "none", pos: { left: "3%", top: 500 }, cls: "float-low" },
  { icon: "gold", label: "gold.award", motion: "spin", pos: { right: "21%", top: 100 } },
  { icon: "popcorn", label: "drama.gif", motion: "bob", pos: { right: "4%", top: 300 } },
  { icon: "rocket", label: "to-the-moon.exe", motion: "none", pos: { right: "12%", top: 410 }, cls: "float-hide-md" },
  { icon: "potato", label: "480p.mp4", motion: "none", pos: { right: "3%", top: 510 }, cls: "float-low" },
];

const FEATURES = [
  {
    icon: "trophy" as PixelIconName,
    motion: "bounce" as PixelMotion,
    file: "page-one.mp4",
    title: "rank in the threads google shows",
    body: "We map the Reddit threads that sit on page one for your buyer keywords, then earn your place in them. A good answer in the right thread can outrank your own homepage.",
    href: "/reddit-seo",
    more: "how reddit seo works",
    media: <Motion clip="climb" />,
  },
  {
    icon: "popcorn" as PixelIconName,
    motion: "bob" as PixelMotion,
    file: "todays-threads.mp4",
    title: "be the first helpful reply",
    body: "We watch your brand, your competitors and every \"what's the best tool for\" post in your category. You get the threads worth answering while they are still young.",
    href: "/reddit-monitoring",
    more: "how monitoring works",
    media: <Motion clip="feed" />,
  },
  {
    icon: "bulb" as PixelIconName,
    motion: "none" as PixelMotion,
    file: "ai-answer.png",
    title: "show up when buyers ask ai",
    body: "ChatGPT, Perplexity and Google's AI answers lean on Reddit. We track which threads they cite for your category and make sure your brand is in the conversation.",
    href: "/reddit-seo",
    more: "see the aeo side",
    media: <AiAnswer />,
  },
];

const STACK_L: PixelIconName[] = ["upvote", "banana", "cake", "heart", "scroll", "crayon"];
const STACK_R: PixelIconName[] = ["gold", "fire", "mic", "diamond", "bubble", "trophy"];

export default function Home() {
  return (
    <>
      {/* ── HERO: a desktop full of reddit lingo ── */}
      <section className="hero">
        <div className="float bob" style={{ left: "2.5%", top: 64, width: 228, rotate: "-2deg" }}>
          <Window title="r-marketing.png" caption="r-marketing.png">
            <RedditThread title="Is Reddit marketing worth it for B2B? Every brand post I see gets roasted" votes={312} comments={146} sub="r/marketing" />
          </Window>
        </div>
        <div className="float bob-2" style={{ right: "2.5%", top: 60, width: 214, rotate: "2deg" }}>
          <Window title="karma.txt" caption="karma.txt" tint="yellow">
            <div className="rd mono" style={{ fontSize: 12, lineHeight: "19px" }}>
              <div>account: u/acme_team</div>
              <div>flair: acme staff</div>
              <div>style: helpful first</div>
              <div style={{ color: "#1d9a6a" }}>status: trusted ^_^</div>
            </div>
          </Window>
        </div>
        {DESK.map((d) => (
          <div key={d.label} className={`float ${d.cls ?? ""}`} style={d.pos}>
            <div className="desk-icon"><PixelIcon name={d.icon} size={44} motion={d.motion} /><span>{d.label}</span></div>
          </div>
        ))}
        <div className="float float-hide-md" style={{ left: "3%", top: 300 }}><span className="sticker-note">edit: thanks for the gold, kind stranger</span></div>
        <div className="float float-hide-md" style={{ right: "21%", top: 250 }}><span className="sticker-stamp">no spam</span></div>
        <span className="kao" style={{ left: "29%", top: 60 }}>^ ω ^</span>
        <span className="kao" style={{ right: "29%", top: 52 }}>{"¯\\_(ツ)_/¯"}</span>

        <div className="wrap hero-center">
          <h1 className="hero-h1 rise">
            <span className="wordmark">super<span className="px-word">meta</span></span>
            <span className="tagline">the reddit marketing agency for startups and b2b saas</span>
          </h1>
          <p className="hero-sub rise rise-2">
            buyers ask reddit. google ranks the thread. ai repeats it. we get your brand into those threads, the honest way.
          </p>
          <div className="hero-ctas rise rise-3">
            <div>
              <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
              <div className="btn-note">30 minutes. we show you the threads.</div>
            </div>
            <div>
              <a href="#services" className="btn btn-secondary">see the services</a>
              <div className="btn-note">6 services. reddit first.</div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="hero-stage rise rise-3">
            <Window title="how-buyers-shop-now.mp4" tag="sample" caption="how-buyers-shop-now.mp4 · made with remotion">
              <Motion clip="hero" />
            </Window>
          </div>
        </div>
      </section>

      {/* ── THREE PLAYS ── */}
      <section className="sec" id="features" aria-labelledby="features-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="scroll" size={16} /> tl;dr</span>
            <h2 id="features-h" className="display h-sec">three plays. <span className="px-word">one</span> channel.</h2>
            <p className="lede">Buyers search Google, read Reddit, then ask AI. We work all three places your category gets decided.</p>
          </div>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`feat-row${i % 2 ? " flip" : ""}`}>
              <div className="feat-copy">
                <PixelIcon name={f.icon} size={40} motion={f.motion} className="feat-ico" />
                <h3 className="h-feat">{f.title}</h3>
                <p className="small" style={{ margin: 0 }}>{f.body}</p>
                <Link href={f.href} className="feat-more">{f.more} <Px name="arrow-right" size={14} /></Link>
              </div>
              <div className="feat-media">
                <Window title={f.file} tag="sample">{f.media}</Window>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec-tight" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="diamond" size={16} /> services</span>
            <h2 id="services-h" className="display h-sec">reddit marketing services</h2>
            <p className="lede">Start with the strategy, add the parts you need. Every service runs on your brand&apos;s own, clearly labeled presence.</p>
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
            <span className="pill"><PixelIcon name="fkey" size={16} /> before / after</span>
            <h2 id="ba-h" className="display h-sec">stop letting competitors own the reddit answer</h2>
          </div>
          <div className="ba">
            <Window title="without-supermeta.txt" tint="red" className="ba-bad">
              <ol>
                <li>A buyer asks Reddit which tool to pick.</li>
                <li>Your competitor gets mentioned. You do not.</li>
                <li>Google ranks that thread on page one.</li>
                <li>AI assistants read it and repeat the shortlist.</li>
                <li>Press F for the deal you never knew about.</li>
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

      {/* ── OP'S NOTES ── */}
      <section className="sec" aria-labelledby="notes-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="bubble" size={16} /> op&apos;s notes</span>
            <h2 id="notes-h" className="sr-only">Why SuperMeta puts Reddit first</h2>
          </div>
          <div className="notes-stage">
            <div className="icon-stack left" aria-hidden="true">{STACK_L.map((n) => <PixelIcon key={n} name={n} size={44} />)}</div>
            <Window title="op-notes.txt" tint="yellow" className="notes">
              <div className="notes-body">
                <p>Most agencies treat Reddit like an ad channel. Post a link, hope, get removed.</p>
                <p>We think that is backwards. Reddit is where buyers compare notes before they ever talk to sales, and it is one of the sources Google and AI assistants lean on hardest.</p>
                <p><span className="hl">If you are not in the thread, you are not in the answer.</span></p>
                <p>So Reddit comes first. We learn each subreddit&apos;s rules, show up as a clearly labeled brand, help first, and measure what matters: the threads you are in, where they rank, and who cites them.</p>
                <p className="notes-caret">No bought accounts. No upvote games. No fake reviews. Slower than spam, and the only version that lasts.</p>
                <div className="notes-sign">
                  <span className="who"><PixelIcon name="upvote" size={28} /><span>the supermeta team <span className="op">OP</span><br /><span className="tiny">lead strategist: 95,000+ karma, earned the slow way</span></span></span>
                  <span className="sig">supermeta</span>
                </div>
              </div>
            </Window>
            <div className="icon-stack right" aria-hidden="true">{STACK_R.map((n) => <PixelIcon key={n} name={n} size={44} />)}</div>
          </div>
        </div>
      </section>

      {/* ── SOURCE? ── */}
      <section className="sec" aria-labelledby="receipts-h">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 24 }}>
            <span className="pill"><PixelIcon name="scroll" size={16} /> source?</span>
          </div>
          <div className="marquee" style={{ marginBottom: 40 }}>
            <span className="ghost" aria-hidden="true">ask reddit first</span>
            <h2 id="receipts-h" className="display" style={{ fontSize: "inherit" }}>buyers ask <span className="px-word">reddit</span> first</h2>
            <span className="ghost" aria-hidden="true">buyers ask</span>
          </div>
          <div className="wall">
            {RECEIPTS.map((r, i) => (
              <Window key={r.num} tint={r.tint as Tint} closeX style={{ ["--tilt" as string]: `${[-0.8, 0.5, -0.3, 0.6, -0.6, 0.3][i]}deg` }}>
                <div className="wall-card">
                  <div className="wall-who">
                    <span><b>{r.who}</b><small>{r.handle}</small></span>
                    <PixelIcon name={r.icon} size={30} />
                  </div>
                  <div className="wall-num">{r.num}</div>
                  <p className="wall-text">{r.text}</p>
                  <div className="wall-src">source: <a href={r.href} target="_blank" rel="noopener noreferrer">{r.src}</a></div>
                </div>
              </Window>
            ))}
            <div className="float float-hide-md" style={{ right: -30, top: -64 }}><span className="sticker-oval">no spam!</span></div>
          </div>
          <div className="wall-bar">
            <PixelIcon name="banana" size={32} motion="wiggle" />
            <span><b>banana for scale:</b> 130.3 million daily uniques on Reddit. Some of them are shopping for what you sell. <a className="link" href={BOOK_URL}>let&apos;s find them</a></span>
          </div>
        </div>
      </section>

      {/* ── ELI5: HOW IT WORKS ── */}
      <section className="sec" id="how" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="pill"><PixelIcon name="crayon" size={16} /> eli5</span>
            <h2 id="how-h" className="display h-sec">your first <span className="px-word">90</span> days</h2>
            <p className="lede">Early signals in weeks. Trust in a month or two. Pipeline in a few months. Reddit compounds, it does not spike.</p>
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

      {/* ── PICK YOUR FLAIR ── */}
      <section className="sec" id="plans" aria-labelledby="plans-h">
        <div className="wrap">
          <div className="sky">
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="pill"><PixelIcon name="gold" size={16} /> pick your flair</span>
              <h2 id="plans-h" className="display h-sec">start where you are</h2>
              <p className="lede">three ways in. billed monthly. scoped on a free call.</p>
            </div>
            <div className="plans">
              {PLANS.map((p) => (
                <Window key={p.name} title={`${p.name}.flair`} tint={p.popular ? "sky" : undefined} className="plan" style={{ position: "relative" }}>
                  {p.popular ? <span className="pill plan-pop">most upvoted</span> : null}
                  <div className="plan-head">
                    <PixelIcon name={p.icon} size={40} motion={p.popular ? "bob" : "none"} />
                    <h3 className="plan-name">{p.name}</h3>
                    <p className="plan-line">{p.line}</p>
                    <span className="tiny">{p.best}</span>
                  </div>
                  <div className="plan-mid">
                    <span className="plan-big">{p.big}</span>
                    <span className="tiny">{p.unit}</span>
                    <a href={BOOK_URL} className={`btn btn-sm ${p.popular ? "btn-primary" : "btn-secondary"}`} style={{ marginTop: 12 }}>{p.cta}</a>
                  </div>
                  <ul className="plan-list">
                    {p.items.map((it) => <li key={it}><Px name="check" size={16} />{it}</li>)}
                  </ul>
                </Window>
              ))}
            </div>
            <p className="plan-foot">subreddit setup is a one-time fee. reddit ads management can be added to any plan; ad budget is separate.</p>
            <Window title="add-ons" tint="dark" className="term terminal-cta">
              <div className="term-body">
                <p><b>{"< add-ons >"}</b>more keywords. more posts and comments. more leads. more subreddits. more ad campaigns. tell us what you need and we will scope it.</p>
                <a href={BOOK_URL} className="btn btn-secondary btn-sm">ask us</a>
              </div>
            </Window>
          </div>
        </div>
      </section>

      <Faq items={HOME_FAQS} pill="ama" title="ask us anything" lede="The questions founders ask before they hire a Reddit marketing agency." />

      {/* ── CTA ── */}
      <section className="sec" aria-labelledby="cta-h">
        <div className="wrap cta-band">
          <span className="pill"><PixelIcon name="upvote" size={16} /> take my upvote</span>
          <h2 id="cta-h" className="display h-sec">be the answer buyers find on <span className="px-word">reddit</span></h2>
          <p className="lede">A free 30-minute call. We pull up the threads in your category and show you who gets recommended today.</p>
          <div className="hero-ctas">
            <a href={BOOK_URL} className="btn btn-primary">book a free call</a>
            <Link href="/reddit-seo" className="btn btn-secondary">start with the audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
