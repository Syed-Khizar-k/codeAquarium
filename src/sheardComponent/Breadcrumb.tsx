"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { caseDataType } from "@/interFace/interFace";
import { casesData } from "@/data/case-data";
interface propsType {
  pageTitle: string;
  data: caseDataType | any;
}

const Breadcrumb = ({ pageTitle, data }: propsType) => {
  const pathname = usePathname();
  const { id } = useParams();

  const numericId = Number(id);
  const filteredData = data?.find(
    (item: { id: number }) => item.id === numericId
  );
  const bgImage = filteredData ? filteredData.bgImage : undefined;

  console.log("Filtered Data:", filteredData);
  console.log("Final bgImage:", bgImage);

  const backImage =
    pathname === "/contact"
      ? "url(assets/img/bg/Contact-Us-Banner.png)"
      : pathname === "/blog"
      ? "url(assets/img/bg/Blog-Banner.png)"
      : pathname === "/about"
      ? "url(assets/img/bg/About-Banner.png)"
      : pathname === "/portfolio"
      ? "url(assets/img/bg/1.png)"
      : pathname === "/case-2"
      ? "url(assets/img/bg/case-2-Banner.png)"
      : pathname.startsWith("/case-details/") && bgImage
      ? bgImage
      : "url(assets/img/bg/4.png)";

  return (
    <div
      className="breadcrumb-area pt-130 pb-130"
      style={{ background: backImage }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center">
              <h1>{pageTitle ? pageTitle : "Blog"}</h1>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{pageTitle ? pageTitle : "Blog"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
