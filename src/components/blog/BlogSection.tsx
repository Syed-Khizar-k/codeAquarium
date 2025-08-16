import React from "react";
import ArticleLayout from "./ArticleLayout";
import imgOne from "../../../public/assets/img/blog/details/me.png";
import Image from "next/image";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";

const BlogSection = () => {
  return (
    <>
      <section className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ArticleLayout />
            </div>

            <div className="col-lg-4">
              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Search Objects</h3>
                </div>
                <form className="search-form">
                  <input type="text" placeholder="Search your keyword..." />
                  <button type="submit">
                    <i className="fas fa-search"> </i>
                  </button>
                </form>
              </div>
              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">About Me</h3>
                </div>
                <div className="about-me text-center">
                  <Image src={imgOne} alt="" />
                  <h4>Zulia Maron Duo</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="widget-social-icon">
                    <SocilaLinks/>
                  </div>
                </div>
              </div>

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
                        <div className="widget-posts-meta">
                          October 18, 2018{" "}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Categories</h3>
                </div>
                <ul className="cat">
                  <li>
                    <Link href="/blog">
                      Lifestyle <span className="f-right">78</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Travel <span className="f-right">42</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Fashion <span className="f-right">32</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Music <span className="f-right">85</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Branding <span className="f-right">05</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Social Profile</h3>
                </div>
                <div className="social-profile">
                 <SocilaLinks/>
                </div>
              </div>
              
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
              <div className="widget mb-40 p-0 b-0">
                <div className="banner-widget">
                  <Link href="">
                    <Image src={thumbOne} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
