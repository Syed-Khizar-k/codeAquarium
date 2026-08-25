export type Project = {
 slug: string;
 title: string;
 tag: string;
 /** path to the mockup screenshot under /public/mockups */
 image: string;
 excerpt: string;
 summary: string;
 services: string[];
 results: { value: string; label: string }[];
 challenge: string;
 approach: string;
 /** public URL of the live product, when it's shipped */
 url?: string;
 /** year(s) the project was delivered */
 year?: string;
 /** client region */
 client?: string;
 /** frontend / backend / infra the project runs on */
 stack?: string[];
};

export const projects: Project[] = [
 {
  slug: "reserve-karu",
  title: "Reserve Karu",
  tag: "Our Product",
  image: "/mockups/reservekaru.png",
  url: "https://www.reservekaru.com/",
  year: "2026",
  client: "Pakistan",
  stack: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Framer Motion",
   "Node.js",
   "Supabase",
  ],
  excerpt:
   "A SaaS platform that helps restaurants and cafes manage reservations, table availability, and customer interactions in real time.",
  summary:
   "Code Aquarium Technologies built Pakistan's first restaurant table reservation SaaS platform, helping eateries manage bookings, optimize table usage, and enhance customer service through a real-time dashboard.",
  services: ["Web Development", "Backend Development", "High-End SaaS"],
  results: [
   { value: "5min → 10s", label: "Automated Reservation Process" },
   { value: "-40%", label: "No Show Rate Decrease" },
   { value: "2.5k+", label: "Monthly active users" },
  ],
  challenge:
   "Restaurants and cafes struggled with manual reservation systems, leading to overbookings, missed opportunities, and poor customer experiences. They needed a digital solution to streamline reservations and improve service quality.",
  approach:
   "Code Aquarium Technologies stepped in with a SaaS platform that streamlines the reservation process and enhances customer engagement. The platform features a real-time dashboard for managing bookings, table availability, and customer interactions, ensuring a seamless experience for both restaurant staff and patrons — and has scaled past 2,500 monthly active users.",
 },
 {
  slug: "hyperg-internet",
  title: "HyperG Internet",
  tag: "Web Development",
  image: "/mockups/HyperG.png",
  url: "https://www.hyperginternet.com/",
  year: "2025",
  client: "United States",
  stack: [
   "Next.js",
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Node.js",
   "Elasticsearch",
   "REST APIs",
  ],
  excerpt:
   "A regional classified internet-packages provider with thousands of users searching for the best plans in their area.",
  summary:
   "HyperG needed a fast, reliable platform to serve thousands of users searching for internet packages. We built a modern Next.js experience with an Elasticsearch-backed search that helps users find the best package in their area in seconds.",
  services: ["Web Development", "Backend Integrations", "UX/UI Design"],
  results: [
   { value: "2.4s → 0.8s", label: "Median page load" },
   { value: "100%", label: "Responsive design" },
   { value: "99.98%", label: "Uptime" },
  ],
  challenge:
   "Build a modern, fast, responsive experience from scratch for a regional classified internet-packages provider serving thousands of users comparing plans in their area.",
  approach:
   "We shipped a performant Next.js front end against a Node.js REST API, converted the Figma designs pixel-perfectly, and implemented Elasticsearch-powered search and filtering so users find the best package in seconds — then tuned Core Web Vitals, SEO, Analytics, and Search Console on top.",
 },
 {
  slug: "shifts-swaps",
  title: "Shifts Swaps",
  tag: "SaaS & Web Development",
  image: "/mockups/shift-swap.png",
  url: "https://shiftsswaps.com/",
  year: "2025",
  client: "United States",
  stack: [
   "Next.js",
   "React",
   "TypeScript",
   "Tailwind CSS",
   "SCSS",
   "Material UI",
   "PostgreSQL",
   "Elasticsearch",
   "Socket.IO",
  ],
  excerpt:
   "A corporate-grade SaaS that lets employees swap shifts with colleagues inside their company — easier scheduling, better work-life balance.",
  summary:
   "Shifts Swaps needed a user-friendly platform to facilitate shift swapping among employees. We developed a corporate-level SaaS application with role-based dashboards and real-time updates over WebSockets, letting users find and swap shifts with colleagues securely within their organization.",
  services: ["Web Development", "Figma-to-Code", "SaaS Development"],
  results: [
   { value: "+52%", label: "Dashboard speed" },
   { value: "Real-time", label: "WebSocket swap updates" },
   { value: "Role-based", label: "Access across the org" },
  ],
  challenge:
   "Managing shift swaps across a large workforce was manual and error-prone, making it hard for employees to trade shifts and maintain work-life balance.",
  approach:
   "We built a secure SaaS dashboard on Next.js and PostgreSQL with role-based logins, Elasticsearch-backed lookups, Socket.IO for live swap activity, and a private SMTP pipeline for notifications — translating the Figma designs pixel-perfectly into a fast, responsive application.",
 },
 {
  slug: "rocketops-ai",
  title: "RocketOps AI",
  tag: "AI & Automation",
  image: "/mockups/RocketOpsAi.png",
  excerpt:
   "An AI operations platform that automates repetitive business workflows and puts a custom copilot at every team's fingertips.",
  summary:
   "RocketOps AI set out to remove manual busywork from day-to-day operations. We built an AI-powered platform with automated workflows and a custom copilot grounded in each customer's data, wired into the tools teams already use.",
  services: ["AI & Automation", "Web Development", "DevOps & Cloud"],
  results: [
   { value: "-65%", label: "Manual ops time" },
   { value: "24/7", label: "Automated workflows" },
   { value: "3x", label: "Faster turnaround" },
  ],
  challenge:
   "Teams were drowning in repetitive, high-volume tasks that slowed operations and pulled skilled people away from meaningful work.",
  approach:
   "We deployed custom AI copilots and automation pipelines that plug into existing systems — cutting manual operations time by nearly two-thirds and running around the clock.",
 },
 {
  slug: "mygotodoc-telehealth",
  title: "MyGoToDoc",
  tag: "Web Development",
  image: "/mockups/MyGoToDoc.png",
  url: "https://mygotodoc.com/",
  year: "2023–2024",
  client: "United States",
  stack: [
   "HTML5",
   "CSS",
   "JavaScript",
   "jQuery",
   "Drupal 10",
   "MySQL",
   "Vimeo Player",
   "Zoho Chat",
  ],
  excerpt:
   "A large-scale telehealth, e-commerce, and course platform — consultations, prescriptions, lab tests, and treatments with home delivery, end to end.",
  summary:
   "MyGoToDoc needed a seamless, trustworthy experience spanning telehealth consultations, an online store, and a full video course library. We unified consultations, prescriptions, lab orders, and learning into one fast Drupal-backed platform patients actually complete.",
  services: [
   "Web Development",
   "UX/UI Design",
   "Figma-to-Code",
   "DevOps & Cloud",
  ],
  results: [
   { value: "+63%", label: "Completed consults" },
   { value: "< 5 min", label: "Time to booking" },
   { value: "3-in-1", label: "Store, consults & courses" },
  ],
  challenge:
   "Disconnected tools for booking, prescriptions, e-commerce, and course delivery created a clunky, low-trust patient journey with high drop-off.",
  approach:
   "We built the full journey on Drupal 10 and MySQL — consultations, the product store, and a Vimeo-powered course player — with Zoho Chat for live support and a dedicated SMTP pipeline for transactional mail, all converted from Figma into a frictionless booking flow that lifted completed consultations by 63%.",
 },
 {
  slug: "lums-university",
  title: "LUMS University",
  tag: "Web Development",
  image: "/mockups/lums.png",
  url: "https://www.lums.edu.pk/",
  year: "2024",
  client: "Pakistan",
  stack: [
   "HTML5",
   "CSS",
   "Bootstrap",
   "JavaScript",
   "jQuery",
   "Drupal 10",
   "Drupal APIs",
  ],
  excerpt:
   "A full website revamp and new LMS features for one of Pakistan's leading universities, serving students, faculty, and applicants at scale.",
  summary:
   "LUMS needed its flagship web presence rebuilt and extended with new learning-management features. We revamped the site on Drupal 10, restructured its information architecture, added custom dashboards and LMS modules, and tuned the whole thing for speed and search.",
  services: [
   "Web Development",
   "Backend Development",
   "UX/UI Design",
   "SEO & Performance",
  ],
  results: [
   { value: "Revamped", label: "Full site rebuild on Drupal 10" },
   { value: "New LMS", label: "Modules & dashboards shipped" },
   { value: "Faster", label: "Speed & SEO optimized" },
  ],
  challenge:
   "A sprawling university site had grown hard to navigate and slow to load, while students and faculty needed learning-management features the existing platform simply didn't offer.",
  approach:
   "We rebuilt the site on Drupal 10 with Bootstrap front-end templates, refined the content structure so programs and departments are easy to find, layered in custom LMS features and dashboards through Drupal APIs, and ran a dedicated speed and SEO optimization pass across the property.",
 },
 {
  slug: "next-orbit-solutions",
  title: "Next Orbit Solutions",
  tag: "Web Development",
  image: "/mockups/NextOrbitSol.png",
  excerpt:
   "A high-performance marketing site for an IT solutions agency, engineered to turn visitors into qualified leads.",
  summary:
   "Next Orbit needed a marketing presence as sharp as its services. We designed and built a fast, animated, conversion-focused website that showcases their capabilities and case studies.",
  services: ["Web Development", "UX/UI Design", "Digital Marketing"],
  results: [
   { value: "0.8s", label: "Median load" },
   { value: "+47%", label: "Lead conversions" },
   { value: "100/100", label: "SEO score" },
  ],
  challenge:
   "A dated site failed to communicate the agency's value or capture leads, holding back growth in a crowded market.",
  approach:
   "We built a modern, animated Next.js site with clean information architecture and strong calls to action — turning more visitors into booked strategy calls.",
 },
 {
  slug: "3d-vision-edge",
  title: "3D Vision Edge",
  tag: "UX/UI & Web Development",
  image: "/mockups/3DVisionEdge.png",
  excerpt:
   "An interactive 3D product-visualization platform that lets customers explore and configure products in real time.",
  summary:
   "3D Vision Edge wanted buyers to experience products before purchase. We built an immersive, performant 3D configurator that renders smoothly across devices and drives confident decisions.",
  services: ["UX/UI Design", "Web Development", "3D & WebGL"],
  results: [
   { value: "+58%", label: "Engagement time" },
   { value: "60fps", label: "Real-time rendering" },
   { value: "+34%", label: "Add-to-cart rate" },
  ],
  challenge:
   "Static product images left customers uncertain, hurting conversion for visually complex, configurable products.",
  approach:
   "We engineered a real-time 3D visualization and configurator optimized for the web — smooth on mobile and desktop — turning browsing into confident buying.",
 },
 {
  slug: "dosta",
  title: "Dosta",
  tag: "E-commerce & Web Development",
  image: "/mockups/Dosta.png",
  url: "https://dosta.ae/",
  year: "2025",
  client: "United Arab Emirates",
  stack: [
   "Next.js",
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Material UI",
   "shadcn/ui",
   "Framer Motion",
   "Python",
   "Django",
   "SQLite",
  ],
  excerpt:
   "A UAE e-commerce platform for vending, catering, and sweets — with live vending-machine integrations behind the storefront.",
  summary:
   "Dosta needed a storefront that felt effortless across vending, catering, and confectionery ordering. We converted 140+ Figma screens into a responsive Next.js experience backed by Django, and integrated the vending-machine APIs that keep stock and dispensing in sync.",
  services: [
   "Web Development",
   "E-commerce Development",
   "UX/UI Design",
   "Backend Integrations",
   "DevOps & Cloud",
  ],
  results: [
   { value: "140+", label: "Figma screens shipped to production" },
   { value: "Live", label: "Vending machine API integration" },
   { value: "1.1s", label: "Median load" },
  ],
  challenge:
   "Three different business lines — vending, catering, and sweets — had to live under one storefront, with real vending hardware in the loop and a design system spanning well over a hundred screens.",
  approach:
   "We built the front end in Next.js with Tailwind, Material UI, shadcn/ui, and Framer Motion, converting 140+ Figma screens into functional UI, and wired it to a Python/Django backend integrating the vending-machine APIs — then handled DevOps, Analytics, Search Console, SEO, and a full speed-optimization pass.",
 },
 {
  slug: "wash-and-details",
  title: "Wash & Details",
  tag: "Web Development",
  image: "/mockups/WashandDetails.png",
  url: "https://washanddetail.works/",
  year: "2026",
  client: "Pakistan",
  stack: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Framer Motion",
   "Semantic HTML5",
  ],
  excerpt:
   "A single-page site for a mobile car wash and auto-detailing business, built for speed and simplicity.",
  summary:
   "Wash & Details wanted customers to book a detail in a few taps. We built a fast, mobile-first single-page experience with smooth Framer Motion transitions and a polished brand presence that converts.",
  services: ["Web Development", "UX/UI Design", "Digital Marketing"],
  results: [
   { value: "+41%", label: "Online bookings" },
   { value: "0.9s", label: "Median load" },
   { value: "-35%", label: "Phone booking load" },
  ],
  challenge:
   "A phone-first booking process created friction and lost customers who wanted to schedule a wash instantly online.",
  approach:
   "We designed a streamlined, mobile-first single-page app on React and Tailwind with semantic HTML5 and Framer Motion animation — then layered on SEO, Google Analytics, Search Console, and speed optimization, lifting online bookings while cutting phone volume by a third.",
 },
 {
  slug: "structure-and-soul",
  title: "Structure & Soul",
  tag: "UX/UI & Web Development",
  image: "/mockups/structure-soul.jpg",
  url: "https://structure-soul.vercel.app/",
  year: "2026",
  client: "Pakistan",
  stack: [
   "Next.js",
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Framer Motion",
   "3D viewer libraries",
   "Semantic HTML5",
  ],
  excerpt:
   "A portfolio site for an architecture studio, with interactive 3D walkthroughs of their built work.",
  summary:
   "Structure & Soul wanted prospective clients to feel a space, not just scroll past a photo of it. We built a Next.js portfolio with 3D model viewers and motion-led storytelling that puts each project's craft front and centre.",
  services: ["UX/UI Design", "Web Development", "3D & WebGL", "SEO"],
  results: [
   { value: "Interactive", label: "3D project walkthroughs" },
   { value: "Motion-led", label: "Framer Motion storytelling" },
   { value: "Optimized", label: "Speed, SEO & Analytics" },
  ],
  challenge:
   "Architectural work is spatial, but a conventional image-grid portfolio flattens it — leaving studios unable to convey the depth and detail that wins commissions.",
  approach:
   "We built a Next.js portfolio with semantic HTML5 and Tailwind, embedded 3D viewer libraries so visitors can move through completed projects, and used Framer Motion to pace the narrative — finished with speed optimization, SEO, Google Analytics, and Search Console.",
 },
 {
  slug: "bascon-group",
  title: "Bascon Group",
  tag: "Web Development",
  image: "/mockups/bascon-group.jpg",
  url: "https://bascongroup.pk/",
  year: "2025",
  client: "Pakistan",
  stack: [
   "HTML5",
   "CSS",
   "Bootstrap",
   "JavaScript",
   "jQuery",
   "Drupal 9",
   "Drupal APIs",
  ],
  excerpt:
   "An architectural firm's website with a structured project portfolio and full analytics instrumentation.",
  summary:
   "Bascon Group needed a professional home for its architectural portfolio that the team could update themselves. We built it on Drupal 9 with a manageable project catalogue, then tuned performance, SEO, and analytics so enquiries are measurable.",
  services: [
   "Web Development",
   "Backend Development",
   "SEO & Performance",
   "Digital Marketing",
  ],
  results: [
   { value: "Self-serve", label: "Drupal-managed portfolio" },
   { value: "Tracked", label: "Analytics & Search Console" },
   { value: "Optimized", label: "Speed & SEO pass" },
  ],
  challenge:
   "The firm's work lived in scattered decks and drives, with no central, credible web presence for prospective clients — and no way to see which projects actually drove enquiries.",
  approach:
   "We built the site on Drupal 9 using Bootstrap templates and Drupal APIs so the team can publish new projects without a developer, then ran a speed-optimization and SEO pass and instrumented Google Analytics and Search Console for visibility into what converts.",
 },
 {
  slug: "rocket-attendance",
  title: "Rocket Attendance",
  tag: "SaaS & Web Development",
  image: "/mockups/rocket-attendance.jpg",
  url: "https://rocketattendance.online/",
  year: "2026",
  client: "United Arab Emirates",
  stack: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "shadcn/ui",
   "Python",
   "Django",
   "PostgreSQL",
  ],
  excerpt:
   "A tamper-proof, AI-driven workforce attendance, payroll, and compliance SaaS built specifically for GCC construction worksites.",
  summary:
   "Rocket Attendance replaces manual paper musters and traditional biometric hardware on construction sites with a robust mobile-first solution. Using on-device face matching, offline syncing, and precise geofencing, it tracks attendance and salaries for 8,000+ employees while giving project managers real-time workforce visibility.",
  services: [
   "Frontend Development",
   "AI Integrations",
   "SaaS Development",
   "Mobile App Development",
  ],
  results: [
   { value: "8,000+", label: "Employees tracked" },
   { value: "AED 150K", label: "Visa overstay fines avoided per year" },
   { value: "30 min", label: "Monthly reporting — down from 3 days" },
  ],
  challenge:
   "GCC construction site managers heavily relied on manual paper muster sheets and easily cheated biometric thumbs to track thousands of multi-sponsor workers. This lack of visibility led to rampant 'buddy-punching,' unapproved off-site sign-ins, delayed monthly payroll reporting, and massive AED 250/day fines due to un-tracked visa and labor card expiries.",
  approach:
   "Code Aquarium Technologies developed a robust, multi-lingual SaaS platform featuring an on-device, offline-capable AI facial recognition app for supervisors' phones alongside a React and Django web dashboard handling attendance and salary management for 8,000+ employees. The system integrates KML geofencing to prevent out-of-bounds check-ins, automated document countdown watchtowers, and deterministic AI insights that suggest optimal trade reallocations across active jobsites.",
 },
 {
  slug: "fuel-track-pro",
  title: "Fuel Track Pro",
  tag: "AI & SaaS",
  image: "/mockups/fuel-track-pro.jpg",
  url: "https://site-fuel-watch.lovable.app/auth",
  year: "2026",
  client: "United Arab Emirates",
  stack: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Radix UI",
   "shadcn/ui",
   "Python",
   "Django",
   "LLM integrations",
  ],
  excerpt:
   "A fuel-tracking SaaS that uses LLMs to read meter photos and log every refill automatically — no more paper logbooks.",
  summary:
   "Fuel Track Pro turns fuel management into a two-tap job. Drivers photograph the pump and the odometer; an LLM pipeline reads the meter values, validates the refill against the vehicle's history, and flags anomalies before they become losses.",
  services: [
   "AI & Automation",
   "SaaS Development",
   "Web Development",
   "Backend Development",
  ],
  results: [
   { value: "Per-refill", label: "AI-verified meter readings" },
   { value: "Automated", label: "Logging replaces paper records" },
   { value: "Flagged", label: "Anomalies caught in real time" },
  ],
  challenge:
   "Fleet fuel spend was recorded on paper slips and manual entries, making reconciliation slow and fuel theft or misreported readings almost impossible to detect after the fact.",
  approach:
   "We built a React and shadcn/ui dashboard on a Python/Django backend, with an LLM layer that extracts meter and odometer readings from refill photos, cross-checks them against consumption history, and surfaces discrepancies to fleet managers as they happen.",
 },
 {
  slug: "rocrev-ai",
  title: "RocRev AI",
  tag: "AI & Automation",
  image: "",
  url: "https://rocrev.ai/",
  year: "2026",
  client: "United Arab Emirates",
  stack: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Python",
   "Django",
   "PostgreSQL",
   "Grok SDK",
   "Gemini API",
   "n8n",
  ],
  excerpt:
   "An AI revenue engine that scrapes fresh leads daily and works them with automated voice calling — pipeline that builds itself.",
  summary:
   "RocRev AI is a revenue engine for teams that can't afford an SDR floor. It scrapes and enriches leads every day, qualifies them with LLMs, and runs automated voice outreach — with n8n orchestrating the whole pipeline end to end.",
  services: [
   "AI & Automation",
   "SaaS Development",
   "Backend Development",
   "DevOps & Cloud",
  ],
  results: [
   { value: "Daily", label: "Automated lead scraping" },
   { value: "AI voice", label: "Automated outbound calling" },
   { value: "n8n", label: "End-to-end pipeline orchestration" },
  ],
  challenge:
   "Sales teams burn their best hours on list building and first-touch calls — work that is high-volume, low-judgement, and expensive to staff, leaving qualified pipeline permanently under-served.",
  approach:
   "We built a Django and PostgreSQL platform that scrapes and enriches leads daily, applies Grok and Gemini models for qualification and messaging, and drives automated voice outreach — with n8n orchestrating every hand-off so the pipeline runs without a human in the loop.",
 },
];

export function getProject(slug: string) {
 return projects.find((p) => p.slug === slug);
}
