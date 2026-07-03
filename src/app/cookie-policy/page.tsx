import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Prose from "@/components/legal/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar technologies.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="How we use cookies and similar technologies."
        crumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <Prose>
        <p>
          This Cookie Policy explains how {site.legalName} uses cookies and similar technologies when
          you visit our website.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help websites function and
          remember your preferences.
        </p>

        <h2>How we use cookies</h2>
        <ul>
          <li><strong>Essential</strong> — required for the site to work properly.</li>
          <li><strong>Analytics</strong> — help us understand how the site is used so we can improve it.</li>
          <li><strong>Preferences</strong> — remember your choices for a better experience.</li>
        </ul>

        <h2>Managing cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Disabling some cookies may
          affect how the site functions.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about our use of cookies? Contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Prose>
    </>
  );
}
