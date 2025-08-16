"use client";
import ShopDetailsMain from "@/components/shop-details/ShopDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const DynamicPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
        <ShopDetailsMain id={id}/>
        </main>
      </Wrapper>
    </>
  );
};

export default DynamicPage;
