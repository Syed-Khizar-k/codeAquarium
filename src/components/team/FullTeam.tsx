import { teamData } from "@/data/team-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImg from "../../../public/assets/img/shape/shape-6.png";
const FullTeam = () => {
  return (
    <>
      <div className="team-area pt-95 pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item team-02 bounce-animate">
            <Image src={bgImg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
            <div className="section-title text-center  mb-75">
              <h1>Meet Our Experienced Team Member</h1>
            </div>
          </div>
          <div className="row">
            {teamData.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="team-wrapper">
                  <div className="team-img">
                    <Image
                      style={{ width: "100%", height: "auto" }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h4> <Link className="team-title" href={`/team-details/${item.id}`}> {item.name} </Link> </h4>
                    <span> {item.title} </span>
                    <div className="team-icon">
                      <Link href="https://www.facebook.com/">
                        <i className={item.facebook}></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className={item.twitter}></i>
                      </Link>
                      <Link href="https://www.instagram.com/">
                        <i className={item.instagram}></i>
                      </Link>
                      <Link href="https://www.youtube.com/">
                        <i className={item.youtube}></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullTeam;
