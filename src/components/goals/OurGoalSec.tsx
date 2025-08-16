import React from "react";
import thumbOne from "../../../public/assets/img/goals/01.jpg";
import thumbTwo from "../../../public/assets/img/goals/02.jpg";
import Image from "next/image";
const OurGoalSec = () => {
  return (
    <>
      <div className="our-goals-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="our-goals-wrapper mb-30">
                <div className="our-goals-img">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={thumbOne}
                    alt="goal-img"
                  />
                </div>
                <div className="our-golas-text">
                  <h3>MIssion & Vision</h3>
                  <p>
                    Sedut perspiciatis unde omnis natus error voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    ipsa quae
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-8">
              <div className="our-goals-wrapper mb-30">
                <div className="our-goals-img">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={thumbTwo}
                    alt="goal-img"
                  />
                </div>
                <div className="our-golas-text">
                  <h3>What DO We Want/ Our Goals</h3>
                  <p>
                    Must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because
                  </p>
                  <p className="mt-15">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictae.
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

export default OurGoalSec;
