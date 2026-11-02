import { SERVICES, SITE } from "../lib/site";
import { Trash } from "./Icons";
import Link from "next/link";

// 9-row pixel font (rows 0-1 ascender, 2-6 x-height, 7-8 descender). "#" = a folder.
const GLYPHS: Record<string, string[]> = {
  s: ["....", "....", ".###", "#...", ".##.", "...#", "###.", "....", "...."],
  u: ["....", "....", "#..#", "#..#", "#..#", "#..#", ".###", "....", "...."],
  p: ["....", "....", "###.", "#..#", "#..#", "#..#", "###.", "#...", "#..."],
  e: ["....", "....", ".##.", "#..#", "####", "#...", ".###", "....", "...."],
  r: ["....", "....", "#.##", "##..", "#...", "#...", "#...", "....", "...."],
  m: [".....", ".....", "##.#.", "#.#.#", "#.#.#", "#.#.#", "#.#.#", ".....", "....."],
  t: ["....", ".#..", "####", ".#..", ".#..", ".#..", "..##", "....", "...."],
  a: ["....", "....", ".##.", "...#", ".###", "#..#", ".###", "....", "...."],
};

function PixelWord({ word }: { word: string }) {
  const letters = word.split("").map((c) => GLYPHS[c]);
  const rows = Array.from({ length: 9 }, (_, r) => letters.map((g) => g[r]).join("."));
  const cols = rows[0].length;
  return (
    <div className="pixel-word" aria-hidden="true">
      <div
        className="pixel-grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, var(--cell))`,
          // Fit the row of folders (plus 1px gaps) inside the page gutter, capped at 25px a cell.
          ["--cell" as string]: `min(calc((min(100vw, var(--max)) - 2 * var(--gutter) - ${cols - 1}px) / ${cols}), 25px)`,
        }}
      >
        {rows.flatMap((row, r) => row.split("").map((ch, c) => (ch === "#" ? <i key={`${r}-${c}`} /> : <b key={`${r}-${c}`} />)))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <h4>services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={`/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>agency</h4>
            <ul>
              <li><Link href="/services">all services</Link></li>
              <li><Link href="/reddit-marketing-for-saas">for saas &amp; b2b</Link></li>
              <li><Link href="/reddit-marketing-for-startups">for startups</Link></li>
              <li><Link href="/#how">how it works</Link></li>
              <li><Link href="/#plans">plans</Link></li>
              <li><Link href="/about">about</Link></li>
              <li><Link href="/about#rules">our rules</Link></li>
              <li><Link href="/#faq">faq</Link></li>
            </ul>
          </div>
          <div>
            <h4>connect</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href="/llms.txt">llms.txt</a></li>
              <li><a href="/sitemap.xml">sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4>disclaimer</h4>
            <p className="disc">
              SuperMeta is an independent agency and is not affiliated with, endorsed by or sponsored by Reddit, Inc.
              Product mockups on this site show sample data.
            </p>
          </div>
        </div>
        <PixelWord word="supermeta" />
        <span className="footer-trash"><Trash /></span>
        <div className="footer-copy">© SuperMeta {new Date().getFullYear()}. reddit marketing, nothing else.</div>
      </div>
    </footer>
  );
}
