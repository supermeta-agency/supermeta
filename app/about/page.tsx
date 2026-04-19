import Nav from "../components/Nav";

const stats = [
  {
    heading: "2 Verticals",
    body: "Development and marketing under one roof, built to work together.",
  },
  {
    heading: "8 Core Services",
    body: "Chosen because we are exceptional at them, not because they fill a brochure.",
  },
  {
    heading: "1 Rule",
    body: "We only take on work we are confident we can deliver exceptionally well.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0a0a0f" }}>
      <Nav active="About" />

      {/* HERO */}
      <section style={{ padding: "160px clamp(24px, 4vw, 56px) 100px", background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#9ca3af" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
              Who We Are
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(44px, 5.4vw, 78px)", lineHeight: 1.04, letterSpacing: "-0.042em", color: "#0a0a0f", margin: "0 0 28px", maxWidth: "860px" }}>
            We Are Not a Big Agency. That Is the Point.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "18px", lineHeight: 1.65, color: "#6b7280", maxWidth: "540px", margin: 0 }}>
            No account managers playing telephone. No junior teams running your campaigns. You work directly with the people doing the work.
          </p>
        </div>
      </section>

      {/* BODY COPY */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, color: "#0a0a0f", margin: "0 0 24px" }}>
              We are a specialist agency built around two things: engineering products that hold up in production and marketing brands that get found, trusted, and chosen.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.8, color: "#6b7280", margin: "0 0 16px" }}>
              We started because we kept seeing the same problem. Founders were hiring three, four, five vendors to do what one aligned team could do better. So we built that team.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.8, color: "#6b7280", margin: 0 }}>
              We work with a small number of clients at a time. Not because we cannot handle more, but because quality demands focus. When you work with us, you are not a line item on a spreadsheet. You are a priority.
            </p>
          </div>

          {/* Stats block */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            {stats.map((s, i) => (
              <div key={s.heading} style={{ padding: "36px 40px", background: i % 2 === 0 ? "#ffffff" : "rgba(0,0,0,0.02)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 2.8vw, 42px)", letterSpacing: "-0.04em", color: "#0a0a0f", margin: "0 0 10px" }}>
                  {s.heading}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.65, color: "#6b7280", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#0a0a0f" }}>
        <div className="max-w-[1200px] mx-auto" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "40px" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 12px" }}>
              Ready to work with a team that is actually accountable?
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6, maxWidth: "480px" }}>
              We keep our client list short on purpose. If you are building something worth caring about, let us talk.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
            <a href="mailto:hello@supermeta.agency" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, color: "#0a0a0f", padding: "14px 28px", background: "#ffffff", borderRadius: "9px", textDecoration: "none", display: "inline-block" }}>
              Work With Us
            </a>
            <a href="/portfolio" style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.6)", padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "9px" }}>
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "64px clamp(24px, 4vw, 56px) 48px", background: "#0a0a0f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(32px, 4vw, 80px)", marginBottom: "64px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "17px", color: "#ffffff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Super Meta</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>Build It. Launch It. Grow It.</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Services</p>
              {[["Development", "/development"], ["Marketing", "/marketing"]].map(([label, href]) => (
                <a key={label} href={href} style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{label}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Company</p>
              {[["Work", "/portfolio"], ["About", "/about"], ["Contact", "#"]].map(([label, href]) => (
                <a key={label} href={href} style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{label}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2025 Super Meta. Built for founders who mean business.</p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms and Conditions"].map(link => (
                <a key={link} href="#" style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
