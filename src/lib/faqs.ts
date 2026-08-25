/**
 * FAQ content — visible on the page AND emitted as FAQPage schema.
 *
 * Answers are written "answer-first": the first sentence directly answers the
 * question (best for Google featured snippets, People-Also-Ask, and citation
 * by AI search engines like ChatGPT, Perplexity, and Google AI Overviews),
 * followed by supporting detail with relevant entities/keywords.
 */
import type { QA } from "@/lib/seo";

/** Homepage / agency-level questions (broad, high-intent). */
export const homeFaqs: QA[] = [
 {
  q: "What does Code Aquarium Technologies do?",
  a: "Code Aquarium Technologies is a standalone digital technology company that builds custom software, AI systems, and growth engines. Our services span web development, artificial intelligence and automation, digital marketing and SEO, DevOps and cloud, data engineering, and UX/UI design — everything a startup or established brand needs to design, build, and scale a digital product.",
 },
 {
  q: "Where is Code Aquarium Technologies based, and do you work with international clients?",
  a: "Code Aquarium Technologies is headquartered in Lahore, Pakistan, and works with clients worldwide. We collaborate remotely with startups and companies across North America, Europe, the Middle East, and Australia, with overlapping working hours and clear async communication.",
 },
 {
  q: "How much does it cost to build a website or software product?",
  a: "Most projects fall between a few thousand dollars for a focused marketing website and higher five-figure budgets for a full custom software or SaaS platform. The exact cost depends on scope, integrations, and timeline — we give a fixed, itemized quote after a free strategy consultation so there are no surprises.",
 },
 {
  q: "How long does a typical project take?",
  a: "A marketing website typically ships in 3–6 weeks, while a custom web app or SaaS MVP usually takes 8–16 weeks. We work in fast, weekly iterations so you see progress continuously rather than waiting months for a single reveal.",
 },
 {
  q: "What technologies does Code Aquarium Technologies use?",
  a: "We build on a modern stack — Next.js, React, and TypeScript on the front end; Node.js and Python on the back end; and AWS, GCP, or Azure for cloud infrastructure. For AI we integrate leading large language models, and for data we use modern warehouses and ETL pipelines.",
 },
 {
  q: "Do you work with startups and small businesses?",
  a: "Yes. We partner with early-stage startups, funded scale-ups, and established brands alike. Our small senior team means you work directly with engineers and designers — no junior benches or hand-offs — which keeps quality high and budgets efficient.",
 },
 {
  q: "Do you offer a free consultation?",
  a: "Yes. We offer a free 30-minute strategy consultation where we map the fastest path from your idea to launch and recommend where we can add the most value. You can book a time that suits you on our free consultation page.",
 },
];

/** Per-service FAQs, keyed by service slug. */
export const serviceFaqs: Record<string, QA[]> = {
 "web-development": [
  {
   q: "What web development services does Code Aquarium Technologies offer?",
   a: "We design and build marketing websites, web applications, SaaS platforms, and e-commerce storefronts. Every build is engineered for speed, accessibility, SEO, and conversion using Next.js, React, and TypeScript.",
  },
  {
   q: "Why choose Next.js for a website or web app?",
   a: "Next.js delivers sub-second load times, excellent Core Web Vitals, and built-in SEO advantages like server-side rendering and static generation. That means faster pages, better Google rankings, and a smoother experience than a typical WordPress or page-builder site.",
  },
  {
   q: "How much does a custom website cost?",
   a: "A custom marketing website generally starts in the low thousands, while a complex web application scales with features and integrations. We provide a fixed quote after understanding your goals in a free consultation.",
  },
  {
   q: "Do you redesign or rebuild existing websites?",
   a: "Yes. We frequently rebuild slow, dated, or hard-to-maintain sites on a modern stack — improving load times, SEO, and conversion while preserving your brand and search equity.",
  },
 ],
 "artificial-intelligence": [
  {
   q: "What AI services does Code Aquarium Technologies provide?",
   a: "We build practical, production-ready AI — custom chatbots and copilots, workflow automation, and document intelligence — wired directly into the tools your team already uses. Every solution is measured on hours saved and accuracy gained.",
  },
  {
   q: "What is an AI copilot, and how can it help my business?",
   a: "An AI copilot is an assistant grounded in your own data and knowledge base that answers questions, drafts work, and automates repetitive tasks. It reduces manual busywork, speeds up support and operations, and lets your team focus on high-value work.",
  },
  {
   q: "Is my company data safe when using custom AI?",
   a: "Yes. We design AI systems with secure, cost-aware model integration, private data handling, and access controls so your proprietary information stays protected and is never used to train public models.",
  },
  {
   q: "Can you integrate AI into our existing software and workflows?",
   a: "Absolutely. We specialize in wiring large language models into existing stacks — CRMs, support tools, internal apps, and databases — so automation happens end-to-end without disrupting how your team works.",
  },
 ],
 "digital-marketing": [
  {
   q: "What digital marketing services do you offer?",
   a: "We run full-funnel growth engines: technical and content SEO, paid search and social acquisition, lifecycle and email automation, and analytics with conversion-rate optimization. Every channel is instrumented so spend is accountable to real ROI.",
  },
  {
   q: "How long does SEO take to show results?",
   a: "SEO typically shows meaningful movement in 3–6 months, with compounding gains after that. Technical fixes and on-page improvements can lift rankings faster, while content and authority building drive durable, long-term organic growth.",
  },
  {
   q: "Do you provide reporting and analytics?",
   a: "Yes. We set up clean analytics and full-funnel attribution so you can see exactly which campaigns drive qualified traffic, leads, and revenue — no vanity metrics, just decisions you can act on.",
  },
 ],
 "devops-cloud": [
  {
   q: "What DevOps and cloud services does Code Aquarium Technologies offer?",
   a: "We modernize infrastructure with CI/CD pipelines, cloud architecture on AWS, GCP, or Azure, observability, and hardened security. The result is reliable, automated, secure deployments your team can ship with confidence.",
  },
  {
   q: "Can you improve our uptime and deployment speed?",
   a: "Yes. We build automated CI/CD pipelines and proactive monitoring that typically achieve 99.9%+ uptime and dramatically faster, safer releases — turning risky manual deploys into a routine, one-click process.",
  },
  {
   q: "Do you help reduce cloud costs?",
   a: "We right-size infrastructure and remove waste, baking cost efficiency and security into the platform so you pay for what you actually need while staying resilient and compliant.",
  },
 ],
 "data-engineering": [
  {
   q: "What does data engineering involve?",
   a: "Data engineering is building the pipelines that collect, clean, and unify data from every source into a reliable, analytics-ready warehouse. We cover web scraping, ETL/ELT pipelines, modern data warehousing, and BI dashboards leaders actually use.",
  },
  {
   q: "Can you build automated web scraping and data pipelines?",
   a: "Yes. We build resilient, compliant web scraping and automated ETL/ELT pipelines that keep your warehouse fresh, so your dashboards and AI models always run on trustworthy, real-time data.",
  },
  {
   q: "How does clean data improve decision-making?",
   a: "Unified, reliable data removes guesswork — leaders get a single source of truth in dashboards, and AI systems produce accurate results. Clean data is the foundation for both confident decisions and effective automation.",
  },
 ],
 "ux-ui-design": [
  {
   q: "What UX/UI design services do you provide?",
   a: "We research, prototype, and design digital products people love to use — product and UX design, scalable design systems, interactive prototyping, and brand and visual identity. Every screen is crafted to reduce friction and lift conversion.",
  },
  {
   q: "What is the difference between UX and UI design?",
   a: "UX (user experience) design shapes how a product works — the flows, structure, and logic that make it intuitive — while UI (user interface) design shapes how it looks, including layout, color, and visual polish. Great products need both, and we deliver them together.",
  },
  {
   q: "Do you offer Figma-to-code and design systems?",
   a: "Yes. We translate Figma designs pixel-perfectly into fast, responsive code, and we build reusable design systems that keep your product consistent and speed up future development.",
  },
 ],
};

/** Free-consultancy booking FAQs. */
export const bookingFaqs: QA[] = [
 {
  q: "Is the strategy consultation really free?",
  a: "Yes, the 30-minute strategy consultation is completely free and there is no obligation. We use the time to understand your goals and recommend the fastest, most valuable path forward.",
 },
 {
  q: "What happens during the free consultation?",
  a: "We discuss your idea, goals, timeline, and budget, then map a clear plan and where we can add the most value. You will leave with actionable next steps whether or not you decide to work with us.",
 },
 {
  q: "How do I prepare for the call?",
  a: "Just bring your goal and any context you have — a rough brief, examples you like, or current challenges. There is nothing to prepare; the call is a relaxed, no-pressure conversation.",
 },
 {
  q: "Which time zone are the available slots shown in?",
  a: "All available time slots are displayed in your own time zone, which is detected automatically. You can also change the time zone from the selector before booking.",
 },
];
