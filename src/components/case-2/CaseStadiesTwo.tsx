"use client"
import React from "react";
import thumbOne from "../../../public/assets/img/project/c-01.jpg";
import thumbTwo from "../../../public/assets/img/project/c-02.jpg";
import thumbThree from "../../../public/assets/img/project/c-03.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CaseStadiesTwo = () => {

  const pathName = usePathname()

  const caseData = [
    {
      id: 1,
      subTitle: "Design strategy",
      title: "Creative Idea Buildup",
      details:
        "Web Development involves designing and creating websites. It encompasses various aspects such as frontend development.",
      img: thumbOne,
    },
    {
      id: 2,
      subTitle: "Design strategy",
      title: "Creative Idea Buildup",
      details:
        "Database Analysis refers to the process of examining databases to uncover trends, patterns, and insights. It involves.",
      img: thumbTwo,
    },
    {
      id: 3,
      subTitle: "Design strategy",
      title: "Creative Idea Buildup",
      details:
        "Server Security focuses on safeguarding servers from unauthorized access, data breaches, and malicious attacks",
      img: thumbThree,
    },
  ];
  return (
    <>
      {/* <div className={`case-studies pt-120 ${pathName === "/case-2" ? "pb-100" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>case studies</span>
                <span className="border-right-1"></span>
                <h1>Our Recent Case Studies</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {caseData.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="case-studies-wrapper mb-30">
                  <div className="case-studies-img">
                    <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="case-img" />
                    <div className="case-studies-text">
                      <span> {item.subTitle} </span>
                      <h3>
                        <Link href="/service-manage">{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="case-studies-content text-center">
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CaseStadiesTwo;
