// Small inline icons for the menu bar, mocks and stickers.

export function LogoMark({ size = 26 }: { size?: number }) {
  // A shift-key arrow that doubles as an upvote: the keyboard nod to heyclicky's glyph.
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 4.5 4.5 14.2h5.2v7.8a1.5 1.5 0 0 0 1.5 1.5h5.6a1.5 1.5 0 0 0 1.5-1.5v-7.8h5.2L14 4.5Z"
        stroke="#000"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Upvote({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 1.2 1.4 6.4h2.9v4.4h3.4V6.4h2.9L6 1.2Z" fill={color} />
    </svg>
  );
}

export function Downvote({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
      <path d="M6 1.2 1.4 6.4h2.9v4.4h3.4V6.4h2.9L6 1.2Z" fill="none" stroke="#999" strokeWidth="1" />
    </svg>
  );
}

export function Comment({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 2.5h8a.8.8 0 0 1 .8.8v4.6a.8.8 0 0 1-.8.8H5L2.6 10.4V8.7H2a.8.8 0 0 1-.8-.8V3.3a.8.8 0 0 1 .8-.8Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

export function Search({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9.3 9.3 3.2 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StatusIcons() {
  return (
    <span className="menubar-status" aria-hidden="true">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
        <path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.1-1.2A10.6 10.6 0 0 0 8 .5C5.2.5 2.6 1.6.6 3.5l1.1 1.2A9 9 0 0 1 8 2.2Zm0 3.3c1.5 0 2.9.6 3.9 1.5l1.1-1.2A7.4 7.4 0 0 0 8 3.8c-1.9 0-3.7.7-5 2l1.1 1.2a5.8 5.8 0 0 1 3.9-1.5Zm0 3.3c.6 0 1.2.2 1.6.6L8 11.2 6.4 9.4c.4-.4 1-.6 1.6-.6Z" />
      </svg>
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M1.5 9V7a5.5 5.5 0 0 1 11 0v2" />
        <rect x="1" y="8" width="3" height="4" rx="1" fill="currentColor" />
        <rect x="10" y="8" width="3" height="4" rx="1" fill="currentColor" />
      </svg>
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="m1 4 6 5.5L4 12.5v-11L7 4.5 1 10" />
      </svg>
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <rect x=".6" y=".6" width="20" height="10.8" rx="3" stroke="currentColor" strokeWidth="1.1" />
        <rect x="2.3" y="2.3" width="14" height="7.4" rx="1.6" fill="currentColor" />
        <path d="M22.3 4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Trash({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 40 46" aria-hidden="true">
      <defs>
        <linearGradient id="tr" x1="0" x2="1">
          <stop offset="0" stopColor="#c9ccd1" />
          <stop offset=".5" stopColor="#f4f5f7" />
          <stop offset="1" stopColor="#b9bdc3" />
        </linearGradient>
      </defs>
      <path d="M5 9h30l-3 34a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3L5 9Z" fill="url(#tr)" stroke="#9aa0a8" />
      <ellipse cx="20" cy="9" rx="16" ry="3.6" fill="#e6e8eb" stroke="#9aa0a8" />
      <path d="M13 15v26M20 15v26M27 15v26" stroke="#a7acb3" strokeWidth="1.2" />
      <rect x="11" y="3" width="9" height="6" rx="1" fill="#ff8a65" transform="rotate(-12 15 6)" />
      <rect x="19" y="1" width="9" height="7" rx="1" fill="#7ec8ff" transform="rotate(10 23 4)" />
    </svg>
  );
}
