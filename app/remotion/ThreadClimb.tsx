import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame } from "remotion";
import PixelIcon from "../components/PixelIcon";
import { C, FONT, Snoo } from "./shared";

// 7s loop: the thread your brand is in climbs page one for a buyer search. Sample data.
export const THREAD_CLIMB = { width: 720, height: 510, fps: 30, durationInFrames: 210 };

const OTHERS = [
  "The 11 Best Customer Feedback Tools in 2026",
  "Customer feedback software: 2026 buyer's guide",
  "feedbackbase vs others: honest review",
  "How to collect customer feedback (with templates)",
  "r/startups: best feedback tool for a 5 person team?",
];
const ROW = 58;
const TOP = 88;

export function ThreadClimb() {
  const frame = useCurrentFrame();
  // Our thread goes from rank 6 to rank 1 between frames 30 and 150.
  const rank = interpolate(frame, [30, 150], [6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const votes = Math.round(interpolate(frame, [30, 150], [9, 214], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const badge = spring({ frame: frame - 150, fps: 30, config: { damping: 9 } });
  return (
    <AbsoluteFill style={{ background: C.paper, fontFamily: FONT.body, color: C.ink, padding: "22px 26px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, height: 42, padding: "0 16px", border: `2px solid ${C.ink}`, borderRadius: 999, fontSize: 17 }}>
        <span style={{ fontFamily: FONT.pixel, color: C.muted }}>search</span> best customer feedback tool reddit
        <span style={{ marginLeft: "auto", fontFamily: FONT.pixel, fontSize: 12, color: C.muted }}>sample data</span>
      </div>
      {OTHERS.map((t, i) => {
        const base = i + 1;
        const shift = Math.min(1, Math.max(0, base + 1 - rank));
        const y = TOP + (base - 1 + shift) * ROW;
        return (
          <div key={t} style={{ position: "absolute", left: 26, right: 26, top: y, display: "flex", alignItems: "center", gap: 12, height: ROW - 8, fontSize: 16, color: "#55524b" }}>
            <span style={{ fontFamily: FONT.pixel, width: 30, color: C.muted }}>#{Math.round(base + shift)}</span>
            <span style={{ width: 20, height: 20, borderRadius: 10, background: t.startsWith("r/") ? C.orange : "#e7e3da", flex: "none" }} />
            {t}
          </div>
        );
      })}
      <div
        style={{
          position: "absolute", left: 18, right: 18, top: TOP + (rank - 1) * ROW - 4, height: ROW, display: "flex", alignItems: "center", gap: 12,
          padding: "0 12px", background: "#fff6dc", border: `2px solid ${C.ink}`, borderRadius: 8, boxShadow: `4px 4px 0 ${C.ink}`, fontSize: 17, fontWeight: 700,
        }}
      >
        <span style={{ fontFamily: FONT.pixel, width: 30 }}>#{Math.round(rank)}</span>
        <Snoo size={22} />
        <span style={{ flex: 1 }}>r/SaaS: What do you use to collect customer feedback?</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: FONT.pixel, color: C.orange }}><PixelIcon name="upvote" size={18} /> {votes}</span>
      </div>
      <div style={{ position: "absolute", right: 30, bottom: 14, transform: `rotate(-4deg) scale(${badge})`, display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: C.yellow, border: `2px solid ${C.ink}`, boxShadow: `3px 3px 0 ${C.ink}`, fontFamily: FONT.pixel, fontSize: 18 }}>
        <PixelIcon name="trophy" size={24} /> your reply is in the #1 result
      </div>
    </AbsoluteFill>
  );
}
