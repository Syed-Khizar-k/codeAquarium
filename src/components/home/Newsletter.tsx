import React from "react";

const Newsletter = () => {
  return (
    <div
      className="newsletter-area pt-100 pb-100"
      style={{ background: "url(assets/img/bg/bg-4.png)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5 mb-0">
            <div className="newsletter-text">
              <h1>
                Subscribe Our Newsletter <br /> To Get More Update
              </h1>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 mb-0">
            <div className="single-newsletters">
              <div className="newsletter-form">
                <div className="d-flex input-wrapper justify-content-between">
                  <input type="email" placeholder="Your Email" />
                  <button className="btn" type="submit">
                    <span className="btn-text">
                    Submit
                      {/* <i className="fas fa-long-arrow-alt-righ"></i> */}
                    </span>{" "}
                    <span className="btn-border"></span>
                  </button>
                  {/* <button className="mb-1">Submit</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
