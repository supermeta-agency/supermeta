import type { Faq as FaqItem } from "../lib/site";
import JsonLd from "./JsonLd";

// Accordion built on <details>, so answers stay in the HTML for crawlers. Emits FAQPage schema.
export default function Faq({ items, title = "frequently asked questions", lede }: { items: FaqItem[]; title?: string; lede?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q.charAt(0).toUpperCase() + f.q.slice(1),
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  };
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="pill">faq</span>
          <h2 className="display h-sec">{title}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary><h3>{f.q}</h3></summary>
              <div className="ans">
                {f.a.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={schema} />
    </section>
  );
}
