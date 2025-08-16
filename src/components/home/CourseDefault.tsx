"use client"
import React from "react";
import Link from "next/link";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbOne from "../../../public/assets/img/project/port-07.png";
import thumbTwo from "../../../public/assets/img/project/port-03.png";
import thumbThree from "../../../public/assets/img/project/port-2.png";
import thumbFour from "../../../public/assets/img/project/port-1.png";
import thumbFive from "../../../public/assets/img/project/port-05.png";
import thumbSix from "../../../public/assets/img/project/port-06.png";


import Image from "next/image";
import { title } from "process";
import { casesData } from "@/data/case-data";

const CourseDefault = () => {
  // const casesData = [
  //   {
  //     id: 1,
  //     img: thumbOne,
  //     title:"LUMS"
  //   },
  //   {
  //     id: 2,
  //     img: thumbTwo,
  //     title:"Buck Trader"
  //   },
  //   {
  //     id: 3,
  //     img: thumbThree,
  //      title:"Qatar Living"
  //   },
  //   {
  //     id: 4,
  //     img: thumbFour,
  //     title:"YMCA"
  //   },
  //   {
  //     id: 5,
  //     img: thumbFive,
  //      title:"Hettie Orange"
  //   },
  //   {
  //     id: 6,
  //     img: thumbSix,
  //      title:"Kalitenko"
  //   },
  // ];

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        observeParents={true}
        observer={true}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 2.5,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".case-button-next",
          prevEl: ".case-button-prev",
        }}
      >
        {casesData?.slice(0,5)?.map((item) => (
          <SwiperSlide key={item.id}>
             <div  className="col-12">
            <div className="project-wrapper">
              <div className="project-img">
                <Link href="#">
                  <Image style={{ width: "100%", height: "365px" , objectFit:"cover"}} src={item.img} alt="" loading="lazy"/>
                </Link>
                <div className="project-text">
                  <Link href={`portfolio-details/${item.id}`}>
                  <h3>
                    {item.titleTwo}
                  </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bd-trending__navigations">
        <button className="case-button-prev banner-button-prev slick-arrow">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="case-button-next banner-button-next slick-arrow">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
      
    </>
  );
};

export default CourseDefault;
