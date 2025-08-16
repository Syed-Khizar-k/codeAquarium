import React from "react";
import commentOne from "../../../public/assets/img/blog/details/comments1.png";
import commentTwo from "../../../public/assets/img/blog/details/comments2.png";
import Image from "next/image";
import Link from "next/link";
const BlogPostComments = () => {
  return (
    <>
      <div className="post-comments">
        <div className="blog-coment-title mb-30">
          <h2>03 Comments</h2>
        </div>
        <div className="latest-comments">
          <ul>
            <li>
              <div className="comments-box">
                <div className="comments-avatar">
                  <Image src={commentOne} alt="comment-img" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h5>Karon Balina</h5>
                    <span>19th May 2018</span>
                    <Link className="reply" href="#">
                      <i className="fas fa-reply"></i>Reply
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </li>
            <li className="children">
              <div className="comments-box">
                <div className="comments-avatar">
                <Image src={commentOne} alt="comment-img" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h5>Julias Roy</h5>
                    <span>19th May 2018</span>
                    <Link className="reply" href="#">
                      <i className="fas fa-reply"></i>Reply
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="comments-box">
                <div className="comments-avatar">
                <Image src={commentTwo} alt="comment-img" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h5>Arista Williamson</h5>
                    <span>19th May 2018</span>
                    <Link className="reply" href="#">
                      <i className="fas fa-reply"></i>Reply
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogPostComments;
