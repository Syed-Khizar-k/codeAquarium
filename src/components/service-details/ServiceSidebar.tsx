"use client"

import { servicesData } from "@/data/services-data";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React from "react";

const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bd-service-sidebar mb-50">
      <div className="bd-service-widget gray-bg mb-30">
        <div className="bd-service-sidebar-category">
          <h5 className="bd-service-sidebar-category-title mb-25">Category</h5>

          <ul>
            {servicesData.slice(0, 6).map((item, index) => {
              
              const isActive = pathname === `/service-details/${item.id}`;

              return (
                <li key={index}>
                  <Link 
                    href={`/service-details/${item.id}`} 
                    className={isActive ? "active-link" : ""}
                  >
                    {item.title} <i className="far fa-chevron-right"></i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="bd-service-widget heading-bg">
        <div className="bd-service-sidebar-support text-center pt-30 pb-30">
          <h5 className="bd-service-sidebar-support-title mb-30">
            Need support for this <br />
            service?
          </h5>
          <div className="bd-service-sidebar-support-btn">
            <Link href="/contact" className="btn">
              <span className="btn-text">Contact US</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
