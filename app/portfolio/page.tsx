import Nav from "../components/Nav";

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0a0a0f" }}>
      <Nav active="Work" />

      {/* HERO */}
      <section style={{ padding: "160px clamp(24px, 4vw, 56px) 100px", background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ marginBottom: "16px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#9ca3af" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
              Work
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(44px, 5.4vw, 78px)", lineHeight: 1.04, letterSpacing: "-0.042em", color: "#0a0a0f", margin: "0 0 28px" }}>
            Built for Teams<br />Like Yours.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "18px", lineHeight: 1.65, color: "#6b7280", maxWidth: "520px", margin: 0 }}>
            We have worked with founders and companies across Web3, SaaS, fintech, and consumer tech. Here is what that looks like in practice.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ padding: "100px clamp(24px, 4vw, 56px)", background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto">
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 600, color: "#0a0a0f", margin: "0 0 56px" }}>
            We measure success by one thing: whether our clients come back. Most of them do.
          </p>

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
              {["Development", "Marketing"].map(link => (
                <a key={link} href={`/${link.toLowerCase()}`} style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: "10px" }}>{link}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Company</p>
              {[["Work", "/portfolio"], ["About", "/about"], ["Contact", "#contact"]].map(([label, href]) => (
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
