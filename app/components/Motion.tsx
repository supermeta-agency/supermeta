"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { HERO_JOURNEY, HeroJourney } from "../remotion/HeroJourney";
import { THREAD_CLIMB, ThreadClimb } from "../remotion/ThreadClimb";
import { FEED_PING, FeedPing } from "../remotion/FeedPing";

const CLIPS = {
  hero: { component: HeroJourney, ...HERO_JOURNEY },
  climb: { component: ThreadClimb, ...THREAD_CLIMB },
  feed: { component: FeedPing, ...FEED_PING },
};

const REDUCE = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(REDUCE);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

// A Remotion clip that loops while it is on screen and holds still for reduced-motion users.
export default function Motion({ clip }: { clip: keyof typeof CLIPS }) {
  const c = CLIPS[clip];
  const ref = useRef<PlayerRef>(null);
  const box = useRef<HTMLDivElement>(null);
  const still = useSyncExternalStore(subscribe, () => window.matchMedia(REDUCE).matches, () => false);

  useEffect(() => {
    const el = box.current;
    if (!el || still) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? ref.current?.play() : ref.current?.pause()), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [still]);

  return (
    <div ref={box} className="motion">
      <Player
        ref={ref}
        component={c.component}
        durationInFrames={c.durationInFrames}
        fps={c.fps}
        compositionWidth={c.width}
        compositionHeight={c.height}
        style={{ width: "100%", aspectRatio: `${c.width} / ${c.height}` }}
        loop
        autoPlay={false}
        initialFrame={still ? Math.round(c.durationInFrames * 0.9) : 0}
        controls={false}
        clickToPlay={false}
        doubleClickToFullscreen={false}
        spaceKeyToPlayOrPause={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
