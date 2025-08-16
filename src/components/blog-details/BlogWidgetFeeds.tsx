import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogWidgetFeeds = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Popular Feeds</h3>
        </div>
        <ul className="recent-posts">
          {blogData.map((item) => (
            <li key={item.id}>
              <div className="widget-posts-image">
                <Link href={`/blog-details/${item.id}`}>
                  <Image src={item.img} alt="" />
                </Link>
              </div>
              <div className="widget-posts-body">
                <h6 className="widget-posts-title">
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h6>
                <div className="widget-posts-meta">October 18, 2018 </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogWidgetFeeds;
