import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  /** width utility classes for slider context; omit for grid */
  widthClass?: string;
};

export default function ServiceCard({ service, widthClass = "" }: ServiceCardProps) {
  const { icon: Icon } = service;
  return (
    <div
      className={`group card-surface flex flex-col justify-between gap-6 p-6 shadow-sm hover:bg-ocean-800 hover:border-ocean-800 hover:shadow-xl hover:-translate-y-1 md:snap-start shrink-0 ${widthClass}`}
    >
      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-full p-4 bg-ocean-50 text-ocean-700 group-hover:bg-white/10 group-hover:text-ocean-200 transition-colors">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="text-[1.35rem] font-bold group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-slatey leading-relaxed group-hover:text-white/80 transition-colors">
          {service.short}
        </p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 font-semibold text-ocean-700 group-hover:text-white transition-colors"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
