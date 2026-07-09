import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Prose from "@/components/legal/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website and services.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of our website and services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <Prose>
        <p>
          These Terms of Service govern your access to and use of the {site.legalName} website and
          services. By using our site, you agree to these terms.
        </p>

        <h2>Use of the site</h2>
        <p>
          You agree to use the site lawfully and not to misuse, disrupt, or attempt to gain
          unauthorized access to our systems or content.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site — including text, graphics, logos, and code — is owned by or
          licensed to {site.name} and is protected by applicable intellectual-property laws.
        </p>

        <h2>Services & engagements</h2>
        <p>
          Specific services are governed by separate written agreements. Nothing on this website
          constitutes a binding offer or guarantee of results.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties of any kind. To the fullest
          extent permitted by law, {site.name} is not liable for any indirect or consequential
          damages arising from your use of the site.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Prose>
    </>
  );
}
