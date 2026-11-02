import Link from "next/link";
import { SERVICES, SITE } from "../lib/site";
import PixelIcon from "./PixelIcon";

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
              Product mockups on this site show sample data. Pixel icons are our own; UI icons are Pixelarticons (MIT).
            </p>
          </div>
        </div>
        <div className="footer-word" aria-hidden="true">
          <span className="w">super<span className="px-word">meta</span></span>
          <span className="footer-scale"><PixelIcon name="banana" size={64} motion="wiggle" />banana for scale</span>
        </div>
        <div className="footer-copy">© SuperMeta {new Date().getFullYear()}. reddit marketing, nothing else. edit: thanks for reading this far.</div>
      </div>
    </footer>
  );
}
