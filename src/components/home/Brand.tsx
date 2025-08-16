"use client"
import React from "react";
import brandOne from "../../../public/assets/img/brand/brand-01.png";
import brandTwo from "../../../public/assets/img/brand/brand-02.png";
import brandThree from "../../../public/assets/img/brand/brand-03.png";
import brandFour from "../../../public/assets/img/brand/brand-04.png";
import brandFive from "../../../public/assets/img/brand/brand-05.png";
import Image from "next/image";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
  const brandLogos = [
    {
      id: 1,
      logo: brandOne,
    },
    {
      id: 2,
      logo: brandTwo,
    },
    {
      id: 3,
      logo: brandThree,
    },
    {
      id: 4,
      logo: brandFour,
    },
    {
      id: 5,
      logo: brandFive,
    },
    {
      id: 6,
      logo: brandThree,
    },
    {
      id: 7,
      logo: brandOne,
    },
  ];

  return (
    <>
    </>
    // <div className="brand-area  pb-0">
    //    <div className="container">
    //     <div className="row">
    //       <div className="col-xl-12">
    //         <Swiper
    //           modules={[Navigation, Scrollbar, A11y, Autoplay]}
    //           spaceBetween={30}
    //           loop={true}
    //           observeParents={true}
    //           observer={true}
    //           centeredSlides={false}
    //           breakpoints={{
    //             320: {
    //               slidesPerView: 3,
    //             },
    //             768: {
    //               slidesPerView: 3,
    //             },
    //             992: {
    //               slidesPerView: 4,
    //             },
    //             1400: {
    //               slidesPerView: 5,
    //             },
    //             1700: {
    //               slidesPerView: 5,
    //             },
    //           }}
    //           navigation={{
    //             nextEl: ".bd-amenities-slider-next",
    //             prevEl: ".bd-amenities-slider-prev",
    //           }}
    //         >
    //           {brandLogos.map((item) => (
    //             <SwiperSlide key={item.id}>
    //               <div className="brand-img">
    //                 <Image src={item.logo} alt="" />
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div> 
    // </div>
  );
};

export default Brand;
