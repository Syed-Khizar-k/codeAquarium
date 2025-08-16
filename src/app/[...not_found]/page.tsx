import Link from "next/link";
import React from "react";
const ErrorPage = () => {
  return (
    <>
      <section className="bd-error-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="bd-error text-center">
                <h1>
                  4<span>0</span>4
                </h1>
                <h3 className="mb-20">No Result Found !</h3>
                <p>
                  {`You're`} looking for something that not found in search
                  result. <br />
                  Please try to search again.
                </p>
              </div>
              <div className="error-btn">
                <div className="login__btn text-center">
                  <Link className="btn" href="/">
                    <span className="btn-text">
                      Back To Home{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
