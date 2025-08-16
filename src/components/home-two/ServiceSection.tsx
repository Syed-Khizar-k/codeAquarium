import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services-data";
const ServiceSection = () => {
  return (
    <div className="our-services-area grey-bg-2 pt-120 pb-130 pr-45 pl-45">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
            <div className="section-title text-center ml-50 mr-50 mb-85">
              <span className="border-left-1"></span>
              <span>what we do</span>
              <span className="border-right-1"></span>
              <h1>We provide exclusive services for your bussiness</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
         

          {
           servicesData.slice(6,10).map((item)=>(
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
            <div className="our-services-wrapper mb-30">
              <div className="our-services-img">
                <Image src={item.banner} alt="" />
              </div>
              <div className="our-services-content">
                <div className="our-services-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <div className="our-services-text">
                  <h3> {item.title} </h3>
                  <p>
                    {item.details}
                  </p>
                  <Link href={`/service-details/${item.id}`}>
                    view more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div> 
          </div>
           ))
          }
          
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="services-button text-center mt-30">
              <Link className="btn" href="/service-1">
                <span className="btn-text">
                  view All Services{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
