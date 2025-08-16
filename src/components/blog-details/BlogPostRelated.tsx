import SocilaLinks from "@/utils/SocilaLinks";
import Link from "next/link";
import React from "react";

const BlogPostRelated = () => {
  return (
    <>
      <div className="row mt-50">
        <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
          <div className="blog-post-tag">
            <span>Releted Tags</span>
            <Link href="/blog">organic</Link>
            <Link href="/blog">Foods</Link>
            <Link href="/blog">tasty</Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
          <div className="blog-share-icon text-left text-md-right">
            <span>Share: </span>
            <SocilaLinks/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostRelated;
