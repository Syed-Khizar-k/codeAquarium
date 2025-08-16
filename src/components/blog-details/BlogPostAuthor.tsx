import Link from "next/link";
import React from "react";
import authorImg from "../../../public/assets/img/blog/details/author.png"
import Image from "next/image";
import SocilaLinks from "@/utils/SocilaLinks";
const BlogPostAuthor = () => {
  return (
    <>
      <div className="author mt-80 mb-40">
        <div className="author-img text-center">
          <Image src={authorImg} alt="author-img" />
        </div>
        <div className="author-text text-center">
          <h3>MD. Salim Rana</h3>
          <div className="author-icon">
            <SocilaLinks/>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa aute irure dolor.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostAuthor;
