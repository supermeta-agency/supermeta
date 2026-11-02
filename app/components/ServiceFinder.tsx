import Link from "next/link";
import Window from "./Window";
import type { Service } from "../lib/site";

// Services shown as a Finder window in list view; each row links to its service page.
export default function ServiceFinder({ items, full = false }: { items: Service[]; full?: boolean }) {
  return (
    <Window title="services" className="finder">
      {full ? (
        <>
          <div className="finder-tool">
            <span>{items.length} items · reddit only</span>
            <span className="mono">~/supermeta/services</span>
          </div>
          <div className="finder-cols"><span>name</span><span>what it does</span><span>best for</span><span /></div>
        </>
      ) : null}
      {items.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="finder-row">
          <span className="finder-name"><span className="icon-folder" />{s.name}</span>
          <span className="small">{s.short}</span>
          <span className="tiny">{s.bestFor}</span>
          <span className="finder-chev">›</span>
        </Link>
      ))}
    </Window>
  );
}
