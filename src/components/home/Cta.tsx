import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <div
        className="cta-area pt-100 pb-100"
        style={{ background: "url(assets/img/bg/bg-2.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="cta-text">
                <span>do you have any project ?</span>
                <h1>Let’s Talk About Business Soluations With Us</h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="cta-button text-lg-right">
                  <Link href={"/contact"} className="btn">
                    <span className="services-button">
                      join us <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
