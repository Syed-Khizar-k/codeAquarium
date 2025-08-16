import Link from "next/link";
import React from "react";
import ProgressBarCircle from "./ProgressBarCircle";
import CountUpContent from "@/utils/CountUpContent";
import CountUpTwo from "@/utils/CountUpTwo";

const FactArea = () => {
  return (
    <>
      <div
        className="fact-are-area pt-130 pb-100"
        style={{ background: "url(assets/img/bg/service-banner.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12 mb-30">
              <div className="fact-text text-left">
                <span>do you have any project ?</span>
                <h1>
                  Let’s Talk About <br /> IT Solutions
                </h1>
                <Link href="/goals">
                  join with us <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <ProgressBarCircle percent={85} />
                    <div className="progress-content">
                      <CountUpTwo number={85} text=""/> 

                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <ProgressBarCircle percent={95} />
                    <div className="progress-content">
                    <CountUpTwo number={95} text="" />
                      <span>Project Complate</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <ProgressBarCircle percent={90} />
                    <div className="progress-content">
                      <CountUpTwo number={90} text="" />
                      <span>Market Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactArea;
