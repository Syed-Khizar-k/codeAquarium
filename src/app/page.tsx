import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustedMarquee from "@/components/home/TrustedMarquee";
import Capabilities from "@/components/home/Capabilities";
import StatsBanner from "@/components/home/StatsBanner";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import Faq from "@/components/seo/Faq";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import {
 keywords,
 pageMeta,
 webPageSchema,
 servicesItemListSchema,
 faqSchema,
} from "@/lib/seo";
import { homeFaqs } from "@/lib/faqs";

export const metadata: Metadata = pageMeta({
 title: `${site.name} — Custom Software, AI & Web Development`,
 description:
  "Code Aquarium Technologies is a boutique software and AI company in Lahore, Pakistan, building high-performance websites, custom AI automation, and growth systems for startups and brands worldwide. Book a free strategy consultation.",
 path: "/",
 keywords: keywords.brand,
});

export default function HomePage() {
 return (
  <>
   <JsonLd
    schema={[
     webPageSchema({
      path: "/",
      name: `${site.name} — Custom Software, AI & Web Development`,
      description: site.description,
     }),
     servicesItemListSchema(),
     faqSchema(homeFaqs),
    ]}
   />
   <Hero />
   <TrustedMarquee />
   <Capabilities />
   <StatsBanner />
   <CaseStudies />
   <Testimonials />
   <Faq
    items={homeFaqs}
    title="Frequently asked questions"
    description="Everything you need to know about working with Code Aquarium Technologies — services, pricing, timelines, and how we work with teams worldwide."
   />
   <CtaBanner />
  </>
 );
}
