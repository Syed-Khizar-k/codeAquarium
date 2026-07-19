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
};

export const projects: Project[] = [
 {
  slug: "reserve-karu",
  title: "Reserve Karu",
  tag: "Our Product",
  image: "/mockups/reservekaru.png",
  excerpt:
   "A SaaS platform that helps restaurants and cafes manage reservations, table availability, and customer interactions in real time.",
  summary:
   "Code Aquarium Technologies built Pakistan's first restaurant table reservation SaaS platform, helping eateries manage bookings, optimize table usage, and enhance customer service through a real-time dashboard.",
  services: ["Web Development", "Backend Development", "High-End SaaS"],
  results: [
   { value: "5min → 10s", label: "Automated Reservation Process" },
   { value: "-40%", label: "No Show Rate Decrease" },
   { value: "99%", label: "User satisfaction" },
  ],
  challenge:
   "Restaurants and cafes struggled with manual reservation systems, leading to overbookings, missed opportunities, and poor customer experiences. They needed a digital solution to streamline reservations and improve service quality.",
  approach:
   "Code Aquarium Technologies stepped in with a SaaS platform that streamlines the reservation process and enhances customer engagement. The platform features a real-time dashboard for managing bookings, table availability, and customer interactions, ensuring a seamless experience for both restaurant staff and patrons.",
 },
 {
  slug: "hyperg-internet",
  title: "HyperG Internet",
  tag: "Web Development",
  image: "/mockups/HyperG.png",
  excerpt:
   "A regional classified internet-packages provider with thousands of users searching for the best plans in their area.",
  summary:
   "HyperG needed a fast, reliable platform to serve thousands of users searching for internet packages. We built a modern web experience with a Drupal CMS for easy content management and advanced search that helps users find the best package quickly.",
  services: ["Web Development", "Backend Integrations", "UX/UI Design"],
  results: [
   { value: "2.4s → 0.8s", label: "Median page load" },
   { value: "100%", label: "Responsive design" },
   { value: "99.98%", label: "Uptime" },
  ],
  challenge:
   "Build a modern, fast, responsive experience from scratch for a regional classified internet-packages provider serving thousands of users comparing plans in their area.",
  approach:
   "We shipped a performant web experience backed by Drupal for content management, and implemented advanced search and filtering so users find the best package in seconds.",
 },
 {
  slug: "shifts-swaps",
  title: "Shifts Swaps",
  tag: "SaaS & Web Development",
  image: "/mockups/shift-swap.png",
  excerpt:
   "A corporate-grade SaaS that lets employees swap shifts with colleagues inside their company — easier scheduling, better work-life balance.",
  summary:
   "Shifts Swaps needed a user-friendly platform to facilitate shift swapping among employees. We developed a corporate-level SaaS application that streamlines the whole process, letting users find and swap shifts with colleagues securely within their organization.",
  services: ["Web Development", "Figma-to-Code", "SaaS Development"],
  results: [
   { value: "+52%", label: "Dashboard speed" },
   { value: "99%", label: "Accessibility score" },
   { value: "End-to-End", label: "Encrypted communication" },
  ],
  challenge:
   "Managing shift swaps across a large workforce was manual and error-prone, making it hard for employees to trade shifts and maintain work-life balance.",
  approach:
   "We built a secure, accessible SaaS dashboard with end-to-end encryption, translating the Figma designs pixel-perfectly into a fast, responsive application.",
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
  excerpt:
   "A telemedicine platform for online consultations, prescriptions, lab tests, and treatments — with home delivery, end to end.",
  summary:
   "MyGoToDoc needed a seamless, trustworthy telehealth experience from booking to delivery. We unified consultations, prescriptions, and lab orders into one fast, compliant platform patients actually complete.",
  services: ["Web Development", "UX/UI Design", "DevOps & Cloud"],
  results: [
   { value: "+63%", label: "Completed consults" },
   { value: "< 5 min", label: "Time to booking" },
   { value: "HIPAA", label: "Compliant" },
  ],
  challenge:
   "Disconnected tools for booking, prescriptions, and delivery created a clunky, low-trust patient journey with high drop-off.",
  approach:
   "We unified the full telehealth journey into one secure, HIPAA-compliant platform with a frictionless booking flow — lifting completed consultations by 63%.",
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
  tag: "SaaS & Web Development",
  image: "/mockups/Dosta.png",
  excerpt:
   "An on-demand marketplace connecting customers with local services through a fast, intuitive booking experience.",
  summary:
   "Dosta needed a marketplace that felt effortless for both customers and providers. We built a responsive platform with real-time booking, secure payments, and a clean, trustworthy interface.",
  services: ["Web Development", "SaaS Development", "UX/UI Design"],
  results: [
   { value: "+49%", label: "Booking completion" },
   { value: "1.1s", label: "Median load" },
   { value: "4.8★", label: "User rating" },
  ],
  challenge:
   "Fragmented, clunky booking flows made it hard for customers to trust the marketplace and for providers to fill their schedules.",
  approach:
   "We designed a frictionless, mobile-first marketplace with real-time availability and secure payments — lifting completed bookings by nearly half.",
 },
 {
  slug: "wash-and-details",
  title: "Wash & Details",
  tag: "Web Development",
  image: "/mockups/WashandDetails.png",
  excerpt:
   "An online booking platform for mobile car wash and auto-detailing services, built for speed and simplicity.",
  summary:
   "Wash & Details wanted customers to book a detail in a few taps. We built a fast, mobile-first site with real-time scheduling and a polished brand experience that converts.",
  services: ["Web Development", "UX/UI Design", "Digital Marketing"],
  results: [
   { value: "+41%", label: "Online bookings" },
   { value: "0.9s", label: "Median load" },
   { value: "-35%", label: "Phone booking load" },
  ],
  challenge:
   "A phone-first booking process created friction and lost customers who wanted to schedule a wash instantly online.",
  approach:
   "We designed a streamlined, mobile-first booking flow with real-time scheduling — lifting online bookings while cutting phone volume by a third.",
 },
 {
  "slug": "rocket-attendance",
  "title": "Rocket Attendance",
  "tag": "SaaS & Web Development",
  "image": "",
  "excerpt": "A tamper-proof, AI-driven workforce attendance and compliance SaaS built specifically for GCC construction worksites.",
  "summary": "Rocket Attendance replaces manual paper musters and traditional biometric hardware on construction sites with a robust mobile-first solution. Using on-device face matching, offline syncing, and precise geofencing, it gives project managers real-time workforce visibility while using AI to optimize manpower distribution and prevent expensive compliance fines.",
  "services": ["Frontend Development", "AI Integrations", "SaaS Development", "Mobile App Development"],
  "results": [
    { "value": "2–4%", "label": "Payroll Recovered from Buddy-Punching" },
    { "value": "AED 150K", "label": "Visa Overstay Fines Avoided per Year" },
    { "value": "30 min", "label": "Monthly Reporting—Down from 3 Days" }
  ],
  "challenge": "GCC construction site managers heavily relied on manual paper muster sheets and easily cheated biometric thumbs to track thousands of multi-sponsor workers. This lack of visibility led to rampant 'buddy-punching,' unapproved off-site sign-ins, delayed monthly payroll reporting, and massive AED 250/day fines due to un-tracked visa and labor card expiries.",
  "approach": "Code Aquarium Technologies developed a robust, multi-lingual SaaS platform featuring an on-device, offline-capable AI facial recognition app for supervisors' phones alongside a comprehensive web dashboard. The system integrates KML geofencing to prevent out-of-bounds check-ins, automated document countdown watchtowers, and deterministic AI insights that suggest optimal trade reallocations across active jobsites."
}
];

export function getProject(slug: string) {
 return projects.find((p) => p.slug === slug);
}
