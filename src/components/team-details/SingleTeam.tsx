import Image from "next/image";
import React from "react";
import iconOne from "../../../public/assets/img/icon/t-1.png";
import iconTwo from "../../../public/assets/img/icon/t-2.png";
import iconThree from "../../../public/assets/img/icon/t-3.png";
import iconUser from "../../../public/assets/img/team/single-tem.png";
import { teamDataType } from "@/interFace/interFace";
import Link from "next/link";

interface propsType{
    filterData:teamDataType | any
}

const SingleTeam = ({filterData}:propsType) => {
  return (
    <>
      <div className="single-team-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="single-img">
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={filterData.img}
                  alt="icon-user"
                />
              </div>
            </div>
            <div className="col-xl-6  col-lg-6 mb-30">
              <div className="single-team-wrapper">
                <div className="single-team-text">
                  <h1> {`I’m`}  {filterData.name} </h1>
                  <span>sr IT Consultant</span>
                  <p>
                    Must explain to you how all this mistaken idea of denouncing
                    ple asure and praising pain was born and I will give you a
                    complete count of the system and expound the actual
                    teachings of the great explorer of the truth master-builder
                    of human happiness one rejects
                  </p>
                    <div className="single-team-info">
                      <div className="single-team-icon">
                        <Image
                          style={{ width: "100%", height: "auto" }}
                          src={iconTwo}
                          alt="icon-user"
                        />
                      </div>
                      <div className="team-info">
                        <span>Email Me</span>
                        <h4> <Link  href="mailto:abdulrehman@codeaquarium.tech">abdulrehman@codeaquarium.tech</Link> </h4>
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

export default SingleTeam;
