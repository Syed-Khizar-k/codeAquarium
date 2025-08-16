import Image from "next/image";
import React from "react";
import imgOne from "../../../public/assets/img/about/02.png";
import FaqContent from "@/sheardComponent/elements/FaqContent";
const AboutSection = () => {
  return (
    <>
      <div className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="about-2-img">
                <Image
                  src={imgOne}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-10">
              <div className="faq-wrapper">
                <div className="section-title mb-25">
                  <span className="b-sm-left-1"></span>
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">About us</span>
                  <h1>Why Most People Choose Our Business Solutions</h1>
                  <p>
                    Sedut perspiciatis unde omnis iste natus error sitlupttem
                    accusantium doloremque laudantium totam remap eriaeaque ipsa
                    quae ab illo inventore veritatis{" "}
                  </p>
                </div>
                {/* accordian */}
                <FaqContent />
                {/* accordian end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
