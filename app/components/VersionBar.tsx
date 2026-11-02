"use client";

import { usePathname } from "next/navigation";

// Review aid: jump between local builds on the same path. Remove before launch.
const VERSIONS = [
  { id: "v1", label: "v1 · clicky desktop", url: "http://localhost:3461" },
  { id: "v2", label: "v2 · pixel reddit", url: "http://localhost:3462" },
];
const CURRENT = "v1";

export default function VersionBar() {
  const pathname = usePathname();
  return (
    <div className="version-bar" role="navigation" aria-label="Design versions">
      <span>review build</span>
      {VERSIONS.map((v) => (
        <a key={v.id} href={`${v.url}${pathname}`} aria-current={v.id === CURRENT ? "true" : undefined}>
          {v.label}
        </a>
      ))}
    </div>
  );
}
