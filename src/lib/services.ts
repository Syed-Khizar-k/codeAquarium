import type { LucideIcon } from "lucide-react";
import {
  Code2,
  BrainCircuit,
  TrendingUp,
  ServerCog,
  Database,
  Palette,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  summary: string;
  outcomes: string[];
  capabilities: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Scale With Web Development",
    short:
      "High-performance websites and apps engineered to turn casual visitors into loyal customers.",
    summary:
      "We design and build fast, accessible, search-friendly web experiences on a modern stack. From marketing sites to complex product platforms, every build is measured against real business outcomes — speed, conversion, and reliability.",
    outcomes: [
      "Sub-second load times and top-tier Core Web Vitals",
      "Conversion-focused UX that grows revenue",
      "Scalable architecture that won't buckle as you grow",
    ],
    capabilities: [
      { title: "Marketing & product sites", description: "Next.js, headless CMS, and edge delivery for instant page loads." },
      { title: "Web applications", description: "Dashboards, portals, and SaaS products built to scale securely." },
      { title: "E-commerce", description: "Storefronts and checkouts optimized for revenue and retention." },
      { title: "Performance & SEO", description: "Technical audits and rebuilds that move rankings and speed." },
    ],
  },
  {
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    title: "Automate With Artificial Intelligence",
    short:
      "Stop wasting time on manual tasks. We deploy custom AI that handles the grunt work for you.",
    summary:
      "We turn your workflows into intelligent systems — chatbots, copilots, document processing, and automations wired directly into the tools you already use. Practical AI that ships, measured on hours saved and accuracy gained.",
    outcomes: [
      "Automate repetitive, high-volume work",
      "Custom copilots trained on your data",
      "Measurable accuracy and time savings",
    ],
    capabilities: [
      { title: "AI assistants & chatbots", description: "Support and internal copilots grounded in your knowledge base." },
      { title: "Workflow automation", description: "Wire LLMs into your stack to remove manual steps end-to-end." },
      { title: "Document intelligence", description: "Extract, classify, and summarize documents at scale." },
      { title: "Model integration", description: "Secure, cost-aware integration of the latest AI models." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: TrendingUp,
    title: "Grow With Digital Marketing",
    short:
      "Data-driven campaigns that put your message in front of the people who matter most.",
    summary:
      "We build growth engines — SEO, paid, content, and lifecycle — instrumented with clean analytics so every dollar is accountable. Less guesswork, more compounding growth.",
    outcomes: [
      "Qualified traffic that actually converts",
      "Full-funnel attribution you can trust",
      "Compounding organic and paid growth",
    ],
    capabilities: [
      { title: "SEO & content", description: "Technical SEO and content that ranks and earns trust." },
      { title: "Paid acquisition", description: "Search and social campaigns tuned to ROI, not vanity metrics." },
      { title: "Lifecycle & email", description: "Automations that nurture, convert, and retain customers." },
      { title: "Analytics & CRO", description: "Clean measurement and experiments that lift conversion." },
    ],
  },
  {
    slug: "devops-cloud",
    icon: ServerCog,
    title: "Secure With DevOps & Cloud",
    short:
      "Bulletproof reliability. We optimize your infrastructure for uptime, speed, and security.",
    summary:
      "We modernize infrastructure with automated pipelines, observability, and hardened security — so your team ships confidently and sleeps at night. Reliability engineered in, not bolted on.",
    outcomes: [
      "99.9%+ uptime with proactive monitoring",
      "Faster, safer releases via CI/CD",
      "Security and cost baked into the platform",
    ],
    capabilities: [
      { title: "CI/CD pipelines", description: "Automated build, test, and deploy for fearless shipping." },
      { title: "Cloud architecture", description: "Right-sized, resilient infrastructure on AWS, GCP, or Azure." },
      { title: "Observability", description: "Logging, metrics, and alerting so nothing slips through." },
      { title: "Security & compliance", description: "Hardening, secrets management, and audit-ready practices." },
    ],
  },
  {
    slug: "data-engineering",
    icon: Database,
    title: "Decide With Data Engineering",
    short:
      "Turn the web and your systems into clean, actionable intel you can lead with.",
    summary:
      "We build pipelines that collect, clean, and unify your data — from web scraping to warehouses to dashboards — so decisions are grounded in reliable, real-time truth.",
    outcomes: [
      "Reliable, unified data from every source",
      "Automated scraping and enrichment",
      "Dashboards leaders actually use",
    ],
    capabilities: [
      { title: "Web scraping", description: "Resilient, compliant data collection at scale." },
      { title: "Data pipelines", description: "ETL/ELT that keeps your warehouse fresh and trustworthy." },
      { title: "Warehousing", description: "Modern data stacks tuned for analytics and AI." },
      { title: "Dashboards & BI", description: "Clear reporting that turns data into decisions." },
    ],
  },
  {
    slug: "ux-ui-design",
    icon: Palette,
    title: "Convert With UX/UI Design",
    short:
      "Eliminate friction. We design intuitive interfaces that make buying the easiest path.",
    summary:
      "We research, prototype, and design products people love to use. Every screen is crafted to reduce friction and guide users toward the actions that grow your business.",
    outcomes: [
      "Interfaces that lift conversion and retention",
      "Design systems that scale with your product",
      "Research-backed decisions, not guesswork",
    ],
    capabilities: [
      { title: "Product & UX design", description: "Flows and interfaces validated with real users." },
      { title: "Design systems", description: "Reusable components that keep your product consistent." },
      { title: "Prototyping", description: "Interactive prototypes to test before you build." },
      { title: "Brand & visual", description: "Identity and visual language that feels unmistakably you." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
