"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { title } from "process";
const TestimonialDefault = () => {
  const testimonialData = [
    {
      id: 1,
      details:
        "Code Aquarium transformed our business with their innovative web development solutions.Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
      name: "– Abdul Rehman",
      title: "CEO",
    },
    {
      id: 2,
      details:
        "The data scraping tools developed by Code Aquarium have been a game-changer for our analytics team. Their expertise and attention to detail are unmatched.",
      name: "– Syed Khizar",
      title: "Director",
    },
    {
      id: 3,
      details:
        "From design to deployment, Code Aquarium made the entire process seamless. Their UX/UI strategy has significantly improved our customer engagement. Thank you!",
      name: "– Hassan Shami",
      title: "Data Analyst",
    },
    {
      id: 4,
      details:
        "The AI solutions provided by Code Aquarium have helped us automate repetitive tasks and improve decision-making. Their team is knowledgeable, creative, and a pleasure to work with. We look forward to future collaborations!",
      name: "– Sufwan Masood",
      title: "Developer",
    },

    {
      id: 5,
      details:
        "Your team members are very professional with their work ethic, communication and skills. They always answered questions promptly. Had suggestions for improvement. Followed directions well. They speaks fluent English and understands everything we ask for. They all are very competent in their coding skills and goes above and beyond to achieve the best results. I will hire again. Thank you for your hard work.",
        name:"Arham Ali",
        title: "Web Developer",
    },
  ];
  return (
    <>
      <div className="testimonial-area">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, Navigation]}
          spaceBetween={0}
          loop={true}
          observeParents={true}
          observer={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".navigation-next",
            prevEl: ".navigation-preview",
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonialData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-wrapper col">
                <div className="testimonial-text">
                  <p>{item.details}</p>
                  <h4> {item.name} </h4>
                  <span> {item.title} </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bd-trending__navigations">
          <button className="case-button-prev navigation-preview arrow-button">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="case-button-next navigation-next arrow-button">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialDefault;
