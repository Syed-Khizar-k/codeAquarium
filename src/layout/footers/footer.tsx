import Link from "next/link";
import React from "react";
import footerImg from "../../../public//assets/img/logo/NextOrbit-Logo.png";
import imgOne from "../../../public/assets/img/footer/01.jpg";
import imgTow from "../../../public/assets/img/footer/02.jpg";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import SocilaLinks from "@/utils/SocilaLinks";
import { serviceDataTwo } from "@/data/service-data-two";

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area grey-bg pt-80 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer-wrapper mb-30">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src={footerImg}
                        alt="flag"
                        width={134}
                        height={0}
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      At Code Aquariam, we are dedicated to orbiting the future of
                      technology by delivering innovative and scalable
                      solutions. From web development to AI and beyond, we
                      empower businesses to thrive in the digital age. Thank you
                      for choosing Code Aquariam – your partner in innovation and
                      growth.
                    </p>
                  </div>
                  <div className="footer-icon">
                    <SocilaLinks />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Our Services</h4>
                  <ul className="fotter-menu">
                    <li>
                      {serviceDataTwo.slice(0, 6).map((item) => (
                        <div key={item.id}>
                          <Link href={`/service-details/${item.id}`}>
                            <p className="mb-0"> {item.title} </p>
                          </Link>
                        </div>
                      ))}
                    </li>

                    {/* <li>
                      <Link href="/service-1">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Artificial Inteligence</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link href="/service-1">DevOps Services</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Data Scraping</Link>
                    </li>
                    <li>
                      <Link href="/service-1">UX/UI Strategy</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="fotter-menu">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    {/* <li>
                      <Link href="/team">Meet Our Team</Link>
                    </li> */}
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Recent News</h4>
                  <div className="footer-news">
                    <ul>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgOne} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              Building Real Time Charts With Grap HQL & Postgres
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgTow} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              How To Build An Endless Runner Or Virtual Reality
                            </Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-2 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Contact Us</h4>
                  <div className="footer-info">
                    <p>
                      Get in touch with us for any inquiries or collaborations.
                      We are here to assist you with expert solutions!
                    </p>
                  </div>
                  <ul className="contact-link">
                    <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link
                          href="tel:+92 (317) 475-0491"
                          target="_blank"
                        >
                          +92 (317) 475-0491
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-envelope-open"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link href="mailto:info@nextorbitsol.com" target="_blank">
                        info@codeaquariam.com
                        </Link>
                      </div>
                    </li>
                    {/* <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link href="/">Virginia USA</Link>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
