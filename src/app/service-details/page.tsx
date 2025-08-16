import ServiceDetailsMain from "@/components/service-details/ServiceDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";

const page = () => {
  const id = 1;
  return (
    <>
      <Wrapper>
        <main>
          <Breadcrumb pageTitle="Service Details" data={undefined}/>
          <ServiceDetailsMain id={id} />
        </main>
      </Wrapper>
    </>
  );
};

export default page;
