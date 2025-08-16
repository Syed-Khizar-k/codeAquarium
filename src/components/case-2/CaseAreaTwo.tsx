"use client";
import { casesData } from "@/data/case-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const CaseAreaTwo = () => {
  

  return (
    <>
      {/* <div
        className="our-case-area pt-120  pr-55 pl-55 pb-120"
        style={{ background: "url(assets/img/bg/case.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our project</span>
                <span className="border-right-1"></span>
                <h1>Our Latest Case Studies</h1>
              </div>
            </div> 
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Scrollbar, A11y, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1700: {
                    slidesPerView: 4,
                  },
                }}
              >
                {casesData.slice(0,6).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="col ml-25">
                      <div className="our-case-wrapper">
                        <div className="our-case-img">
                          <Link href={`/case-details`}>
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={item.img}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="our-case-text">
                          <h3>
                            <Link href={`/case-details/${item.id}`}>
                              {item.title} <span>({item.subText})</span>
                            </Link>
                          </h3>
                          <p>{item.details}</p>
                          <Link href={`/case-details/${item.id}`}>
                            <span className="cases-button">
                              learn more{" "}
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CaseAreaTwo;
