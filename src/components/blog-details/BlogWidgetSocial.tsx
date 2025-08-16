import SocilaLinks from "@/utils/SocilaLinks";
import Link from "next/link";
import React from "react";

const BlogWidgetSocial = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Social Profile</h3>
        </div>
        <div className="social-profile">
          <SocilaLinks/>
        </div>
      </div>
    </>
  );
};

export default BlogWidgetSocial;
