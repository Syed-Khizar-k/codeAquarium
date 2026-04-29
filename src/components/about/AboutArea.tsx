import React from "react";
import thumbOne from "../../../public/assets/img/about/2nd-Section.png";
import Image from "next/image";
import Link from "next/link";
const AboutArea = () => {
  return (
    <>
      <div className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-0">
              <div className="about-2-img">
                <Image src={thumbOne} alt="img-data" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-0">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span>who we are</span>
                  <h1>
                    More than 10+ years we provide <span>IT solutions </span>
                  </h1>
                  <p>
                    At Code Aquarium, we bring over 10 years of expertise in
                    delivering innovative IT solutions that drive business
                    success. From web development to AI and cloud technologies,
                    we specialize in creating scalable, secure, and future-ready
                    solutions tailored to your needs.
                  </p>
                  <p className="mt-20">
                    Our commitment to excellence and customer satisfaction has
                    made us a trusted partner for businesses worldwide. Let us
                    help you transform your ideas into reality and achieve your
                    goals with cutting-edge technology.
                  </p>
                </div>
                {/* <div className="about-button">
                  <Link className="btn" href="/goals">
                    <span className="btn-text">
                      learn more <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div> */}  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
