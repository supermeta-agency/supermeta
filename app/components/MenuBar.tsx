"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PixelIcon from "./PixelIcon";
import { BOOK_URL, NAV_LINKS, SERVICES } from "../lib/site";

function useClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () => setNow(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).toLowerCase());
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function MenuBar() {
  const pathname = usePathname();
  const clock = useClock();

  return (
    <header className="menubar">
      <div className="menubar-left">
        <Link href="/" className="menubar-brand" aria-label="SuperMeta home">
          <PixelIcon name="upvote" size={26} motion="bounce" />
          supermeta
        </Link>
        <nav className="menubar-links" aria-label="Main">
          {NAV_LINKS.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <details className="menubar-menu">
          <summary>menu</summary>
          <div className="menubar-drop">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>{s.name}</Link>
            ))}
            <Link href="/reddit-marketing-for-saas">for saas &amp; b2b</Link>
            <Link href="/reddit-marketing-for-startups">for startups</Link>
            <Link href="/#how">how it works</Link>
            <Link href="/#plans">plans</Link>
            <Link href="/#faq">faq</Link>
            <Link href="/about">about</Link>
          </div>
        </details>
      </div>

      <div className="menubar-center" aria-hidden="true">
        <span className="menubar-karma"><PixelIcon name="upvote" size={14} /> 95k+ karma</span>
      </div>

      <div className="menubar-right">
        <span className="menubar-clock" suppressHydrationWarning>
          <PixelIcon name="cake" size={16} className="inline-ico" /> {clock}
        </span>
        <a href={BOOK_URL} className="btn btn-primary btn-sm">book a call</a>
      </div>
    </header>
  );
}
