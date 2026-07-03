import Hero from "@/components/home/Hero";
import TrustedMarquee from "@/components/home/TrustedMarquee";
import Capabilities from "@/components/home/Capabilities";
import StatsBanner from "@/components/home/StatsBanner";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedMarquee />
      <Capabilities />
      <StatsBanner />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
