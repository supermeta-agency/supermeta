import Nav from "../components/Nav";

const services = [
  {
    number: "01",
    title: "MVP Development",
    bold: "Stop waiting for the perfect product. Ship something real, learn fast, and iterate.",
    description: "We help founders and early-stage teams go from idea to working product. Whether you have a detailed spec or just a concept, we scope, build, and deliver functional MVPs that are ready for real users and investor demos.",
    includes: [
      "Product scoping and technical requirements",
      "UI/UX wireframing and prototyping",
      "Full-stack MVP development from scratch",
      "Deployment, testing, and post-launch support",
      "Iteration support based on user feedback",
    ],
    cta: "Start Building",
    color: "#3b82f6",
    iconBg: "rgba(59,130,246,0.08)",
    iconBorder: "rgba(59,130,246,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2.5L13 9h5.5l-4.5 3.5 1.5 6L10 15l-5.5 3.5 1.5-6L1.5 9H7L10 2.5z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Code Audits",
    bold: "If you would not launch without a legal review, do not launch without a code review.",
    description: "Before you go live, raise a round, or onboard your first enterprise client, your code needs to hold up under scrutiny. We audit existing codebases to identify vulnerabilities, inefficiencies, and technical debt, so you ship with confidence and nothing breaks in production.",
    includes: [
      "Full codebase review and documentation",
      "Security vulnerability assessment",
      "Performance and scalability analysis",
      "Smart contract audit for blockchain projects",
      "Detailed audit report with prioritized recommendations",
    ],
    cta: "Request an Audit",
    color: "#f59e0b",
    iconBg: "rgba(245,158,11,0.08)",
    iconBorder: "rgba(245,158,11,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l6 4v4c0 4-2.5 7-6 8-3.5-1-6-4-6-8V6l6-4z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Solana Development",
    bold: "Speed and low fees are only an advantage if your code is built to leverage them.",
    description: "We build on Solana for teams that need performance at scale. From custom programs and token launches to DeFi protocols and NFT infrastructure, our Solana developers write clean, secure, and efficient code native to the ecosystem.",
    includes: [
      "Solana program development in Rust and Anchor",
      "SPL token creation and management",
      "NFT minting infrastructure and marketplaces",
      "DeFi protocol development",
      "Wallet integration and on-chain data indexing",
    ],
    cta: "Build on Solana",
    color: "#a855f7",
    iconBg: "rgba(168,85,247,0.08)",
    iconBorder: "rgba(168,85,247,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14h12l-3-3H7L4 14z" stroke="#a855f7" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(168,85,247,0.12)"/>
        <path d="M4 10.5h12l-3-3H7L4 10.5z" stroke="#a855f7" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(168,85,247,0.08)"/>
        <path d="M4 7h12L13 4H7L4 7z" stroke="#a855f7" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(168,85,247,0.05)"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Solidity Development",
    bold: "Smart contracts are only smart if they are written right. One bug can cost everything.",
    description: "We design and develop smart contracts on EVM-compatible chains using Solidity. From token standards to complex DeFi logic, we write contracts that are secure, gas-efficient, and built to the exact specification your project demands.",
    includes: [
      "ERC-20, ERC-721, and ERC-1155 token contracts",
      "DeFi protocol and liquidity pool contracts",
      "DAO governance and voting contracts",
      "Smart contract deployment and verification",
      "Post-deployment monitoring and upgrade support",
    ],
    cta: "Build on EVM",
    color: "#6366f1",
    iconBg: "rgba(99,102,241,0.08)",
    iconBorder: "rgba(99,102,241,0.16)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3L5.5 7.5 10 10.5l4.5-3L10 3z" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5.5 7.5L10 10.5v6.5l-4.5-3V7.5z" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14.5 7.5L10 10.5v6.5l4.5-3V7.5z" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "We Think Before We Code",
    body: "Every project starts with a scoping session, not a sprint. We take the time to understand your product, your users, and your constraints before we write a single line.",
  },
  {
    title: "Blockchain Native",
    body: "We are not a generalist agency that picked up Solidity last year. Our team has hands-on experience building on Solana and EVM chains across DeFi, NFTs, DAOs, and token infrastructure.",
  },
  {
    title: "Built for Founders, Not Enterprises",
    body: "We work with lean teams and tight timelines. Our process is built to move fast without creating a mess you have to clean up later.",
  },
  {
    title: "We Stay After Launch",
    body: "Shipping is not the finish line. We offer post-launch support, monitoring, and iteration so your product keeps performing after it goes live.",
  },
];

const steps = [
  { n: "1", title: "Technical Consultation", body: "We start with a free call to understand what you are building, where you are in the process, and what kind of support you need." },
  { n: "2", title: "Scoping and Proposal", body: "We put together a detailed scope of work with timelines, deliverables, stack recommendations, and a fixed or milestone-based price. No ambiguity." },
  { n: "3", title: "Build Phase", body: "Development begins with regular check-ins, code reviews, and progress updates. You always know where things stand." },
  { n: "4", title: "Testing and QA", body: "Before anything ships, it gets tested. We run thorough QA across functionality, security, and performance." },
  { n: "5", title: "Deployment and Handover", body: "We deploy, document, and hand over everything cleanly. You own your code, your infrastructure, and your keys." },
];

export default function Development() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0a0a0f" }}>
      <Nav active="Development" />

      {/* HERO */}
      <section style={{ padding: "160px clamp(24px, 4vw, 56px) 120px", background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px", padding: "6px 14px", border: "1px solid rgba(0,0,0,0.10)", borderRadius: "100px", background: "#f8f9fb" }}>
            <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500, color: "#374151", letterSpacing: "0.04em" }}>
              Full-Stack Development Agency
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(36px, 4.2vw, 72px)", lineHeight: 1.06, letterSpacing: "-0.042em", color: "#0a0a0f", margin: "0 0 20px", maxWidth: "900px" }}>
            We Build Products That Are Ready for the Real World.
          </h1>
          <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "clamp(20px, 2.4vw, 34px)", color: "#9ca3af", margin: "0 0 28px", letterSpacing: "-0.02em" }}>
            From zero to deployed. Clean code, tight timelines, and no shortcuts.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "17px", lineHeight: 1.75, color: "#6b7280", maxWidth: "560px", margin: "0 0 52px" }}>
            Whether you are a founder with an idea and no technical co-founder, or a team that needs expert hands on a complex blockchain project, we bring the engineering depth to get it done right. MVPs, smart contracts, audits, and everything in between.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#ffffff", padding: "14px 30px", background: "#0a0a0f", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.02em", boxShadow: "0 1px 2px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)" }}>
              Start a Project
            </a>
            <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 500, color: "#6b7280", padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Book a Free Technical Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 28px" }}>
              Technical Execution for Founders Who Cannot Afford to Get It Wrong
            </h2>
            <a href="#how-it-works" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "8px", borderBottom: "1.5px solid #0a0a0f", paddingBottom: "2px" }}>
              See How We Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, color: "#0a0a0f", margin: "0 0 20px" }}>
              The best idea in the room means nothing if the code does not hold up. We make sure it does.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: "0 0 16px" }}>
              We are a development team that works with startups, Web3 projects, and growth-stage companies that need reliable, production-ready engineering. We do not just write code. We help you make the right technical decisions from day one, so you are not rebuilding everything six months later.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.75, color: "#6b7280", margin: 0 }}>
              From scoping your first MVP to auditing a smart contract before a major launch, we operate as a true technical partner, not just a hired resource.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#0a0a0f", margin: "0 0 12px" }}>
              What We Build
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#6b7280", margin: 0 }}>
              Specialized development services for teams that are building something worth launching.
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
                  {s.cta}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px", padding: "24px 32px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.07)", background: "#f8f9fb", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" as const }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase" as const, flexShrink: 0 }}>Also available</span>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              {[
                { label: "Website Development", icon: "M3 4h14v10H3V4zM7 14v2M11 14v2M5 16h8" },
                { label: "Payments Integration", icon: "M2 6h16v10H2V6zM2 10h16M6 13h2M10 13h4" },
              ].map((item) => (
                <div key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "8px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d={item.icon} stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 500, color: "#374151" }}>{item.label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#0a0a0f", textDecoration: "none", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Ask us about these
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#0a0a0f" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 48px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 16px" }}>
              Why Teams Build With Us
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: "600px", lineHeight: 1.6 }}>
              We have seen what happens when technical decisions get made in a hurry. We are here to make sure that does not happen to you.
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
              No endless discovery phases. No surprise scope creep. Just a clear process from brief to build.
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
      <section id="contact" style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "linear-gradient(135deg, #0a0a0f 0%, #0f1a40 50%, #0a0a0f 100%)" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(30px, 3.2vw, 52px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 20px" }}>
              Ready to Build?
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 16px", lineHeight: 1.6 }}>
              The longer you wait to get the technical foundation right, the more expensive it gets to fix it later. Let us start now.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 36px" }}>
              Book a free technical consultation and we will map out exactly what your project needs, what it will take to build it, and how long it will realistically take.
            </p>
            <a href="mailto:hello@supermeta.agency" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", padding: "14px 30px", background: "#ffffff", borderRadius: "9px", textDecoration: "none", display: "inline-block" }}>
              Book a Free Technical Call
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
            {[
              "Fixed pricing and clear deliverables",
              "Blockchain-native development team",
              "Post-launch support included",
              "No code lock-in, you own everything",
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
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>Engineering. Depth. Delivery.</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: "12px 0 0" }}>Built for founders who need production-ready code, not promises.</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Services</p>
              {["MVP Development", "Code Audits", "Solana Development", "Solidity Development"].map((link) => (
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
