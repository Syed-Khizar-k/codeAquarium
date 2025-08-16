import { servicesData } from "@/data/services-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="our-services-area grey-bg-2 pt-100 pb-70">
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
          <div className="row">
            {servicesData.slice(0, 6).map((item, index) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-4 col-md-6 d-flex mb-30"
              >
                <div className="our-services-wrapper mb-0">
                  <div className="our-services-img">
                    <Image
                      style={{ width: "100%", height: "250px" }}
                      src={item.img}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-text">
                      <h3> {item.title} </h3>
                      <p className="truncate-3-lines">{item.details}</p>
                      <Link href={`/service-details/${item.id}`}>
                        view more <i className={item.icon}></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurServices;
