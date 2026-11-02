import { ImageResponse } from "next/og";

export const alt = "SuperMeta: the Reddit marketing agency for the AI search era";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card in the site's desktop style: dotted background, a mac window, the wordmark.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 940,
            background: "#fff",
            borderRadius: 18,
            border: "2px solid rgba(0,0,0,0.18)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, height: 44, padding: "0 18px", background: "#e4e4e4", borderBottom: "2px solid rgba(0,0,0,0.12)" }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#ff5f57" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#febc2e" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#28c840" }} />
            <div style={{ display: "flex", marginLeft: 300, fontSize: 20, color: "#777" }}>supermeta.agency</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "64px 40px 72px" }}>
            <div style={{ fontSize: 132, fontWeight: 600, letterSpacing: -6, color: "#000", lineHeight: 1 }}>supermeta</div>
            <div style={{ fontSize: 38, color: "#111", marginTop: 22, letterSpacing: -1 }}>the reddit marketing agency for the ai search era</div>
            <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
              {["reddit seo & aeo", "posting", "monitoring", "leads", "subreddits", "ads"].map((t) => (
                <div key={t} style={{ display: "flex", padding: "8px 18px", borderRadius: 999, border: "1.5px solid rgba(0,0,0,0.25)", background: "#f4f4f4", fontSize: 22, color: "#333" }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
