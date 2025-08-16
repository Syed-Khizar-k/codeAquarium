import { caseDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumbImg from "../../../public/assets/img/project/case-details.jpg";
import SocilaLinks from "@/utils/SocilaLinks";
import { casesData } from "@/data/case-data";
interface propsType {
  data: caseDataType | any;
}

const CaseDeailsContent = ({ data }: propsType) => {
  const caseItem = casesData.find((item) => item.id === data.id);
  return (
    <>
      <div className="case-details-area pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="case-details-wrapper">
                <div className="case-details-img">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={
                      caseItem
                        ? caseItem.image
                        : "assets/img/project/case-details.jpg"
                    }
                    alt="case-img"
                    width={1170}
                    height={660}
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5 col-lg-5 mb-30">
                  <div className="case-details-text">
                    <h1> {data?.titleTwo} </h1>
                    <span>{data?.title}</span>
                    <div className="case-post-tag">
                      <h5>Project Tags :</h5>
                      {data?.projectTags.map((tag: any, index: number) => (
                        <span key={index} className="me-2">{tag.name}</span>
                      ))}
                      {/* <Link href="/blog">IT,</Link>
                      <Link href="/blog">Management,</Link>
                      <Link href="/blog">Strategy,</Link>
                      <Link href="/blog">Product Design</Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 mb-30">
                  <div className="case-details-content">
                    <p>{data?.details}</p>
                    <div className="case-share-icon">
                      <span>Project Share :</span>
                      <SocilaLinks />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-layout-bg mt-55">
                <div className="gallery-layout-info">
                  <span>Case Name</span>
                  <h5>{data?.titleTwo}</h5>
                </div>
                <div className="gallery-layout-info">
                  <span>Category</span>
                  <h5>Web Developement</h5>
                </div>
                <div className="gallery-layout-info">
                  <span>Date</span>
                  <h5>{data.ProjectDate}</h5>
                </div>
                {/* <div className="gallery-layout-info">
                  <span>Clients</span>
                  <h5>BDevs Ltd</h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDeailsContent;
