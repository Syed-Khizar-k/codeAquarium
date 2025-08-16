"use client";

import { casesData } from "@/data/case-data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LatestCase = () => {
   const { id } = useParams();
  return (
    <>
      <div className="case-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our project</span>
                <span className="border-right-1"></span>
                <h1>Our Portfolio</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {casesData?.slice(0,11)?.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="case-wrapper mb-30">
                  <Link href={`/portfolio-details/${item.id}`}>
                  
                  
                  <div className="case-img">
                      <Image
                        style={{ width: "100%", height: "300px" , objectFit:"cover" }}
                        src={item.img}
                        alt="case-img"
                        loading="lazy"
                      />
                      
                  </div>
                  <div className="case-text">
                    <span> {item.subText} </span>
                    <h3>
                      {item.titleTwo}
                    </h3>
                  </div>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCase;
