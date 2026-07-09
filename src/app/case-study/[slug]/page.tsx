import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { projects, getProject } from "@/lib/projects";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
 return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
 const { slug } = await params;
 const project = getProject(slug);
 if (!project) return { title: "Case study not found" };
 return pageMeta({
  title: `${project.title} — ${project.tag} Case Study`,
  description: project.excerpt,
  path: `/case-study/${project.slug}`,
  ogType: "article",
  keywords: project.services,
 });
}

export default async function CaseStudyPage({ params }: Params) {
 const { slug } = await params;
 const project = getProject(slug);
 if (!project) notFound();

 const idx = projects.findIndex((p) => p.slug === slug);
 const next = projects[(idx + 1) % projects.length];

 return (
  <>
   <JsonLd
    schema={[
     caseStudySchema(project),
     breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
      { name: project.title, path: `/case-study/${project.slug}` },
     ]),
    ]}
   />
   <PageHero
    eyebrow={project.tag}
    title={project.title}
    description={project.summary}
    crumbs={[
     { label: "Home", href: "/" },
     { label: "Portfolio", href: "/portfolio" },
     { label: project.title },
    ]}
   />

   {/* Showcase mockup */}
   <section className="section-x -mt-8 md:-mt-12">
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-ocean-gradient shadow-xl">
     <Image
      src={project.image}
      alt={`${project.title} — project mockup`}
      fill
      priority
      sizes="(max-width: 1280px) 100vw, 1200px"
      className="object-cover object-center"
     />
    </div>
   </section>

   {/* Results */}
   <section className="section-x section-y">
    <div className="grid gap-6 sm:grid-cols-3">
     {project.results.map((r, i) => (
      <Reveal key={r.label} delay={i * 90}>
       <div className="border border-ocean-100 bg-mist p-8 text-center">
        <div className="text-[2.25rem] font-bold text-ocean-700">{r.value}</div>
        <p className="mt-1 text-slatey">{r.label}</p>
       </div>
      </Reveal>
     ))}
    </div>

    {/* Body */}
    <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
     <div className="flex flex-col gap-10">
      <Reveal>
       <h2 className="heading-lg text-[1.5rem] md:text-[1.9rem]">
        The challenge
       </h2>
       <p className="mt-4 text-lg text-slatey leading-relaxed">
        {project.challenge}
       </p>
      </Reveal>
      <Reveal>
       <h2 className="heading-lg text-[1.5rem] md:text-[1.9rem]">
        Our approach
       </h2>
       <p className="mt-4 text-lg text-slatey leading-relaxed">
        {project.approach}
       </p>
      </Reveal>
     </div>

     <aside className="h-fit lg:sticky lg:top-28 border border-slate-200 p-6">
      <h3 className="font-bold text-lg">Services provided</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
       {project.services.map((s) => (
        <li
         key={s}
         className="rounded-full bg-ocean-50 text-ocean-700 text-sm font-medium px-3.5 py-1.5">
         {s}
        </li>
       ))}
      </ul>
      <Link
       href="/contact"
       className="mt-6 inline-flex items-center gap-2 font-semibold text-ocean-700 hover:text-ocean-800 transition-colors">
       Start a similar project
       <ArrowRight className="h-4 w-4" />
      </Link>
     </aside>
    </div>

    {/* Nav */}
    <div className="mt-14 flex items-center justify-between border-t border-slate-200 pt-8">
     <Link
      href="/portfolio"
      className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-ocean-700 transition-colors">
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      All case studies
     </Link>
     <Link
      href={`/case-study/${next.slug}`}
      className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-ocean-700 transition-colors text-right">
      <span className="hidden sm:inline text-slatey font-normal">Next:</span>{" "}
      {next.title}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
     </Link>
    </div>
   </section>

   <CtaBanner />
  </>
 );
}
