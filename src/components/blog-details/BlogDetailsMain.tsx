"use client";
import { blogDataType, idType } from "@/interFace/interFace";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import BlogContent from "./BlogContent";
import { blogData } from "@/data/blog-data";

const BlogDetailsMain = ({ id }: idType) => {
  const fillterData: blogDataType | any = blogData.find(
    (item) => item.id == id
  );
  return (
    <>
      <Breadcrumb pageTitle={fillterData?.title} data={undefined}/>
      <BlogContent singleBlog={fillterData}/>
    </>
  );
};

export default BlogDetailsMain;
