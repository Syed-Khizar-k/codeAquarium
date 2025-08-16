import React from "react";
import Link from "next/link";
import { blogData } from "@/data/blog-data";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="blog-area pt-120 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
            <div className="section-title text-center ml-50 mr-50 mb-75">
              <span className="border-left-1"></span>
              <span>our blogs</span>
              <span className="border-right-1"></span>
              <h1>Reads Our Latest News & Blog</h1>
            </div>
          </div> 
        </div>
        <div className="row">
          {blogData.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="blog-wrapper">
                <div className="blog-img">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                  </Link>
                </div>
                <div className="blog-meta">
                  <span>
                    {" "}
                    <i className="fas fa-user"> </i> Soamlia
                  </span>
                  <span>
                    {" "}
                    <i className="fas fa-calendar"> </i> 05 Aug 2019
                  </span>
                  <span>
                    {" "}
                    <i className="fas fa-comments"> </i> (03)
                  </span>
                </div>
                <div className="blog-text">
                  <h3>
                    <Link href={`/blog-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.subTitle}</p>
                  <Link href={`/blog-details/${item.id}`}>
                    <span className="blog-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
