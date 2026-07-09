import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import Faq from "@/components/seo/Faq";
import JsonLd from "@/components/seo/JsonLd";
import { services, getService } from "@/lib/services";
import {
  pageMeta,
  keywords,
  cleanServiceName,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { serviceFaqs } from "@/lib/faqs";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  const name = cleanServiceName(service.title);
  return pageMeta({
    title: `${name} Services`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: keywords.service[service.slug],
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { icon: Icon } = service;
  const others = services.filter((s) => s.slug !== service.slug);
  const faqs = serviceFaqs[service.slug] ?? [];
  const schema = serviceSchema(service.slug);
  const name = cleanServiceName(service.title);

  return (
    <>
      <JsonLd
        schema={[
          ...(schema ? [schema] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name, path: `/services/${service.slug}` },
          ]),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          {/* Main */}
          <div className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-5">
              <span className="inline-grid w-fit place-items-center rounded-full p-4 bg-ocean-50 text-ocean-700">
                <Icon className="h-8 w-8" />
              </span>
              <p className="text-lg md:text-xl text-slatey leading-relaxed">{service.summary}</p>
            </Reveal>

            <Reveal className="bg-mist border border-ocean-100 p-8">
              <h2 className="text-xl font-bold">What you can expect</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center rounded-full bg-reef/15 text-reef p-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-ink/80">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div>
              <h2 className="heading-lg text-[1.5rem] md:text-[1.9rem]">What we deliver</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {service.capabilities.map((c, i) => (
                  <Reveal key={c.title} delay={(i % 2) * 90}>
                    <div className="card-surface h-full p-6 hover:shadow-lg hover:-translate-y-1">
                      <h3 className="font-bold text-lg">{c.title}</h3>
                      <p className="mt-2 text-slatey leading-relaxed">{c.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit flex flex-col gap-6">
            <div className="bg-ink text-white p-6">
              <h3 className="font-bold text-lg">Other services</h3>
              <ul className="mt-4 flex flex-col divide-y divide-white/10">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 text-white/80 hover:text-ocean-300 transition-colors"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ocean-gradient text-white p-6">
              <h3 className="font-bold text-lg">Have a project in mind?</h3>
              <p className="mt-2 text-white/80 text-sm">
                Let&apos;s scope it together and find the fastest path to launch.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 bg-white text-ink font-semibold px-5 py-2.5 hover:bg-ocean-50 transition-colors"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {faqs.length > 0 && (
        <Faq
          items={faqs}
          title={`${name} — frequently asked questions`}
          description={`Common questions about our ${name.toLowerCase()} services, pricing, and process.`}
        />
      )}

      <CtaBanner />
    </>
  );
}
