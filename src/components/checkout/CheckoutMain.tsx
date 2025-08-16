import React from "react";
import Stepper from "./Stepper";
import Breadcrumb from "@/sheardComponent/Breadcrumb";

const CheckoutMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="Checkout" data={undefined}/>
      <Stepper />
    </>
  );
};

export default CheckoutMain;
