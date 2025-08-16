"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { serviceManageData } from "@/data/service-manage-data";
const AboutService = () => {
  const path = usePathname();
  return (
    <>
      <div
        className={`services-area  ${
          path === "/service-2" || "/service-manage" ? "" : "pb-100"
        }`}
      >
        <div className="container">
          <div className="row">
            {serviceManageData.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className={item.class}>
                  <div className="services-icon">
                    <i className="fas fa-laptop-code"> </i>
                  </div>
                  <div className="services-text">
                    <h3> {item.title} </h3>
                    <p>
                       {item?.details}
                    </p>
                    <Link href={`/service-manage/${item.id}`}>
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
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

export default AboutService;
