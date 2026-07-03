import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative -mt-[72px] min-h-[80vh] grid place-items-center overflow-hidden bg-hero-deep text-white text-center section-x">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[15%] h-4 w-4 rounded-full bg-ocean-300/40 animate-floaty" />
        <div className="absolute bottom-1/3 right-[18%] h-6 w-6 rounded-full bg-ocean-400/20 animate-floaty [animation-delay:1s]" />
      </div>
      <div className="relative">
        <p className="text-[6rem] md:text-[9rem] font-bold leading-none text-ocean-300/90">404</p>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold">This page swam away.</h1>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          The page you&apos;re looking for isn&apos;t in our tank. Let&apos;s get you back to
          familiar waters.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="light" withArrow>
            Back home
          </Button>
          <Button href="/contact" variant="ghost" withArrow className="text-white hover:text-ocean-300 px-6 py-3">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
