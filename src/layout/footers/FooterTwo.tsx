import Link from 'next/link';
import React from 'react';
import logoWhite from "../../../public/assets/img/logo/codeaqua.png"
import Image from 'next/image';
const FooterTwo = () => {
    return (
        <>
              <footer>
            <div className="footer-area pt-80" style={{ background: "url(assets/img/bg/bg-4.png)" }}>
                <div className="container">
                    <div className="newsletter-bg pb-50 mb-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 mb-30">
                                <div className="single-newsletter ">
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input placeholder="Enter Your Email :" type="email" />
                                            <button className="btn" type="submit"><span className="btn-text">subscribe <i className='fas fa-long-arrow-alt-right'></i></span> <span className="btn-border"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 mb-30"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <div className="footer-logo">
                                    <Link href="/"><Image src={logoWhite} alt="" /></Link>
                                </div>
                                <div className="footer-text">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sitluptatem accusantium doloremque laudantium totam rem apereaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    <Link className="btn" href="/about"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'> </i></span></Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/service-1">User Strategy</Link></li>
                                    <li><Link href="/service-1">Product Designing</Link></li>
                                    <li><Link href="/service-1">Marketing Strategy</Link></li>
                                    <li><Link href="/service-1">IT  </Link></li>
                                    <li><Link href="/service-1">Server Security</Link></li>
                                    <li><Link href="/service-1">Product Marketing</Link></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30 pl-50">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/goals">Need a Consultant?</Link></li>
                                    <li><Link href="/service-1">Our Services</Link></li>
                                    <li><Link href="/faq">Have Any Questions?</Link></li>
                                    <li><Link href="/team">Meet Our Team</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>But I must explain to you
                                        how all this mistaken</p>
                                </div>
                                <ul className="contact-link"> 

                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4> <Link href="mailto:abdulrehman@codeaquarium.tech" target='_blank'>abdulrehman@codeaquarium.tech</Link> </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="copyright">
                                    <p><i className="far fa-copyright"></i> Copyright 2026 <Link href="/">Code Aquarium</Link>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-bottem-text text-md-right">
                                    <p>Design By <Link href="/">Code Aquarium</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default FooterTwo;