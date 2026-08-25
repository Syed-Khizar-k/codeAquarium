import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/cards/ProjectCard";
import CtaBanner from "@/components/home/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/lib/projects";
import {
 pageMeta,
 breadcrumbSchema,
 portfolioItemListSchema,
 webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
 title: "Portfolio & Case Studies",
 description:
  "Real solutions, real results. See how Code Aquarium Technologies builds web apps, SaaS, AI platforms, and telehealth products — with measurable gains in speed, conversion, and uptime.",
 path: "/portfolio",
 keywords: [
  "software development portfolio",
  "web development case studies",
  "SaaS development case study",
  "AI project case study",
 ],
});

export default function PortfolioPage() {
 return (
  <>
   <JsonLd
    schema={[
     webPageSchema({
      path: "/portfolio",
      name: "Portfolio & Case Studies",
      description:
       "Case studies across web, SaaS, AI, telehealth, and 3D/WebGL with measurable results.",
      type: "CollectionPage",
     }),
     breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
     ]),
     portfolioItemListSchema(),
    ]}
   />
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
