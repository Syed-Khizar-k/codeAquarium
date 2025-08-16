import React from "react";
import imgOne from "../../../public/assets/img/blog/details/me.png";
import Image from "next/image";
import SocilaLinks from "@/utils/SocilaLinks";
const BlogWidgetAbout = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">About Me</h3>
        </div>
        <div className="about-me text-center">
          <Image src={imgOne} alt="" />
          <h4>Zulia Maron Duo</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="widget-social-icon">
           <SocilaLinks/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWidgetAbout;
