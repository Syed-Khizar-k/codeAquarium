import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/cards/ServiceCard";
import CtaBanner from "@/components/home/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/lib/services";
import {
  pageMeta,
  breadcrumbSchema,
  servicesItemListSchema,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Software, AI & Web Development Services",
  description:
    "Explore Code Aquarium's services: custom web development (Next.js), AI & automation, digital marketing & SEO, DevOps & cloud, data engineering, and UX/UI design — for startups and brands worldwide.",
  path: "/services",
  keywords: [
    "software development services",
    "web development services",
    "AI development services",
    "digital marketing services",
    "DevOps consulting services",
    "UX UI design services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/services",
            name: "Software, AI & Web Development Services",
            description:
              "Custom web development, AI & automation, digital marketing, DevOps & cloud, data engineering, and UX/UI design.",
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          servicesItemListSchema(),
        ]}
      />
      <PageHero
        eyebrow="Our Capabilities"
        title="Everything you need to dominate your niche."
        description="Delivered with precision and speed. Explore the ways Code Aquarium helps ambitious teams design, build, and grow."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-x section-y">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard service={service} widthClass="w-full h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        subtitle="Tell us your goal and we'll recommend the fastest path to get there — no pressure."
        cta={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
