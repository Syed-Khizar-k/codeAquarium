import AboutFaq from '@/sheardComponent/AboutFaq';
import React from 'react';
import AboutVideo from './AboutVideo';


const ChoseArea = () => {
    return (
        <>
             <div className="choose-area pt-100 pb-100" style={{ background: "url(assets/img/bg/about-banner.png)" }}>
                    <div className="choose-bg">
                        <div className="container">
                            <div className="row px-5">
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="faq-wrapper">
                                        <div className="section-title mb-45">
                                            <span className="b-sm-left-1"></span>
                                            <span className="b-sm-left-2"></span>
                                            <span className="sub-t-left">why choose us</span>
                                            <h1>We Are Expert In IT Solutions Services</h1>
                                        </div>
                                        <div className="faq-box faq-2-box">
                                            <AboutFaq/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <AboutVideo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ChoseArea;