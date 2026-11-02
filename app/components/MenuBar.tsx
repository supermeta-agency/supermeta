"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoMark, StatusIcons } from "./Icons";
import { BOOK_URL, NAV_LINKS, SERVICES } from "../lib/site";
import Link from "next/link";

function useClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () =>
      setNow(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));
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
        <Link href="/" className="menubar-brand">supermeta</Link>
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

      <Link href="/" className="menubar-logo" aria-label="SuperMeta home">
        <LogoMark />
      </Link>

      <div className="menubar-right">
        <StatusIcons />
        <span className="menubar-clock" suppressHydrationWarning>{clock}</span>
        <a href={BOOK_URL} className="menubar-cta">book a call</a>
      </div>
    </header>
  );
}
