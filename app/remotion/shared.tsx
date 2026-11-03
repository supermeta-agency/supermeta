import type { ReactNode } from "react";
import { AbsoluteFill } from "remotion";

// Shared look for the Remotion compositions. Fonts come from the page's CSS variables.
export const C = {
  paper: "#fffdf8",
  ink: "#1b1b1f",
  muted: "#77736b",
  orange: "#ff4500",
  blue: "#2f6fe0",
  yellow: "#ffd84a",
  green: "#1d9a6a",
  highlight: "#fff1a8",
};

export const FONT = {
  body: "var(--font-satoshi), system-ui, sans-serif",
  display: "var(--font-cabinet), system-ui, sans-serif",
  pixel: "var(--font-array), ui-monospace, monospace",
};

export function Pane({ children }: { children: ReactNode }) {
  return <AbsoluteFill style={{ padding: "70px 40px 34px" }}>{children}</AbsoluteFill>;
}

export function Chip({ children, tone }: { children: ReactNode; tone?: "orange" | "green" }) {
  const bg = tone === "orange" ? "#ffe6db" : tone === "green" ? "#dcf5e9" : "#f1eee7";
  const fg = tone === "orange" ? "#b33300" : tone === "green" ? C.green : "#4a4740";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 999, background: bg, color: fg, fontSize: 16, fontWeight: 700 }}>
      {children}
    </span>
  );
}

export function Snoo({ size = 20 }: { size?: number }) {
  // A plain "r/" badge, not Reddit's logo.
  return (
    <span style={{ width: size, height: size, flex: "none", borderRadius: size / 2, background: C.orange, color: "#fff", display: "grid", placeItems: "center", fontSize: size * 0.48, fontWeight: 700 }}>r/</span>
  );
}

// A pixel arrow cursor.
export function Cursor({ x, y, pressed }: { x: number; y: number; pressed?: boolean }) {
  const rows = ["k.......", "kk......", "kwk.....", "kwwk....", "kwwwk...", "kwwwwk..", "kwwwwwk.", "kwwkkkk.", "kwk.....", "kk......", "k......."];
  return (
    <svg width={32} height={44} viewBox="0 0 8 11" shapeRendering="crispEdges" style={{ position: "absolute", left: x, top: y, transform: `scale(${pressed ? 0.85 : 1})` }}>
      {rows.flatMap((r, j) => r.split("").map((ch, i) => (ch === "." ? null : <rect key={`${i}-${j}`} x={i} y={j} width={1} height={1} fill={ch === "k" ? C.ink : "#fff"} />)))}
    </svg>
  );
}
