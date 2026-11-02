"use client";

import { useEffect, useState } from "react";
import Window from "./Window";
import { AiAnswer, RedditThread, Serp } from "./Mocks";

const STEPS = [
  {
    tab: "1. they google it",
    head: "the search",
    body: "A buyer types \"best customer feedback tool reddit\". Two of the top three results are Reddit threads.",
  },
  {
    tab: "2. they read reddit",
    head: "the thread",
    body: "They skip the listicles and read what real users said. Your brand is either in this thread or it is not.",
  },
  {
    tab: "3. they ask ai",
    head: "the answer",
    body: "Then they ask an AI assistant, which reads the same threads and repeats who got recommended.",
  },
];

export default function JourneyWindow() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), 5000);
    return () => clearTimeout(id);
  }, [step, auto]);

  const s = STEPS[step];
  return (
    <Window title="how-buyers-shop-now.mov" tag="sample" caption="how-buyers-shop-now.mov">
      <div className="journey-tabs" role="tablist" aria-label="How buyers shop now">
        {STEPS.map((t, i) => (
          <button
            key={t.tab}
            role="tab"
            aria-selected={i === step}
            onClick={() => {
              setAuto(false);
              setStep(i);
            }}
          >
            {t.tab}
          </button>
        ))}
      </div>
      <div className="journey-progress">{auto ? <i key={step} /> : null}</div>
      <div className="journey-pane" role="tabpanel">
        <div>
          {step === 0 ? <Serp /> : null}
          {step === 1 ? (
            <RedditThread
              replies={[
                { user: "u/maya_pm", text: "Honestly the tool matters less than whether you close the loop. Tag every request, reply when it ships.", votes: 96 },
                { user: "u/acme_team", flair: "acme staff", text: "Disclosure: I work at acme. Agree with Maya. If it helps, our free tier does tagging and the \"we shipped it\" email, but a shared inbox works fine at 5 people.", votes: 71 },
              ]}
            />
          ) : null}
          {step === 2 ? <AiAnswer /> : null}
        </div>
        <div className="journey-side">
          <span className="pill" style={{ alignSelf: "flex-start" }}>{s.head}</span>
          <b>{s.tab.slice(3)}</b>
          <p>{s.body}</p>
          <p className="tiny" style={{ marginTop: "auto" }}>sample data for a made-up brand, acme.</p>
        </div>
      </div>
    </Window>
  );
}
