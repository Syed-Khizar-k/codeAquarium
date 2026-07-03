import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to dive in? Get in touch with Code Aquarium to scope your project and claim your free strategy session.",
};

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Clock, label: "Response time", value: "Within one business day" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Ready to dive in?"
        description="Tell us what you're building. We'll help you map the fastest path from idea to launch — and it starts with a free strategy session."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-x section-y">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <ContactForm />

          <aside className="flex flex-col gap-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4 border border-slate-200 p-5">
                <span className="grid place-items-center rounded-full p-3 bg-ocean-50 text-ocean-700 shrink-0">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slatey">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="font-semibold text-ink hover:text-ocean-700 transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-ink">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
