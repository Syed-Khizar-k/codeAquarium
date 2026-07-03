import SliderRow from "@/components/ui/SliderRow";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/services";

export default function Capabilities() {
  return (
    <div className="section-b">
      <SliderRow
        eyebrow="Our Capabilities"
        title={"Everything you need to dominate your niche,\ndelivered with precision and speed."}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            widthClass="w-[85vw] sm:w-[20rem] md:w-[20rem]"
          />
        ))}
      </SliderRow>
    </div>
  );
}
