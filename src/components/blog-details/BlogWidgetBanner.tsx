import React from "react";
import thumbImg from "../../../public/assets/img/blog/details/banner.jpg"
import Image from "next/image";
import Link from "next/link";
const BlogWidgetBanner = () => {
  return (
    <>
      <div className="widget mb-40 p-0 b-0">
        <div className="banner-widget">
          <Link href="#">
            <Image src={thumbImg} alt="banner-img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogWidgetBanner;
