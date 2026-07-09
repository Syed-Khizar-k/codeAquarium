import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BookingWidget from "@/components/booking/BookingWidget";
import Faq from "@/components/seo/Faq";
import JsonLd from "@/components/seo/JsonLd";
import {
  pageMeta,
  breadcrumbSchema,
  faqSchema,
  consultationOfferSchema,
  webPageSchema,
} from "@/lib/seo";
import { bookingFaqs } from "@/lib/faqs";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Strategy Consultation",
  description:
    "Book a free 30-minute strategy consultation with Code Aquarium. Pick a date and time in your own timezone — we'll map the fastest path from your idea to launch. No cost, no obligation.",
  path: "/free-consultancy",
  keywords: [
    "free strategy consultation",
    "book a consultation software agency",
    "free web development consultation",
    "free AI consultation",
  ],
});

export default function FreeConsultancyPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/free-consultancy",
            name: "Book a Free Strategy Consultation",
            description:
              "Book a free 30-minute strategy consultation with Code Aquarium.",
          }),
          consultationOfferSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Free Consultation", path: "/free-consultancy" },
          ]),
          faqSchema(bookingFaqs),
        ]}
      />
      <PageHero
        eyebrow="Free Consultation"
        title="Book your free strategy session"
        description="Pick a time that works for you. In 30 minutes we'll map the fastest path from your idea to launch — and where we can add the most value."
        crumbs={[{ label: "Home", href: "/" }, { label: "Free Consultancy" }]}
      />

      <section className="section-x section-y">
        <div className="max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </section>

      <Faq
        items={bookingFaqs}
        title="Consultation FAQ"
        description="Quick answers about the free strategy consultation and how booking works."
      />
    </>
  );
}
