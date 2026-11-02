import { Comment, Downvote, Search, Upvote } from "./Icons";

// Stylized, generic mock UIs. Every one of them shows sample data for a made-up brand ("acme").

type Reply = { user: string; flair?: string; text: string; votes: number };

export function RedditThread({
  sub = "r/SaaS",
  user = "u/early_ops",
  age = "6h",
  title = "What do you use to collect customer feedback? Tried 3 tools and hated all of them",
  text,
  votes = 214,
  comments = 87,
  replies = [],
}: {
  sub?: string;
  user?: string;
  age?: string;
  title?: string;
  text?: string;
  votes?: number;
  comments?: number;
  replies?: Reply[];
}) {
  return (
    <div className="rd">
      <div className="rd-meta">
        <span className="rd-sub"><span className="rd-snoo">r/</span>{sub}</span>
        <span>· {user} · {age}</span>
      </div>
      <p className="rd-title">{title}</p>
      {text ? <p className="rd-text">{text}</p> : null}
      <div className="rd-actions">
        <span className="rd-votes"><Upvote /> {votes} <Downvote /></span>
        <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><Comment /> {comments} comments</span>
      </div>
      {replies.map((r) => (
        <div key={r.user + r.text.slice(0, 12)} className="rd-reply">
          <div className="rd-user">
            {r.user}
            {r.flair ? <span className="rd-flair">{r.flair}</span> : null}
          </div>
          <p>{r.text}</p>
          <div className="rd-actions"><span className="rd-votes"><Upvote /> {r.votes}</span><span>reply</span></div>
        </div>
      ))}
    </div>
  );
}

type Result = { site: string; url: string; title: string; snippet: string; reddit?: boolean; me?: boolean; fav?: string };

export function Serp({
  query = "best customer feedback tool reddit",
  results,
  note = "you, here ^_^",
}: {
  query?: string;
  results?: Result[];
  note?: string;
}) {
  const rows: Result[] = results ?? [
    {
      site: "Reddit",
      url: "reddit.com › r/SaaS",
      title: "What do you use to collect customer feedback? : r/SaaS",
      snippet: "87 comments · We switched to acme last year. Disclosure: I work there, but here is what actually changed for our support team...",
      reddit: true,
      me: true,
    },
    {
      site: "Reddit",
      url: "reddit.com › r/startups",
      title: "Best feedback tools for a 5 person team? : r/startups",
      snippet: "42 comments · Honestly the tool matters less than closing the loop with users...",
      reddit: true,
    },
    {
      site: "feedbackbase.io",
      url: "feedbackbase.io › blog",
      title: "The 11 Best Customer Feedback Tools in 2026",
      snippet: "We tested the most popular customer feedback tools so you don't have to...",
      fav: "f",
    },
  ];
  return (
    <div className="serp">
      <div className="serp-q"><Search /> {query}</div>
      {rows.map((r) => (
        <div key={r.title} className={`serp-r${r.me ? " me" : ""}`}>
          {r.me && note ? <span className="serp-note">{note}</span> : null}
          <div className="serp-site">
            <span className={`serp-fav${r.reddit ? " rd" : ""}`}>{r.reddit ? "r/" : r.fav ?? r.site[0]}</span>
            <span>
              {r.site}
              <span className="serp-url" style={{ display: "block" }}>{r.url}</span>
            </span>
          </div>
          <p className="serp-t">{r.title}</p>
          <p className="serp-s">{r.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export function AiAnswer({
  question = "what's a good customer feedback tool for a small saas team?",
}: {
  question?: string;
}) {
  return (
    <div className="ai">
      <div className="ai-q">{question}</div>
      <div className="ai-a">
        <span className="ai-dot">*</span>
        <div>
          <p>
            Small SaaS teams on Reddit most often recommend <b>acme</b> for collecting and closing the loop on
            feedback <span className="ai-cite rd">r/SaaS</span>, with a few users pointing to its free tier for
            early teams <span className="ai-cite rd">r/startups</span>.
          </p>
          <p>Other options people mention: feedbackbase and a shared inbox for very early teams <span className="ai-cite">feedbackbase.io</span></p>
        </div>
      </div>
      <div className="ai-src">
        <span className="ai-cite rd">reddit.com/r/SaaS</span>
        <span className="ai-cite rd">reddit.com/r/startups</span>
        <span className="ai-cite">feedbackbase.io</span>
      </div>
    </div>
  );
}

type FeedItem = { sub: string; text: string; chips: [string, ("hot" | "warn" | undefined)?][]; time: string };

export function MonitorFeed({ items }: { items?: FeedItem[] }) {
  const rows: FeedItem[] = items ?? [
    { sub: "r/startups", text: "any good alternative to feedbackbase? pricing went up 3x", chips: [["competitor", "hot"], ["buying intent", "hot"]], time: "2m ago" },
    { sub: "r/SaaS", text: "how do you decide what to build next from user feedback?", chips: [["category question"], ["thread is 40m old"]], time: "41m ago" },
    { sub: "r/ProductManagement", text: "best tool for feedback from enterprise customers?", chips: [["buying intent", "hot"], ["no self-promo rule", "warn"]], time: "1h ago" },
    { sub: "r/smallbusiness", text: "people mentioning acme in a support thread", chips: [["brand mention"], ["reply as acme"]], time: "3h ago" },
  ];
  return (
    <div className="feed">
      {rows.map((r) => (
        <div className="feed-row" key={r.text}>
          <span className="rd-snoo" style={{ marginTop: 2 }}>r/</span>
          <div>
            <span className="tiny">{r.sub}</span>
            <p>{r.text}</p>
            {r.chips.map(([label, tone]) => (
              <span key={label} className={`feed-chip${tone ? " " + tone : ""}`}>{label}</span>
            ))}
          </div>
          <span className="feed-time">{r.time}</span>
        </div>
      ))}
    </div>
  );
}

export function LeadFeed() {
  return (
    <MonitorFeed
      items={[
        { sub: "r/smallbusiness", text: "looking for a feedback tool that plugs into intercom, budget ~$100/mo", chips: [["fits icp", "hot"], ["budget stated", "hot"]], time: "today" },
        { sub: "r/SaaS", text: "we're 8 people and drowning in feature requests. what do you use?", chips: [["fits icp", "hot"], ["reply in thread"]], time: "today" },
        { sub: "r/startups", text: "switching off spreadsheets for user feedback, what's next?", chips: [["fits icp", "hot"], ["dm welcome", "warn"]], time: "yesterday" },
      ]}
    />
  );
}

export function SubredditCard() {
  return (
    <div className="sbr">
      <div className="sbr-banner" />
      <div className="sbr-head">
        <span className="sbr-icon">a</span>
        <div>
          <div className="sbr-name">r/acme</div>
          <div className="tiny">community for acme users · sample</div>
        </div>
      </div>
      <ul className="sbr-rules">
        <li><span>1</span> be kind, be useful</li>
        <li><span>2</span> bug reports use the bug flair</li>
        <li><span>3</span> feature ideas go in the weekly thread</li>
        <li><span>4</span> staff accounts are always flaired</li>
      </ul>
      <div className="rd-actions" style={{ marginTop: 10 }}>
        <span className="rd-votes">weekly: what are you building?</span>
        <span className="rd-votes">monthly: ama with the team</span>
      </div>
    </div>
  );
}

export function AdCard() {
  return (
    <div className="ad">
      <div className="ad-row">
        <span className="rd-meta" style={{ margin: 0 }}><span className="rd-sub"><span className="rd-snoo">a</span>u/acme_hq</span> · promoted</span>
        <span className="tiny">sample</span>
      </div>
      <p className="rd-title" style={{ marginTop: 6 }}>We read 10,000 r/SaaS threads about feedback tools. Here is what teams actually complain about.</p>
      <div className="ad-media">acme</div>
      <div className="ad-row">
        <span className="rd-votes"><Upvote /> 96</span>
        <span className="btn btn-blue btn-sm" style={{ height: 28, fontSize: 13 }}>learn more</span>
      </div>
      <div className="ad-stats">
        <div><b>3</b><span>campaigns live</span></div>
        <div><b>r/SaaS</b><span>top community</span></div>
        <div><b>weekly</b><span>optimization</span></div>
      </div>
    </div>
  );
}

export function RulesCheck() {
  return (
    <div className="rd" style={{ fontSize: 12 }}>
      {[
        "follows r/SaaS rule 4 (no direct links)",
        "helps before it mentions anything",
        "affiliation disclosed",
        "sounds like a person, not a brochure",
      ].map((t) => (
        <div key={t} style={{ display: "flex", gap: 8, padding: "4px 0" }}>
          <span style={{ color: "#1d9a45" }}>✓</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}
