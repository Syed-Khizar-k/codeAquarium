"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { clientReviewData } from "@/data/client-review-data";
import Image from "next/image";
import GetRatting from "@/hooks/GetRatting";


const ClientSection = () => {
  return (
    <div className="client-area dark pt-100 pb-100 grey-bg">
      <div className="container clinet-slider">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 text-center">
            <div className="section-title  mb-70">
              <span className="b-sm-left-2"></span>
              <span className="sub-t-left">our testimonials</span>
              <h1>More Than 100+ Customer Satisfied Our Solutions</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Scrollbar, A11y, Autoplay,Navigation]}
              spaceBetween={0}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={true}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 3,
                },
                1900: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: ".client-slider-next",
                prevEl: ".client-slider-prev",
              }}
            >
              {clientReviewData?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="client-item col ml-25">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p className="truncate-3-lines"> {item.details} </p>
                        <div className="client-rating">
                          <GetRatting averageRating={item.ratting} />
                        </div>
                        <div className="clientsay-name">
                          {/* <div className="client-say-img">
                            <Image src={item.img} alt="" />
                          </div> */}
                          <div className="client-say-content">
                            <h4> {item.name} </h4>
                            <span> {item.title} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* silder button */}

        <div className="clinet-navigaton-div">
          <button className="client-slider-prev navigation-preview arrow-button">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="client-slider-next navigation-next arrow-button">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
