import { serviceDataTwo } from "@/data/service-data-two";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesForServiceThree = () => {
  return (
    <>
      <div className="services-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our services</span>
                <span className="border-right-1"></span>
                <h1>We provide exclusive services for your busainess</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceDataTwo.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <Image src={item.img} alt="" />
                  </div>
                  <div className="services-text">
                    <h3> {item.title} </h3>
                    <p> {item.details} </p>
                    <Link href={`/service-details/${item.id}`}>
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesForServiceThree;
