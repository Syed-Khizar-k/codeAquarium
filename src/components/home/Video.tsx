"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoImg from "../../../public/assets/img/bg/video.png";
import Image from "next/image";
import Link from "next/link";
const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="video-area pt-100 pb-100"
        style={{
          background: "url(assets/img/bg/bg-4.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="vWLcyFtni6U"
              onClose={() => {
                openModal();
              }}
            />
            <div className="col-xl-7 col-lg-7 mb-0">
              <div className="video-img">
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={videoImg}
                  alt=""
                />
                <div className="video-icon">
                  <Link
                    href=""
                    className="popup-video"
                    onClick={() => {
                      openModal();
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 mb-0">
              <div className="video-wrapper">
                <div className="section-title section-title-white">
                  <span className="b-sm-left-1"></span>
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">latest video</span>
                  <h1 className="text-light">Discover the Future of Technology with Code Aquariam</h1>
                  <p>
                    Explore how technology will feel through innovation,
                    expertise and advanced solutions. Our videos outline our
                    projects, processes and passions. We believe in transparency
                    and share our journey with you. From web development to AI,
                    our videos show the loyalty and creativity of each decision
                    we create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
