import { blogDataType } from "@/interFace/interFace";
import Image from "next/image";
import React from "react";
import BlogPostRelated from "./BlogPostRelated";
import BlogPostArrow from "./BlogPostArrow";
import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostComments from "./BlogPostComments";
import BlogCommentsForm from "./BlogCommentsForm";
import BlogWidgetSearch from "./BlogWidgetSearch";
import BlogWidgetAbout from "./BlogWidgetAbout";
import BlogWidgetFeeds from "./BlogWidgetFeeds";
import BlogWidgetCate from "./BlogWidgetCate";
import BlogWidgetSocial from "./BlogWidgetSocial";
import BlogWidgetInsta from "./BlogWidgetInsta";
import BlogWidgetTags from "./BlogWidgetTags";
import BlogWidgetBanner from "./BlogWidgetBanner";
import Link from "next/link";

interface propsType {
  singleBlog: blogDataType;
}

const BlogContent = ({ singleBlog }: propsType) => {
  return (
    <>
      <div className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article className="postbox post format-image mb-40">
                <div className="postbox__thumb mb-35">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={singleBlog.img}
                    alt="single blogData"
                  />
                </div>
                <div className="postbox__text bg-none">
                  <div className="post-meta mb-15">
                    <span>
                      <i className="fas fa-calendar-check"> </i> September 15,
                      2021{" "}
                    </span>
                    <span>
                      <Link href="#">
                        <i className="fas fa-user"> </i> Diboli B. Joly
                      </Link>
                    </span>
                    <span>
                      <Link href="#">
                        <i className="fas fa-comments"> </i> 23 Comments
                      </Link>
                    </span>
                  </div>
                  <h3 className="blog-title">{singleBlog.title}</h3>
                  <div className="post-text mb-20">
                    <p>
                    In {`today's`} fast-paced world, effective communication is key. Understanding the needs of others and conveying your message clearly can make all the difference. {`It's`} about more than just words; {`it's`} about connection and collaboration
                    </p>
                    <p>
                      Bccaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis
                      unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore
                      et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <blockquote>
                      <p>
                      {`It's`} about more than just words; {`it's`} about connection and collaboration
                      </p>
                      <footer>- Rosalina Pong</footer>
                    </blockquote>
                  </div>
                  <BlogPostRelated />
                  <BlogPostArrow />
                </div>
                <BlogPostAuthor />
                <BlogPostComments />
                <BlogCommentsForm />
              </article>
            </div>
            <div className="col-lg-4">
              <BlogWidgetSearch />
              <BlogWidgetAbout />
              <BlogWidgetFeeds />
              <BlogWidgetCate />
              <BlogWidgetSocial />
              
              <BlogWidgetTags />
              <BlogWidgetBanner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
