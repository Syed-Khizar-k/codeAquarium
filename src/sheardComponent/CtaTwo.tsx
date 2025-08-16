"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CtaTwo = () => {

    const pathname = usePathname();
  
    const bgImage =
      pathname === "/case-1"
        ? "url(/assets/img/bg/Kalitenko-Banner.png)"
        : pathname === "/case-2"
        ? "url(/assets/img/bg/case-2-Banner.png)"
        : "url(/assets/img/bg/service-banner.png)";
  
  return (
    <>
      <div
        className="cta-area pt-100 pb-100"
        style={{ background: bgImage }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="cta-text mb-0">
                <span>do you have any project ?</span>
                <h1>{`Let’s`} Talk About Business Soluations With Us</h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cta-button text-lg-right mb-0 text-end">
                <Link
                  className="btn"
                  href="/contact"
                >
                  <span className="btn-text">
                    contact us <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                {/* <Link
                  className="btn"
                  href="/contact"
                >
                  <span className="btn-text">
                    join with us <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
