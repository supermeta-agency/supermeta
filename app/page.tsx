"use client";

import { useState, useEffect } from "react";

const rotatingWords = ["Design", "Development", "Distribution", "Growth"];

const services = [
  {
    icon: "⚡",
    title: "Web & App Development",
    description:
      "Production-grade apps built with Next.js, Flutter, and AWS. From MVPs to enterprise scale — fast.",
    tags: ["Next.js", "Flutter", "AWS"],
  },
  {
    icon: "✦",
    title: "UI/UX Design",
    description:
      "User-centered interfaces that convert. Figma to pixel-perfect in record time.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: "◈",
    title: "Brand Identity",
    description:
      "Logos, palettes, and guidelines that make your brand instantly recognizable and impossible to ignore.",
    tags: ["Logo", "Brand Guidelines", "Assets"],
  },
  {
    icon: "◎",
    title: "SEO & Content",
    description:
      "Organic growth through strategic content and technical SEO that compounds over time.",
    tags: ["On-Page SEO", "Content Strategy", "Analytics"],
  },
  {
    icon: "◐",
    title: "Performance Marketing",
    description:
      "Paid campaigns across Meta, Google, and LinkedIn that deliver measurable, repeatable ROI.",
    tags: ["Meta Ads", "Google Ads", "CRO"],
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹29,999",
    period: "/month",
    description: "For early-stage startups getting their footing.",
    features: [
      "1 active project at a time",
      "UI/UX Design support",
      "Basic brand support",
      "2-day turnaround",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹59,999",
    period: "/month",
    description: "For teams ready to accelerate their product.",
    features: [
      "2 active projects simultaneously",
      "Design + Development",
      "SEO & Content (4 pieces/month)",
      "Priority 1-day turnaround",
      "Dedicated Slack channel",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Scale",
    price: "₹99,999",
    period: "/month",
    description: "Full agency power for ambitious businesses.",
    features: [
      "Unlimited active projects",
      "Design + Dev + Marketing",
      "Dedicated strategy leader",
      "Same-day turnarounds",
      "Weekly strategy calls",
    ],
    cta: "Talk to Us",
    popular: false,
  },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setIsTransitioning(false);
      }, 250);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#1a1b25" }}>

      {/* ── NAVBAR ── */}
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
        <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "17px", color: "#0a0a0f", letterSpacing: "-0.02em" }}>
          Super Meta
        </span>

        <div className="hidden md:flex items-center gap-9" style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", fontWeight: 500, color: "#6b7280" }}>
          {["Services", "Work", "Pricing", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ transition: "color 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0a0a0f")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
            >{item}</a>
          ))}
        </div>

        <a
          href="#contact"
          style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600, color: "#0a0a0f", padding: "9px 20px", border: "1px solid rgba(0,0,0,0.14)", borderRadius: "8px", background: "rgba(255,255,255,0.70)", backdropFilter: "blur(8px)", letterSpacing: "0.005em", transition: "all 150ms" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.22)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.70)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.14)"; }}
        >
          Book a Call
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: "100svh", background: "#ffffff" }}
      >
        {/* ── Aurora atmosphere — colorful soft blobs ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          {/* Rose/pink — top right */}
          <div className="blob-b absolute" style={{ width: "860px", height: "700px", top: "-260px", right: "-220px", background: "radial-gradient(ellipse at 55% 40%, rgba(251,113,133,0.22) 0%, rgba(253,186,116,0.10) 45%, transparent 68%)", filter: "blur(120px)", borderRadius: "50%" }} />
          {/* Sky blue — bottom left */}
          <div className="blob-a absolute" style={{ width: "700px", height: "580px", bottom: "-160px", left: "-140px", background: "radial-gradient(ellipse at 45% 55%, rgba(56,189,248,0.20) 0%, rgba(99,102,241,0.08) 55%, transparent 70%)", filter: "blur(110px)", borderRadius: "50%" }} />
          {/* Soft violet — center */}
          <div className="blob-c absolute" style={{ width: "600px", height: "480px", top: "20%", left: "35%", background: "radial-gradient(ellipse at 50% 50%, rgba(196,181,253,0.18) 0%, transparent 65%)", filter: "blur(100px)", borderRadius: "50%" }} />
          {/* Mint green — bottom right corner */}
          <div style={{ position: "absolute", width: "500px", height: "420px", bottom: "5%", right: "5%", background: "radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.14) 0%, transparent 65%)", filter: "blur(90px)", borderRadius: "50%" }} />
        </div>

        {/* ── Sweeping aurora shimmer — waves left ↔ right ── */}
        <div
          className="aurora-shimmer absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            background: "linear-gradient(115deg, transparent 0%, rgba(244,199,255,0.16) 25%, rgba(186,230,253,0.18) 50%, rgba(167,243,208,0.14) 78%, transparent 100%)",
          }}
        />

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 0.028, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "320px 320px" }} />

        {/* ── Main grid — flex-1 fills the space above the strip ── */}
        <div className="relative flex-1 flex items-center" style={{ zIndex: 2 }}>
          <div
            className="w-full max-w-[1200px] mx-auto"
            style={{ padding: "clamp(100px,14vh,150px) clamp(24px,4vw,56px) clamp(60px,8vh,100px)" }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] items-end"
              style={{ gap: "clamp(48px,6vw,110px)" }}
            >

              {/* ── LEFT ── */}
              <div>
                {/* Eyebrow badge */}
                <div
                  className="animate-fade-up"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}
                >
                  <span style={{ display: "block", width: "28px", height: "1px", background: "#9ca3af" }} />
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    Startup Agency
                  </span>
                </div>

                {/* Headline — Syne, editorial weight, no color accent */}
                <h1
                  className="animate-fade-up-delay-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(44px, 5.4vw, 78px)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.042em",
                    color: "#0a0a0f",
                    margin: "0 0 30px",
                  }}
                >
                  Everything your<br />
                  business needs.<br />
                  Under one roof.
                </h1>

                {/* Description */}
                <p
                  className="animate-fade-up-delay-2"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.65, color: "#6b7280", maxWidth: "390px", margin: 0 }}
                >
                  Design, development, and distribution<br />
                  for startups moving fast.
                </p>
              </div>

              {/* ── RIGHT ── */}
              <div className="animate-fade-up-delay-2 hidden lg:flex flex-col justify-end" style={{ paddingBottom: "4px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.72, color: "#6b7280", margin: "0 0 38px", maxWidth: "300px" }}>
                  From idea to launch, we handle design, development, and distribution so you can focus on growth.
                </p>

                {/* Premium CTA — dark solid, minimal */}
                <div>
                  <a
                    href="#contact"
                    className="animate-fade-up-delay-3 inline-flex items-center gap-3 text-sm font-semibold text-white rounded-[9px] transition-all duration-200 active:scale-[0.98]"
                    style={{ fontFamily: "var(--font-inter)", padding: "13px 26px", background: "#0a0a0f", boxShadow: "0 1px 2px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.08)", letterSpacing: "0.01em" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#1c1c28"; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#0a0a0f"; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.08)"; }}
                  >
                    Book a Call
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.7 }}>
                      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Service strip — frosted glass anchors the bottom ── */}
        <div
          className="relative w-full"
          style={{ zIndex: 2, background: "rgba(255,255,255,0.72)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", borderTop: "1px solid rgba(139,92,246,0.08)" }}
        >
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: "0 clamp(24px,4vw,56px)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            {[
              {
                label: "Design",
                sub: "Visual systems & brand identity",
                color: "#8b5cf6",
                iconBg: "rgba(139,92,246,0.10)",
                iconBorder: "rgba(139,92,246,0.18)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="3" stroke="#8b5cf6" strokeWidth="1.4"/>
                    <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.1 4.1l1.4 1.4M12.5 12.5l1.4 1.4M4.1 13.9l1.4-1.4M12.5 5.5l1.4-1.4" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: "Development",
                sub: "Full-stack engineering at speed",
                color: "#3b82f6",
                iconBg: "rgba(59,130,246,0.10)",
                iconBorder: "rgba(59,130,246,0.18)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5.5 5L2 9l3.5 4M12.5 5L16 9l-3.5 4M10.5 3l-3 12" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: "Distribution",
                sub: "Growth, SEO & performance",
                color: "#10b981",
                iconBg: "rgba(16,185,129,0.10)",
                iconBorder: "rgba(16,185,129,0.18)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 13l4.5-4.5 3 3L16 4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 4h5v5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((p, i) => (
              <div
                key={p.label}
                style={{
                  padding: "26px 0",
                  paddingLeft: i > 0 ? "clamp(20px,3vw,44px)" : "0",
                  paddingRight: i < 2 ? "clamp(20px,3vw,44px)" : "0",
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: p.iconBg, border: `1px solid ${p.iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {p.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "14px", color: p.color, margin: "0 0 3px", letterSpacing: "-0.02em" }}>{p.label}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#9ca3af", margin: 0, lineHeight: 1.4 }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── WHAT WE DO ── */}
      <section id="services" className="py-28 px-6" style={{ background: "#f5f2ff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "#cee5ff", color: "#004f7d" }}
            >
              What We Do
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{
                fontFamily: "var(--font-jakarta)",
                color: "#1a1b25",
                letterSpacing: "-0.02em",
              }}
            >
              One team. Every capability.
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#454557" }}>
              No more briefing five different agencies. We cover the full stack of
              your digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-[14px] hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(26, 27, 37, 0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center text-2xl mb-6"
                  style={{ background: "#f5f2ff" }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-jakarta)", color: "#1a1b25" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#454557" }}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ background: "#cee5ff", color: "#004f7d" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Blue accent card */}
            <div
              className="p-8 rounded-[14px] flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #0001ab, #0000EE)" }}
            >
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Don&apos;t see what you need?
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                We&apos;re flexible. Tell us what you&apos;re building and we&apos;ll make it happen.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-6 py-3 bg-white rounded-[8px] text-sm font-semibold hover:opacity-90 transition-all self-start"
                style={{ color: "#0000EE" }}
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMPLE TRANSPARENT PRICING ── */}
      <section id="pricing" className="py-28 px-6" style={{ background: "#fbf8ff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "var(--font-jakarta)",
                color: "#1a1b25",
                letterSpacing: "-0.02em",
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#454557" }}>
              Predictable monthly subscriptions. No hidden fees, no surprise invoices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="p-8 rounded-[14px] relative transition-all duration-300"
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, #0001ab, #0000EE)"
                    : "#ffffff",
                  boxShadow: plan.popular
                    ? "0 24px 60px rgba(0, 0, 238, 0.28)"
                    : "0 4px 20px rgba(26, 27, 37, 0.05)",
                  transform: plan.popular ? "scale(1.04)" : "scale(1)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                    style={{ background: "#cee5ff", color: "#0001ab" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      color: plan.popular ? "#ffffff" : "#1a1b25",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm" style={{ color: plan.popular ? "rgba(255,255,255,0.65)" : "#454557" }}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className="text-4xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      color: plan.popular ? "#ffffff" : "#1a1b25",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: plan.popular ? "rgba(255,255,255,0.55)" : "#454557" }}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 shrink-0" style={{ color: plan.popular ? "#bfc2ff" : "#0000EE" }}>
                        ✓
                      </span>
                      <span style={{ color: plan.popular ? "rgba(255,255,255,0.82)" : "#454557" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block w-full text-center py-3.5 rounded-[8px] text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                  style={
                    plan.popular
                      ? { background: "#ffffff", color: "#0000EE" }
                      : { background: "linear-gradient(135deg, #0001ab, #0000EE)", color: "#ffffff" }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section
        id="contact"
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #0001ab, #0000EE)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{
              fontFamily: "var(--font-jakarta)",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to build the future of your business?
          </h2>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Book a free 30-minute strategy call. No commitments — just clarity on what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@supermeta.agency"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#0000EE] bg-white rounded-[8px] hover:opacity-90 active:scale-95 transition-all uppercase tracking-wide"
            >
              Book a Free Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-[8px] hover:bg-white/10 active:scale-95 transition-all uppercase tracking-wide"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6" style={{ background: "#1a1b25" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span
              className="text-lg font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)", color: "#ffffff" }}
            >
              Super<span style={{ color: "#bfc2ff" }}>Meta</span>
            </span>
          </div>
          <div className="flex items-center gap-8 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Super Meta Agency
          </p>
        </div>
      </footer>
    </div>
  );
}
