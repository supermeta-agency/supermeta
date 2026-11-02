// Single source of truth for site copy: services, audiences, FAQs, cited stats and CTAs.
// Copy rules: no em dashes, no "--", US spelling, no prices, no account management,
// no proxies, aged accounts, karma-for-clients or vote manipulation.
// Keywords per page come from the 2026-11-03 keyword map (one primary keyword per URL).

export const SITE = {
  name: "SuperMeta",
  url: "https://supermeta.agency",
  email: "hello@supermeta.agency",
};

// Swap for a Calendly or Cal.com link when one exists.
export const BOOK_URL = `mailto:${SITE.email}?subject=${encodeURIComponent("Reddit marketing call")}`;

export type Faq = { q: string; a: string[] };
export type Item = { t: string; d: string };
export type MockKind = "serp" | "thread" | "feed" | "leads" | "subreddit" | "ad";

export type Service = {
  slug: string;
  name: string;
  serviceName: string;
  short: string;
  bestFor: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  mock: MockKind;
  file: string;
  included: Item[];
  steps: Item[];
  reports: string[];
  fit: string[];
  faqs: Faq[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "reddit-seo",
    name: "reddit seo & aeo",
    serviceName: "Reddit SEO and AEO strategy",
    short: "Find the threads Google ranks and AI answers cite for your category, and a playbook to win them.",
    bestFor: "teams starting out",
    title: "Reddit SEO and AEO Agency: Audit and Playbook",
    description:
      "Get into the Reddit threads Google ranks and ChatGPT, Perplexity and AI Overviews cite. Start with an audit: subreddit map, narratives, keywords, timing.",
    h1: "reddit seo and aeo: get into the threads google ranks and ai cites",
    eyebrow: "reddit seo & aeo agency",
    intro:
      "Buyers search \"best X reddit\" and Google shows a thread. ChatGPT, Perplexity and Google's AI Overviews read the same threads and repeat them. As a Reddit SEO agency, we find the threads that already shape your category, then hand you the plan to earn a place in them.",
    mock: "serp",
    file: "page-one.png",
    included: [
      { t: "reddit seo audit", d: "Where buyer questions about your category live on Reddit, which threads rank on Google, which ones AI answers cite, and who gets recommended today." },
      { t: "subreddit map", d: "The communities that matter for you, how active they are, and what each one allows: self-promo limits, link rules, flair, karma gates." },
      { t: "thread targets", d: "Page-one threads for your buyer keywords, ranked by how winnable they are, with the angle that fits each one." },
      { t: "narratives", d: "The three to five things your brand can credibly own on Reddit: comparisons, use cases, integrations, pricing context." },
      { t: "keyword list", d: "Buyer queries to track across Google, Reddit search and AI prompts, so you can see AI visibility and rankings move month to month." },
      { t: "posting and commenting windows", d: "When each subreddit is busiest, so a good answer lands while the thread is still young." },
    ],
    steps: [
      { t: "kickoff", d: "A short onboarding form and a call: your product, buyers, competitors and what you have tried on Reddit before." },
      { t: "audit", d: "We pull the threads, rankings and AI answers for your buyer queries and map who shows up where." },
      { t: "playbook", d: "You get the subreddit map, thread targets, narratives, keywords and timing in one working document." },
      { t: "walkthrough", d: "We go through it together and agree on what to do first. You run it in-house, or we run it for you." },
      { t: "monthly refresh", d: "Threads, rankings and citations move. The playbook gets updated every month with what changed." },
    ],
    reports: ["Reddit SEO audit report", "Subreddit map and rules sheet", "Thread target list", "Monthly playbook refresh"],
    fit: ["B2B SaaS, AI apps, devtools and fintech teams", "Teams that want to run Reddit in-house with a real plan", "Anyone who wants a baseline before hiring execution"],
    faqs: [
      { q: "does reddit help with seo?", a: ["Yes, mostly by ranking itself. Reddit threads often sit on page one for \"best\" and \"vs\" searches, so a helpful answer inside one gets seen for months. Links from Reddit to your site carry little direct SEO weight; the value is the visibility and the brand searches that follow."] },
      { q: "why does google show so many reddit results?", a: ["Searchers want first-hand experiences, and Reddit is the biggest source of them. Google has leaned into forum and discussion results, and per Semrush, Reddit ranks for about 263 million Google keywords."] },
      { q: "what is reddit aeo?", a: ["AEO (answer engine optimization) is about the answers AI assistants give, not the blue links. Reddit AEO means getting your brand into the threads that ChatGPT, Perplexity and Google's AI answers read and cite. It overlaps heavily with Reddit SEO, so we plan for both at once."] },
      { q: "how does reddit influence chatgpt, perplexity and ai overviews?", a: ["AI assistants pull from the open web, and Reddit is one of their favorite sources. In a Semrush study of 230K prompts, Reddit was one of the five most-cited domains on ChatGPT, Google AI Mode and Perplexity. Those shares swing month to month, so we track the actual threads cited for your category."] },
      { q: "what is in a reddit seo audit?", a: ["The buyer queries that matter for you, the Reddit threads ranking for them, which threads AI answers cite, how often you and your competitors come up, and the subreddits and rules you would be working with."] },
      { q: "can you guarantee rankings or ai citations?", a: ["No, and nobody honest can. Google and AI systems decide what they show. What we can promise is the work: the right threads, the right angles, and clear tracking so you can see what moved."] },
      { q: "how long until a thread ranks?", a: ["Replies in threads that already rank are visible the day they go live. New threads take weeks and many never rank, which is why the playbook starts with threads that already sit on page one."] },
    ],
    related: ["reddit-posting", "reddit-monitoring"],
  },
  {
    slug: "reddit-posting",
    name: "branded posting & comments",
    serviceName: "Branded Reddit posting and commenting",
    short: "Posts and comments from your brand's own, clearly labeled account. Helpful first, product second.",
    bestFor: "always-on presence",
    title: "Branded Reddit Posting and Commenting Service",
    description:
      "Posts and comments from your brand's own disclosed Reddit account, written to each subreddit's rules. Useful answers in the threads buyers already read.",
    h1: "branded reddit posting and commenting from your own account",
    eyebrow: "reddit posting service",
    intro:
      "We write and publish posts and comments from your brand's own, clearly labeled Reddit account. Every one is written for the thread it lands in, checked against that subreddit's rules, and approved by you before it goes live.",
    mock: "thread",
    file: "r-saas-thread.png",
    included: [
      { t: "weekly cadence", d: "A steady rhythm of posts and comments every week, starting at one post and three comments, scaled up when it is working." },
      { t: "thread research", d: "Every comment starts with reading the thread: what was asked, what is already said, and what would actually help." },
      { t: "drafts in your voice", d: "Written like a person on your team, not a press release. You approve or edit everything before it is published." },
      { t: "rules check", d: "Each draft is checked against the subreddit's rules: link policy, self-promo limits, flair and format." },
      { t: "disclosure built in", d: "Posts come from your brand account, and any mention of your product says who is talking." },
      { t: "follow-ups", d: "When people reply to our comments, we answer. A thread is a conversation, not a drop-off point." },
    ],
    steps: [
      { t: "setup", d: "We set up or tidy your brand account with you: a name that matches your brand, a clear bio, flair where allowed, and some genuinely helpful activity before any product talk." },
      { t: "targets", d: "We pick the threads and subreddits from your playbook, or build one first if you do not have it." },
      { t: "draft and approve", d: "Drafts go into a shared doc. You approve, edit or kill them." },
      { t: "publish and reply", d: "We publish at the right time for each subreddit and handle replies." },
      { t: "report", d: "A weekly report with permalinks, scores and what we learned." },
    ],
    reports: ["Weekly report with permalinks", "Monthly summary: threads entered, where they rank, what got cited"],
    fit: ["Brands with something genuinely useful to say", "Founders who want Reddit done without doing it themselves", "Teams that want approval on every word"],
    faqs: [
      { q: "how do you promote on reddit without getting banned?", a: ["Read each subreddit's rules, post from a clearly labeled brand account, be useful before you mention anything, and skip threads where a brand does not belong. Accounts get removed for spam, vote games and ignoring rules. We do none of those."] },
      { q: "is self-promotion allowed on reddit?", a: ["It depends on the subreddit. Many limit or ban it, some run weekly self-promo threads, and Reddit's own rules prohibit spam. We check every community's rules before we post there."] },
      { q: "how do we set up a reddit business account?", a: ["We do it with you: a username that matches your brand, a clear bio that says who you are, and the profile details Reddit offers businesses. You own the account and its history."] },
      { q: "who writes the posts and comments, and who approves them?", a: ["We research and write them. You approve, edit or reject every draft before it goes live, unless you tell us otherwise."] },
      { q: "how is this different from reddit ads?", a: ["Ads are paid placements that stop when the budget stops. Posts and comments are organic: they live in the thread, can rank on Google and get read by AI assistants long after they are published. Many brands use both."] },
      { q: "how many posts and comments do we get?", a: ["Plans start with one post and three comments a week and scale from there. We would rather post less and keep it good."] },
    ],
    related: ["reddit-seo", "reddit-community-management"],
  },
  {
    slug: "reddit-monitoring",
    name: "keyword monitoring",
    serviceName: "Reddit keyword monitoring",
    short: "A daily, human-filtered list of the threads worth answering: brand, category and competitor mentions.",
    bestFor: "catching threads early",
    title: "Reddit Monitoring Service: Daily Keyword Report",
    description:
      "Daily Reddit keyword monitoring for your brand, competitors and category. A short report of the threads and comments worth a reply, with suggested angles.",
    h1: "reddit keyword monitoring with a daily report you can act on",
    eyebrow: "reddit monitoring service",
    intro:
      "Alert tools ping you on every mention. We read them. Every day you get the Reddit threads and comments worth answering, why each one matters, and the angle we would take, while the thread is still young enough for a reply to count.",
    mock: "feed",
    file: "todays-threads.txt",
    included: [
      { t: "your keywords", d: "Start with three: your brand, your category and your top competitor. Add more any time." },
      { t: "question patterns", d: "We also watch for \"best tool for\", \"alternative to\" and \"X vs Y\" posts in your category, where buyers ask out loud." },
      { t: "brand monitoring", d: "Every mention of your brand in posts and comments, with a note on sentiment and whether you should reply." },
      { t: "competitor mentions", d: "Threads where a competitor comes up, with a note on whether a fair, disclosed comparison belongs there." },
      { t: "a fit check", d: "Each thread is scored on buyer intent, age, activity and the subreddit's rules. Wrong threads get skipped." },
      { t: "daily report", d: "One short list a day with links, context and a suggested angle for each thread." },
    ],
    steps: [
      { t: "pick keywords", d: "We agree on your brand, category and competitor terms, plus the subreddits to watch." },
      { t: "set up", d: "Monitoring goes live across Reddit, posts and comments, including the communities on your subreddit map." },
      { t: "daily filter", d: "A person reads what comes in and keeps only threads worth your time." },
      { t: "report", d: "You get the daily list, and a monthly roll-up of mentions, sentiment and competitors." },
    ],
    reports: ["Daily threads report", "Monthly mention and competitor roll-up"],
    fit: ["Brands that already get mentioned and miss most of it", "Categories with lots of \"what should I use\" threads", "Teams that want to reply first without living on Reddit"],
    faqs: [
      { q: "can you set up reddit alerts for keywords?", a: ["Yes. We track your keywords across Reddit every day, but instead of raw alerts you get a filtered list of the threads worth answering, with context and a suggested angle."] },
      { q: "how is this different from f5bot or syften?", a: ["Tools like F5Bot and Syften send you an alert when a word appears. That is useful, and noisy. We read the threads and tell you which ones matter, why, and what to say. You get ten useful threads instead of two hundred pings."] },
      { q: "do you monitor comments as well as posts?", a: ["Yes. Many of the best openings are in comments, like someone asking for an alternative halfway down a thread."] },
      { q: "how do we track brand mentions on reddit?", a: ["Add your brand name, product names and common misspellings as keywords. We flag every mention, note the sentiment, and tell you which ones need a reply from your brand account."] },
      { q: "how fast do you catch new threads?", a: ["We check every day and flag urgent threads, like a competitor complaint or a direct buying question, as soon as we see them."] },
      { q: "do you reply for us?", a: ["Monitoring finds the threads. If you want us to write and post the replies, pair it with branded posting and commenting."] },
    ],
    related: ["reddit-lead-generation", "reddit-posting"],
  },
  {
    slug: "reddit-lead-generation",
    name: "lead discovery & outreach",
    serviceName: "Reddit lead generation and outreach",
    short: "People asking for what you sell, found, qualified and handed over with context. No spam DMs.",
    bestFor: "pipeline",
    title: "Reddit Lead Generation for B2B Startups",
    description:
      "Find people on Reddit asking for what you sell, then reply from your disclosed brand account. Lead lists with intent, thread links and draft replies.",
    h1: "reddit lead generation: find the buyers asking for help",
    eyebrow: "reddit lead generation",
    intro:
      "Every day someone posts \"looking for a tool that does X\". We find the ones that match your ideal customer, check that the need is real and current, and help you reach out the right way: in the thread first, and by message only where the person and the subreddit welcome it.",
    mock: "leads",
    file: "leads-sample.csv",
    included: [
      { t: "lead search", d: "Daily searches across your subreddits and keywords for people describing the problem you solve." },
      { t: "qualification", d: "Each lead is checked against your ICP: role, company size, budget hints, timing and what they already tried." },
      { t: "context per lead", d: "The post, the need in one line, and why they fit, so your first message is relevant." },
      { t: "suggested reply", d: "A helpful, disclosed reply for the thread, and a message draft only when outreach is welcome." },
      { t: "a set number each month", d: "Plans start with a set number of qualified leads a month. Add more when the channel is working." },
      { t: "clean handoff", d: "Leads arrive in a sheet you can drop into your CRM." },
    ],
    steps: [
      { t: "define the icp", d: "Who you sell to, what they say when they are in market, and who you do not want." },
      { t: "search and qualify", d: "We find and check leads daily against that definition." },
      { t: "hand off", d: "Qualified leads arrive with context and a suggested reply." },
      { t: "reach out", d: "You reply, or we draft it for your approval. Thread first, message second." },
    ],
    reports: ["Qualified lead sheet", "Monthly lead summary by subreddit and intent"],
    fit: ["B2B products with a clear buyer", "Founders doing sales who want warmer conversations", "Categories where people ask for recommendations in public"],
    faqs: [
      { q: "how do you find customers on reddit?", a: ["Search for the problem, not your product name. People describe what hurts (\"drowning in feature requests\") long before they name a category. We track those phrases across the subreddits your buyers use and qualify each post against your ICP."] },
      { q: "can you get b2b leads from reddit?", a: ["Yes, when your buyers ask for recommendations in public. Ops leads, founders, developers and marketers do it every day. It works best for software and services with a clear buyer."] },
      { q: "is it ok to dm people on reddit about my product?", a: ["Usually not unprompted. Unsolicited sales messages break many subreddits' rules and annoy people. We reply in the thread first, and only suggest a direct message when the person asked for recommendations by message or the community allows it."] },
      { q: "what are reddit lead gen ads, and do we need them?", a: ["Reddit also sells lead generation ad formats that collect contact details inside the ad. That is paid reach. This service is organic: people who already posted about the problem. They work well together, and we can run both."] },
      { q: "how many leads will we get?", a: ["It depends on how often your buyers post. Plans start with a set number of qualified leads a month, and we tell you up front if your category is too quiet to be worth it."] },
    ],
    related: ["reddit-monitoring", "reddit-posting"],
  },
  {
    slug: "reddit-community-management",
    name: "subreddit setup & management",
    serviceName: "Subreddit setup and Reddit community management",
    short: "Your own branded subreddit, set up properly and run every week: rituals, moderation, growth and posting.",
    bestFor: "owning the community",
    title: "Subreddit Setup and Reddit Community Management",
    description:
      "We set up your branded subreddit and run it: rules, moderation, weekly threads, AMAs and posting, so it grows into a place your customers actually use.",
    h1: "subreddit setup and reddit community management",
    eyebrow: "reddit community management",
    intro:
      "A branded subreddit gives your users a place to ask, share and help each other, and gives you a place to talk to them without fighting another community's rules. We set it up properly, then manage it every week.",
    mock: "subreddit",
    file: "r-acme.png",
    included: [
      { t: "subreddit setup (one-time)", d: "Name, description, rules, flair, sidebar, wiki or FAQ, AutoModerator config and a welcome post. Extra subreddits can be added." },
      { t: "rituals", d: "Recurring threads that give people a reason to come back: weekly show-and-tell, feedback threads, release notes, AMAs with your team." },
      { t: "moderation", d: "Daily mod queue, spam and rule enforcement, and clear flair for staff accounts." },
      { t: "growth", d: "Getting the word out to your users and to related communities, within their rules." },
      { t: "posting", d: "Regular posts from your team so the subreddit never looks abandoned." },
      { t: "monthly report", d: "Members, activity, top threads and what your users are asking for." },
    ],
    steps: [
      { t: "plan", d: "Name, purpose, rules and the rituals that fit your product." },
      { t: "set up", d: "We build the subreddit and AutoModerator config, and set up your team's flaired accounts." },
      { t: "launch", d: "Welcome post, first rituals and an announcement to your users." },
      { t: "run it", d: "Weekly rituals, daily moderation, posting and a monthly report." },
    ],
    reports: ["Monthly community report", "Mod log summary"],
    fit: ["Products with an active user base", "Brands that keep getting asked the same questions", "Teams launching often and wanting a home for feedback"],
    faqs: [
      { q: "should my brand have its own subreddit?", a: ["Only if people already talk about you. Most new brands should start by showing up in existing subreddits. A branded subreddit makes sense once you have users with questions, feedback and things to show each other."] },
      { q: "how do you create a subreddit for a business?", a: ["Pick a name people would search, write clear rules, set up flair and AutoModerator, add a wiki or FAQ, and make your staff accounts obvious. Then seed it with useful posts before you invite anyone. We handle all of that in setup."] },
      { q: "how do you grow a subreddit?", a: ["Rituals and steady posting matter more than launch-day buzz: weekly threads, fast replies, AMAs and real answers. Then invite your users and mention it in related communities where their rules allow. Expect months, not weeks."] },
      { q: "who moderates it?", a: ["We do the daily moderation, with your team as moderators too. You stay in control of the subreddit."] },
      { q: "what are the rules for running a reddit ama?", a: ["In someone else's subreddit, AMAs follow that community's rules, which often mean scheduling with the mods and verifying who is hosting. In your own subreddit, we set the format, handle verification and promote it ahead of time."] },
      { q: "can you take over an existing subreddit?", a: ["Yes, if your team already moderates it. We audit the rules and setup first, then take over the weekly work."] },
    ],
    related: ["reddit-posting", "reddit-seo"],
  },
  {
    slug: "reddit-ads",
    name: "reddit ads",
    serviceName: "Reddit Ads management",
    short: "Reddit ad campaigns that read like Reddit, aimed at the communities your buyers already read.",
    bestFor: "paid reach",
    title: "Reddit Ads Agency for B2B SaaS and Startups",
    description:
      "Reddit Ads management for B2B SaaS and startups: subreddit and interest targeting, native creative, conversion tracking and weekly tests tied to pipeline.",
    h1: "reddit ads management for b2b saas and startups",
    eyebrow: "reddit ads agency",
    intro:
      "Reddit ads work when they look like something a redditor would actually click. As a Reddit ads agency, we plan, launch and optimize campaigns aimed at the communities your buyers already read, with creative written for each one.",
    mock: "ad",
    file: "promoted-post.png",
    included: [
      { t: "campaign setup", d: "Plans start with three campaigns. Add more as you test new audiences and offers." },
      { t: "targeting", d: "Community, interest and keyword targeting built from your subreddit map." },
      { t: "native creative", d: "Headlines and copy written for each community's tone. No stock-photo banners." },
      { t: "conversion tracking", d: "Pixel and conversion setup so you can see signups and demos, not just clicks." },
      { t: "weekly optimization", d: "Bids, audiences and creative adjusted every week based on what converts." },
      { t: "comment handling", d: "People comment on Reddit ads. We help you answer them well." },
    ],
    steps: [
      { t: "plan", d: "Goals, audiences, offers and a test budget." },
      { t: "build", d: "Campaigns, creative and tracking set up and checked." },
      { t: "launch", d: "Go live, watch early results closely." },
      { t: "optimize", d: "Weekly changes and a monthly report tied to signups and pipeline." },
    ],
    reports: ["Weekly performance notes", "Monthly ads report"],
    fit: ["Products with a clear audience on Reddit", "Teams with a budget to test paid reach", "Launches that need a push beyond organic"],
    faqs: [
      { q: "do reddit ads work?", a: ["They can, when targeting follows real communities and the creative reads like a post, not a banner. They tend to work best next to organic presence, so people who click find you in threads too."] },
      { q: "are reddit ads worth it for b2b?", a: ["For many B2B products, yes: developers, IT, security, data and marketing buyers all have active communities. We start with a small test and judge it on cost per signup or demo, not clicks."] },
      { q: "how much do reddit ads cost?", a: ["Reddit ads run on an auction, so cost depends on your audience, format and goal. We set a test budget with you, then report what each signup or demo actually cost. Your ad budget is separate from our management fee."] },
      { q: "can reddit ads target specific subreddits?", a: ["Yes. Reddit lets you target communities as well as interests and keywords. We build the targeting from your subreddit map so ads show up where your buyers already spend time."] },
      { q: "do you handle the comments on our ads?", a: ["Yes, we monitor ad comments and help you reply, because an ignored comment can sink a good ad."] },
    ],
    related: ["reddit-seo", "reddit-posting"],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

export type Audience = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  file: string;
  plays: Item[];
  subreddits: string[];
  services: string[];
  faqs: Faq[];
};

export const AUDIENCES: Audience[] = [
  {
    slug: "reddit-marketing-for-saas",
    name: "for saas & b2b",
    title: "Reddit Marketing for SaaS and B2B Companies",
    description:
      "Reddit marketing for B2B SaaS: find the subreddits your buyers use, answer \"best tool\" threads from your own account and show up in AI answers.",
    h1: "reddit marketing for saas and b2b companies",
    eyebrow: "for saas and b2b",
    intro:
      "B2B buyers ask peers before they ask sales. On Reddit that looks like \"best X for a 20-person team\" and \"X vs Y, which one?\" threads, and those threads rank on Google and feed AI answers. We get your SaaS into them from your own, clearly labeled account.",
    file: "best-tool-thread.png",
    plays: [
      { t: "comparison threads", d: "Be the fair, disclosed answer in \"X vs Y\" and \"alternative to\" threads, where buyers are closest to deciding." },
      { t: "use cases and integrations", d: "Answer \"does anything do X with Y?\" questions with specifics, which is exactly the context AI assistants pick up." },
      { t: "switching threads", d: "When someone is leaving a competitor, a helpful, honest reply beats any ad." },
      { t: "support in public", d: "Answer brand mentions and complaints fast, in the open, from your labeled account." },
      { t: "founder posts and AMAs", d: "Where a subreddit allows it, a founder's story or AMA builds more trust than any landing page." },
      { t: "ai answer tracking", d: "We track which threads ChatGPT, Perplexity and AI Overviews cite when buyers ask about your category." },
    ],
    subreddits: ["r/SaaS", "r/startups", "r/Entrepreneur", "r/ProductManagement", "r/sysadmin", "r/devops", "r/webdev", "r/marketing", "r/sales", "r/smallbusiness"],
    services: ["reddit-seo", "reddit-posting", "reddit-ads"],
    faqs: [
      { q: "is reddit good for b2b marketing?", a: ["Yes, for products whose buyers ask peers in public, which covers most software. Reddit threads rank on Google for buying searches and feed AI answers, so being in them works long after the post. It does not work as a place to drop links."] },
      { q: "how do you promote a saas product on reddit?", a: ["Find the threads where buyers describe the problem you solve, answer them helpfully from a labeled brand account, and mention the product only where it genuinely fits. Follow each subreddit's rules and skip the ones that ban vendors."] },
      { q: "which subreddits are best for saas companies?", a: ["The ones your buyers use, which are rarely just r/SaaS. Developer tools live in r/webdev and r/devops, IT tools in r/sysadmin, marketing tools in r/marketing. Our audit maps the right ones for you, with their rules."] },
      { q: "are reddit ads worth it for saas?", a: ["Often, when targeting follows real communities and the creative reads like a post. Start with a small test and judge it on cost per signup or demo."] },
      { q: "how do reddit threads affect which software chatgpt recommends?", a: ["AI assistants read the open web, and Reddit is one of the sources they cite most. If the threads about your category recommend a competitor, the AI answer often does too. Getting into those threads honestly changes the input."] },
    ],
  },
  {
    slug: "reddit-marketing-for-startups",
    name: "for startups",
    title: "Reddit Marketing for Startups and Founders",
    description:
      "Reddit marketing for pre-seed to Series A startups in AI, devtools, fintech and SaaS. Find your first users in the right subreddits without risking bans.",
    h1: "reddit marketing for startups, from first users to series a",
    eyebrow: "for startups and founders",
    intro:
      "Launched, got a spike, then silence? Reddit is where your first hundred users are already asking for what you built. We help founders show up there without getting banned, and turn it into a channel that keeps working after launch day.",
    file: "first-100-users.png",
    plays: [
      { t: "find your first users", d: "Threads where people describe the exact problem you solve, found daily and handed to you with context." },
      { t: "launch the right way", d: "The subreddits that allow launches, their show-off days and flair, and posts written to fit each one." },
      { t: "founder account or brand account", d: "When to post as yourself and when as the company, and how to disclose either way." },
      { t: "feedback in public", d: "Turn early threads into roadmap input, and show people you listened." },
      { t: "get into ai answers early", d: "New categories get defined in threads. Be in them before the AI answers settle on who to recommend." },
      { t: "light on founder time", d: "We do the research and drafts. You spend a little time each week approving and replying where your voice matters." },
    ],
    subreddits: ["r/startups", "r/SaaS", "r/SideProject", "r/indiehackers", "r/Entrepreneur", "r/ycombinator", "r/webdev", "r/fintech"],
    services: ["reddit-seo", "reddit-monitoring", "reddit-lead-generation"],
    faqs: [
      { q: "is reddit marketing worth it for startups?", a: ["Usually, if your users talk about the problem in public. It is cheap to start, it reaches people who are actively looking, and the threads keep working after launch. It is not worth it if you only want to drop links."] },
      { q: "how do you get your first 100 users from reddit?", a: ["Find people describing the problem in their own words, help them in the thread, and mention what you built only when it fits. Add launch posts in subreddits that allow them. A hundred users usually comes from dozens of good replies, not one viral post."] },
      { q: "can you promote your startup on reddit?", a: ["Yes, within each subreddit's rules. Some ban self-promotion, some have weekly threads for it, and Reddit's sitewide rules prohibit spam. Disclose who you are and lead with something useful."] },
      { q: "should founders post from a personal account or a brand account?", a: ["Both can work. A founder account is great for stories, AMAs and honest replies, with a clear \"I built this\". A brand account is better for support and ongoing presence. Either way, say who you are."] },
      { q: "how much founder time does reddit marketing take?", a: ["With us, a little each week: approving drafts and replying where your own voice matters. We do the research, monitoring, writing and reporting."] },
    ],
  },
];

export const NAV_LINKS: [string, string][] = [
  ["services", "/services"],
  ["how it works", "/#how"],
  ["plans", "/#plans"],
  ["faq", "/#faq"],
  ["about", "/about"],
];

// Third-party numbers, each checked against the source named (dates matter: AI citation shares move fast).
export const RECEIPTS = [
  {
    who: "reddit, inc.",
    handle: "q3 2026 results",
    num: "130.3M",
    text: "daily active uniques on Reddit in Q3 2026, up 12% year over year.",
    src: "Reddit Q3 2026 results, Oct 29, 2026",
    href: "https://www.sec.gov/Archives/edgar/data/0001713445/000171344526000114/earningspressreleaseq326.htm",
    tint: "green",
  },
  {
    who: "semrush",
    handle: "230K prompts, 13 weeks",
    num: "top 5",
    text: "Reddit was one of the five most-cited domains on ChatGPT, Google AI Mode and Perplexity.",
    src: "Semrush, Jul to Oct 2025",
    href: "https://www.semrush.com/blog/most-cited-domains-ai/",
    tint: "blue",
  },
  {
    who: "semrush",
    handle: "organic rankings",
    num: "~263M",
    text: "Google keywords Reddit ranks for, per Semrush's organic rankings data.",
    src: "Semrush, Nov 2025",
    href: "https://www.semrush.com/blog/most-cited-domains-ai/",
    tint: "red",
  },
  {
    who: "reddit, inc.",
    handle: "q3 2026 results",
    num: "515.2M",
    text: "weekly active uniques in the same quarter, up 16% year over year.",
    src: "Reddit Q3 2026 results, Oct 29, 2026",
    href: "https://www.sec.gov/Archives/edgar/data/0001713445/000171344526000114/earningspressreleaseq326.htm",
    tint: "teal",
  },
  {
    who: "reuters",
    handle: "feb 22, 2024",
    num: "~$60M/yr",
    text: "the reported value of Google's deal to license Reddit content for AI, per one source.",
    src: "Reuters (via The Star), Feb 22, 2024",
    href: "https://www.thestar.com.my/tech/tech-news/2024/02/22/exclusive-reddit-in-ai-content-licensing-deal-with-google-sources-say",
    tint: "peach",
  },
  {
    who: "semrush",
    handle: "sept 2025",
    num: "overnight",
    text: "ChatGPT suddenly cited Reddit far less in Sept 2025. AI visibility is volatile, so we track it every week.",
    src: "Semrush, Nov 2025",
    href: "https://www.semrush.com/blog/most-cited-domains-ai/",
    tint: "yellow",
  },
] as const;

export const HOME_FAQS: Faq[] = [
  {
    q: "what does a reddit marketing agency do?",
    a: [
      "A Reddit marketing agency gets your brand into the Reddit conversations where buyers compare options: the threads Google ranks, the ones AI answers cite, and the subreddits your customers read every day.",
      "For us that covers Reddit SEO and AEO strategy, posting and commenting from your brand account, daily keyword monitoring, lead discovery, subreddit management and Reddit ads. We do Reddit only.",
    ],
  },
  {
    q: "does reddit marketing work for startups and b2b?",
    a: [
      "Yes, when it is run as real participation. Founders and B2B buyers ask Reddit for honest takes before they talk to sales, and those threads often rank on Google and feed AI answers. It does not work as a place to drop links.",
    ],
  },
  {
    q: "will my brand get banned for promoting on reddit?",
    a: [
      "Bans come from spam, vote manipulation and ignoring subreddit rules. We do none of that. We read each community's rules, post from your labeled brand account, help before we mention anything, and skip threads where a brand does not belong.",
    ],
  },
  {
    q: "do you buy accounts, upvotes or reviews?",
    a: ["No. No bought or rented accounts, no upvote schemes, no fake reviews, no sockpuppets. They break Reddit's rules and they are the fastest way to lose a thread you worked for."],
  },
  {
    q: "how does reddit show up in google and ai answers?",
    a: [
      "Reddit threads rank on page one for a huge number of buying searches; per Semrush, Reddit ranks for about 263 million Google keywords. AI assistants read the same threads. In a Semrush study of 230K prompts (Jul to Oct 2025), Reddit was one of the five most-cited domains on ChatGPT, Google AI Mode and Perplexity.",
      "Those shares move a lot from month to month, so we track the threads AI answers cite for your category instead of trusting one headline number.",
    ],
  },
  {
    q: "how long does reddit marketing take to show results?",
    a: [
      "Replies in threads that already rank are visible the day they go live. Early signals usually show in the first few weeks, community trust builds over one to two months, and pipeline impact usually takes a few months. Reddit compounds. It does not spike.",
    ],
  },
  {
    q: "can you guarantee rankings or ai citations?",
    a: ["No. Google and AI systems decide what they show, and anyone who guarantees it is guessing. We commit to the work and to reporting that shows exactly what moved."],
  },
  {
    q: "how much does a reddit marketing agency cost?",
    a: [
      "It depends on how many subreddits, keywords and posts you need. Our services are billed monthly, subreddit setup is a one-time fee, and Reddit ad budgets are separate. The Reddit SEO and AEO audit is the usual place to start. We scope it on a free call.",
    ],
  },
  {
    q: "how do you measure results?",
    a: [
      "Threads you are in (with permalinks), where those threads rank on Google, whether AI answers cite them, share of voice against competitors, qualified leads, and the signups or demos you can trace back. Drafts and removed comments do not count.",
    ],
  },
  {
    q: "do you work with every product?",
    a: ["No. If your buyers are not on Reddit, or the product is not ready for honest feedback, we will tell you on the first call."],
  },
];

export const PLANS = [
  {
    name: "audit",
    line: "the plan. you run it.",
    best: "best for in-house teams",
    big: "1 playbook",
    unit: "refreshed every month",
    cta: "start with the audit",
    items: ["reddit seo and aeo audit", "subreddit map and rules sheet", "thread targets and narratives", "keywords and posting windows"],
  },
  {
    name: "always on",
    line: "we run reddit for you.",
    best: "best for steady growth",
    big: "every day",
    unit: "posts, comments, monitoring, leads",
    cta: "get always on",
    popular: true,
    items: ["everything in audit", "branded posts and comments weekly", "daily keyword monitoring", "qualified lead discovery", "weekly report with permalinks"],
  },
  {
    name: "community",
    line: "your own subreddit, run right.",
    best: "best for products with users",
    big: "r/yours",
    unit: "setup once, run weekly",
    cta: "get community",
    items: ["subreddit setup", "weekly rituals and AMAs", "daily moderation", "growth and posting", "monthly community report"],
  },
];
