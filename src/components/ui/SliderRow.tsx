"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type SliderRowProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  /** extra classes for the scroll track */
  trackClassName?: string;
};

export default function SliderRow({
  eyebrow,
  title,
  children,
  trackClassName = "",
}: SliderRowProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 640);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const arrowBtn =
    "w-14 h-14 relative border border-ocean-800 grid place-items-center transition-all duration-200";

  return (
    <section className="overflow-hidden">
      <div className="flex justify-between items-end pb-8 md:pb-12 section-x">
        <div className="flex flex-col gap-3 max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-lg whitespace-pre-line">{title}</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            className={`${arrowBtn} ${
              atStart
                ? "opacity-25 cursor-not-allowed text-ocean-800"
                : "bg-white text-ocean-800 hover:bg-ocean-800 hover:text-white"
            }`}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            className={`${arrowBtn} ${
              atEnd
                ? "opacity-25 cursor-not-allowed text-ocean-800"
                : "bg-white text-ocean-800 hover:bg-ocean-800 hover:text-white"
            }`}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className={`flex flex-nowrap gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-5 md:scroll-px-20 px-5 md:px-20 ${trackClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
