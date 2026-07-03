import type { Metadata } from "next";
import { Compass, Waves, HeartHandshake, Rocket, Target, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import StatsBanner from "@/components/home/StatsBanner";
import CtaBanner from "@/components/home/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Code Aquarium is a digital studio of engineers, designers, and strategists building custom software, AI, and growth systems that turn ambitious ideas into measurable results.",
};

const values = [
  {
    icon: Compass,
    title: "Outcomes over output",
    body: "We measure success by your results — revenue, speed, reliability — not by lines of code shipped.",
  },
  {
    icon: Waves,
    title: "Craft in the current",
    body: "Modern tools, clean architecture, and relentless polish. We build things that hold up as you grow.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, not vendors",
    body: "Clear communication, honest timelines, and a team that treats your goals as our own.",
  },
];

const approach = [
  { icon: Target, title: "Discover", body: "We dig into your goals, users, and constraints to define what success actually looks like." },
  { icon: Rocket, title: "Build", body: "We ship in fast, focused iterations — you see progress every week, not every quarter." },
  { icon: Users, title: "Scale", body: "We harden, measure, and optimize so your solution keeps performing long after launch." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Code Aquarium"
        title="A studio where bold ideas learn to swim."
        description={site.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro */}
      <section className="section-x section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-3">We turn ambitious visions into measurable ROI.</h2>
          </Reveal>
          <Reveal delay={120} className="text-slatey text-lg leading-relaxed flex flex-col gap-4">
            <p>
              Code Aquarium started with a simple belief: great digital products come from small,
              senior teams who care deeply about the outcome. No bloated agencies, no hand-offs to
              junior benches — just engineers, designers, and strategists working shoulder to
              shoulder with you.
            </p>
            <p>
              From high-performance websites to custom AI and data platforms, we&apos;ve helped
              startups and established brands alike ship work they&apos;re proud of. We keep the
              ecosystem healthy — clean code, clear thinking, and results that compound.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-x section-b">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card-surface h-full p-8 hover:shadow-xl hover:-translate-y-1">
                <span className="inline-grid place-items-center rounded-full p-4 bg-ocean-50 text-ocean-700">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-slatey leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBanner />

      {/* Approach */}
      <section className="section-x section-b">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow">How We Work</span>
          <h2 className="heading-lg mt-3">A simple current, from idea to impact.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="relative h-full p-8 bg-mist border border-ocean-100">
                <span className="absolute top-6 right-6 text-5xl font-bold text-ocean-100">
                  0{i + 1}
                </span>
                <span className="inline-grid place-items-center rounded-full p-4 bg-white text-ocean-700 shadow-sm">
                  <a.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-slatey leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
