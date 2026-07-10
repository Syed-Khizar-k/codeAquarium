import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { pageMeta, breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
 title: "Contact Us — Start Your Project",
 description:
  "Get in touch with Code Aquarium Technologies to scope your web, AI, or software project. Based in Lahore, Pakistan, working with clients worldwide. Free strategy consultation available.",
 path: "/contact",
 keywords: [
  "contact Code Aquarium Technologies",
  "hire software developers",
  "web development agency contact",
  "software company Lahore contact",
 ],
});

export default function ContactPage() {
 const details = [
  {
   icon: Mail,
   label: "Email",
   value: site.email,
   href: `mailto:${site.email}`,
  },
  {
   icon: Phone,
   label: "Phone",
   value: site.phone,
   href: `tel:${site.phoneHref}`,
  },
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Response time", value: "Within one business day" },
 ];

 return (
  <>
   <JsonLd
    schema={[
     webPageSchema({
      path: "/contact",
      name: `Contact ${site.name}`,
      description:
       "Contact Code Aquarium Technologies to scope your web, AI, or software project.",
      type: "ContactPage",
     }),
     breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
     ]),
    ]}
   />
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
       <div
        key={d.label}
        className="flex items-start gap-4 border border-slate-200 p-5">
        <span className="grid place-items-center rounded-full p-3 bg-ocean-50 text-ocean-700 shrink-0">
         <d.icon className="h-5 w-5" />
        </span>
        <div>
         <p className="text-sm text-slatey">{d.label}</p>
         {d.href ? (
          <a
           href={d.href}
           className="font-semibold text-ink hover:text-ocean-700 transition-colors">
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
