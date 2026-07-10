/**
 * Central SEO layer for Code Aquarium Technologies.
 *
 * One source of truth for business facts (NAP, geo, socials) and typed
 * schema.org JSON-LD builders. All URLs derive from `site.url`, so pointing
 * the site at a different production domain is a one-line change in site.ts.
 */
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects, type Project } from "@/lib/projects";

/** Absolute URL for a path, e.g. abs("/services") → https://…/services */
export const BASE_URL = site.url.replace(/\/$/, "");
export const abs = (path = "/") =>
 `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Stable @id anchors so schema nodes cross-reference instead of duplicating. */
export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/** Core business facts used across Organization / LocalBusiness schema. */
export const business = {
 name: site.name,
 legalName: site.legalName,
 description: site.description,
 email: site.email,
 phone: site.phone,
 // Lahore, Punjab, Pakistan — head office; the team serves clients worldwide.
 address: {
  locality: "Lahore",
  region: "Punjab",
  country: "PK",
 },
 geo: { latitude: 31.5204, longitude: 74.3587 },
 priceRange: "$$",
 foundingLocation: "Lahore, Pakistan",
 sameAs: [
  site.socials.linkedin,
  site.socials.facebook,
  site.socials.instagram,
  site.socials.github,
 ],
 /** Entity signals: what this business is knowledgeable about (for LLMs + E-E-A-T). */
 knowsAbout: [
  "Web Development",
  "Next.js Development",
  "Artificial Intelligence",
  "AI Automation",
  "AI Agents & Copilots",
  "Digital Marketing",
  "Search Engine Optimization",
  "DevOps",
  "Cloud Infrastructure",
  "Data Engineering",
  "UX/UI Design",
  "SaaS Development",
  "Custom Software Development",
  "Digital Product Development",
  "Website SEO Optimization",
 ],
};

/** The site's default sharing image (dynamic OG route). */
export const OG_IMAGE = {
 url: abs("/opengraph-image"),
 width: 1200,
 height: 630,
 alt: `${site.name} — ${site.tagline}`,
};

type Json = Record<string, unknown>;

/* ─────────────────────────────────────────────────────────────
   Organization / LocalBusiness (ProfessionalService)
   Site-wide entity node. Everything else references it by @id.
   ───────────────────────────────────────────────────────────── */
export function organizationSchema(): Json {
 return {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: business.name,
  legalName: business.legalName,
  url: abs("/"),
  logo: {
   "@type": "ImageObject",
   url: abs("/logo/codeaquarium-logo-primary.svg"),
   caption: business.name,
  },
  image: OG_IMAGE.url,
  description: business.description,
  slogan: site.tagline,
  email: business.email,
  telephone: business.phone,
  priceRange: business.priceRange,
  address: {
   "@type": "PostalAddress",
   addressLocality: business.address.locality,
   addressRegion: business.address.region,
   addressCountry: business.address.country,
  },
  geo: {
   "@type": "GeoCoordinates",
   latitude: business.geo.latitude,
   longitude: business.geo.longitude,
  },
  areaServed: [
   { "@type": "Country", name: "Pakistan" },
   { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: business.knowsAbout,
  sameAs: business.sameAs,
  contactPoint: [
   {
    "@type": "ContactPoint",
    contactType: "sales",
    email: business.email,
    telephone: business.phone,
    availableLanguage: ["English", "Urdu"],
    areaServed: "Worldwide",
   },
  ],
  makesOffer: services.map((s) => ({
   "@type": "Offer",
   itemOffered: {
    "@type": "Service",
    name: cleanServiceName(s.title),
    url: abs(`/services/${s.slug}`),
   },
  })),
  // NOTE: no `review` / `aggregateRating` here. Google does not allow an
  // organization to mark up reviews about itself (self-serving reviews), and
  // because this node is injected site-wide it would attach review markup to
  // pages that don't display reviews — which Search Console flags as invalid.
 };
}

/* ─────────────────────────────────────────────────────────────
   WebSite node — names the site as an entity for Google/LLMs.
   ───────────────────────────────────────────────────────────── */
export function websiteSchema(): Json {
 return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: abs("/"),
  name: business.name,
  description: business.description,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
 };
}

/* ─────────────────────────────────────────────────────────────
   BreadcrumbList
   ───────────────────────────────────────────────────────────── */
export function breadcrumbSchema(
 items: { name: string; path?: string }[],
): Json {
 return {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
   "@type": "ListItem",
   position: i + 1,
   name: it.name,
   ...(it.path ? { item: abs(it.path) } : {}),
  })),
 };
}

/* ─────────────────────────────────────────────────────────────
   Service
   ───────────────────────────────────────────────────────────── */
export function serviceSchema(slug: string): Json | null {
 const s = services.find((x) => x.slug === slug);
 if (!s) return null;
 return {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${abs(`/services/${s.slug}`)}#service`,
  name: cleanServiceName(s.title),
  serviceType: cleanServiceName(s.title),
  url: abs(`/services/${s.slug}`),
  description: s.summary,
  provider: { "@id": ORG_ID },
  areaServed: [
   { "@type": "Country", name: "Pakistan" },
   { "@type": "Place", name: "Worldwide" },
  ],
  hasOfferCatalog: {
   "@type": "OfferCatalog",
   name: `${cleanServiceName(s.title)} capabilities`,
   itemListElement: s.capabilities.map((c) => ({
    "@type": "Offer",
    itemOffered: {
     "@type": "Service",
     name: c.title,
     description: c.description,
    },
   })),
  },
 };
}

/* ─────────────────────────────────────────────────────────────
   ItemList — used for /services and /portfolio index pages.
   ───────────────────────────────────────────────────────────── */
export function servicesItemListSchema(): Json {
 return {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} Services`,
  itemListElement: services.map((s, i) => ({
   "@type": "ListItem",
   position: i + 1,
   url: abs(`/services/${s.slug}`),
   name: cleanServiceName(s.title),
  })),
 };
}

export function portfolioItemListSchema(): Json {
 return {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} Case Studies`,
  itemListElement: projects.map((p, i) => ({
   "@type": "ListItem",
   position: i + 1,
   url: abs(`/case-study/${p.slug}`),
   name: p.title,
  })),
 };
}

/* ─────────────────────────────────────────────────────────────
   Case study → CreativeWork / Article-style node.
   ───────────────────────────────────────────────────────────── */
export function caseStudySchema(project: Project): Json {
 return {
  "@context": "https://schema.org",
  "@type": ["CreativeWork", "Article"],
  "@id": `${abs(`/case-study/${project.slug}`)}#casestudy`,
  headline: `${project.title} — Case Study`,
  name: project.title,
  description: project.excerpt,
  image: abs(project.image),
  url: abs(`/case-study/${project.slug}`),
  about: project.services,
  keywords: project.services.join(", "),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": WEBSITE_ID },
 };
}

/* ─────────────────────────────────────────────────────────────
   FAQPage
   ───────────────────────────────────────────────────────────── */
export type QA = { q: string; a: string };

export function faqSchema(items: QA[]): Json {
 return {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
   "@type": "Question",
   name: q,
   acceptedAnswer: { "@type": "Answer", text: a },
  })),
 };
}

/* ─────────────────────────────────────────────────────────────
   WebPage wrapper — ties a page to the site + org entity.
   ───────────────────────────────────────────────────────────── */
export function webPageSchema(opts: {
 path: string;
 name: string;
 description: string;
 type?: string;
}): Json {
 return {
  "@context": "https://schema.org",
  "@type": opts.type ?? "WebPage",
  "@id": `${abs(opts.path)}#webpage`,
  url: abs(opts.path),
  name: opts.name,
  description: opts.description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en",
 };
}

/** Offer node for the free strategy consultation (price 0). */
export function consultationOfferSchema(): Json {
 return {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Free Strategy Consultation",
  description:
   "A free 30-minute strategy consultation to map the fastest path from your idea to launch.",
  price: 0,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: abs("/free-consultancy"),
  seller: { "@id": ORG_ID },
  category: "Consultation",
 };
}

/** Strip the marketing verb prefix, e.g. "Scale With Web Development" → "Web Development". */
export function cleanServiceName(title: string): string {
 return title.replace(/^(Scale|Automate|Grow|Secure|Decide|Convert) With /, "");
}

/* ─────────────────────────────────────────────────────────────
   Keyword sets — two-engine strategy: global commercial terms
   anchored on Next.js + AI, plus fast-win Lahore/Pakistan local
   terms. Kept central so titles/metadata stay consistent.
   ───────────────────────────────────────────────────────────── */
export const keywords = {
 brand: [
  "Code Aquarium Technologies",
  "software development company",
  "custom software development agency",
  "AI development agency",
  "AI automation agency",
  "Next.js development company",
  "product development studio",
  "web development company in Lahore",
  "software house in Lahore",
  "software company in Pakistan",
  "offshore software development company",
  "hire Next.js developers",
 ],
 service: {
  "web-development": [
   "Next.js development services",
   "custom web application development company",
   "web development company in Lahore",
   "hire React developers",
   "headless CMS development",
   "WebGL 3D web development",
  ],
  "artificial-intelligence": [
   "AI automation agency",
   "AI copilot development services",
   "AI agent development services",
   "custom LLM development company",
   "workflow automation consulting",
   "AI company in Pakistan",
  ],
  "digital-marketing": [
   "SaaS SEO agency",
   "technical SEO agency",
   "digital marketing agency in Lahore",
   "GEO AEO AI search optimization",
   "conversion rate optimization services",
  ],
  "devops-cloud": [
   "DevOps consulting services",
   "DevOps as a service",
   "AWS cloud migration services",
   "CI/CD pipeline setup",
   "cloud infrastructure company",
  ],
  "data-engineering": [
   "data engineering services",
   "ETL data pipeline development",
   "data warehouse consulting",
   "web scraping services",
   "analytics engineering",
  ],
  "ux-ui-design": [
   "SaaS product design agency",
   "UI UX design agency",
   "product design studio",
   "Figma to code services",
   "mobile app UX design",
  ],
 } as Record<string, string[]>,
};

/* ─────────────────────────────────────────────────────────────
   Metadata helper — standardizes title, description, canonical,
   OpenGraph, and Twitter across every page in one call.
   ───────────────────────────────────────────────────────────── */
export function pageMeta(opts: {
 title?: string;
 description: string;
 path: string;
 keywords?: string[];
 ogType?: "website" | "article" | "profile";
}): Metadata {
 return {
  title: opts.title,
  description: opts.description,
  keywords: opts.keywords,
  alternates: { canonical: opts.path },
  openGraph: {
   type: opts.ogType ?? "website",
   url: abs(opts.path),
   title: opts.title,
   description: opts.description,
   siteName: site.name,
   // og:image comes from app/opengraph-image.tsx (inherited by all routes).
  },
  twitter: {
   card: "summary_large_image",
   title: opts.title,
   description: opts.description,
  },
 };
}
