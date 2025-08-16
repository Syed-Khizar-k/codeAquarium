import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import AboutService from "../about/AboutService";
import OurServices from "./OurServices";
import ContactSection from "../home-two/ContactSection";
import Brand from "../home/Brand";
import CtaTwo from "@/sheardComponent/CtaTwo";
const ServiceTwoMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="Services" data={undefined}/>
      {/* <div className="pt-130 pb-100">
        <AboutService />
      </div> */}
      <OurServices />
      {/* <ContactSection /> */}
      <CtaTwo/>
      <Brand />
    </>
  );
};

export default ServiceTwoMain;
