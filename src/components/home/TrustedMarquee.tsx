const clients = [
 "2.svg",
 "1.svg",
 "3.svg",
 "hyper.png",
 "5.svg",
 "7.svg",
 //  "8.svg",
 "9.svg",
 "shiftsswaps.webp",
 "3d.jpg",
];

export default function TrustedMarquee() {
 // Duplicate the set so the marquee loops seamlessly. The second copy is
 // purely decorative, so it's hidden from assistive tech.
 const row = [...clients, ...clients];

 return (
  <section className="py-8 md:py-12 overflow-hidden">
   <h2 className="text-center text-black/85 mb-8 text-base md:text-2xl">
    Trusted by teams around the globe
   </h2>
   <div className="marquee-mask relative w-full overflow-hidden">
    <div className="flex w-max animate-marquee gap-12 md:gap-20 will-change-transform">
     {row.map((path, i) => {
      const isClone = i >= clients.length;
      return (
       <div
        key={`${path}-${i}`}
        className="flex h-8 w-28 shrink-0 items-center justify-center md:h-10 md:w-36">
        {/* Native <img>: SVGs are already vector + tiny, so this is lighter
            than next/image (which serves SVGs unoptimized anyway). Fixed box
            + object-contain => zero layout shift; lazy/async => no blocking. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
         src={`/brands/${path}`}
         alt={isClone ? "" : `Client logo ${i + 1}`}
         aria-hidden={isClone || undefined}
         width={144}
         height={40}
         loading="lazy"
         decoding="async"
         draggable={false}
         className="max-h-full max-w-full object-contain select-none"
        />
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}
