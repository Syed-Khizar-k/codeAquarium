import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/cards/ServiceCard";
import CtaBanner from "@/components/home/CtaBanner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, artificial intelligence, digital marketing, DevOps & cloud, data engineering, and UX/UI design — everything you need to dominate your niche.",
};

export default function ServicesPage() {
  return (
    <>
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
