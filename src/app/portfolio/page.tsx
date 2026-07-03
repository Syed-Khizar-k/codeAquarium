import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/cards/ProjectCard";
import CtaBanner from "@/components/home/CtaBanner";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real solutions, real results. See how Code Aquarium has helped partners turn big ideas into digital reality across web, AI, data, and cloud.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Solutions, Real Results"
        title="Work we're proud of."
        description="A look at how we've helped our partners turn big ideas into digital reality — and moved the numbers that matter."
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <section className="section-x section-y">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 90}>
              <ProjectCard project={project} widthClass="w-full h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Want to be our next success story?"
        subtitle="Bring us your toughest challenge. We'll show you what's possible."
        cta={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
