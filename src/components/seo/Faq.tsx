"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { QA } from "@/lib/seo";

type FaqProps = {
  items: QA[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

/**
 * Accessible FAQ accordion. Renders visible, crawlable Q&A content — the same
 * questions are also emitted as FAQPage JSON-LD by the parent page. Uses native
 * <details>/<summary> so answers are in the DOM even before hydration.
 */
export default function Faq({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description,
}: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-x section-y">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="heading-lg mt-3">{title}</h2>
          {description && (
            <p className="mt-4 text-slatey text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <details
                key={i}
                open={isOpen}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpen(i);
                  else if (isOpen) setOpen(null);
                }}
                className="group"
              >
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 text-left font-semibold text-ink hover:text-ocean-700 transition-colors"
                  onClick={(e) => {
                    // Drive open state ourselves for single-open behavior.
                    e.preventDefault();
                    setOpen(isOpen ? null : i);
                  }}
                >
                  <h3 className="text-lg">{item.q}</h3>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-ocean-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </summary>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-slatey leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
