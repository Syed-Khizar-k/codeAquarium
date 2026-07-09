import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Prose from "@/components/legal/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <Prose>
        <p>
          This Privacy Policy explains how {site.legalName} (&quot;{site.name}&quot;, &quot;we&quot;,
          &quot;us&quot;) handles information when you visit our website or engage our services.
        </p>

        <h2>Information we collect</h2>
        <p>
          We collect information you provide directly — such as your name, email, company, and
          project details when you contact us or subscribe to our newsletter. We also collect
          limited technical data (like device and usage information) to operate and improve the
          site.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to enquiries and provide the services you request.</li>
          <li>To send updates or marketing communications you&apos;ve opted into.</li>
          <li>To analyze and improve our website and offerings.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We share it only with trusted service providers
          who help us operate our business, and where required by law.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information. To
          exercise these rights, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.location}.
        </p>
      </Prose>
    </>
  );
}
