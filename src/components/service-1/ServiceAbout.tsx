import AboutFaq from '@/sheardComponent/AboutFaq';
import React from 'react';
import ServiceVideo from './ServiceVideo';

const ServiceAbout = () => {
    return (
        <>
             <div className="about-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <ServiceVideo />
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-10">
                            <div className="faq-wrapper">
                                <div className="section-title mb-25">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">who we are</span>
                                    <h1>Why Most People Choose Our Business Solutions</h1>
                                    <p>Sedut perspiciatis unde omnis iste natus error sitlupttem accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab illo inventore veritatis </p>
                                </div>
                                <div className="faq-box">
                                    <AboutFaq />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceAbout;