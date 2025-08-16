import React from "react";
import thumbOne from "../../../public/assets/img/bg/11.png"
import Image from "next/image";
const ManageMentArea = () => {
  return (
    <>
      <div className="management-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="management-wrapper mb-30">
                <div className="management-text">
                  <h1>
                    We Serve As Your Complete Support Team Or As An Extension Of
                    Your Current IT Team.
                  </h1>
                  <p>
                    Whether you have a few PC{`’`}s or offices throughout the
                    country, Next Horizon will provide IT help when equip ment
                    fails, the network crashes or simply when you need a helping
                    hand. We offer a variety of maint nance ctracts to fit a
                    variety of pricing and service-level needs.
                  </p>
                  <p>
                    Next Horizon{`’`}s IT managed services provide companies of all
                    sizes in the Central Florida area with access to tech nology
                    specialists who are experts in managing networks, network
                    security and computer support.
                  </p>
                  <p>
                    The Next Horizon team possesses high-level expertise and
                    industry certifications allowing them to work with advanced
                    products such as Cisco, Microsoft, Novell and SonicWALL. Our
                    Technicians hold many of the following Certifications: MCSE,
                    MCP, CNA, CCNA, CCNP, CSSA and CCFA.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="management-img">
                <Image src={thumbOne} alt="" style={{ width: "100%", height: "auto" }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMentArea;
