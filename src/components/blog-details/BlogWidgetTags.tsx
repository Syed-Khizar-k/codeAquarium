import Link from "next/link";
import React from "react";

const BlogWidgetTags = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Instagram Feeds</h3>
        </div>
        <div className="tag">
          <Link href="/blog">Popular</Link>
          <Link href="/blog">desgin</Link>
          <Link href="/blog">usability</Link>
          <Link href="/blog">develop</Link>
          <Link href="/blog">consult</Link>
          <Link href="/blog">icon</Link>
          <Link href="/blog">HTML</Link>
          <Link href="/blog">ux</Link>
          <Link href="/blog">business</Link>
          <Link href="/blog">kit</Link>
          <Link href="/blog">keyboard</Link>
          <Link href="/blog">tech</Link>
        </div>
      </div>
    </>
  );
};

export default BlogWidgetTags;
