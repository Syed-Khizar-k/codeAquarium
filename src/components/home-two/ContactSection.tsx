import React from "react";
import imgOne from "../../../public/assets/img/bg/map.webp";
import Image from "next/image";
import ContactFormHomeTwo from "@/form/ContactFormHomeTwo";
const ContactSection = () => {
  return (
    <div className="contact-2-area pt-100 pb-100 theme-bg ">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 ">
            <div className="contact-wrapper mb-0">
              <div className="section-title section-title-white mb-25">
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">contact us</span>
                <h1>
                  {`Don't`} Hesitate To <br /> Contact Us
                </h1>
              </div>
                <ContactFormHomeTwo/>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="map-img mb-0">
              <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
