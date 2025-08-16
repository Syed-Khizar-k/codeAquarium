import { blogDataTwo } from "@/data/blog-data-two";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ArticleLayout = () => {
  return (
    <>
      {blogDataTwo.map((item) => (
        <article key={item.id} className="postbox post format-image mb-40">
          <div className="postbox__thumb mb-30">
            <Link href={`/blog-details/${item.id}`}>
              <Image
                style={{ width: "100%", height: "auto" }}
                src={item.image}
                alt="blog image"
              />
            </Link>
          </div>
          <div className="postbox__text p-50">
            <div className="post-meta mb-15">
              <span>
                <i className="fas fa-user"> </i> Soamlia
              </span>
              <span>
                <i className="fas fa-calendar"> </i> 05 Aug 2022
              </span>
              <span>
                <i className="fas fa-comments"> </i> (03)
              </span>
            </div>
            <h3 className="blog-title">
              <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
            </h3>
            <div className="post-text mb-20">
              <p>{item.text}</p>
            </div>
            <div className="read-more mt-30 btn">
              <Link href={`/blog-details/${item.id}`}>
                <span className="btn-text">
                  Read More <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ArticleLayout;
