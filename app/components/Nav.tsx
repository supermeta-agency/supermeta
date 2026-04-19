"use client";

type NavLink = readonly [string, string];

export default function Nav({
  active,
  links,
  ctaText,
  ctaHref,
}: {
  active?: string;
  links?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
}) {
  const defaultLinks: NavLink[] = [
    ["Development", "/development"],
    ["Marketing", "/marketing"],
    ["Work", "/portfolio"],
    ["About", "/about"],
  ];

  const navLinks = links ?? defaultLinks;
  const cta = ctaText ?? "Book a Call";
  const ctaTarget = ctaHref ?? "#contact";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: "18px clamp(24px, 4vw, 56px)",
        background: "rgba(245,246,248,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <a
        href="/"
        style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "17px", color: "#0a0a0f", letterSpacing: "-0.02em", textDecoration: "none" }}
      >
        Super Meta
      </a>

      <div className="hidden md:flex items-center gap-8" style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", fontWeight: 500 }}>
        {navLinks.map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              color: active === label ? "#0a0a0f" : "#6b7280",
              transition: "color 150ms",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0a0a0f")}
            onMouseLeave={e => (e.currentTarget.style.color = active === label ? "#0a0a0f" : "#6b7280")}
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href={ctaTarget}
        style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#0a0a0f", padding: "9px 20px", border: "1px solid rgba(0,0,0,0.14)", borderRadius: "8px", background: "rgba(255,255,255,0.70)", backdropFilter: "blur(8px)", letterSpacing: "0.005em", transition: "all 150ms", textDecoration: "none" }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#ffffff"; el.style.borderColor = "rgba(0,0,0,0.22)"; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.70)"; el.style.borderColor = "rgba(0,0,0,0.14)"; }}
      >
        {cta}
      </a>
    </nav>
  );
}
