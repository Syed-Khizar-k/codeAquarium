import React from "react";
import TeamVideo from "./TeamVideo";

const Experience = () => {
  return (
    <>
      <div className="experience-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 mb-30">
              <div className="experience-text">
                <h1>Experience</h1>
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system and expound the actual
                  teachings of the great explorer of the truth the
                  master-builder of human happiness. No one rejects dislikes
                </p>
                <p>
                  Born and I will give you a complete account of the system and
                  expound the actual teachings of the great explorer of the
                  truth the master-builder.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <TeamVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
