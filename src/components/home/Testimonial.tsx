import React from "react";
import thumb from "../../../public/assets/img/testimonial/testimonials.png";
import Image from "next/image";
import TestimonialDefault from "./TestimonialDefault";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial-area testimonial pb-100">
        <div className="container">
          <div className="section-title  mb-75 text-center">
            <span className="b-sm-left-1"></span>
            <span className="b-sm-left-2"></span>
            <span className="sub-t-left">Testimonials</span>
            <h1>What Our Clients Say <br/>About us</h1>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 mt-sm-5">
              <TestimonialDefault />
            </div>
            <div className="col-xl-6 col-lg-6 mb-0">
              <div className="testimonial-img">
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={thumb}
                  alt="testimonial"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
