import Link from "next/link";
import React from "react";
import aboutImg from "../../../public/assets/img/about/about.png";
import aboutTwo from "../../../public/assets/img/about/01.png";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="about-text">
                <span>who we are</span>
                <h1>
                  More than 10+ years we provide <span>IT solutions </span>
                </h1>
                <p>
                  At Code Aquarium, we bring over 10 years of expertise in
                  delivering innovative IT solutions that drive business
                  success. Our commitment to excellence and customer
                  satisfaction has made us a trusted partner for businesses
                  worldwide.
                </p>
                <Link href="/services">
                  Our Services <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="about-img">
                <Image
                  src={aboutImg}
                  style={{ width: "100%", height: "auto" }}
                  alt="about-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="about-content">
                <p>
                  We understand that technology is the backbone of modern
                  business. That’s why we’re dedicated to providing cutting-edge
                  IT solutions tailored to your unique needs. Whether you’re
                  looking to streamline operations, enhance security, or
                  innovate with the latest technologies, our team is here to
                  help.
                </p>
                {/* <div className="about-1-img">
                  <Image
                    src={aboutTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="about-img"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
