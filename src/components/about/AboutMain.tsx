import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import AboutArea from "./AboutArea";
import AboutService from "./AboutService";
import ChoseArea from "./ChoseArea";
import Team from "../home/Team";
import ClientSection from "../home-two/ClientSection";
import Brand from "../home/Brand";
import CtaTwo from "@/sheardComponent/CtaTwo";

const AboutMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Us" data={undefined}/>
      <AboutArea />
      {/* <AboutService /> */}
      <ChoseArea />
      {/* <Team /> */}
      <ClientSection />
      <CtaTwo/>
      <Brand />
    </>
  );
};

export default AboutMain;
