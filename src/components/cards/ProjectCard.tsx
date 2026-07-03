import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  widthClass?: string;
};

export default function ProjectCard({ project, widthClass = "" }: ProjectCardProps) {
  return (
    <div
      className={`group card-surface flex flex-col justify-between gap-4 p-4 shadow-sm hover:border-ocean-700 hover:shadow-xl hover:-translate-y-1 md:snap-start shrink-0 ${widthClass}`}
    >
      <div className="flex flex-col gap-4">
        {/* Logo tile */}
        <div className="relative h-36 w-full grid place-items-center overflow-hidden border border-slate-200 bg-ocean-gradient">
          <div className="absolute inset-0 bg-ink/10" />
          <span className="relative text-white font-bold text-4xl tracking-tight drop-shadow">
            {project.logoInitials}
          </span>
        </div>
        <span className="w-fit rounded-full px-4 py-1.5 bg-ocean-50 text-ocean-700 text-sm font-medium">
          {project.tag}
        </span>
        <h3 className="text-[1.35rem] font-bold">{project.title}</h3>
        <p className="text-slatey leading-relaxed line-clamp-4">{project.excerpt}</p>
      </div>
      <Link
        href={`/case-study/${project.slug}`}
        className="inline-flex items-center gap-2 font-semibold text-ocean-700 group-hover:text-ocean-800 transition-colors"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
