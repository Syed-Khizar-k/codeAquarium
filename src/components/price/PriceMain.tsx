import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import PricePagePricing from "./PricePagePricing";
import PricePricingTwo from "./PricePricingTwo";
import BlogSection from "../home-two/BlogSection";


const PriceMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="Price" data={undefined}/>
      <PricePagePricing/>
      <PricePricingTwo/>
      <BlogSection/>
    </>
  );
};

export default PriceMain;
