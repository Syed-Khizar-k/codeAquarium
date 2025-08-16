"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import imgVideo from "../../../public/assets/img/bg/c.jpg";
import Image from "next/image";

const AboutVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="choose-wrapper">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openModal();
        }}
      />
      <div className="choose-text">
        <p>
          At Next Orbit, we are experts in delivering innovative IT solutions
          that drive business growth and success. With over 23 years of
          experience, we have built a reputation for excellence, reliability,
          and customer satisfaction. Our team of skilled professionals is
          dedicated to providing tailored solutions that meet your unique needs,
          ensuring seamless integration and maximum ROI. Whether it’s web
          development, AI, or cloud technologies, we are committed to helping
          you achieve your goals with cutting-edge solutions.
        </p>
      </div>
      <div className="choose-img">
        <Image src={imgVideo} alt="" />
        <div className="choose-video">
          <a
            className="popup-video"
            onClick={() => {
              openModal();
            }}
          >
            <i className="fas fa-play"> </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
