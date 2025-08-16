import { idType } from "@/interFace/interFace";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import CaseDeailsContent from "./CaseDeailsContent";
import { casesData } from "@/data/case-data";
import CaseStadiesTwo from "../case-2/CaseStadiesTwo";
import Brand from "../home/Brand";

const CaseDetailsMain = ({ id }: idType) => {
  const filerData = casesData.find((item) => item.id == id);
  
  return (
    <>
      {/* <Breadcrumb pageTitle='Case Details' data={casesData}/> */}
        <CaseDeailsContent data={filerData} />
        <CaseStadiesTwo />
        <Brand />
    
    </>
  );
};

export default CaseDetailsMain;
