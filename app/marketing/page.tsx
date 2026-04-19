import Nav from "../components/Nav";

const services = [
  {
    number: "01",
    title: "PR Services",
    bold: "Your competitor just got covered in three major publications. What does your press page look like?",
    description: "We get your brand covered in the publications your audience actually reads. Press releases, editorial placements, journalist outreach, thought leadership. We run the whole process, from pitch to placement.",
    includes: [
      "Press release writing and distribution",
      "Editorial and organic media placements",
      "Thought leadership and executive profiling",
      "Niche and mainstream media outreach",
    ],
    color: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.08)",
    iconBorder: "rgba(139,92,246,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 6h12M4 10h8M4 14h5" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="3" stroke="#8b5cf6" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "SEO + LLMO Services",
    bold: "If you are not showing up on Google and in AI answers, someone else is filling that space with their name.",
    description: "We optimize your brand for both traditional search and AI-powered discovery. From Google rankings to ChatGPT citations, we make sure you are the answer when your buyers come looking.",
    includes: [
      "Technical SEO audits and implementation",
      "Content strategy and SEO blog writing",
      "Link building and domain authority growth",
      "LLMO: optimizing your brand for AI citation and visibility",
      "Keyword research and competitive analysis",
    ],
    color: "#3b82f6",
    iconBg: "rgba(59,130,246,0.08)",
    iconBorder: "rgba(59,130,246,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="5.5" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M13.5 13.5L17 17" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 9h4M9 7v4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Reddit Marketing",
    bold: "Reddit does not trust brands. It trusts people. We help you show up as one.",
    description: "Reddit is where real opinions are formed and buying decisions start. We build authentic presence in the communities your audience lives in, without triggering the spam radar.",
    includes: [
      "Subreddit strategy and community identification",
      "Organic post and comment campaigns",
      "AMA facilitation",
      "Reputation monitoring and response management",
    ],
    color: "#f97316",
    iconBg: "rgba(249,115,22,0.08)",
    iconBorder: "rgba(249,115,22,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#f97316" strokeWidth="1.5"/>
        <circle cx="7" cy="9" r="1.5" fill="#f97316"/>
        <circle cx="13" cy="9" r="1.5" fill="#f97316"/>
        <path d="M7 13c.8 1 5.2 1 6 0" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Quest Management",
    bold: "A passive audience does not convert. Quests turn followers into participants and participants into loyal users.",
    description: "We design and run structured quest campaigns that activate your community, onboard new users, and give them a reason to stick around. Built for brands that want real engagement, not just eyeballs.",
    includes: [
      "Quest strategy and reward design",
      "Platform setup and campaign management",
      "Community onboarding and activation",
      "Performance tracking and reporting",
    ],
    color: "#10b981",
    iconBg: "rgba(16,185,129,0.08)",
    iconBorder: "rgba(16,185,129,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l2 5h5l-4 3 1.5 5L10 13l-4.5 3L7 11 3 8h5L10 3z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "One Team Across All Channels",
    body: "You should not need five different vendors to run a coherent marketing strategy. We connect PR, Reddit, SEO, and community into a single coordinated plan so nothing falls through the cracks.",
  },
  {
    title: "Real Numbers, Not Slide Decks",
    body: "Coverage earned, rankings moved, communities built. Every month you get reporting that tells you what actually happened, not what we hope you think happened.",
  },
  {
    title: "Tailored to Where You Are",
    body: "Day-one launch or post-funding scale, our approach changes with you. You are not getting handed a template built for someone else's company.",
  },
  {
    title: "People Who Have Done This Before",
    body: "Our team has worked with brands through launches, pivots, and growth sprints across B2B, SaaS, and consumer. We know what builds momentum and what wastes runway.",
  },
];

const steps = [
  { n: "1", title: "Initial Call", body: "We start with a free consultation to understand your goals, current marketing efforts, and where you want to grow." },
  { n: "2", title: "Strategy and Proposal", body: "We build a tailored proposal covering recommended services, projected outcomes, timeline, and pricing. No generic packages." },
  { n: "3", title: "Kickoff and Planning", body: "Once aligned, we run a detailed planning session to map out the strategy, content calendar, and campaign mechanics." },
  { n: "4", title: "Execution", body: "Our team gets to work. You receive regular updates, progress reports, and direct access to your account lead." },
  { n: "5", title: "Review and Optimize", body: "We review results, share learnings, and iterate on the strategy to keep improving performance over time." },
];

export default function Marketing() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0a0a0f" }}>
      <Nav active="Marketing" />

      {/* HERO */}
      <section style={{ padding: "160px clamp(24px, 4vw, 56px) 120px", background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px", padding: "6px 14px", border: "1px solid rgba(0,0,0,0.10)", borderRadius: "100px", background: "#f8f9fb" }}>
            <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500, color: "#374151", letterSpacing: "0.04em" }}>
              0 to 1 Marketing Agency
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(36px, 4.2vw, 72px)", lineHeight: 1.06, letterSpacing: "-0.042em", color: "#0a0a0f", margin: "0 0 20px", maxWidth: "900px" }}>
            They Will Google You Before They Trust You.
          </h1>
          <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "clamp(20px, 2.4vw, 34px)", color: "#9ca3af", margin: "0 0 28px", letterSpacing: "-0.02em" }}>
            We Make Sure They Find You.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "17px", lineHeight: 1.75, color: "#6b7280", maxWidth: "500px", margin: "0 0 52px" }}>
            Press that builds credibility. Search rankings that pull in buyers. Community presence that converts. We focus on the channels where modern brands actually grow.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#ffffff", padding: "14px 30px", background: "#0a0a0f", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.02em", boxShadow: "0 1px 2px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)" }}>
              Get a Free Proposal
            </a>
            <a href="#services" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 500, color: "#6b7280", padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#9ca3af", margin: "20px 0 0", lineHeight: 1.5 }}>
            Agency-quality work. Priced for brands that are building, not burning.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 28px" }}>
              Marketing Built for How People Find Brands Today
            </h2>
            <a href="#how-it-works" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "8px", borderBottom: "1.5px solid #0a0a0f", paddingBottom: "2px" }}>
              Learn How We Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, color: "#0a0a0f", margin: "0 0 20px" }}>
              Visibility is not a vanity metric. It is your first impression, your credibility, and the reason someone picks you over the alternative.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: "0 0 16px" }}>
              Super Meta is a marketing agency built around the channels that actually build trust: earned press, organic search, Reddit communities, and AI-powered discovery. Not paid ads. Not follower counts.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: 0 }}>
              Our team brings deep experience across B2B, SaaS, tech, and consumer brands. Every strategy is built around your goals, your audience, and your stage of growth. Pricing is scoped to where you are, with no retainer traps.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              What We Offer
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: 0 }}>
              Four services. One strategy. Built around your growth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {services.map((s) => (
              <div key={s.title} style={{ padding: "36px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.07)", background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" as const, gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: s.iconBg, border: `1px solid ${s.iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.12em" }}>{s.number}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "20px", color: "#0a0a0f", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", fontWeight: 600, color: s.color, margin: "0 0 14px", lineHeight: 1.5 }}>{s.bold}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 20px" }}>{s.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                    {s.includes.map((item) => (
                      <li key={item} style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6b7280", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                          <path d="M2.5 7l3 3 6-6" stroke={s.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: s.color, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK PACKAGES */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px", padding: "5px 12px", border: "1px solid rgba(0,0,0,0.10)", borderRadius: "100px", background: "#ffffff" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#6b7280", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Most Popular</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              Start here. Everyone does.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: 0, maxWidth: "520px", lineHeight: 1.65 }}>
              These are the three things brands hire us for first. Focused scope, clear deliverables, and no retainer required.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {/* PR Package */}
            <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column" as const }}>
              <div style={{ padding: "32px 32px 0" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 5h12M3 9h8M3 13h5" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="15" cy="13" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#8b5cf6", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 8px" }}>PR Package</p>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "22px", color: "#0a0a0f", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Press Coverage</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 24px" }}>
                  Get your brand featured in publications your audience reads. One campaign, real placements, no retainer.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[
                    "Press release written and distributed",
                    "Outreach to 50+ targeted journalists",
                    "3–5 guaranteed editorial placements",
                    "Coverage report delivered",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "3px" }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "auto", padding: "24px 32px", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#9ca3af" }}>One-time or monthly</span>
                <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#8b5cf6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Link Building Package */}
            <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column" as const }}>
              <div style={{ padding: "32px 32px 0" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7.5 10.5a3.5 3.5 0 005 0l2-2a3.5 3.5 0 00-5-5l-1 1" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10.5 7.5a3.5 3.5 0 00-5 0l-2 2a3.5 3.5 0 005 5l1-1" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#3b82f6", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 8px" }}>Link Building Package</p>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "22px", color: "#0a0a0f", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Link Building</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 24px" }}>
                  High-authority backlinks that move your domain ranking without shortcuts that get you penalized.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[
                    "Domain authority audit and gap analysis",
                    "10–20 high-DA backlinks per month",
                    "Niche-relevant placements only",
                    "Monthly link report with metrics",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "3px" }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "auto", padding: "24px 32px", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#9ca3af" }}>One-time or monthly</span>
                <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#3b82f6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Wikipedia Package */}
            <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column" as const }}>
              <div style={{ padding: "32px 32px 0" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M6 9h6M9 6v6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#10b981", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 8px" }}>Wikipedia Package</p>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "22px", color: "#0a0a0f", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Branded Wikipedia Page</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 24px" }}>
                  A branded Wikipedia page is one of the strongest trust signals you can have. We research, write, and get it published under your name.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[
                    "Notability assessment before we begin",
                    "Fully researched and cited article",
                    "Written to Wikipedia editorial standards",
                    "Submission and approval managed for you",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "3px" }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "auto", padding: "24px 32px", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#9ca3af" }}>One-time delivery</span>
                <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#10b981", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#0a0a0f" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 16px" }}>
              Why Brands Choose Us
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              Most agencies send reports. We move metrics.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {reasons.map((r, i) => (
              <div key={r.title} style={{ padding: "40px 36px", background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", borderRadius: "4px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.14em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>0{i + 1}</p>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "18px", color: "#ffffff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 16px" }}>
              How We Work Together
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 600, color: "#6b7280", margin: 0, maxWidth: "560px", lineHeight: 1.6 }}>
              No onboarding maze. No six-week wait. We move fast because your window of opportunity does not stay open forever.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
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

      {/* CTA */}
      <section id="contact" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "linear-gradient(135deg, #0a0a0f 0%, #1a1040 50%, #0a0a0f 100%)" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 52px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 20px" }}>
              Ready to Grow?
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 16px", lineHeight: 1.6 }}>
              The brands winning right now are not the loudest ones. They are the most findable ones. Let us make that you.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 36px" }}>
              Book a free call and we will walk you through exactly what is possible for your brand across PR, Reddit, SEO, and community.
            </p>
            <a href="mailto:hello@supermeta.agency" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", padding: "14px 30px", background: "#ffffff", borderRadius: "9px", textDecoration: "none", display: "inline-block" }}>
              Book a Free Strategy Call
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
            {[
              "Data-backed approach to every channel",
              "Transparent reporting at every stage",
              "Custom strategy, not cookie-cutter packages",
              "Transparent pricing. No hidden fees, no retainer traps.",
              "A team that moves fast and communicates clearly",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "64px clamp(24px, 4vw, 56px) 48px", background: "#0a0a0f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(32px, 4vw, 80px)", marginBottom: "64px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "17px", color: "#ffffff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Super Meta</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>Visibility. Authority. Growth.</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: "12px 0 0" }}>Built for brands that are serious about being found.</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Services</p>
              {["PR Services", "Reddit Marketing", "SEO / LLMO Services", "Quest Management"].map((link) => (
                <a key={link} href="#services" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Company</p>
              {["About Us", "How It Works", "Contact"].map((link) => (
                <a key={link} href="#" style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2026 Super Meta. All rights reserved.</p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms and Conditions"].map((link) => (
                <a key={link} href="#" style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
