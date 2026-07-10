import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function Hero() {
 return (
  <section className="relative -mt-[87px] overflow-hidden bg-[url('/home/hero-mob.svg')] md:bg-[url('/home/hero-desk.svg')] bg-cover bg-center text-white">
   {/* ambient bubbles */}

   <div className="relative max-w-page mx-auto section-x pt-20 pb-18 md:pt-20 md:pb-20">
    <div className="max-w-5xl">
     <h1 className="mt-6 font-bold text-[2.75rem] leading-[1.1] md:text-[5rem]">
      Dive Into Your Next Level Digital Hub.
     </h1>
     <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-4xl">
      There&apos;s a lot of noise about digital solutions, and standing out
      feels harder than ever. That&apos;s exactly where we swim in. At{" "}
      <strong className="text-white font-semibold">{site.name}</strong>, we
      craft custom software, AI, and growth systems that turn ambitious ideas
      into measurable results.
     </p>
     <div className="mt-10 flex flex-wrap gap-4">
      <Button href="/portfolio" variant="light" withArrow>
       See our work
      </Button>
      <Button
       href="/contact"
       variant="ghost"
       withArrow
       className="text-white hover:bg-transparent px-6 py-3">
       Start your project
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
