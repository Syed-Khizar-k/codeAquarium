import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import ManageMentArea from "./ManageMentArea";
import ItManagment from "./ItManagment";
import AboutService from "../about/AboutService";
import PricingPlan from "./PricingPlan";
import Brand from "../home/Brand";
import { idType } from "@/interFace/interFace";
import { serviceManageData } from "@/data/service-manage-data";

const ServiceManageMain = ({id}:idType) => {
  const data = serviceManageData.find((item)=> item.id == id)
  const title = data?.title ? data?.title : "IT Management"
  return (
    <>
      <Breadcrumb pageTitle={title} data={undefined}/>
      <ManageMentArea />
      <ItManagment />
      <div className="pt-130 pb-100">
        <AboutService />
      </div>
      <PricingPlan/>
      <Brand/>
    </>
  );
};

export default ServiceManageMain;
