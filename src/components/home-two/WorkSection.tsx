import React from "react";
import shapeOne from "../../../public/assets/img/shape/shape-2.png";
import shapeTwo from "../../../public/assets/img/shape/shape-3.png";
import lineImg from "../../../public/assets/img/shape/line.png";

import Image from "next/image";
const WorkSection = () => {
  return (
    <div
      className="working-process-area pos-rel pt-120 pb-100"
      style={{ backgroundImage: `url(${"assets/img/bg/bg-6.jpg"})` }}
    >
      <div className="shape d-none d-xl-block">
        <div className="shape-item wor-01 rotateme">
          <Image src={shapeOne} alt="" />
        </div>
        <div className="shape-item wor-02 rotateme">
          <Image src={shapeTwo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
              <span className="border-left-1"></span>
              <span>working process</span>
              <span className="border-right-1"></span>
              <h1>Who Does We Works</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
              <i className="fa-solid fa-head-side-brain"></i>
                <div className="angle-icon">
                  <Image src={lineImg} alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Select Project</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
                <i className="fas fa-atom"> </i>
                <div className="angle-icon">
                  <Image src={lineImg} alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Project Analysis</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper mb-30 text-center">
              <div className="working-process-icon">
                <i className="fas fa-gem"></i>
              </div>
              <div className="working-process-text">
                <h3>Finished Project</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
