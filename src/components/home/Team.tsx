import React from "react";
import bgImg from "../../../public/assets/img/shape/shape-1.png"
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/team-data";
const Team = () => {


  return (
    <>
      <div className="team-area pt-120 pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item team-01 bounce-animate">
            <Image src={bgImg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row mb-50">
            <div className="col-xl-4 col-lg-6">
              <div className="section-title  mb-30">
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">our Team</span>
                <h1>Meet Experience Team Member</h1>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-3 col-lg-6">
              <div className="team-section mb-30 z-index">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will
                  give.
                </p>
                <Link className="btn" href="/contact">
                  
                    <span className="btn-text">
                      join with us{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  
                </Link>
              </div>
            </div>
          </div> 
          <div className="row">
            {teamData.slice(0,4).map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-30">

                <Link href={`/team-details/${item.id}`} className="team-wrapper">
                  <div className="team-img">
                    <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                  </div>
                  <div className="team-text">
                    <h4> <Link href={`/team-details/${item.id}`}>{item.name}</Link> </h4>
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
                </Link>


              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
