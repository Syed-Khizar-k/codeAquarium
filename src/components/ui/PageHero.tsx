import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
 eyebrow?: string;
 title: string;
 description?: string;
 crumbs?: Crumb[];
};

export default function PageHero({
 eyebrow,
 title,
 description,
 crumbs,
}: PageHeroProps) {
 return (
  <section className="relative -mt-[78px] bg-cover bg-center overflow-hidden bg-[url('/banners/hero-mob.svg')] md:bg-[url('/banners/hero-desk.svg')] text-white">
   <div className="relative max-w-page mx-auto section-x pt-32 pb-16 md:pt-40 md:pb-24">
    {eyebrow && (
     <span className="uppercase tracking-[0.18em] text-ocean-200 text-sm font-semibold">
      {eyebrow}
     </span>
    )}
    <h1 className="mt-4 font-bold text-[2.25rem] md:text-[3.75rem] leading-[1.1] max-w-4xl">
     {title}
    </h1>
    {description && (
     <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-2xl">
      {description}
     </p>
    )}
    {crumbs && crumbs.length > 0 && (
     <nav aria-label="Breadcrumb" className="mt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
       {crumbs.map((c, i) => (
        <li key={i} className="flex items-center gap-1.5">
         {c.href ? (
          <Link
           href={c.href}
           className="hover:text-ocean-300 transition-colors">
           {c.label}
          </Link>
         ) : (
          <span className="text-white/90">{c.label}</span>
         )}
         {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
        </li>
       ))}
      </ol>
     </nav>
    )}
   </div>
  </section>
 );
}
