import SliderRow from "@/components/ui/SliderRow";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export default function CaseStudies() {
 return (
  <div className="section-b">
   <SliderRow
    eyebrow="Real Solutions, Real Results"
    title={
     "See how we've helped our partners turn big ideas into digital reality."
    }>
    {projects.map((project) => (
     <ProjectCard
      key={project.slug}
      project={project}
      widthClass="w-[85vw] sm:w-[26rem] md:w-[26rem]"
     />
    ))}
   </SliderRow>

   <div className="section-x mt-10 md:hidden">
    <Button href="/portfolio" variant="reef" withArrow className="w-full">
     Show all case studies
    </Button>
   </div>
  </div>
 );
}
