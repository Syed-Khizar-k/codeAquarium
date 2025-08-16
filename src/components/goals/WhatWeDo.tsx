import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="goals-area pos-rel">
        <div
          className="goals-img d-none d-lg-block"
          style={{ background: "url(assets/img/goals/03.jpg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
              <div className="golas-wrapper">
                <div className="section-title section-title-white mb-30">
                  <span className="b-sm-left-1"></span>
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">what we do</span>
                  <h1>Super Quality IT Solutions Provide</h1>
                </div>
                <div className="golas-text">
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denoun cing pleasure and praising pain was born and I will
                    giv complete account of the system, and expound the actual
                    teachings of the great explorer of the truth the
                    master-builder of
                  </p>
                  <ul className="goals-list">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        Pleasure and praising pain was born and will complete
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        Pleasure and praising pain was born and will complete
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        Powerful Image Analysis With Google Cloud Vision
                      </span>
                    </li>
                  </ul>
                  <Link className="btn" href="/service-1">
                    <span className="btn-text">
                      learn more <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
