"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoThumb from "../../../public/assets/img/bg/ex-1.jpg";
import Image from "next/image";
import Link from "next/link";
const TeamVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);
  return (
    <div className="experience-single mb-30">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openModal();
        }}
      />
      <div className="experience-img">
        <Image src={videoThumb} alt="" />
        <div className="experience-video">
          <Link
            href=""
            className="popup-video"
            onClick={() => {
              openModal();
            }}
          >
            <i className="fas fa-play"> </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamVideo;
