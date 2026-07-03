const clients = [
  "Reefside",
  "Meridian",
  "Wellspring",
  "Harbor",
  "Ascent",
  "Tidewater",
  "Northlight",
  "PureGo",
  "Current",
];

export default function TrustedMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="section-y overflow-hidden">
      <h2 className="text-center text-slatey mb-8 text-base md:text-xl">
        Trusted by teams around the globe
      </h2>
      <div className="marquee-mask relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 md:gap-20 will-change-transform">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl md:text-3xl font-bold text-slate-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
