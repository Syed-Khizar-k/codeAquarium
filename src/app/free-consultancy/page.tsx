import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BookingWidget from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Grab a free 30-minute strategy session with Code Aquarium. Pick a date and time that works for you — no forms, no fuss, just a plan.",
};

export default function FreeConsultancyPage() {
  return (
    <>
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
    </>
  );
}
