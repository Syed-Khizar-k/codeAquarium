import React from "react";
import filterImg from "../../../public/assets/img/icon/filter.png"
import Image from "next/image";
import Link from "next/link";
const BlogPostArrow = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="navigation-border pt-50 mt-40"></div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="bakix-navigation b-next-post text-left mb-30">
            <span>
              <Link href="">Next Post</Link>
            </span>
            <h4>
              <Link href="">Tips on Minimalist</Link>
            </h4>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 ">
          <div className="bakix-filter text-left text-md-center mb-30">
            <Link href="">
              <Image src={filterImg} alt="" />
            </Link>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
            <span>
              <Link href="">Next Post</Link>
            </span>
            <h4>
              <Link href="">Tips on Minimalist</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostArrow;
