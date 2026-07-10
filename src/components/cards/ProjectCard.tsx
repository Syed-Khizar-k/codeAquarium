import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
 project: Project;
 widthClass?: string;
};

export default function ProjectCard({
 project,
 widthClass = "",
}: ProjectCardProps) {
 return (
  <div
   className={`group card-surface flex flex-col justify-between gap-4 p-4 shadow-sm hover:border-ocean-700 hover:shadow-xl hover:-translate-y-1 md:snap-start shrink-0 ${widthClass}`}>
   <div className="flex flex-col gap-4">
    {/* Mockup screenshot — next/image handles resizing + avif/webp.
            Fixed aspect box => no layout shift; sizes matches the card width
            so the browser only downloads what it needs. */}
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-200 bg-ocean-gradient">
     {project.image === "" ? (
      <div className="flex items-center justify-center w-full font-bold h-full text-white">
       Comming Soon ...
      </div>
     ) : (
      <Image
       src={project.image}
       alt={`${project.title} — project mockup`}
       fill
       sizes="(max-width: 640px) 85vw, 416px"
       className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      />
     )}
    </div>
    <span className="w-fit rounded-full px-4 py-1.5 bg-ocean-50 text-ocean-700 text-sm font-medium">
     {project.tag}
    </span>
    <h3 className="text-[1.35rem] font-bold">{project.title}</h3>
    <p className="text-slatey leading-relaxed line-clamp-4">
     {project.excerpt}
    </p>
   </div>
   <Link
    href={`/case-study/${project.slug}`}
    className="inline-flex items-center gap-2 font-semibold text-ocean-700 group-hover:text-ocean-800 transition-colors">
    Learn more
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
   </Link>
  </div>
 );
}
