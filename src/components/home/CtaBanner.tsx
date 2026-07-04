import Button from "@/components/ui/Button";

type CtaBannerProps = {
 eyebrow?: string;
 title?: string;
 subtitle?: string;
 cta?: { label: string; href: string };
};

export default function CtaBanner({
 eyebrow = "Ready to Dive In?",
 title = "Don't let your big ideas sit on the shelf.",
 subtitle = "Book a free strategy session and we'll map the fastest path from idea to launch.",
 cta = { label: "Claim your free strategy session", href: "/contact" },
}: CtaBannerProps) {
 return (
  <div className="md:px-20 section-b">
   <div className="relative overflow-hidden bg-cover bg-center bg-[url('/banners/cta-bg-mob.svg')] md:bg-[url('/banners/cta-bg-desk.svg')] text-white px-5 py-14 md:px-16 md:py-20">
   
    <div className="relative flex flex-col gap-4">
     <span className="uppercase tracking-[0.18em] text-ocean-200 text-sm font-semibold">
      {eyebrow}
     </span>
     <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold leading-tight max-w-3xl">
      {title}
     </h2>
     <p className="text-white/75 max-w-xl">{subtitle}</p>
     <div className="pt-4">
      <Button href={cta.href} variant="light" withArrow>
       {cta.label}
      </Button>
     </div>
    </div>
   </div>
  </div>
 );
}
