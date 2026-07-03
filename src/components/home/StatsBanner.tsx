import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export default function StatsBanner() {
  return (
    <div className="md:px-20 section-b">
      <div className="relative overflow-hidden px-5 py-12 md:px-16 md:py-16 text-white bg-ocean-gradient">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-ink/20 blur-2xl" />

        <div className="relative flex flex-col gap-4 pb-8">
          <span className="uppercase tracking-[0.18em] text-ocean-100 text-sm font-semibold">
            Our impact by the numbers
          </span>
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold leading-tight">
            Our journey so far
          </h2>
          <p className="text-white/80 max-w-2xl">
            The majority of teams we partner with see meaningful revenue growth within their first
            six months of working with us.
          </p>
          <div className="md:hidden pt-2">
            <Button href="/contact" variant="light" withArrow>
              Work with us
            </Button>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="md:px-6 md:text-center">
              <div className="text-[2.25rem] md:text-[2.5rem] font-bold">{s.value}</div>
              <p className="text-white/80 mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
