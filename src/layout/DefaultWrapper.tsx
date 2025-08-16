//@refresh
"use client";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import React, { useEffect } from 'react';
import { animationCreate } from '@/utils/utils';
import { usePathname } from "next/navigation";
import FooterOne from './footers/footer';
import { childrenType } from '@/interFace/interFace';
import HeaderOne from './headers/HeaderOne';
import FooterTwo from './footers/FooterTwo';
import BacktoTop from '@/utils/BacktoTop';


const Wrapper = ({ children }:childrenType) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 2000);
  }, [])

  return (
    <>
      <BacktoTop/>
      {(() => {
        switch (pathName) {
          case "/":
            return <HeaderOne/> ;
        
          default:
            return <HeaderOne/> ;
        }
      })()} 
      {children}
      {(() => {
        switch (pathName) {
          case "/":
            return <FooterOne/>;
          case "/blog":
            return <FooterOne/>;
          case "/blog":
            return <FooterOne/>;
          case "/blog-details":
            return <FooterOne/>;
         
          default:
            return <FooterOne/>;
        }
      })()}
    </>
  );
};

export default Wrapper;
