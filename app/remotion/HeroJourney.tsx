import { AbsoluteFill, Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import PixelIcon from "../components/PixelIcon";
import { C, FONT, Chip, Cursor, Pane, Snoo } from "./shared";

// 12s loop: a buyer googles, reads the Reddit thread, then asks an AI. Sample data, made-up brand "acme".
export const HERO_JOURNEY = { width: 960, height: 540, fps: 30, durationInFrames: 360 };

const QUERY = "best feedback tool for small saas reddit";
const STEPS = ["1. they google it", "2. they read reddit", "3. they ask ai"];

function Search() {
  const frame = useCurrentFrame();
  const typed = Math.round(interpolate(frame, [6, 54], [0, QUERY.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const results = [
    { site: "reddit.com › r/SaaS", t: "What do you use to collect customer feedback? : r/SaaS", s: "87 comments · We switched to acme last year. Disclosure: I work there...", rd: true, me: true },
    { site: "reddit.com › r/startups", t: "Best feedback tools for a 5 person team? : r/startups", s: "42 comments · Honestly the tool matters less than closing the loop...", rd: true },
    { site: "feedbackbase.io › blog", t: "The 11 Best Customer Feedback Tools in 2026", s: "We tested the most popular customer feedback tools so you don't have to...", rd: false },
  ];
  const click = frame > 100 ? spring({ frame: frame - 100, fps: 30, config: { damping: 12 } }) : 0;
  return (
    <Pane>
      <div style={{ display: "flex", alignItems: "center", gap: 12, height: 52, padding: "0 20px", border: `2px solid ${C.ink}`, borderRadius: 999, fontSize: 22, background: "#fff" }}>
        <span style={{ fontFamily: FONT.pixel, color: C.muted }}>search</span>
        <span>{QUERY.slice(0, typed)}<span style={{ opacity: frame % 20 < 10 ? 1 : 0 }}>|</span></span>
      </div>
      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
        {results.map((r, i) => {
          const appear = interpolate(frame, [58 + i * 8, 72 + i * 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={r.t} style={{ opacity: appear, transform: `translateY(${(1 - appear) * 16}px) scale(${r.me ? 1 + click * 0.015 : 1})`, padding: "10px 14px", borderRadius: 10, background: r.me ? "#fff6dc" : "transparent", outline: r.me && frame > 80 ? `2px dashed ${C.orange}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: C.muted }}>
                {r.rd ? <Snoo size={22} /> : <span style={{ width: 22, height: 22, borderRadius: 11, background: "#e7e3da", display: "grid", placeItems: "center", fontSize: 12 }}>f</span>}
                {r.site}
              </div>
              <div style={{ fontSize: 22, color: "#1a0dab", margin: "4px 0 2px" }}>{r.t}</div>
              <div style={{ fontSize: 15, color: "#4d5156" }}>{r.s}</div>
            </div>
          );
        })}
      </div>
      <Cursor x={interpolate(frame, [70, 100], [760, 380], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })} y={interpolate(frame, [70, 100], [470, 190], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })} pressed={frame > 100 && frame < 108} />
    </Pane>
  );
}

function Thread() {
  const frame = useCurrentFrame();
  const votes = Math.round(interpolate(frame, [0, 90], [12, 214], { extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }));
  const reply = spring({ frame: frame - 40, fps: 30, config: { damping: 14 } });
  const ours = Math.round(interpolate(frame, [55, 115], [1, 71], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  return (
    <Pane>
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, color: C.muted }}>
        <Snoo size={24} /> <b style={{ color: C.ink }}>r/SaaS</b> · u/early_ops · 6h
      </div>
      <div style={{ fontFamily: FONT.display, fontSize: 30, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 14px", letterSpacing: -0.5 }}>
        What do you use to collect customer feedback? Tried 3 tools and hated all of them
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Chip><PixelIcon name="upvote" size={18} /> {votes}</Chip>
        <Chip><PixelIcon name="bubble" size={18} /> 87 comments</Chip>
      </div>
      <div style={{ marginTop: 18, paddingLeft: 16, borderLeft: `3px solid #e2ded5`, fontSize: 19, lineHeight: 1.45 }}>
        <div style={{ fontSize: 15, color: C.muted, fontWeight: 700 }}>u/maya_pm</div>
        Honestly the tool matters less than whether you close the loop. Tag every request, reply when it ships.
      </div>
      <div style={{ marginTop: 14, paddingLeft: 16, borderLeft: `3px solid ${C.orange}`, fontSize: 19, lineHeight: 1.45, opacity: reply, transform: `translateY(${(1 - reply) * 30}px)` }}>
        <div style={{ fontSize: 15, color: C.muted, fontWeight: 700, display: "flex", gap: 8, alignItems: "center" }}>
          u/acme_team <span style={{ fontFamily: FONT.pixel, fontSize: 13, padding: "1px 8px", borderRadius: 4, background: "#e6efff", color: C.blue }}>acme staff</span>
        </div>
        Disclosure: I work at acme. Agree with Maya. Our free tier does tagging and the &quot;we shipped it&quot; email, but a shared inbox works fine at 5 people.
        <div style={{ marginTop: 8 }}><Chip><PixelIcon name="upvote" size={18} /> {ours}</Chip></div>
      </div>
      {[0, 1, 2, 3].map((i) => {
        const t = frame - 60 - i * 12;
        if (t < 0 || t > 40) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 110 + i * 26, top: 470 - t * 4, opacity: 1 - t / 40 }}>
            <PixelIcon name="upvote" size={22} />
          </div>
        );
      })}
    </Pane>
  );
}

function Answer() {
  const frame = useCurrentFrame();
  const text = "Small SaaS teams on Reddit most often recommend acme for collecting feedback and closing the loop, and a few point to its free tier for early teams.";
  const words = text.split(" ");
  const shown = Math.round(interpolate(frame, [24, 86], [0, words.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const cite = spring({ frame: frame - 84, fps: 30, config: { damping: 10 } });
  const done = spring({ frame: frame - 98, fps: 30, config: { damping: 12 } });
  return (
    <Pane>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ maxWidth: 600, padding: "12px 18px", borderRadius: 18, background: "#efece5", fontSize: 21 }}>what&apos;s a good customer feedback tool for a small saas team?</div>
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
        <span style={{ width: 34, height: 34, flex: "none", borderRadius: 17, background: C.ink, color: "#fff", display: "grid", placeItems: "center", fontFamily: FONT.pixel }}>ai</span>
        <div style={{ fontSize: 23, lineHeight: 1.5 }}>
          {words.slice(0, shown).map((w, i) => (
            <span key={i} style={w === "acme" ? { background: C.highlight, padding: "0 4px", fontWeight: 700 } : undefined}>{w} </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 22, marginLeft: 48, transform: `scale(${cite})`, transformOrigin: "left center" }}>
        <Chip tone="orange"><Snoo size={16} /> reddit.com/r/SaaS</Chip>
        <Chip tone="orange"><Snoo size={16} /> reddit.com/r/startups</Chip>
        <Chip>feedbackbase.io</Chip>
      </div>
      <div style={{ position: "absolute", right: 34, bottom: 34, transform: `rotate(-6deg) scale(${done})`, padding: "10px 16px", background: C.yellow, border: `2px solid ${C.ink}`, boxShadow: `4px 4px 0 ${C.ink}`, fontFamily: FONT.pixel, fontSize: 20 }}>
        you&apos;re in the answer ^_^
      </div>
    </Pane>
  );
}

export function HeroJourney() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const step = Math.min(2, Math.floor(frame / 120));
  return (
    <AbsoluteFill style={{ background: C.paper, fontFamily: FONT.body, color: C.ink }}>
      <div style={{ position: "absolute", top: 18, left: 24, display: "flex", gap: 8, zIndex: 2 }}>
        {STEPS.map((s, i) => (
          <span key={s} style={{ fontFamily: FONT.pixel, fontSize: 16, padding: "5px 12px", borderRadius: 6, border: `2px solid ${C.ink}`, background: i === step ? C.ink : "#fff", color: i === step ? "#fff" : C.ink }}>{s}</span>
        ))}
      </div>
      <Sequence from={0} durationInFrames={120} layout="none"><Search /></Sequence>
      <Sequence from={120} durationInFrames={120} layout="none"><Thread /></Sequence>
      <Sequence from={240} durationInFrames={120} layout="none"><Answer /></Sequence>
      <div style={{ position: "absolute", left: 0, bottom: 0, height: 5, width: `${((frame % 120) / 120) * 100}%`, background: C.orange }} />
      <div style={{ position: "absolute", right: 24, top: 22, fontFamily: FONT.pixel, fontSize: 14, color: C.muted }}>sample · {Math.floor(frame / fps)}s</div>
    </AbsoluteFill>
  );
}
