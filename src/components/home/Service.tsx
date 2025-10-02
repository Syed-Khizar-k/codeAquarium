import React from "react";
import bgImg from "../../../public/assets/img/bg/service-banner.png";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
const Service = () => {
  return (
    <>
      <div
        className="services-area pt-100 pb-70"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>what we do</span>
                <span className="border-right-1"></span>
                <h1 className="text-light">
                  Empowering Your Business with Cutting-Edge Solutions
                </h1>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            {serviceDataTwo.map((item , index) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-4 col-md-6 d-flex mb-30"
              >
                <div className="services-wrapper text-center d-flex flex-column">
                  <div className="services-img">
                    <Image src={item.img} alt="" loading="lazy"/>
                  </div>
                  <div className="services-text flex-grow-1 d-flex flex-column">
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                    <div className="button-wrapper mt-2">
                      <Link href={`/service-details/${item.id}`} className="btn">
                        <span className="services-button">
                          READ MORE{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* {serviceDataTwo.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
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
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
