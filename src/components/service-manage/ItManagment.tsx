import React from "react";
import thumbOne from "../../../public/assets/img/bg/002.jpg";
import Image from "next/image";
const ItManagment = () => {
  return (
    <>
      <div
        className="it-management-area pt-130 pb-100"
        style={{ background: "url(assets/img/bg/bg-16.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-img">
                <Image
                  src={thumbOne}
                  alt="it-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-wrapper">
                <div className="it-management-text">
                  <h1>
                    Effective IT Service Desk Solutions The Key to End User
                    Productivity
                  </h1>
                  <span>
                    From self-service support to a staffed IT service desk, the
                    right IT solution solves user problems quickly and
                    effectively. But your enterprise IT is inefficient, your
                    users{`’`} incidents away.
                  </span>
                  <p>
                    ITS Service Desk Management includes a team of experts
                    permanently assigned to your account so they know your
                    operation and your users. Our agents serve as the point of
                    contact from start to finish, utilizing ITIL standards and
                    shift left methodology to ensure smooth resolution of
                    incidents and hassle-free IT service desk solutions for your
                    business.
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

export default ItManagment;
