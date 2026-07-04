export type Project = {
 slug: string;
 title: string;
 tag: string;
 logoInitials: string;
 excerpt: string;
 summary: string;
 services: string[];
 results: { value: string; label: string }[];
 challenge: string;
 approach: string;
};

export const projects: Project[] = [
 {
  slug: "hyperg-internet",
  title: "HyperG Internet",
  tag: "Web Development",
  logoInitials: "RM",
  excerpt:
   "A regional Classified Internet Packages provider website with a thousands of users searching the Best Packages in their area. ",
  summary:
   "Reefside is a high-traffic marketplace and community hub. We rebuilt the platform for speed and scale, unifying classifieds, listings, and editorial content in one blazing-fast experience.",
  services: ["Web Development", "DevOps & Cloud", "UX/UI Design"],
  results: [
   { value: "2.4s → 0.8s", label: "Median page load" },
   { value: "+38%", label: "Listing conversions" },
   { value: "99.98%", label: "Uptime" },
  ],
  challenge:
   "Legacy infrastructure buckled under peak traffic, and a fragmented UX made listings hard to find. Growth had stalled against slow pages and rising bounce rates.",
  approach:
   "We migrated to a modern edge-rendered stack, redesigned core browse and listing flows, and introduced automated CI/CD with full observability — cutting load times by two-thirds while handling record traffic.",
 },
 {
  slug: "meridian-university",
  title: "Meridian University",
  tag: "Web Development",
  logoInitials: "MU",
  excerpt:
   "A research-intensive university's digital presence, spanning admissions, five schools, and transdisciplinary programs.",
  summary:
   "Meridian needed a unified digital home for prospective students, faculty, and researchers. We delivered a scalable, accessible platform that tells each school's story.",
  services: ["Web Development", "UX/UI Design", "Digital Marketing"],
  results: [
   { value: "+52%", label: "Application starts" },
   { value: "AA", label: "Accessibility rating" },
   { value: "5", label: "Schools unified" },
  ],
  challenge:
   "Dozens of disconnected department sites created a confusing, inaccessible experience that hurt admissions and eroded the university's brand.",
  approach:
   "We built a shared design system and CMS that empowered each school to publish independently while staying on-brand, accessible, and fast.",
 },
 {
  slug: "wellspring-health",
  title: "Wellspring Health",
  tag: "AI & Automation",
  logoInitials: "WH",
  excerpt:
   "An integrative wellness provider offering naturopathic, nutrition, and functional medicine programs across multiple campuses.",
  summary:
   "Wellspring wanted to scale patient guidance without scaling headcount. We deployed AI copilots and automated intake to free clinicians for care.",
  services: ["AI & Automation", "Web Development"],
  results: [
   { value: "-60%", label: "Intake admin time" },
   { value: "24/7", label: "Patient guidance" },
   { value: "+31%", label: "Booked consults" },
  ],
  challenge:
   "Manual intake and triage overwhelmed staff, delaying care and leaving patient questions unanswered outside business hours.",
  approach:
   "We built an AI assistant grounded in Wellspring's protocols plus automated intake pipelines — cutting admin time by more than half and answering patients around the clock.",
 },
 {
  slug: "harbor-apartments",
  title: "Harbor Apartments",
  tag: "Web Development",
  logoInitials: "HA",
  excerpt:
   "A property company offering stylish, fully furnished rentals across European cities, with management services for owners.",
  summary:
   "Harbor needed a booking experience as polished as its apartments. We built a fast, multilingual platform that converts browsers into tenants.",
  services: ["Web Development", "UX/UI Design", "Digital Marketing"],
  results: [
   { value: "+44%", label: "Booking requests" },
   { value: "3", label: "Languages" },
   { value: "0.9s", label: "Median load" },
  ],
  challenge:
   "A dated site with clumsy search and no localization was losing international tenants at the discovery stage.",
  approach:
   "We designed an intuitive, multilingual booking flow with map-based search and instant availability — lifting qualified requests by 44%.",
 },
 {
  slug: "ascent-talent",
  title: "Ascent Talent",
  tag: "Data Engineering",
  logoInitials: "AT",
  excerpt:
   "An executive search and recruitment firm placing leaders across industries and career levels.",
  summary:
   "Ascent wanted to find the right candidates faster. We built data pipelines and enrichment that turned scattered signals into a searchable talent graph.",
  services: ["Data Engineering", "AI & Automation"],
  results: [
   { value: "5x", label: "Faster sourcing" },
   { value: "+27%", label: "Placement rate" },
   { value: "1M+", label: "Profiles enriched" },
  ],
  challenge:
   "Recruiters spent hours manually researching candidates across fragmented sources, slowing placements and limiting reach.",
  approach:
   "We built compliant scraping and enrichment pipelines feeding a unified talent database with AI-assisted matching — cutting sourcing time fivefold.",
 },
 {
  slug: "tidewater-insurance",
  title: "Tidewater Insurance",
  tag: "DevOps & Cloud",
  logoInitials: "TI",
  excerpt:
   "A specialist workers-compensation and workplace-safety provider serving the hospitality industry.",
  summary:
   "Tidewater needed reliable, secure systems for sensitive claims. We modernized their platform and hardened it for uptime and compliance.",
  services: ["DevOps & Cloud", "Web Development"],
  results: [
   { value: "99.99%", label: "Uptime" },
   { value: "-70%", label: "Deploy time" },
   { value: "SOC 2", label: "Audit-ready" },
  ],
  challenge:
   "Manual releases and thin monitoring risked downtime on systems handling sensitive claims data.",
  approach:
   "We introduced automated pipelines, full observability, and security hardening — enabling safe, frequent releases with audit-ready controls.",
 },
 {
  slug: "northlight-clinic",
  title: "Northlight Clinic",
  tag: "AI & Automation",
  logoInitials: "NC",
  excerpt:
   "A holistic and functional medicine practice focused on treating the root causes of patient health issues.",
  summary:
   "Northlight wanted patients to reach the right care faster. We built an AI triage assistant and streamlined the digital front door.",
  services: ["AI & Automation", "UX/UI Design"],
  results: [
   { value: "+40%", label: "Online bookings" },
   { value: "-50%", label: "Phone volume" },
   { value: "4.9★", label: "Patient rating" },
  ],
  challenge:
   "A phone-first intake process created bottlenecks and left patients unsure which program fit their needs.",
  approach:
   "We designed a guided digital intake with an AI assistant that routes patients to the right program — lifting bookings while cutting phone load in half.",
 },
 {
  slug: "puregto-telehealth",
  title: "PureGo Telehealth",
  tag: "Web Development",
  logoInitials: "PG",
  excerpt:
   "A telemedicine platform offering online consultations, prescriptions, lab tests, and holistic treatments with home delivery.",
  summary:
   "PureGo needed a seamless, trustworthy telehealth experience end-to-end. We built the consultation, prescription, and delivery flows in one platform.",
  services: ["Web Development", "DevOps & Cloud", "UX/UI Design"],
  results: [
   { value: "+63%", label: "Completed consults" },
   { value: "< 5 min", label: "Time to booking" },
   { value: "HIPAA", label: "Compliant" },
  ],
  challenge:
   "Disconnected tools for booking, prescriptions, and delivery created a clunky, low-trust patient journey.",
  approach:
   "We unified the full telehealth journey into one secure, HIPAA-compliant platform with a frictionless booking flow — lifting completed consultations by 63%.",
 },
 {
  slug: "current-compare",
  title: "Current Compare",
  tag: "Data Engineering",
  logoInitials: "CC",
  excerpt:
   "A comparison platform helping users find and select the best internet providers and plans in their area.",
  summary:
   "Current Compare lives and dies by fresh, accurate data. We built the pipelines and UX that keep plan comparisons trustworthy and fast.",
  services: ["Data Engineering", "Web Development"],
  results: [
   { value: "1.2M", label: "Plans indexed" },
   { value: "Daily", label: "Data refresh" },
   { value: "+35%", label: "Lead conversion" },
  ],
  challenge:
   "Stale, inconsistent provider data undermined user trust and hurt conversion on high-intent searches.",
  approach:
   "We built automated ingestion and validation pipelines with a fast comparison UI — keeping plan data fresh daily and lifting conversions by 35%.",
 },
];

export function getProject(slug: string) {
 return projects.find((p) => p.slug === slug);
}
