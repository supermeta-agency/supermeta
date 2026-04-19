import Nav from "./components/Nav";

const whyUs = [
  {
    title: "Integrated by Design",
    body: "Most agencies operate in silos. We are built for integration. When your development and marketing teams share context, your go-to-market becomes sharper, faster, and more effective from day one.",
  },
  {
    title: "Specialists, Not Generalists",
    body: "We do not offer everything to everyone. We have chosen four development services and four marketing services because those are the areas where we are genuinely world-class. Depth over breadth, every time.",
  },
  {
    title: "Founder-First Thinking",
    body: "We have worked with enough founders to know that speed, clarity, and trust matter more than anything else. Our process is built to give you all three without the overhead of managing a dozen vendors.",
  },
  {
    title: "Built for Web3 and Beyond",
    body: "We have deep roots in blockchain, DeFi, NFT, and Web3, but our work extends across SaaS, tech, and consumer brands. If you are building something at the frontier, we have almost certainly worked on something like it before.",
  },
  {
    title: "Transparent from Day One",
    body: "Fixed pricing. Clear deliverables. No surprise invoices. We tell you exactly what you are getting, what it costs, and what success looks like before the project starts.",
  },
  {
    title: "We Stay in It With You",
    body: "We do not disappear after delivery. Whether it is post-launch support, ongoing SEO, or continued community management, we are built for long-term partnerships, not one-time transactions.",
  },
];

const steps = [
  { n: "1", title: "Discovery Call", body: "We start by understanding your business, your goals, and where you are right now. No forms, no questionnaires. Just a direct conversation with someone senior." },
  { n: "2", title: "Strategy and Scoping", body: "We map out exactly what needs to happen, in what order, and at what cost. You get a proposal that is specific enough to hold us accountable." },
  { n: "3", title: "Execution", body: "Our team gets to work. Development and marketing teams are briefed together so everything is aligned from the start." },
  { n: "4", title: "Reporting and Iteration", body: "You get regular updates, real metrics, and honest assessments. We tell you what is working, what is not, and what we are doing about it." },
  { n: "5", title: "Growth", body: "We do not declare victory after the first sprint. We stay in it, optimize, and scale what is working until your numbers reflect your ambition." },
];

const devServices = [
  { name: "MVP Development", desc: "From concept to working product, fast." },
  { name: "Code Audits", desc: "Find every vulnerability before your users do." },
  { name: "Solana Development", desc: "High-performance programs built for the Solana ecosystem." },
  { name: "Solidity Development", desc: "Secure, gas-efficient smart contracts on EVM chains." },
];

const mktServices = [
  { name: "PR Services", desc: "Get covered in the publications your audience trusts." },
  { name: "Reddit Marketing", desc: "Build authentic presence where real opinions are formed." },
  { name: "SEO / LLMO Services", desc: "Rank on Google. Get cited by AI. Own your category." },
  { name: "Quest Management", desc: "Turn passive followers into active, loyal participants." },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0a0a0f" }}>
      <Nav ctaText="Get a Free Consultation" ctaHref="#contact" />

      {/* HERO */}
      <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column" as const, justifyContent: "center", padding: "160px clamp(24px, 4vw, 56px) 100px", background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)", position: "relative" as const, overflow: "hidden" }}>
        {/* Subtle aurora */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", width: "800px", height: "640px", top: "-200px", right: "-160px", background: "radial-gradient(ellipse at 55% 40%, rgba(139,92,246,0.08) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)", filter: "blur(100px)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", width: "600px", height: "500px", bottom: "-100px", left: "-100px", background: "radial-gradient(ellipse at 45% 55%, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.04) 55%, transparent 72%)", filter: "blur(90px)", borderRadius: "50%" }} />
        </div>

        <div className="max-w-[1200px] mx-auto w-full" style={{ position: "relative", zIndex: 1 }}>
          {/* Pre-heading */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#9ca3af" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
              Strategy. Engineering. Growth.
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(44px, 5.8vw, 88px)", lineHeight: 1.02, letterSpacing: "-0.044em", color: "#0a0a0f", margin: "0 0 28px", maxWidth: "820px" }}>
            We Build Products and Grow Brands.
          </h1>

          <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "clamp(18px, 2.2vw, 28px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "#6b7280", margin: "0 0 28px", maxWidth: "660px" }}>
            For founders and teams who refuse to choose between building something great and making sure the world knows about it.
          </p>

          <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.75, color: "#9ca3af", maxWidth: "560px", margin: "0 0 48px" }}>
            We are a full-service agency operating across two verticals: development and marketing. Whether you need a product built from the ground up or a brand that dominates search, earns press, and owns its category, we are the team that makes it happen.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, alignItems: "center", marginBottom: "28px" }}>
            <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#ffffff", padding: "14px 32px", background: "#0a0a0f", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.02em", boxShadow: "0 1px 2px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)" }}>
              Start a Project
            </a>
            <a href="#work" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 500, color: "#6b7280", padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <p style={{ fontFamily: "var(--font-inter)", fontSize: "12.5px", color: "#9ca3af", margin: 0, letterSpacing: "0.01em" }}>
            Trusted by founders, startups, and growth-stage companies across Web3, SaaS, and tech.
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0a0a0f", margin: 0 }}>
              Most Agencies Do One Thing Adequately. We Do Two Things Exceptionally.
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, color: "#0a0a0f", margin: "0 0 20px" }}>
              The founders who scale fastest are the ones who stopped bouncing between a dev shop, a PR agency, an SEO vendor, and a community manager. They found one team that could do all of it.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: "0 0 16px" }}>
              The typical agency relationship looks like this: you hire someone to build your product, someone else to market it, a third team to handle SEO, and a fourth to manage your community. Nobody talks to each other. Nothing is aligned. And you spend half your time project-managing vendors instead of building your company.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: 0 }}>
              We are built differently. Development and marketing under one roof means your product launch is coordinated with your PR push. Your SEO strategy informs your content from day one. Your community is built while your product is still being engineered. Everything moves together.
            </p>
          </div>
        </div>
      </section>

      {/* VERTICALS SECTION */}
      <section id="services" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              Two Verticals. One Accountable Partner.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: 0, maxWidth: "520px" }}>
              Choose one or both. Either way, you get a team that is fully invested in your outcome.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {/* Development Card */}
            <div style={{ background: "#0a0a0f", borderRadius: "20px", padding: "48px", display: "flex", flexDirection: "column" as const, gap: "24px" }}>
              <div>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Build</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 16px" }}>
                  We Engineer Products That Hold Up in Production.
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#3b82f6", margin: "0 0 16px", lineHeight: 1.5 }}>
                  A product that breaks at scale is not a product. It is a liability.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", margin: "0 0 28px" }}>
                  From MVP to smart contract to full-stack application, we build software that is clean, secure, and ready for real users. We work with founders who need to move fast without cutting corners, and with teams that need specialist blockchain expertise on Solana and EVM chains.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>Services at a glance</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {["MVP Development", "Code Audits", "Solana Development", "Solidity / EVM Development"].map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", color: "rgba(255,255,255,0.65)" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/development" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#3b82f6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
                Explore Development Services
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Marketing Card */}
            <div style={{ background: "#0a0a0f", borderRadius: "20px", padding: "48px", display: "flex", flexDirection: "column" as const, gap: "24px" }}>
              <div>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#8b5cf6", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Grow</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 16px" }}>
                  We Make Sure the Right People Find You, Trust You, and Choose You.
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#8b5cf6", margin: "0 0 16px", lineHeight: 1.5 }}>
                  They will Google you before they trust you. We make sure they find you.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", margin: "0 0 28px" }}>
                  From PR placements that build credibility to Reddit communities that generate organic word-of-mouth, SEO that ranks on Google and gets cited by AI, and quest campaigns that turn passive audiences into active participants, we run the full marketing stack for brands that are serious about growth.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>Services at a glance</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {["PR Services", "Reddit Marketing", "SEO / LLMO Services", "Quest Management"].map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", color: "rgba(255,255,255,0.65)" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/marketing" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#8b5cf6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
                Explore Marketing Services
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#0a0a0f" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 12px" }}>
              Why Ambitious Teams Choose Us
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "rgba(255,255,255,0.45)", margin: "0 0 16px" }}>
              We are not the cheapest option. We are the option that actually moves the needle.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.65)", margin: "0 0 56px", maxWidth: "600px", lineHeight: 1.6 }}>
              Any agency can promise results. We show you exactly how we plan to deliver them before you sign anything.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
            {whyUs.map((r, i) => (
              <div key={r.title} style={{ padding: "40px 36px", background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", borderRadius: "4px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.25)", letterSpacing: "0.14em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>0{i + 1}</p>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "18px", color: "#ffffff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              What We Do
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: 0 }}>
              Eight services across two verticals. Each one chosen because we are exceptionally good at it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {/* Development column */}
            <div style={{ background: "#ffffff", borderRadius: "16px", padding: "40px", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3b82f6" }} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Build</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
                {devServices.map((s, i) => (
                  <div key={s.name} style={{ padding: "20px 0", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.07)" : "none", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "15px", color: "#0a0a0f", margin: "0 0 4px", letterSpacing: "-0.01em" }}>{s.name}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <a href="/development" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#3b82f6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "28px" }}>
                See All Development Services
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Marketing column */}
            <div style={{ background: "#ffffff", borderRadius: "16px", padding: "40px", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8b5cf6" }} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#8b5cf6", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Grow</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
                {mktServices.map((s, i) => (
                  <div key={s.name} style={{ padding: "20px 0", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.07)" : "none", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "15px", color: "#0a0a0f", margin: "0 0 4px", letterSpacing: "-0.01em" }}>{s.name}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <a href="/marketing" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#8b5cf6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "28px" }}>
                See All Marketing Services
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              How We Work
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "#6b7280", margin: "0 0 16px", maxWidth: "520px", lineHeight: 1.6 }}>
              A process built for founders who value their time and need to see results, not just activity.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 600, color: "#0a0a0f", margin: 0, maxWidth: "560px", lineHeight: 1.6 }}>
              We do not do retainers that feel like subscriptions you forgot to cancel. Every engagement has a clear scope, a clear outcome, and a clear owner.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {steps.map((step, i) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "32px", padding: "32px 0", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.08)" : "none", borderBottom: "1px solid rgba(0,0,0,0.08)", alignItems: "start" }}>
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "36px", color: "rgba(0,0,0,0.08)", lineHeight: 1 }}>{step.n}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "18px", color: "#0a0a0f", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="work" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              Built for Teams Like Yours
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: "0 0 16px", maxWidth: "520px" }}>
              We have worked with founders and companies across Web3, SaaS, fintech, and consumer tech. Here is what that looks like in practice.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 600, color: "#0a0a0f", margin: "0 0 56px" }}>
              We measure success by one thing: whether our clients come back. Most of them do.
            </p>
          </div>

          {/* Testimonial placeholders */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "48px" }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ padding: "32px", borderRadius: "16px", border: "1.5px dashed rgba(0,0,0,0.12)", background: "#ffffff", display: "flex", flexDirection: "column" as const, gap: "20px", minHeight: "220px" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5l1.5 3.5H12l-2.8 2 1 3.5L7 9l-3.2 1.5 1-3.5L2 5h3.5L7 1.5z" fill="rgba(0,0,0,0.08)"/>
                    </svg>
                  ))}
                </div>
                <div style={{ flex: 1, background: "rgba(0,0,0,0.04)", borderRadius: "6px" }} />
                <div>
                  <div style={{ width: "80px", height: "10px", background: "rgba(0,0,0,0.08)", borderRadius: "4px", marginBottom: "6px" }} />
                  <div style={{ width: "120px", height: "9px", background: "rgba(0,0,0,0.05)", borderRadius: "4px" }} />
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#9ca3af", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Testimonial {n} placeholder</p>
              </div>
            ))}
          </div>

          {/* Logo strip placeholder */}
          <div style={{ padding: "32px", borderRadius: "16px", border: "1.5px dashed rgba(0,0,0,0.12)", background: "#ffffff" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase" as const, textAlign: "center" as const, margin: "0 0 24px" }}>Client and media logos placeholder</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}>
              {[1,2,3,4,5,6].map(n => (
                <div key={n} style={{ height: "40px", background: "rgba(0,0,0,0.05)", borderRadius: "8px" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "linear-gradient(135deg, #0a0a0f 0%, #12103a 50%, #0a0a0f 100%)" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 3.2vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 20px" }}>
              You Have Found the Team. Now Let Us Get to Work.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 16px", lineHeight: 1.6 }}>
              The best time to build and grow was yesterday. The second best time is right now.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: "0 0 36px" }}>
              Whether you are starting from scratch, picking up a stalled project, or ready to take your marketing to the next level, we are ready to move. Book a free consultation and walk away with a clear picture of what is possible.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              <a href="mailto:hello@supermeta.agency" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", padding: "14px 30px", background: "#ffffff", borderRadius: "9px", textDecoration: "none", display: "inline-block" }}>
                Book a Free Consultation
              </a>
              <a href="#services" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.6)", padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "9px" }}>
                View Our Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
            {[
              "No commitment required for the first call",
              "Senior team members on every project, no juniors left unsupervised",
              "Fixed pricing with milestone-based payment options",
              "You own everything we build or create, always",
            ].map(point => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "64px clamp(24px, 4vw, 56px) 48px", background: "#0a0a0f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "17px", color: "#ffffff", margin: "0 0 6px", letterSpacing: "-0.02em" }}>Super Meta</p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>Build It. Launch It. Grow It.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "clamp(24px, 3vw, 60px)", margin: "48px 0 64px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: "0 0 0", lineHeight: 1.6 }}>A full-service agency built for founders and growth-stage companies who need a team that can build and grow at the same time.</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Development</p>
              {["MVP Development", "Code Audits", "Solana Development", "Solidity Development"].map(link => (
                <a key={link} href="/development" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Marketing</p>
              {["PR Services", "Reddit Marketing", "SEO / LLMO Services", "Quest Management"].map(link => (
                <a key={link} href="/marketing" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Company</p>
              {[["About Us", "/about"], ["How It Works", "#how-it-works"], ["Our Work", "#work"], ["Contact", "#contact"]].map(([link, href]) => (
                <a key={link} href={href} style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Legal</p>
              {["Privacy Policy", "Terms and Conditions"].map(link => (
                <a key={link} href="#" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
              © 2025 Super Meta. Built for founders who mean business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
