"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // No backend wired yet — simulate a successful submission.
    // Swap this for a POST to your API / form provider when ready.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 700);
  };

  if (sent) {
    return (
      <div className="card-surface p-10 text-center">
        <span className="inline-grid place-items-center rounded-full p-4 bg-reef/15 text-reef">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Message received!</h3>
        <p className="mt-2 text-slatey">
          Thanks for reaching out. A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  const field =
    "w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors";
  const label = "text-sm font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 md:p-8 flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={label}>
            Full name
          </label>
          <input id="name" name="name" type="text" required className={field} placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={label}>
            Company <span className="text-slatey font-normal">(optional)</span>
          </label>
          <input id="company" name="company" type="text" className={field} placeholder="Acme Inc." />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className={label}>
            What can we help with?
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title.replace(/^(Scale|Automate|Grow|Secure|Decide|Convert) With /, "")}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={label}>
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about your goals, timeline, and budget…"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-2 bg-ocean-700 text-white font-semibold px-7 py-3.5 hover:bg-ocean-800 transition-colors disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send message"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
