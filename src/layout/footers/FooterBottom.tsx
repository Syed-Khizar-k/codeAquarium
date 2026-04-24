import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom-area pt-50">
        <div className="container">
          <div className="footer-bg-bottom">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="copyright">
                  <p>
                    <i className="far fa-copyright"></i> Copyright 2025 Code
                    Aquarium. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-bottem-text text-md-right">
                  <p>
                    Design By <Link href="">Code Aquarium</Link>
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

export default FooterBottom;
