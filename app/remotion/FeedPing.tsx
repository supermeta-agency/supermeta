import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion";
import PixelIcon from "../components/PixelIcon";
import { C, Chip, FONT, Snoo } from "./shared";

// 8s loop: today's monitoring feed fills up with threads worth answering. Sample data.
export const FEED_PING = { width: 720, height: 480, fps: 30, durationInFrames: 240 };

const ROWS = [
  { sub: "r/startups", t: "any good alternative to feedbackbase? pricing went up 3x", chips: [["competitor", "orange"], ["buying intent", "green"]], age: "2m" },
  { sub: "r/SaaS", t: "how do you decide what to build next from user feedback?", chips: [["category question"], ["thread is 40m old"]], age: "41m" },
  { sub: "r/ProductManagement", t: "best tool for feedback from enterprise customers?", chips: [["buying intent", "green"], ["no self-promo rule", "orange"]], age: "1h" },
  { sub: "r/smallbusiness", t: "people mentioning acme in a support thread", chips: [["brand mention"], ["reply as acme"]], age: "3h" },
] as const;

export function FeedPing() {
  const frame = useCurrentFrame();
  const count = ROWS.filter((_, i) => frame > 20 + i * 40).length;
  const drafted = spring({ frame: frame - 190, fps: 30, config: { damping: 12 } });
  return (
    <AbsoluteFill style={{ background: C.paper, fontFamily: FONT.body, color: C.ink, padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontFamily: FONT.pixel, fontSize: 18 }}>todays-threads.txt</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: FONT.pixel, fontSize: 16 }}>
          <PixelIcon name="popcorn" size={24} /> {count} worth answering
        </span>
      </div>
      {ROWS.map((r, i) => {
        const s = spring({ frame: frame - 20 - i * 40, fps: 30, config: { damping: 14 } });
        const isNew = frame > 20 + i * 40 && frame < 60 + i * 40;
        return (
          <div key={r.t} style={{ opacity: s, transform: `translateX(${(1 - s) * -40}px)`, display: "flex", gap: 12, padding: "11px 12px", marginBottom: 8, borderRadius: 8, border: `2px solid ${isNew ? C.ink : "#e6e2d9"}`, background: isNew ? "#fff6dc" : "#fff" }}>
            <Snoo size={24} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: C.muted }}>{r.sub} · {r.age} ago</div>
              <div style={{ fontSize: 17, fontWeight: 700, margin: "2px 0 6px" }}>{r.t}</div>
              <div style={{ display: "flex", gap: 6 }}>
                {r.chips.map(([label, tone]) => <Chip key={label} tone={tone as "orange" | "green" | undefined}>{label}</Chip>)}
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", right: 28, top: 70 + 0 * 92, opacity: interpolate(drafted, [0, 1], [0, 1]), transform: `scale(${drafted})`, padding: "6px 12px", background: C.yellow, border: `2px solid ${C.ink}`, boxShadow: `3px 3px 0 ${C.ink}`, fontFamily: FONT.pixel, fontSize: 15 }}>
        reply drafted ^_^
      </div>
    </AbsoluteFill>
  );
}
