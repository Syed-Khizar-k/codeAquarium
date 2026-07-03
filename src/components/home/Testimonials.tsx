"use client";

import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [grabbing, setGrabbing] = useState(false);

  const onDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    setGrabbing(true);
  };
  const onMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const end = () => {
    drag.current.active = false;
    setGrabbing(false);
  };

  return (
    <section className="section-b">
      <div className="section-x flex flex-col gap-3 pb-8 md:pb-12 max-w-3xl">
        <span className="eyebrow">Evidence of Excellence</span>
        <h2 className="heading-lg">
          We&apos;re proud of our work — and prouder of what our partners say.
        </h2>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={end}
        onPointerLeave={end}
        className={`flex flex-nowrap gap-5 overflow-x-auto no-scrollbar px-5 md:px-20 ${
          grabbing ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="card-surface flex flex-col justify-between gap-5 p-6 shrink-0 w-[80vw] sm:w-[22rem] md:w-[24rem]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-reef" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-ocean-100" />
              </div>
              <blockquote className="text-slatey leading-relaxed">{t.quote}</blockquote>
            </div>
            <figcaption>
              <div className="font-bold text-ink">{t.name}</div>
              <div className="text-slatey text-sm">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
